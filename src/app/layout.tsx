import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StickyButtons from '@/components/sticky/StickyButtons'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import { generateLocalBusinessSchema, generateOrganizationSchema, generateWebsiteSchema } from '@/lib/schema'
import { BUSINESS, SITE_CONFIG } from '@/data/business'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${BUSINESS.name} | London's Glazing & Glass Specialists`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'glazing London', 'double glazing London', 'glazier London', 'glass repair London',
    'emergency glazing London', 'window replacement London', 'bifold doors London',
    'sealed unit replacement London', 'glazing specialist Surrey', 'glass installation London',
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_CONFIG.url,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | London's Glazing & Glass Specialists`,
    description: SITE_CONFIG.description,
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: `${BUSINESS.name}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS.name} | Glazing Specialists London`,
    description: SITE_CONFIG.description,
    images: ['/images/og-image.jpg'],
  },
  alternates: { canonical: SITE_CONFIG.url },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemas = [generateOrganizationSchema(), generateLocalBusinessSchema(), generateWebsiteSchema()]

  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0f2442" />
        <meta name="geo.region" content="GB-ENG" />
        <meta name="geo.placename" content="London" />
        <SchemaMarkup schemas={schemas} />
      </head>
      <body className="bg-white text-slate-900 font-sans antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyButtons />
      </body>
    </html>
  )
}
