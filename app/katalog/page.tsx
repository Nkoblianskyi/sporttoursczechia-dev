'use client'

import { useState, useMemo } from 'react'
import { Filter, SlidersHorizontal } from 'lucide-react'
import SiteLayout from '@/components/site-layout'
import TourCard from '@/components/tour-card'
import { TOURS, CATEGORY_LABELS, type TourCategory } from '@/lib/tours-data'

export const dynamic = 'force-dynamic'

const ALL_DIFFICULTIES = ['Lehká', 'Střední', 'Náročná', 'Extrémní']
const ALL_CATEGORIES = Object.entries(CATEGORY_LABELS) as [TourCategory, string][]

export default function KatalogPage() {
  const [activeCategory, setActiveCategory] = useState<TourCategory | 'vse'>('vse')
  const [activeDifficulty, setActiveDifficulty] = useState<string>('vse')
  const [activeCountry, setActiveCountry] = useState<string>('vse')
  const [sortBy, setSortBy] = useState<'date' | 'name' | 'duration'>('date')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const countries = useMemo(() => {
    const all = TOURS.flatMap((t) => t.country.split(' / '))
    return Array.from(new Set(all)).sort()
  }, [])

  const filtered = useMemo(() => {
    let result = [...TOURS]
    if (activeCategory !== 'vse') result = result.filter((t) => t.category === activeCategory)
    if (activeDifficulty !== 'vse') result = result.filter((t) => t.difficulty === activeDifficulty)
    if (activeCountry !== 'vse') result = result.filter((t) => t.country.includes(activeCountry))
    if (sortBy === 'date') result.sort((a, b) => a.dateFrom.localeCompare(b.dateFrom))
    if (sortBy === 'name') result.sort((a, b) => a.title.localeCompare(b.title, 'cs'))
    if (sortBy === 'duration') result.sort((a, b) => a.duration.localeCompare(b.duration))
    return result
  }, [activeCategory, activeDifficulty, activeCountry, sortBy])

  return (
    <SiteLayout>
      {/* Page Header */}
      <div
        className="py-16 text-center border-b border-border"
        style={{ backgroundColor: 'var(--section-dark)' }}
      >
        <p className="ornament mb-3" style={{ color: 'var(--gold)' }}>Sportovní expedice</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white text-balance">
          Katalog zájezdů
        </h1>
        <p className="text-white/50 font-sans mt-3 max-w-xl mx-auto px-4 text-sm leading-relaxed">
          Vyberte si ze {TOURS.length} autorských sportovních zájezdů po České republice a Evropě.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Filter bar */}
        <div className="flex flex-col gap-4 mb-10">
          {/* Mobile filter toggle */}
          <div className="flex items-center justify-between md:hidden">
            <span className="text-sm text-muted-foreground font-sans">{filtered.length} zájezdů</span>
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 text-sm font-sans border border-border px-3 py-2"
            >
              <SlidersHorizontal size={14} />
              Filtry
            </button>
          </div>

          {/* Filter panel — always visible on desktop, toggleable on mobile */}
          <div className={`${filtersOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-4 flex-wrap items-start md:items-center`}>
            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory('vse')}
                className={`text-xs font-sans tracking-wide uppercase px-3 py-1.5 border transition-colors ${
                  activeCategory === 'vse'
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
                }`}
              >
                Vše
              </button>
              {ALL_CATEGORIES.map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`text-xs font-sans tracking-wide uppercase px-3 py-1.5 border transition-colors ${
                    activeCategory === key
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-6 bg-border" />

            {/* Difficulty filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveDifficulty('vse')}
                className={`text-xs font-sans px-3 py-1.5 border transition-colors ${
                  activeDifficulty === 'vse'
                    ? 'border-accent-foreground bg-accent text-accent-foreground'
                    : 'border-border text-muted-foreground hover:border-foreground'
                }`}
              >
                Obtížnost
              </button>
              {ALL_DIFFICULTIES.map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveDifficulty(d)}
                  className={`text-xs font-sans px-3 py-1.5 border transition-colors ${
                    activeDifficulty === d
                      ? 'border-accent-foreground bg-accent text-accent-foreground'
                      : 'border-border text-muted-foreground hover:border-foreground'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="ml-auto flex items-center gap-2">
              <Filter size={14} className="text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="text-xs font-sans bg-background border border-border px-3 py-1.5 text-foreground cursor-pointer"
                aria-label="Seřadit zájezdy"
              >
                <option value="date">Datum odjezdu</option>
                <option value="name">Název A–Z</option>
                <option value="duration">Délka</option>
              </select>
            </div>
          </div>

          {/* Results count — desktop */}
          <div className="hidden md:flex items-center justify-between border-b border-border pb-4">
            <span className="text-sm text-muted-foreground font-sans">
              Zobrazeno <strong className="text-foreground">{filtered.length}</strong> z {TOURS.length} zájezdů
            </span>
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <p className="font-serif text-2xl text-muted-foreground">Žádné zájezdy nenalezeny</p>
            <p className="text-sm text-muted-foreground font-sans">Zkuste změnit filtry nebo vybrat jinou kombinaci.</p>
            <button
              onClick={() => { setActiveCategory('vse'); setActiveDifficulty('vse'); setActiveCountry('vse') }}
              className="text-xs font-sans uppercase tracking-widest px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Zrušit filtry
            </button>
          </div>
        )}
      </div>
    </SiteLayout>
  )
}
