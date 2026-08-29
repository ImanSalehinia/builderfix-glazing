import type { Metadata } from 'next'
import Image from 'next/image'
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
import { MapPin, ArrowRight, Star, ExternalLink } from 'lucide-react'

const PREMIUM_SLUGS = [
  'chelsea', 'kensington', 'knightsbridge', 'mayfair', 'belgravia',
  'notting-hill', 'holland-park', 'marylebone', 'bayswater',
  'hampstead', 'primrose-hill', 'highgate', 'st-johns-wood',
  'richmond', 'kew', 'twickenham', 'teddington', 'barnes',
  'wimbledon', 'putney', 'fulham', 'battersea', 'clapham',
  'dulwich', 'chiswick', 'kingston-upon-thames', 'islington', 'central-london',
]

export const metadata: Metadata = {
  title: `${BUSINESS.name} | Glazing & Glass Specialists London`,
  description: 'Professional glazing and glass installation services across London and Surrey. Double glazing, window replacement, emergency glass repair, bi-fold doors and more. Call today for a free quote.',
  alternates: { canonical: SITE_CONFIG.url },
}

export default function HomePage() {
  const premiumLocations = PREMIUM_SLUGS
    .map(slug => LOCATIONS.find(l => l.slug === slug))
    .filter(Boolean) as typeof LOCATIONS

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
            {premiumLocations.slice(0, 16).map((loc, i) => (
              <span key={loc.slug} className="flex items-center gap-3">
                <Link href={`/areas/${loc.slug}`} className="text-slate-300 hover:text-white transition-colors">
                  {loc.name}
                </Link>
                {i < 15 && <span className="text-slate-600">·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ServicesGrid />

      {/* Google Reviews strip */}
      {BUSINESS.googleReviews.url && (
        <div className="bg-[#0f2442] py-5 border-t border-slate-700">
          <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="text-white font-bold text-lg">{BUSINESS.googleReviews.rating}</span>
              <span className="text-slate-400 text-sm">· on Google</span>
            </div>
            <a
              href={BUSINESS.googleReviews.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
            >
              Read Our Google Reviews
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      {/* About section — real body text + action shot for E-E-A-T */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="badge-primary mb-4">London&apos;s Glazing Specialists</p>
              <h2 className="text-3xl font-black text-[#0f2442] mb-6">
                Professional Glazing Services Across London &amp; Surrey
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  BuilderFix Glazing is a specialist glazing and glass installation company based in
                  Brentford, West London. We serve homeowners, landlords, architects, and businesses
                  across all of Greater London and Surrey — from emergency broken window repairs in
                  Kensington to bespoke walk-on glass floor installations in Mayfair.
                </p>
                <p>
                  Our team of experienced, fully insured glaziers covers the complete spectrum of
                  residential and commercial glazing work: double glazing and window replacement,
                  aluminium and uPVC windows, bi-fold and patio doors, composite front doors,
                  frameless shower enclosures, glass balustrades, kitchen splashbacks, roof lanterns,
                  Velux windows, and structural walk-on glass floors. Every installation is completed
                  to current UK Building Regulations, and we provide all relevant compliance
                  documentation on completion.
                </p>
                <p>
                  We are particularly experienced with the glazing challenges of London&apos;s Victorian
                  and Edwardian housing stock — sash window restoration and draught-proofing,
                  secondary glazing for listed buildings and conservation areas, and sympathetic
                  replacements that satisfy local planning requirements. Our emergency glazing team
                  is available 24 hours a day, 7 days a week, aiming to be on-site within 2 hours
                  of your call across the whole of London.
                </p>
                <p>
                  All quotes are free, written, and fully fixed before we start — no surprises on
                  the invoice. Call us or request a quote online to arrange your free survey.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/job-team-velux-rooftop.jpg"
                  alt="BuilderFix Glazing team installing a Velux window on a London rooftop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f2442]/80 to-transparent p-6">
                  <p className="text-white font-semibold text-sm">Velux Installation · West London</p>
                  <p className="text-slate-300 text-xs mt-0.5">Our team working on a Velux window installation</p>
                </div>
              </div>
              <Link
                href="/gallery"
                className="absolute -bottom-4 -right-4 bg-orange-500 hover:bg-orange-400 text-white text-sm font-bold px-5 py-3 rounded-xl shadow-lg transition-colors"
              >
                View all our work →
              </Link>
            </div>
          </div>
        </div>
      </section>

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
            {premiumLocations.map(location => (
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
