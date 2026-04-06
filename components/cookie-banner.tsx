'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setTimeout(() => setVisible(true), 1200)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] px-4 py-4 md:px-8"
      role="dialog"
      aria-label="Souhlas s cookies"
      aria-live="polite"
    >
      <div
        className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 shadow-2xl border"
        style={{
          backgroundColor: 'var(--section-dark)',
          borderColor: 'rgba(255,255,255,0.1)',
          borderLeft: '3px solid var(--gold)',
        }}
      >
        <p className="text-sm text-white/70 font-sans leading-relaxed flex-1">
          Tento web používá cookies pro zajištění správné funkčnosti a analýzu návštěvnosti. Pokračováním souhlasíte s použitím cookies.{' '}
          <Link href="/cookies" className="underline hover:text-white transition-colors" style={{ color: 'var(--gold)' }}>
            Zásady cookies
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-xs font-sans tracking-wide px-4 py-2 border border-white/20 text-white/50 hover:text-white hover:border-white/40 transition-colors"
          >
            Odmítnout
          </button>
          <button
            onClick={accept}
            className="text-xs font-sans tracking-wide px-5 py-2 text-sm font-medium transition-colors"
            style={{
              backgroundColor: 'var(--gold)',
              color: 'var(--hero-bg)',
            }}
          >
            Přijmout
          </button>
        </div>
      </div>
    </div>
  )
}
