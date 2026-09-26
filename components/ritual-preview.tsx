'use client'

import { useEffect, useRef, useState, type ComponentType } from 'react'
import { AppStoreCta } from '@/components/app-store-cta'

/** The interactive module is requested only as its section approaches the viewport. */
export function RitualPreview() {
  const host = useRef<HTMLDivElement>(null)
  const [Demo, setDemo] = useState<ComponentType | null>(null)
  const [failed, setFailed] = useState(false)
  async function load() {
    setFailed(false)
    try {
      const module = await import('./ritual-demo')
      setDemo(() => module.default)
    } catch {
      setFailed(true)
    }
  }
  useEffect(() => {
    if (!host.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void load()
          observer.disconnect()
        }
      },
      { rootMargin: '180px' },
    )
    observer.observe(host.current)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={host} className="ritual-reserved">
      {Demo ? (
        <Demo />
      ) : (
        <div className="demo-placeholder">
          <p className="eyebrow">PLAN. DO. EARN.</p>
          <h3>A day worth pulling for.</h3>
          <p>Choose your actions. Complete them. Pull the sword.</p>
          <button className="solid-button demo-load" onClick={load}>
            {failed ? 'Try loading again' : 'Try the ritual'}
          </button>
          <noscript>
            <style>{'.demo-load{display:none}'}</style>
            <p>
              The interactive preview needs JavaScript. Experience the full
              ritual in Forge.
            </p>
          </noscript>
          <AppStoreCta event="demo_app_store_click" />
        </div>
      )}
    </div>
  )
}
