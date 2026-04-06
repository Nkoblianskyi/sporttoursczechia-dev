import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, Users } from 'lucide-react'
import { type Tour, CATEGORY_LABELS, DIFFICULTY_COLORS } from '@/lib/tours-data'

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      href={`/katalog/${tour.slug}`}
      className="group flex flex-col bg-card border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      aria-label={`Zobrazit detail: ${tour.title}`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category badge */}
        <div
          className="absolute top-3 left-3 text-[10px] font-sans tracking-widest uppercase px-2.5 py-1"
          style={{ backgroundColor: 'var(--gold)', color: 'var(--hero-bg)' }}
        >
          {CATEGORY_LABELS[tour.category]}
        </div>
        {/* Difficulty badge */}
        <div className={`absolute top-3 right-3 text-[10px] font-sans tracking-wide px-2 py-1 ${DIFFICULTY_COLORS[tour.difficulty]}`}>
          {tour.difficulty}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div>
          <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
            {tour.title}
          </h3>
          <p className="text-xs text-muted-foreground font-sans mt-0.5 tracking-wide">{tour.country} — {tour.region}</p>
        </div>

        <p className="text-sm text-muted-foreground font-sans leading-relaxed line-clamp-2 flex-1">
          {tour.description}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground font-sans border-t border-border pt-3">
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {tour.duration}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {formatDate(tour.dateFrom)}
          </span>
          <span className="flex items-center gap-1">
            <Users size={12} />
            max {tour.maxParticipants} os.
          </span>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-end pt-1">
          <span
            className="text-[11px] font-sans tracking-widest uppercase px-3 py-1.5 border transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
            style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
          >
            Zjistit více
          </span>
        </div>
      </div>
    </Link>
  )
}
