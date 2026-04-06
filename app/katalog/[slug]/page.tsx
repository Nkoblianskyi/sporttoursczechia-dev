import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, Users, MapPin, CheckCircle2, XCircle, Star, Mail } from 'lucide-react'
import SiteLayout from '@/components/site-layout'
import TourCard from '@/components/tour-card'
import { TOURS, CATEGORY_LABELS, DIFFICULTY_COLORS } from '@/lib/tours-data'

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function generateStaticParams() {
  return TOURS.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tour = TOURS.find((t) => t.slug === slug)
  if (!tour) return {}
  return {
    title: `${tour.title} | Sport Tours Czechia`,
    description: tour.description,
  }
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tour = TOURS.find((t) => t.slug === slug)
  if (!tour) notFound()

  const related = TOURS.filter((t) => t.id !== tour.id && t.category === tour.category).slice(0, 3)

  return (
    <SiteLayout>
      {/* Hero image */}
      <div className="relative h-[55vh] min-h-[360px]">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(10,4,4,0.88) 0%, rgba(10,4,4,0.3) 70%)',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 max-w-6xl mx-auto px-4 pb-8">
          <Link
            href="/katalog"
            className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-white font-sans tracking-wide uppercase mb-4 transition-colors"
          >
            <ArrowLeft size={14} /> Katalog
          </Link>
          <div className="flex flex-wrap gap-2 mb-3">
            <span
              className="text-[10px] font-sans tracking-widest uppercase px-2.5 py-1"
              style={{ backgroundColor: 'var(--gold)', color: 'var(--hero-bg)' }}
            >
              {CATEGORY_LABELS[tour.category]}
            </span>
            <span className={`text-[10px] font-sans tracking-wide px-2 py-1 ${DIFFICULTY_COLORS[tour.difficulty]}`}>
              {tour.difficulty}
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white text-balance">{tour.title}</h1>
          <p className="text-white/60 font-sans mt-2 text-sm">{tour.subtitle}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {/* Quick meta */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 border border-border"
              style={{ backgroundColor: 'var(--secondary)' }}
            >
              {[
                { icon: Clock, label: 'Délka', value: tour.duration },
                { icon: MapPin, label: 'Destinace', value: tour.country },
                { icon: Calendar, label: 'Datum', value: formatDate(tour.dateFrom) },
                { icon: Users, label: 'Max. účastníci', value: `${tour.maxParticipants} osob` },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-sans uppercase tracking-wide">
                    <Icon size={12} style={{ color: 'var(--gold)' }} />
                    {label}
                  </div>
                  <span className="font-serif text-sm font-semibold text-foreground">{value}</span>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Hlavní zážitky</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {tour.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 py-2.5 px-4 border border-border font-sans text-sm text-foreground"
                  >
                    <Star size={14} style={{ color: 'var(--gold)' }} className="shrink-0" />
                    {h}
                  </div>
                ))}
              </div>
            </div>

            {/* Full description */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">O zájezdu</h2>
              <p className="font-sans text-muted-foreground leading-relaxed">{tour.fullDescription}</p>
            </div>

            {/* Included / not included */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">V ceně zahrnuto</h3>
                <ul className="flex flex-col gap-2">
                  {tour.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-sans text-muted-foreground">
                      <CheckCircle2 size={15} className="shrink-0 mt-0.5 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Nezahrnuto</h3>
                <ul className="flex flex-col gap-2">
                  {tour.notIncluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-sans text-muted-foreground">
                      <XCircle size={15} className="shrink-0 mt-0.5 text-red-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar — contact CTA */}
          <div className="lg:col-span-1">
            <div
              className="sticky top-24 flex flex-col gap-6 p-6 border"
              style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
            >
              {/* Tour info summary */}
              <div className="flex flex-col gap-2 text-sm font-sans text-muted-foreground">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Detaily zájezdu</h3>
                <div className="flex justify-between border-b border-border pb-2">
                  <span>Odjezd</span>
                  <span className="font-medium text-foreground">{formatDate(tour.dateFrom)}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span>Návrat</span>
                  <span className="font-medium text-foreground">{formatDate(tour.dateTo)}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span>Délka</span>
                  <span className="font-medium text-foreground">{tour.duration}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span>Obtížnost</span>
                  <span className="font-medium text-foreground">{tour.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span>Volná místa</span>
                  <span className="font-medium text-foreground">{tour.maxParticipants} míst</span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border" />

              {/* CTA */}
              <div className="flex flex-col gap-3">
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                  Máte zájem o tento zájezd nebo chcete více informací? Napište nám — rádi odpovíme do 24 hodin.
                </p>
                <Link
                  href={`/kontakt?zajezd=${tour.slug}`}
                  className="w-full flex items-center justify-center gap-2 py-4 font-sans text-sm tracking-widest uppercase font-medium transition-colors"
                  style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
                >
                  <Mail size={15} />
                  Napsat dotaz
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related tours */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Podobné zájezdy</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((t) => (
                <TourCard key={t.id} tour={t} />
              ))}
            </div>
          </div>
        )}
      </div>
    </SiteLayout>
  )
}
