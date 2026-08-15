import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, CheckCircle, ChevronDown } from 'lucide-react'
import { LOCATIONS } from '@/data/locations'
import { BUSINESS, SITE_CONFIG } from '@/data/business'
import CTASection from '@/components/sections/CTASection'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: `Areas We Cover | Glazing London & Surrey | ${BUSINESS.name}`,
  description: `${BUSINESS.name} provides specialist glazing across London and Surrey. Premium service in Chelsea, Kensington, Richmond, Wimbledon and all surrounding areas.`,
  alternates: { canonical: `${SITE_CONFIG.url}/areas` },
}

const PREMIUM_SLUGS = [
  'chelsea', 'kensington', 'knightsbridge', 'mayfair', 'notting-hill',
  'hampstead', 'st-johns-wood', 'richmond', 'wimbledon', 'fulham',
  'battersea', 'barnes', 'chiswick', 'putney', 'kingston-upon-thames',
  'surbiton', 'twickenham', 'islington', 'clapham',
]

export default function AreasPage() {
  const premiumAreas = PREMIUM_SLUGS
    .map(slug => LOCATIONS.find(l => l.slug === slug))
    .filter(Boolean) as typeof LOCATIONS

  const moreAreas = LOCATIONS.filter(l => !PREMIUM_SLUGS.includes(l.slug))

  return (
    <>
      <Breadcrumbs items={[{ name: 'Areas', href: '/areas' }]} />

      <section className="bg-slate-50 py-16">
        <div className="container-custom max-w-3xl text-center mx-auto">
          <p className="badge-primary mb-4">Coverage</p>
          <h1 className="text-5xl font-black text-[#0f2442] mb-5">
            Areas We Cover
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed mb-6">
            Specialist glazing across London and Surrey. From Mayfair penthouses to Richmond riverside homes — same expert team, same high standard.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {['Emergency 24/7', 'FENSA Registered', 'Free quotes', 'Same-day available'].map(item => (
              <span key={item} className="flex items-center gap-1.5 bg-white border border-slate-100 rounded-full px-4 py-1.5 text-slate-600 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">

          {/* Premium areas */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-black text-[#0f2442]">Prime London Areas</h2>
              <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">Premium Service</span>
            </div>
            <p className="text-slate-500 mb-8">Our core coverage — rapid response, full service range, and specialist glaziers on hand.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {premiumAreas.map(location => (
                <LocationCard key={location.slug} location={location} premium />
              ))}
            </div>
          </div>

          {/* More locations */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ChevronDown className="w-5 h-5 text-slate-400" />
              <h2 className="text-2xl font-bold text-slate-600">More Locations</h2>
            </div>
            <p className="text-slate-500 mb-8">We also cover these areas across South London and Surrey.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
              {moreAreas.map(location => (
                <LocationCard key={location.slug} location={location} />
              ))}
            </div>
          </div>

        </div>
      </section>

      <CTASection variant="light" title="Not Sure If We Cover You?" subtitle="Call us with your postcode — we cover many more areas beyond this list and can often reach you within hours." />
    </>
  )
}

function LocationCard({ location, premium = false }: { location: typeof LOCATIONS[0]; premium?: boolean }) {
  return (
    <Link
      href={`/areas/${location.slug}`}
      className={`border rounded-xl p-5 hover:border-orange-200 hover:bg-orange-50 transition-all group ${
        premium
          ? 'bg-white border-slate-200 shadow-sm hover:shadow-md'
          : 'bg-slate-50 border-slate-100'
      }`}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors group-hover:bg-orange-500 ${
          premium ? 'bg-[#0f2442]' : 'bg-slate-300'
        }`}>
          <MapPin className="w-4 h-4 text-white" />
        </div>
        <div>
          <h3 className={`font-bold group-hover:text-orange-600 transition-colors ${premium ? 'text-[#0f2442]' : 'text-slate-600'}`}>
            {location.name}
          </h3>
          <p className="text-xs text-slate-400">{location.postcodePrefixes.slice(0, 2).join(', ')}</p>
        </div>
      </div>
      <div className="flex items-center gap-1.5 text-xs text-slate-500">
        <Clock className="w-3.5 h-3.5" />
        {location.responseTime}
      </div>
    </Link>
  )
}
