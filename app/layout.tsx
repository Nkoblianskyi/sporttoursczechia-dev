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
  title: 'Sport Tours Czechia – Autorské výpravy (Cyklo, Moto & Hory)',
  description:
    'Autorské výpravy po České republice a Evropě. Cyklotury, moto výlety a horské túry v malých skupinách s průvodcem.',
  keywords: 'autorské výpravy, autorské zájezdy, cyklotury Česko, moto výlety Evropa, horské túry, výpravy s průvodcem',
  authors: [{ name: 'Sport Tours Czechia' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Sport Tours Czechia',
    description: 'Cyklotury, moto výlety a horské túry po Čechách a Evropě v malých skupinách.',
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
