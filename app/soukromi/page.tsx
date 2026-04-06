import type { Metadata } from 'next'
import SiteLayout from '@/components/site-layout'

export const metadata: Metadata = {
  title: 'Ochrana soukromí | Sport Tours Czechia',
  description: 'Zásady ochrany osobních údajů společnosti K.C. NTOMATA LIMITED provozující Sport Tours Czechia.',
}

export default function SoukromiPage() {
  return (
    <SiteLayout>
      <div
        className="py-14 text-center border-b border-border"
        style={{ backgroundColor: 'var(--section-dark)' }}
      >
        <p className="ornament mb-3" style={{ color: 'var(--gold)' }}>Právní informace</p>
        <h1 className="font-serif text-4xl font-bold text-white">Ochrana soukromí</h1>
        <p className="text-white/40 font-sans text-xs mt-3">Poslední aktualizace: 2026</p>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-16 font-sans text-sm text-muted-foreground leading-relaxed flex flex-col gap-8">
        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-foreground">1. Správce osobních údajů</h2>
          <p>
            Správcem vašich osobních údajů je společnost <strong className="text-foreground">K.C. NTOMATA LIMITED</strong>,
            se sídlem Stylianou Lena, 24 Christiana Court, Flat/Office 202, Strovolos, 2019 Nicosia, Kypr.
            Kontaktní e-mail: <a href="mailto:info@sporttoursczechia.com" className="underline text-foreground">info@sporttoursczechia.com</a>.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-foreground">2. Jaké údaje zpracováváme</h2>
          <p>Zpracováváme pouze údaje, které nám sami poskytnete prostřednictvím kontaktního formuláře nebo e-mailem:</p>
          <ul className="list-disc pl-5 flex flex-col gap-1.5">
            <li>Jméno a příjmení</li>
            <li>E-mailová adresa</li>
            <li>Obsah vaší zprávy</li>
            <li>Případný zájem o konkrétní zájezd</li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-foreground">3. Účel a právní základ zpracování</h2>
          <p>
            Vaše osobní údaje zpracováváme za účelem odpovědi na váš dotaz a případného sjednání zájezdu. Právním základem zpracování je váš souhlas (čl. 6 odst. 1 písm. a) GDPR) a plnění smlouvy nebo předzmluvní jednání (čl. 6 odst. 1 písm. b) GDPR).
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-foreground">4. Doba uchovávání údajů</h2>
          <p>
            Osobní údaje uchováváme po dobu nezbytně nutnou k vyřízení vašeho dotazu, nejdéle však 3 roky od poslední komunikace, pokud zákon nevyžaduje delší dobu uchování.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-foreground">5. Vaše práva</h2>
          <p>V souladu s GDPR máte právo:</p>
          <ul className="list-disc pl-5 flex flex-col gap-1.5">
            <li>na přístup ke svým osobním údajům,</li>
            <li>na opravu nepřesných údajů,</li>
            <li>na výmaz údajů (právo být zapomenut),</li>
            <li>na omezení zpracování,</li>
            <li>na přenositelnost údajů,</li>
            <li>vznést námitku proti zpracování,</li>
            <li>odvolat souhlas kdykoli bez negativních důsledků.</li>
          </ul>
          <p>Svá práva uplatněte e-mailem na <a href="mailto:info@sporttoursczechia.com" className="underline text-foreground">info@sporttoursczechia.com</a>.</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-foreground">6. Cookies</h2>
          <p>
            Informace o používání souborů cookies naleznete v našich <a href="/cookies" className="underline text-foreground">Zásadách cookies</a>.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-foreground">7. Kontakt pro ochranu osobních údajů</h2>
          <p>
            Pokud máte jakékoli dotazy týkající se zpracování vašich osobních údajů, kontaktujte nás na{' '}
            <a href="mailto:info@sporttoursczechia.com" className="underline text-foreground">info@sporttoursczechia.com</a>.
          </p>
        </section>
      </article>
    </SiteLayout>
  )
}
