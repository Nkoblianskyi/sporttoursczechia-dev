import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">{children}</main>
      <Footer />
      <CookieBanner />
    </>
  )
}
