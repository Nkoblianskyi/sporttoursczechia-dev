'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { MapPin, Mail, Send, CheckCircle2 } from 'lucide-react'
import SiteLayout from '@/components/site-layout'
import { TOURS } from '@/lib/tours-data'

export const dynamic = 'force-dynamic'

export default function KontaktPage() {
  const searchParams = useSearchParams()
  const preselectedSlug = searchParams.get('zajezd') ?? ''

  const [form, setForm] = useState({
    jmeno: '',
    email: '',
    zajezd: preselectedSlug,
    zprava: '',
    souhlas: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (preselectedSlug) {
      setForm((f) => ({ ...f, zajezd: preselectedSlug }))
    }
  }, [preselectedSlug])

  function validate() {
    const e: Record<string, string> = {}
    if (!form.jmeno.trim()) e.jmeno = 'Vyplňte prosím jméno.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Zadejte platnou e-mailovou adresu.'
    if (!form.zprava.trim() || form.zprava.trim().length < 10)
      e.zprava = 'Zpráva musí mít alespoň 10 znaků.'
    if (!form.souhlas) e.souhlas = 'Musíte souhlasit se zpracováním údajů.'
    return e
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  return (
    <SiteLayout>
      {/* Header */}
      <div
        className="py-16 text-center border-b border-border"
        style={{ backgroundColor: 'var(--section-dark)' }}
      >
        <p className="ornament mb-3" style={{ color: 'var(--gold)' }}>Jsme tu pro vás</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white text-balance">
          Kontakt
        </h1>
        <p className="text-white/50 font-sans mt-3 max-w-xl mx-auto px-4 text-sm leading-relaxed">
          Máte dotaz k zájezdu nebo chcete poradit s výběrem? Napište nám — odpovíme do 24 hodin.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-12">

          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <p className="ornament mb-3">Kde nás najdete</p>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-5">Firemní údaje</h2>
              <div
                className="flex flex-col gap-4 p-6 border border-border text-sm font-sans"
                style={{ backgroundColor: 'var(--secondary)' }}
              >
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="shrink-0 mt-0.5" style={{ color: 'var(--gold)' }} />
                  <div className="text-muted-foreground leading-relaxed">
                    <p className="font-serif font-semibold text-foreground mb-1">K.C. NTOMATA LIMITED</p>
                    <p>Stylianou Lena</p>
                    <p>24 Christiana Court, Flat/Office 202</p>
                    <p>Strovolos, 2019 Nicosia</p>
                    <p>Cyprus</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0" style={{ color: 'var(--gold)' }} />
                  <a
                    href="mailto:info@sporttoursczechia.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    info@sporttoursczechia.com
                  </a>
                </div>
              </div>
            </div>

            {/* Info box */}
            <div
              className="flex flex-col gap-3 p-6 border-l-2 text-sm font-sans"
              style={{ borderColor: 'var(--gold)', backgroundColor: 'var(--secondary)' }}
            >
              <p className="font-serif font-semibold text-foreground">Jak rychle odpovíme?</p>
              <p className="text-muted-foreground leading-relaxed">
                Na všechny dotazy odpovídáme nejpozději do 24 hodin v pracovní dny. V případě urgentního dotazu uveďte v předmětu zprávy &quot;URGENTNÍ&quot;.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <p className="ornament mb-3">Napište nám</p>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Kontaktní formulář</h2>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="jmeno" className="text-xs font-sans uppercase tracking-widest text-muted-foreground">
                  Jméno a příjmení <span style={{ color: 'var(--primary)' }}>*</span>
                </label>
                <input
                  id="jmeno"
                  type="text"
                  value={form.jmeno}
                  onChange={(e) => setForm({ ...form, jmeno: e.target.value })}
                  className="w-full border border-border bg-background px-4 py-3 text-sm font-sans text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Jan Novák"
                  autoComplete="name"
                />
                {errors.jmeno && <p className="text-xs font-sans" style={{ color: 'var(--primary)' }}>{errors.jmeno}</p>}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-sans uppercase tracking-widest text-muted-foreground">
                  E-mailová adresa <span style={{ color: 'var(--primary)' }}>*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-border bg-background px-4 py-3 text-sm font-sans text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="jan@example.cz"
                  autoComplete="email"
                />
                {errors.email && <p className="text-xs font-sans" style={{ color: 'var(--primary)' }}>{errors.email}</p>}
              </div>

              {/* Tour select */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="zajezd" className="text-xs font-sans uppercase tracking-widest text-muted-foreground">
                  Zájezd (volitelné)
                </label>
                <select
                  id="zajezd"
                  value={form.zajezd}
                  onChange={(e) => setForm({ ...form, zajezd: e.target.value })}
                  className="w-full border border-border bg-background px-4 py-3 text-sm font-sans text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer"
                >
                  <option value="">— Vyberte zájezd —</option>
                  {TOURS.map((t) => (
                    <option key={t.slug} value={t.slug}>
                      {t.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="zprava" className="text-xs font-sans uppercase tracking-widest text-muted-foreground">
                  Zpráva <span style={{ color: 'var(--primary)' }}>*</span>
                </label>
                <textarea
                  id="zprava"
                  rows={5}
                  value={form.zprava}
                  onChange={(e) => setForm({ ...form, zprava: e.target.value })}
                  className="w-full border border-border bg-background px-4 py-3 text-sm font-sans text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Vaše dotazy, přání nebo zpráva..."
                />
                {errors.zprava && <p className="text-xs font-sans" style={{ color: 'var(--primary)' }}>{errors.zprava}</p>}
              </div>

              {/* Consent */}
              <div className="flex items-start gap-3">
                <input
                  id="souhlas"
                  type="checkbox"
                  checked={form.souhlas}
                  onChange={(e) => setForm({ ...form, souhlas: e.target.checked })}
                  className="mt-0.5 shrink-0 cursor-pointer"
                />
                <label htmlFor="souhlas" className="text-xs font-sans text-muted-foreground leading-relaxed cursor-pointer">
                  Souhlasím se zpracováním osobních údajů v souladu s{' '}
                  <a href="/soukromi" className="underline hover:text-foreground transition-colors" style={{ color: 'var(--primary)' }}>
                    Ochranou soukromí
                  </a>
                  .
                </label>
              </div>
              {errors.souhlas && <p className="text-xs font-sans -mt-3" style={{ color: 'var(--primary)' }}>{errors.souhlas}</p>}

              {/* Submit */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2 py-4 font-sans text-sm tracking-widest uppercase font-medium transition-colors mt-2 cursor-pointer"
                style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
              >
                <Send size={14} />
                Odeslat zprávu
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success popup */}
      {submitted && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(10,4,4,0.75)' }}
          role="dialog"
          aria-modal="true"
          aria-label="Zpráva odeslána"
        >
          <div
            className="relative bg-card border border-border max-w-sm w-full p-8 flex flex-col items-center gap-5 text-center"
          >
            <CheckCircle2 size={48} className="text-green-500" />
            <h2 className="font-serif text-2xl font-bold text-foreground">Zpráva odeslána!</h2>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Děkujeme za váš zájem. Odpovíme vám na zadaný e-mail nejpozději do 24 hodin v pracovní dny.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                setForm({ jmeno: '', email: '', zajezd: '', zprava: '', souhlas: false })
              }}
              className="px-8 py-3 font-sans text-sm tracking-widest uppercase font-medium transition-colors"
              style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
            >
              Zavřít
            </button>
          </div>
        </div>
      )}
    </SiteLayout>
  )
}
