import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Mountain, Shield, Heart, Users } from 'lucide-react'
import type { Metadata } from 'next'
import SiteLayout from '@/components/site-layout'

export const metadata: Metadata = {
  title: 'O nás | Sport Tours Czechia',
  description: 'Kdo stojí za Sport Tours Czechia? Tým vášnivých sportovců a průvodců, kteří věří, že nejkrásnější způsob poznání krajiny je v pohybu.',
}

const VALUES = [
  {
    icon: Mountain,
    title: 'Autenticita',
    text: 'Žádné anonymní skupiny. Každý náš zájezd je autorský, pečlivě proplánovaný a vedený průvodcem se znalostí terénu.',
  },
  {
    icon: Shield,
    title: 'Bezpečnost',
    text: 'Každý průvodce je certifikovaný odborník s první pomocí a znalostí záchranných tras. Nikdy nekompromitujeme bezpečnost.',
  },
  {
    icon: Heart,
    title: 'Vášeň pro pohyb',
    text: 'Jsme sportovci, závodníci a dobrodruzi. Věříme, že sport je nejkrásnější způsob, jak poznat sám sebe i svět kolem.',
  },
  {
    icon: Users,
    title: 'Malé skupiny',
    text: 'Maximálně 14 účastníků na zájezd. Osobní přístup, flexibilita a opravdový zážitek místo masové turistiky.',
  },
]

export default function AboutPage() {
  return (
    <SiteLayout>
      {/* Header */}
      <div
        className="py-16 text-center border-b border-border"
        style={{ backgroundColor: 'var(--section-dark)' }}
      >
        <p className="ornament mb-3" style={{ color: 'var(--gold)' }}>Náš příběh</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white text-balance">
          O nás
        </h1>
        <p className="text-white/50 font-sans mt-3 max-w-xl mx-auto px-4 text-sm leading-relaxed">
          Jsme tým průvodců, závodníků a dobrodruhů spojených jednou vášní — pohybem v přírodě.
        </p>
      </div>

      {/* Story section */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full border"
              style={{ borderColor: 'var(--gold)', opacity: 0.25 }}
            />
            <Image
              src="/images/about-team.jpg"
              alt="Tým Sport Tours Czechia"
              width={600}
              height={420}
              className="relative z-10 object-cover w-full"
            />
          </div>
          <div className="flex flex-col gap-5">
            <p className="ornament">Jak to začalo</p>
            <h2 className="font-serif text-3xl font-bold text-foreground text-balance">
              Ze společné vášně pro sport a cestování
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Sport Tours Czechia vznikl z jednoduché myšlenky: nejkrásnější způsob poznání krajiny je v pohybu. Ať už na sedle kola v bohemských údolích, na motorce pod alpskými průsmyky, nebo s trekkingovými holemi na krkonošských hřebenech.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Naši průvodci jsou sami aktivní sportovci — závodníci, ultramaratonci, horští vůdci. Každý zájezd navrhujeme tak, jak bychom ho sami chtěli absolvovat: s pozorností k detailu, autentickým ubytováním a trasami daleko od turistických mas.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Působíme z České republiky a organizujeme výpravy jak po celé zemi, tak do srdce Evropy — od Alp přes Dolomity až po toskánské kopce.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: 'var(--secondary)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="ornament mb-3">Co nás definuje</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
              Naše hodnoty
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="flex flex-col gap-4 p-6 bg-card border border-border">
                <v.icon size={24} style={{ color: 'var(--gold)' }} />
                <h3 className="font-serif text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-5">
            <p className="ornament">Provozovatel</p>
            <h2 className="font-serif text-2xl font-bold text-foreground">Firemní údaje</h2>
            <div
              className="flex flex-col gap-3 p-6 border border-border text-sm font-sans text-muted-foreground leading-relaxed"
              style={{ backgroundColor: 'var(--secondary)' }}
            >
              <p className="font-serif text-base font-semibold text-foreground">K.C. NTOMATA LIMITED</p>
              <p>Stylianou Lena<br />24 Christiana Court, Flat/Office 202<br />Strovolos, 2019 Nicosia<br />Cyprus</p>
              <a href="mailto:info@sporttoursczechia.com" className="hover:text-foreground transition-colors" style={{ color: 'var(--primary)' }}>
                info@sporttoursczechia.com
              </a>
              <p className="text-xs text-muted-foreground mt-1">sporttoursczechia.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="ornament">Připraveni vyrazit?</p>
            <h2 className="font-serif text-2xl font-bold text-foreground">Začněte s námi</h2>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Prohlédněte si náš katalog zájezdů nebo nás přímo kontaktujte. Rádi vám pomůžeme vybrat ideální výpravu nebo sestavíme zájezd na míru.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/katalog"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-sans text-sm tracking-widest uppercase font-medium transition-colors"
                style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
              >
                Katalog zájezdů <ArrowRight size={14} />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-sans text-sm tracking-widest uppercase border transition-colors hover:bg-secondary"
                style={{ borderColor: 'var(--border)', color: 'var(--foreground)' }}
              >
                Kontaktovat nás
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
