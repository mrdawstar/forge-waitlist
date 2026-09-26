'use client'

import Image from 'next/image'
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type CSSProperties,
} from 'react'
import { Check, ArrowUp, RotateCcw } from 'lucide-react'
import { AppStoreCta } from '@/components/app-store-cta'
import { trackConversion } from '@/lib/conversion-events'

const actions = [
  'Train',
  'Read',
  'Build',
  'Call someone important',
  'Wake up early',
]
const pullThreshold = 88

type Phase = 'choose' | 'do' | 'earned' | 'pulled'

export default function RitualDemo() {
  const [phase, setPhase] = useState<Phase>('choose')
  const [selected, setSelected] = useState<string[]>([])
  const [completed, setCompleted] = useState<string[]>([])
  const [hint, setHint] = useState('Choose 2 or 3 actions for this sample day.')
  const [releaseReady, setReleaseReady] = useState(false)
  const started = useRef(false)
  const countedActions = useRef(new Set<string>())
  const pulled = useRef(false)
  const drag = useRef<{
    pointerId: number
    startY: number
    distance: number
  } | null>(null)
  const stage = useRef<HTMLDivElement>(null)
  const progress = useRef<HTMLProgressElement>(null)
  const heading = useRef<HTMLHeadingElement>(null)
  const completion = useRef<HTMLHeadingElement>(null)
  const frame = useRef<number | null>(null)

  useEffect(
    () => () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current)
    },
    [],
  )
  useEffect(() => {
    if (phase === 'pulled') completion.current?.focus({ preventScroll: true })
  }, [phase])

  function select(action: string) {
    if (!started.current) {
      started.current = true
      trackConversion('demo_started')
    }
    if (selected.includes(action)) {
      setSelected(selected.filter((a) => a !== action))
      setHint('Choose 2 or 3 actions for this sample day.')
      return
    }
    if (selected.length === 3) {
      setHint('Three is enough. Remove one to choose another.')
      return
    }
    setSelected([...selected, action])
    setHint('Choose 2 or 3 actions for this sample day.')
  }

  function beginDay() {
    if (selected.length < 2) return
    setPhase('do')
    setHint('Tap each action to complete this sample day.')
    requestAnimationFrame(() => heading.current?.focus({ preventScroll: true }))
  }

  function toggleAction(action: string) {
    const wasComplete = completed.includes(action)
    const next = wasComplete
      ? completed.filter((a) => a !== action)
      : [...completed, action]
    setCompleted(next)
    if (!wasComplete && !countedActions.current.has(action)) {
      countedActions.current.add(action)
      trackConversion('demo_action_completed', {
        action_count: selected.length,
        completed_count: next.length,
      })
    }
    const earned = next.length === selected.length
    setPhase(earned ? 'earned' : 'do')
    setHint(
      earned
        ? 'Day earned. Drag the sword upward, then release.'
        : 'Tap each action to complete this sample day.',
    )
  }

  function paint(distance: number) {
    if (stage.current)
      stage.current.style.setProperty('--pull', `${distance}px`)
    if (progress.current)
      progress.current.value = Math.min(1, distance / pullThreshold)
  }

  function finish(input: 'pointer' | 'keyboard' | 'button') {
    if (phase !== 'earned' || pulled.current) return
    pulled.current = true
    drag.current = null
    if (frame.current !== null) cancelAnimationFrame(frame.current)
    stage.current?.setAttribute('data-dragging', 'false')
    paint(155)
    trackConversion('demo_sword_pulled', {
      action_count: selected.length,
      input,
    })
    setPhase('pulled')
    setHint('Sword pulled. That’s Forge. Earn tomorrow on iPhone.')
  }

  function pointerDown(event: ReactPointerEvent<HTMLButtonElement>) {
    if (phase !== 'earned' || !event.isPrimary || event.button !== 0) return
    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    drag.current = {
      pointerId: event.pointerId,
      startY: event.clientY,
      distance: 0,
    }
    stage.current?.setAttribute('data-dragging', 'true')
  }

  function pointerMove(event: ReactPointerEvent<HTMLButtonElement>) {
    const gesture = drag.current
    if (!gesture || gesture.pointerId !== event.pointerId) return
    // Resistance: the blade travels less than the finger, with a bounded range.
    gesture.distance = Math.min(
      125,
      Math.max(0, (gesture.startY - event.clientY) * 0.72),
    )
    setReleaseReady(gesture.distance >= pullThreshold)
    if (frame.current === null)
      frame.current = requestAnimationFrame(() => {
        paint(drag.current?.distance ?? 0)
        frame.current = null
      })
  }

  function release(
    event: ReactPointerEvent<HTMLButtonElement>,
    cancelled = false,
  ) {
    const gesture = drag.current
    if (!gesture || gesture.pointerId !== event.pointerId) return
    const enough = gesture.distance >= pullThreshold && !cancelled
    drag.current = null
    if (frame.current !== null) {
      cancelAnimationFrame(frame.current)
      frame.current = null
    }
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId)
    stage.current?.setAttribute('data-dragging', 'false')
    setReleaseReady(false)
    if (enough) finish('pointer')
    else {
      paint(0)
      if (!cancelled)
        setHint(
          'A little further. Pull upward until the line fills, then release.',
        )
    }
  }

  function reset() {
    if (frame.current !== null) cancelAnimationFrame(frame.current)
    frame.current = null
    drag.current = null
    started.current = false
    pulled.current = false
    countedActions.current.clear()
    setSelected([])
    setCompleted([])
    setReleaseReady(false)
    setPhase('choose')
    setHint('Choose 2 or 3 actions for this sample day.')
    paint(0)
    requestAnimationFrame(() => heading.current?.focus({ preventScroll: true }))
  }

  return (
    <div className="ritual-demo" data-phase={phase}>
      <div className="demo-top">
        <span>FORGE / INTERACTIVE PREVIEW</span>
        <span>
          {phase === 'choose'
            ? '01 — PLAN'
            : phase === 'do'
              ? '02 — DO'
              : '03 — EARN'}
        </span>
      </div>
      <div className="demo-body">
        <div className="demo-controls" hidden={phase === 'pulled'}>
          <h3 ref={heading} tabIndex={-1}>
            {phase === 'choose'
              ? 'What are you building today?'
              : phase === 'earned'
                ? 'Day earned.'
                : 'Keep your word.'}
          </h3>
          <p className="demo-instruction" aria-live="polite">
            {hint}
          </p>
          {phase === 'choose' ? (
            <>
              <div
                className="action-choices"
                role="group"
                aria-label="Choose two or three sample actions"
              >
                {actions.map((action) => (
                  <button
                    key={action}
                    aria-pressed={selected.includes(action)}
                    onClick={() => select(action)}
                  >
                    <span className="choice-check" aria-hidden="true">
                      {selected.includes(action) ? <Check size={14} /> : '+'}
                    </span>
                    {action}
                  </button>
                ))}
              </div>
              <button
                className="solid-button begin-day"
                onClick={beginDay}
                disabled={selected.length < 2}
              >
                Set my day <span aria-hidden="true">→</span>
              </button>
            </>
          ) : (
            <>
              <div
                className="day-actions"
                role="group"
                aria-label="Complete your sample day"
              >
                {selected.map((action) => (
                  <button
                    key={action}
                    role="checkbox"
                    aria-checked={completed.includes(action)}
                    onClick={() => toggleAction(action)}
                  >
                    <span className="task-check" aria-hidden="true">
                      {completed.includes(action) && <Check size={16} />}
                    </span>
                    <span>{action}</span>
                  </button>
                ))}
              </div>
              <div className="day-count">
                <span>
                  {completed.length} / {selected.length} complete
                </span>
                <span>
                  {phase === 'earned'
                    ? 'READY TO PULL'
                    : 'ONE ACTION AT A TIME'}
                </span>
              </div>
            </>
          )}
        </div>
        <div
          ref={stage}
          className="demo-sword-stage"
          data-dragging="false"
          style={{ '--pull': '0px' } as CSSProperties}
          aria-hidden={phase === 'pulled' ? true : undefined}
        >
          <div className="sword-track" aria-hidden="true" />
          <div className="demo-blade">
            <Image
              src="/sword.webp"
              width={353}
              height={1422}
              alt=""
              draggable={false}
            />
            <button
              className="sword-handle"
              disabled={phase !== 'earned'}
              aria-label="Pull the sword: drag upward, or press Enter"
              aria-describedby="pull-instruction"
              onPointerDown={pointerDown}
              onPointerMove={pointerMove}
              onPointerUp={(event) => release(event)}
              onPointerCancel={(event) => release(event, true)}
              onLostPointerCapture={(event) => release(event, true)}
              onClick={(event) => {
                if (event.detail === 0) finish('keyboard')
              }}
            />
          </div>
          <div className="sword-socket" aria-hidden="true" />
          <div className="pull-controls">
            <span id="pull-instruction">
              {phase === 'earned' ? (
                <>
                  <ArrowUp size={16} aria-hidden="true" />
                  {releaseReady ? 'Release to pull' : 'Drag the handle upward'}
                </>
              ) : (
                'Earn the day to release the blade'
              )}
            </span>
            <progress
              ref={progress}
              max={1}
              value={0}
              aria-label="Sword pull progress"
            />
            {phase === 'earned' && (
              <button
                className="pull-alternative"
                onClick={() => finish('button')}
              >
                Or tap to pull
              </button>
            )}
          </div>
        </div>
        {phase === 'pulled' && (
          <div className="demo-success">
            <span className="earned-mark">
              <Check size={25} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <p className="eyebrow">DAY EARNED. SWORD PULLED.</p>
            <h3 tabIndex={-1} ref={completion}>
              That’s Forge.
            </h3>
            <p>Earn tomorrow on iPhone.</p>
            <AppStoreCta event="demo_app_store_click" />
            <button className="replay-button" onClick={reset}>
              <RotateCcw size={14} aria-hidden="true" />
              Try another day
            </button>
          </div>
        )}
      </div>
      <div className="demo-bottom">
        <span>A sample day. Nothing is saved.</span>
        {phase !== 'choose' && phase !== 'pulled' && (
          <button onClick={reset}>Start over</button>
        )}
      </div>
    </div>
  )
}
