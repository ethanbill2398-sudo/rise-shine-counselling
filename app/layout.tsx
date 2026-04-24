import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Rise & Shine Counselling | Kendall Pruden, MCPC',
    template: '%s | Rise & Shine Counselling',
  },
  description:
    'Professional counselling for individuals, couples, and youth in Saskatoon, SK. Specializing in anxiety, depression, grief, and life transitions. Reach out to book with Kendall Pruden, M.A., MCPC.',
  keywords: [
    'counselling',
    'therapy',
    'Saskatoon',
    'anxiety',
    'depression',
    'couples therapy',
    'CBT',
    'EFT',
    'mental health',
    'Saskatchewan',
    'Kendall Pruden',
  ],
  openGraph: {
    title: 'Rise & Shine Counselling',
    description: 'Helping You Rise, Supporting You to Shine.',
    siteName: 'Rise & Shine Counselling',
    locale: 'en_CA',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-warm-50 text-warm-900 font-sans">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
