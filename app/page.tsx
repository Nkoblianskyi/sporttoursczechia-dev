import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Bike, Compass, Mountain } from 'lucide-react'
import SiteLayout from '@/components/site-layout'
import TourCard from '@/components/tour-card'
import { TOURS, CATEGORY_LABELS } from '@/lib/tours-data'

const FEATURED_TOURS = TOURS.slice(0, 4)

const CATEGORIES = [
  { icon: Bike, label: 'Cykloturistika', count: 3, href: '/katalog?kategorie=cyklo' },
  { icon: Compass, label: 'Moto výlety', count: 2, href: '/katalog?kategorie=moto' },
  { icon: Mountain, label: 'Horské túry', count: 1, href: '/katalog?kategorie=hory' },
]

const SAFETY_TIPS = [
  {
    number: '01',
    title: 'Fyzická příprava',
    text: 'Každá výprava má označenou obtížnost. Před odjezdem zhodnoťte svou kondici a postupně se připravujte — bez zbytečných risků.',
  },
  {
    number: '02',
    title: 'Správné vybavení',
    text: 'Dobré vybavení zachraňuje životy. Kvalitní obuv, přilba a pláštěnka jsou minimem. Náš průvodce vám poskytne podrobný seznam.',
  },
  {
    number: '03',
    title: 'Pojištění na cestách',
    text: 'Vždy uzavřete cestovní pojištění odpovídající typu aktivity (kolo, moto, hory). Lékařská pomoc v zahraničí může být velmi nákladná.',
  },
  {
    number: '04',
    title: 'Počasí a podmínky',
    text: 'Hory a silnice se mění rychle. Vždy sledujte předpověď, respektujte průvodce a nikdy nepodceňujte podmínky.',
  },
  {
    number: '05',
    title: 'Hydratace a výživa',
    text: 'Při fyzické aktivitě v přírodě je správná hydratace klíčová. Nikdy nevyrážejte bez dostatečného množství vody a energetických zásob.',
  },
  {
    number: '06',
    title: 'Komunikace a nouzový plán',
    text: 'Vždy informujte blízké o trase a plánovaném návratu. Průvodce nosí satelitní komunikátor pro případ nouze.',
  },
]

const FAQS = [
  {
    q: 'Jak probíhá rezervace zájezdu?',
    a: 'Termín poptáte přes kontaktní formulář nebo telefonicky. Po potvrzení dostanete zálohovou fakturu a detailní informace k přípravě.',
  },
  {
    q: 'Jsou zájezdy vhodné pro začátečníky?',
    a: 'Každý zájezd má označenou obtížnost – od lehké po extrémní. Pro začátečníky doporučujeme zájezdy označené „Lehká" nebo „Střední".',
  },
  {
    q: 'Co je zahrnuto v zájezdu?',
    a: 'Každý zájezd má detailní seznam co je a co není zahrnuto. Typicky jsou zahrnuty průvodce, ubytování a snídaně. Doprava a osobní výbava bývá na vlastní náklady. Pro přesné informace nás kontaktujte.',
  },
  {
    q: 'Mohu zájezd zrušit?',
    a: 'Zrušení více než 30 dní před odjezdem je bez storno poplatku. Při kratší době platí storno podmínky dle smluvních podmínek.',
  },
  {
    q: 'Jsou zájezdy pojištěny?',
    a: 'Skupinové pojištění průvodce je zahrnuto. Osobní cestovní pojištění si každý účastník zajišťuje sám – toto důrazně doporučujeme.',
  },
  {
    q: 'Mluvíte česky?',
    a: 'Ano, naši průvodci mluví česky. Veškerá komunikace, dokumenty a průvodce jsou v češtině.',
  },
]

export default function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative h-[85vh] min-h-[520px] flex items-end overflow-hidden" aria-label="Úvodní banner">
        <Image
          src="/images/hero-bg.jpg"
          alt="Česká krajina – autorské výpravy"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(10,4,4,0.92) 0%, rgba(10,4,4,0.45) 55%, rgba(10,4,4,0.1) 100%)',
          }}
        />

        {/* Scrolling ticker */}
        <div
          className="absolute top-0 left-0 right-0 overflow-hidden py-2 border-b"
          style={{ borderColor: 'var(--gold)', opacity: 0.7, backgroundColor: 'rgba(10,4,4,0.6)' }}
        >
          <div className="flex gap-12 animate-none">
            <p className="ornament whitespace-nowrap text-white/60 text-[10px]">
              Cyklotury &nbsp;&bull;&nbsp; Moto výlety &nbsp;&bull;&nbsp; Horské túry &nbsp;&bull;&nbsp; Příroda &nbsp;&bull;&nbsp; Česká republika &amp; Evropa
            </p>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 pb-12 w-full">
          <p className="ornament mb-3">Autorské výpravy</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white text-balance leading-tight max-w-2xl">
            Prozkoumejte Evropu
            <span style={{ color: 'var(--gold)' }}> v pohybu</span>
          </h1>
          <p className="text-base md:text-lg text-white/60 font-sans mt-4 max-w-xl leading-relaxed">
            Autorské cyklotury, moto výlety a horské túry po České republice a Evropě. Bez mas, bez kompromisů.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link
              href="/katalog"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-sans text-sm tracking-widest uppercase font-medium transition-colors"
              style={{ backgroundColor: 'var(--gold)', color: 'var(--hero-bg)' }}
            >
              Prohlédnout výpravy <ArrowRight size={16} />
            </Link>
            <Link
              href="/o-nas"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-sans text-sm tracking-widest uppercase border text-white/70 hover:text-white hover:border-white transition-colors"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              O nás
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORY STRIP */}
      <section className="border-b border-border" style={{ backgroundColor: 'var(--section-dark)' }}>
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-0">
          {CATEGORIES.map((cat, i) => (
            <Link
              key={i}
              href={cat.href}
              className="flex flex-col items-center gap-2 py-6 px-4 border-r last:border-r-0 border-white/10 hover:bg-white/5 transition-colors"
            >
              <cat.icon size={22} style={{ color: 'var(--gold)' }} />
              <span className="font-serif text-white text-sm text-center">{cat.label}</span>
              <span className="text-[10px] text-white/40 font-sans tracking-widest">{cat.count} zájezdů</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-20 max-w-6xl mx-auto px-4" aria-label="O nás">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full border"
              style={{ borderColor: 'var(--gold)', opacity: 0.3 }}
            />
            <Image
              src="/images/about-team.jpg"
              alt="Tým průvodců"
              width={600}
              height={420}
              className="relative z-10 object-cover w-full"
            />
          </div>
          <div className="flex flex-col gap-5">
            <p className="ornament">Kdo jsme</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
              Autorské výpravy od zkušených průvodců
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Jsme tým průvodců a dobrodruhů, kteří věří, že nejkrásnější způsob poznání krajiny je v pohybu – na kole, na motorce nebo pěšky po horách.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Každá naše výprava je autorská – pečlivě proplánovaná, s ověřenými trasami a důrazem na bezpečnost. Žádné anonymní skupiny, žádné kompromisy. Jen autentický zážitek v přírodě.
            </p>
            <Link
              href="/o-nas"
              className="inline-flex items-center gap-2 text-sm font-sans tracking-widest uppercase self-start mt-2 pb-0.5 border-b transition-colors"
              style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}
            >
              Více o nás <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* TOUR PREVIEW */}
      <section className="py-20" style={{ backgroundColor: 'var(--secondary)' }} aria-label="Výběr zájezdů">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="ornament mb-2">Nadcházející zájezdy</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
                Výběr z katalogu
              </h2>
            </div>
            <Link
              href="/katalog"
              className="inline-flex items-center gap-2 text-sm font-sans tracking-widest uppercase shrink-0 pb-0.5 border-b transition-colors"
              style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}
            >
              Všechny zájezdy <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_TOURS.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY TIPS */}
      <section className="py-20" style={{ backgroundColor: 'var(--hero-bg)' }} aria-label="Rady pro bezpečné cestování">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="ornament mb-3" style={{ color: 'var(--gold)' }}>Bezpečnost na prvním místě</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white text-balance">
              Rady pro bezpečné výpravy
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAFETY_TIPS.map((tip) => (
              <div
                key={tip.number}
                className="flex flex-col gap-3 p-6 border"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              >
                <span className="font-serif text-4xl font-bold" style={{ color: 'var(--gold)', opacity: 0.35 }}>
                  {tip.number}
                </span>
                <h3 className="font-serif text-lg font-semibold text-white">{tip.title}</h3>
                <p className="text-sm text-white/55 font-sans leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 max-w-6xl mx-auto px-4" aria-label="Časté dotazy">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 flex flex-col gap-4">
            <p className="ornament">Máte otázky?</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
              Časté dotazy
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Odpovědi na nejčastější otázky. Nenašli jste co hledáte? Obraťte se na nás přímo.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 text-sm font-sans tracking-widest uppercase mt-2 pb-0.5 border-b self-start transition-colors"
              style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}
            >
              Kontaktovat nás <ArrowRight size={14} />
            </Link>
          </div>
          <div className="md:col-span-3 flex flex-col divide-y divide-border">
            {FAQS.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        className="py-20 text-center"
        style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
        aria-label="Výzva k akci"
      >
        <div className="max-w-2xl mx-auto px-4">
          <p className="ornament mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>Připraveni vyrazit?</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance mb-6">
            Vaše příští dobrodružství začíná zde
          </h2>
          <Link
            href="/katalog"
            className="inline-flex items-center gap-2 px-8 py-4 font-sans text-sm tracking-widest uppercase font-medium transition-colors"
            style={{ backgroundColor: 'var(--gold)', color: 'var(--hero-bg)' }}
          >
            Prozkoumat všechny zájezdy <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group py-5 cursor-pointer" aria-expanded="false">
      <summary className="flex items-center justify-between gap-4 list-none font-serif text-base font-semibold text-foreground group-open:text-primary">
        {q}
        <span className="text-xl font-light shrink-0 group-open:rotate-45 transition-transform duration-200" style={{ color: 'var(--primary)' }}>+</span>
      </summary>
      <p className="mt-3 text-sm text-muted-foreground font-sans leading-relaxed">{a}</p>
    </details>
  )
}
