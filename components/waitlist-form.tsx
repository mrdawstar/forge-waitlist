'use client'

import { useId, useRef, useState } from 'react'
import { ArrowRight, Check, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  isValidEmail,
  normalizeEmail,
  type WaitlistResponse,
} from '@/lib/waitlist'

interface WaitlistFormProps {
  className?: string
}

type State =
  | { kind: 'idle' }
  | { kind: 'submitting' }
  | { kind: 'error'; message: string }
  | { kind: 'done'; message: string }

export function WaitlistForm({ className }: WaitlistFormProps) {
  const id = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [state, setState] = useState<State>({ kind: 'idle' })

  const isSubmitting = state.kind === 'submitting'
  const errorMessage = state.kind === 'error' ? state.message : null

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (isSubmitting) return

    const value = normalizeEmail(email)
    if (!value) {
      setState({ kind: 'error', message: 'Please enter your email address.' })
      inputRef.current?.focus()
      return
    }
    if (!isValidEmail(value)) {
      setState({
        kind: 'error',
        message: 'That address does not look right. Please check it.',
      })
      inputRef.current?.focus()
      return
    }

    setState({ kind: 'submitting' })

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value, website }),
      })

      let payload: WaitlistResponse | null = null
      try {
        payload = (await response.json()) as WaitlistResponse
      } catch {
        payload = null
      }

      if (!response.ok || !payload || 'error' in payload) {
        setState({
          kind: 'error',
          message:
            payload && 'message' in payload && payload.message
              ? payload.message
              : 'Something went wrong. Please try again.',
        })
        return
      }

      setState({
        kind: 'done',
        message:
          payload.status === 'already_subscribed'
            ? 'You’re already on the list. We’ll be in touch.'
            : 'You’re on the list. We’ll be in touch.',
      })
      setEmail('')
    } catch {
      setState({
        kind: 'error',
        message: 'No connection. Check your network and try again.',
      })
    }
  }

  if (state.kind === 'done') {
    return (
      <div className={cn('animate-rise', className)} role="status">
        <div className="glass flex items-center justify-center gap-3 rounded-[1.4rem] px-5 py-[1.15rem] text-balance text-center">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_24px_-4px_oklch(0.62_0.18_256_/_80%)]">
            <Check className="h-4 w-4" strokeWidth={3} />
          </span>
          <p className="text-sm font-medium text-foreground">{state.message}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} noValidate>
        <div
          className={cn(
            'glass relative flex flex-col gap-2 rounded-[1.4rem] p-2 transition-colors duration-300 sm:flex-row sm:items-center',
            'focus-within:border-white/25',
            errorMessage && 'border-red-400/40',
          )}
        >
          <label htmlFor={`${id}-email`} className="sr-only">
            Email address
          </label>
          <input
            ref={inputRef}
            id={`${id}-email`}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            spellCheck={false}
            disabled={isSubmitting}
            aria-invalid={Boolean(errorMessage)}
            aria-describedby={errorMessage ? `${id}-error` : undefined}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
              if (state.kind === 'error') setState({ kind: 'idle' })
            }}
            placeholder="you@email.com"
            className="min-h-[48px] flex-1 rounded-2xl bg-transparent px-4 text-base text-foreground placeholder:text-muted-foreground/70 focus:outline-none disabled:opacity-60"
          />

          {/* Honeypot — hidden from people, irresistible to bots. */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            className="pointer-events-none absolute h-0 w-0 opacity-0"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              'sweep group relative inline-flex min-h-[48px] items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-2xl px-6',
              'bg-foreground text-base font-semibold text-background',
              'transition-all duration-300 hover:brightness-110 active:scale-[0.98]',
              'shadow-[0_10px_30px_-10px_rgba(255,255,255,0.4)]',
              'disabled:cursor-not-allowed disabled:opacity-70 disabled:active:scale-100',
            )}
            style={{ transitionTimingFunction: 'var(--ease-out-soft)' }}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Joining…
              </>
            ) : (
              <>
                Join the Waitlist
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </div>
      </form>

      <div aria-live="polite" className="min-h-0">
        {errorMessage ? (
          <p
            id={`${id}-error`}
            className="animate-rise mt-3 px-1 text-sm text-red-300/90"
          >
            {errorMessage}
          </p>
        ) : null}
      </div>
    </div>
  )
}
