'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '/', label: 'Úvod' },
  { href: '/katalog', label: 'Katalog zájezdů' },
  { href: '/o-nas', label: 'O nás' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hero border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Sport Tours Czechia – domovská stránka">
          {/* Monogram block */}
          <span
            className="font-serif font-black text-xl leading-none select-none"
            style={{
              color: 'var(--gold)',
              border: '1.5px solid var(--gold)',
              padding: '3px 7px',
              letterSpacing: '-0.02em',
            }}
          >
            STC
          </span>
          {/* Wordmark — two-line stacked */}
          <span className="flex flex-col leading-none">
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-white/40">Sport Tours</span>
            <span className="font-serif text-base font-bold tracking-[0.04em] text-white">Czechia</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Hlavní navigace">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-sans text-white/70 hover:text-white tracking-wide uppercase transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/katalog"
            className="text-sm font-sans px-4 py-2 border tracking-wide uppercase transition-colors duration-200"
            style={{
              borderColor: 'var(--gold)',
              color: 'var(--gold)',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--gold)'
              ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--hero-bg)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'
              ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold)'
            }}
          >
            Rezervovat
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/10" style={{ backgroundColor: 'var(--hero-bg)' }}>
          <nav className="flex flex-col px-4 py-6 gap-6" aria-label="Mobilní navigace">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-serif text-xl text-white/80 hover:text-white tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/katalog"
              onClick={() => setOpen(false)}
              className="mt-2 py-3 text-center text-sm font-sans tracking-widest uppercase"
              style={{
                border: '1px solid var(--gold)',
                color: 'var(--gold)',
              }}
            >
              Rezervovat zájezd
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
