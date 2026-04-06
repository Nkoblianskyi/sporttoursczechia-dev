import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sport Tours Czechia – Cyklo, Moto, Maraton & Horské Výlety',
  description:
    'Autorské sportovní zájezdy po České republice a celé Evropě. Cyklotury, motoristické výlety, maratony a horské походи. Rezervujte nyní na sporttoursczechia.com.',
  keywords: 'sportovní zájezdy, cyklotury Česko, motoristické výlety Evropa, maratony, horské походи, sport tours',
  authors: [{ name: 'Sport Tours Czechia' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Sport Tours Czechia – Autorské Sportovní Zájezdy',
    description: 'Cyklotury, moto výlety, maratony a горské походи po Čechách a Evropě.',
    url: 'https://sporttoursczechia.com',
    siteName: 'Sport Tours Czechia',
    locale: 'cs_CZ',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#3a0d0d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
