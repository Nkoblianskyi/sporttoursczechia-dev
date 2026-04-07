import Link from 'next/link'
import { MapPin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--hero-bg)', color: 'var(--gold-light)' }}>
      {/* Top divider ornament */}
      <div className="border-t" style={{ borderColor: 'var(--gold)', opacity: 0.3 }} />

      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand column */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3 group w-fit">
            {/* Monogram */}
            <span
              className="font-serif font-black text-2xl leading-none select-none"
              style={{
                color: 'var(--gold)',
                border: '1.5px solid var(--gold)',
                padding: '4px 9px',
                letterSpacing: '-0.02em',
              }}
            >
              STC
            </span>
            {/* Two-line wordmark */}
            <span className="flex flex-col leading-none">
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-white/40">Sport Tours</span>
              <span className="font-serif text-lg font-bold tracking-[0.04em] text-white">Czechia</span>
            </span>
          </Link>
          <p className="text-sm text-white/50 leading-relaxed font-sans">
            Autorské výpravy po České republice a Evropě. Cyklotury, moto výlety a horské túry v malých skupinách s průvodcem.
          </p>
          <p className="ornament mt-2">sporttoursczechia.com</p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-white text-sm tracking-widest uppercase mb-2">Navigace</h3>
          {[
            { href: '/', label: 'Úvod' },
            { href: '/katalog', label: 'Katalog zájezdů' },
            { href: '/o-nas', label: 'O nás' },
            { href: '/kontakt', label: 'Kontakt' },
            { href: '/soukromi', label: 'Ochrana soukromí' },
            { href: '/cookies', label: 'Zásady cookies' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/50 hover:text-white transition-colors font-sans"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-white text-sm tracking-widest uppercase mb-2">Kontakt</h3>
          <div className="flex items-start gap-2 text-sm text-white/50 font-sans">
            <MapPin size={14} className="shrink-0 mt-0.5" style={{ color: 'var(--gold)' }} />
            <span>
              K.C. NTOMATA LIMITED<br />
              Stylianou Lena, 24 Christiana Court,<br />
              Flat/Office 202, Strovolos,<br />
              2019 Nicosia, Cyprus
            </span>
          </div>
          <a
            href="mailto:info@sporttoursczechia.com"
            className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors font-sans"
          >
            <Mail size={14} style={{ color: 'var(--gold)' }} />
            info@sporttoursczechia.com
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3"
        style={{ borderColor: 'rgba(255,255,255,0.07)' }}
      >
        <p className="text-xs text-white/30 font-sans">
          &copy; {new Date().getFullYear()} K.C. NTOMATA LIMITED — Sport Tours Czechia. Všechna práva vyhrazena.
        </p>
        <div className="flex gap-5">
          <Link href="/soukromi" className="text-xs text-white/30 hover:text-white/60 transition-colors font-sans">
            Ochrana soukromí
          </Link>
          <Link href="/cookies" className="text-xs text-white/30 hover:text-white/60 transition-colors font-sans">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  )
}
