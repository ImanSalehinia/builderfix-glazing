import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import TrustSection from '@/components/sections/TrustSection'
import ProcessSection from '@/components/sections/ProcessSection'
import CTASection from '@/components/sections/CTASection'
import FAQSection from '@/components/sections/FAQSection'
import { GENERAL_FAQS } from '@/data/faqs'
import { BUSINESS, SITE_CONFIG } from '@/data/business'
import { LOCATIONS } from '@/data/locations'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: `${BUSINESS.name} | Glazing & Glass Specialists London`,
  description: 'Professional glazing and glass installation services across London and Surrey. Double glazing, window replacement, emergency glass repair, bi-fold doors and more. Call today for a free quote.',
  alternates: { canonical: SITE_CONFIG.url },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Areas ticker */}
      <div className="bg-[#0f2442] py-3 overflow-x-auto scrollbar-none">
        <div className="container-custom">
          <div className="flex items-center gap-3 whitespace-nowrap text-sm">
            <span className="text-orange-400 font-semibold flex items-center gap-1.5 shrink-0">
              <MapPin className="w-4 h-4" />
              We Cover:
            </span>
            {LOCATIONS.slice(0, 14).map((loc, i) => (
              <span key={loc.slug} className="flex items-center gap-3">
                <Link href={`/areas/${loc.slug}`} className="text-slate-300 hover:text-white transition-colors">
                  {loc.name}
                </Link>
                {i < 13 && <span className="text-slate-600">·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ServicesGrid />
      <TrustSection />
      <ProcessSection />

      {/* Areas section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="badge-primary mb-4">Areas We Cover</p>
            <h2 className="text-4xl font-black text-[#0f2442] mb-4">
              Serving London &amp; Surrey
            </h2>
            <p className="text-slate-500 text-lg">
              Based in South London, we cover a wide area including the following locations.
              Don&apos;t see yours? Call us — we likely cover you too.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
            {LOCATIONS.map(location => (
              <Link
                key={location.slug}
                href={`/areas/${location.slug}`}
                className="flex items-center gap-2 p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-orange-200 hover:bg-orange-50 transition-all group"
              >
                <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-slate-700 group-hover:text-[#0f2442]">{location.name}</div>
                  <div className="text-xs text-slate-400">{location.county}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/areas" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors">
              View all areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={GENERAL_FAQS.slice(0, 8)} />
      <CTASection />
    </>
  )
}
