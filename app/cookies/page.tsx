import type { Metadata } from 'next'
import SiteLayout from '@/components/site-layout'

export const metadata: Metadata = {
  title: 'Zásady cookies | Sport Tours Czechia',
  description: 'Informace o používání souborů cookies na webu sporttoursczechia.com.',
}

export default function CookiesPage() {
  return (
    <SiteLayout>
      <div
        className="py-14 text-center border-b border-border"
        style={{ backgroundColor: 'var(--section-dark)' }}
      >
        <p className="ornament mb-3" style={{ color: 'var(--gold)' }}>Právní informace</p>
        <h1 className="font-serif text-4xl font-bold text-white">Zásady cookies</h1>
        <p className="text-white/40 font-sans text-xs mt-3">Poslední aktualizace: 2026</p>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-16 font-sans text-sm text-muted-foreground leading-relaxed flex flex-col gap-8">
        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-foreground">Co jsou cookies?</h2>
          <p>
            Soubory cookies jsou malé textové soubory, které webové stránky ukládají do vašeho prohlížeče při návštěvě. Umožňují webu zapamatovat si vaše preference a poskytnout lepší uživatelský zážitek.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-foreground">Jaké cookies používáme</h2>

          <div className="flex flex-col gap-4">
            <div
              className="p-5 border border-border"
              style={{ backgroundColor: 'var(--secondary)' }}
            >
              <h3 className="font-serif font-semibold text-foreground mb-2">Nezbytné cookies</h3>
              <p>
                Tyto cookies jsou nutné pro základní funkce webu (např. uložení vašeho souhlasu s cookies). Nelze je vypnout. Neuchovávají žádné osobní identifikační údaje.
              </p>
            </div>

            <div
              className="p-5 border border-border"
              style={{ backgroundColor: 'var(--secondary)' }}
            >
              <h3 className="font-serif font-semibold text-foreground mb-2">Analytické cookies (volitelné)</h3>
              <p>
                Tyto cookies nám pomáhají pochopit, jak návštěvníci web používají (počet návštěv, nejnavštěvovanější stránky). Všechna data jsou anonymizovaná a používáme je výhradně ke zlepšení obsahu webu.
              </p>
            </div>

            <div
              className="p-5 border border-border"
              style={{ backgroundColor: 'var(--secondary)' }}
            >
              <h3 className="font-serif font-semibold text-foreground mb-2">Funkční cookies (volitelné)</h3>
              <p>
                Umožňují webu zapamatovat si vaše volby (např. preferovaný filtr v katalogu) pro pohodlnější procházení při příští návštěvě.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-foreground">Jak spravovat cookies</h2>
          <p>
            Svůj souhlas s cookies můžete kdykoli odvolat nebo změnit kliknutím na banner cookies v dolní části webu. Dále můžete cookies spravovat nebo smazat přímo v nastavení svého prohlížeče.
          </p>
          <p>
            Vezměte prosím na vědomí, že zakázání některých cookies může ovlivnit funkčnost webu.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-foreground">Třetí strany</h2>
          <p>
            Aktuálně nepoužíváme žádné cookies třetích stran pro reklamní účely. Pokud se to změní, budeme vás o tom informovat prostřednictvím tohoto dokumentu.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-foreground">Kontakt</h2>
          <p>
            Dotazy ohledně cookies zasílejte na{' '}
            <a href="mailto:info@sporttoursczechia.com" className="underline text-foreground">
              info@sporttoursczechia.com
            </a>
            .
          </p>
        </section>
      </article>
    </SiteLayout>
  )
}
