import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, CheckCircle, ChevronRight } from 'lucide-react'
import { LOCATIONS } from '@/data/locations'
import { BUSINESS, SITE_CONFIG } from '@/data/business'
import CTASection from '@/components/sections/CTASection'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: `Areas We Cover | Glazing London & Surrey | ${BUSINESS.name}`,
  description: `${BUSINESS.name} provides specialist glazing across London and Surrey. Premium service in Chelsea, Kensington, Belgravia, Mayfair, Richmond, Wimbledon and all surrounding areas.`,
  alternates: { canonical: `${SITE_CONFIG.url}/areas` },
}

const PREMIUM_SLUGS = [
  'chelsea', 'kensington', 'knightsbridge', 'mayfair', 'belgravia',
  'notting-hill', 'holland-park', 'marylebone', 'bayswater',
  'hampstead', 'primrose-hill', 'highgate', 'st-johns-wood', 'islington',
  'richmond', 'kew', 'twickenham', 'teddington', 'barnes',
  'wimbledon', 'putney', 'fulham', 'battersea', 'clapham',
  'dulwich', 'chiswick', 'kingston-upon-thames', 'central-london',
]

const ALSO_COVERING = [
  'Belsize Park', 'Swiss Cottage', 'West Hampstead', 'Kilburn', 'Maida Vale',
  'Shepherd\'s Bush', 'Acton', 'Ealing', 'Southall', 'Greenford', 'Hanwell',
  'Hackney', 'Shoreditch', 'Bethnal Green', 'Canary Wharf', 'Stratford', 'Wapping',
  'Greenwich', 'Lewisham', 'Peckham', 'Forest Hill', 'Sydenham', 'Catford',
  'Streatham', 'Norwood', 'Crystal Palace', 'Herne Hill', 'Balham',
  'Harrow', 'Hendon', 'Finchley', 'Muswell Hill', 'Wood Green', 'Crouch End',
  'Esher', 'Cobham', 'Weybridge', 'Leatherhead', 'Walton-on-Thames',
  'Hampton', 'Whitton', 'Feltham', 'Staines', 'Hounslow',
  'Sutton', 'Croydon', 'Morden', 'Mitcham', 'Tooting',
  'Wimbledon Chase', 'Raynes Park', 'Worcester Park', 'Cheam',
  'Surbiton', 'New Malden', 'Tolworth', 'Chessington',
  'Wallington', 'Carshalton', 'Banstead', 'Epsom', 'Ewell',
  'Wandsworth', 'Brixton', 'Bromley', 'Beckenham', 'Orpington',
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
            {['Emergency 24/7', 'Building Regs Compliant', 'Free quotes', 'Same-day available'].map(item => (
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
              <h2 className="text-3xl font-black text-[#0f2442]">Prime London & Surrey Areas</h2>
              <span className="bg-blue-50 text-[#0f2442] text-xs font-bold px-3 py-1 rounded-full border border-blue-100">Full Service</span>
            </div>
            <p className="text-slate-500 mb-8">Our core coverage — rapid response, full service range, and specialist glaziers on hand.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {premiumAreas.map(location => (
                <Link
                  key={location.slug}
                  href={`/areas/${location.slug}`}
                  className="bg-white border border-slate-200 shadow-sm hover:border-[#0f2442] hover:shadow-md rounded-xl p-5 transition-all group"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0f2442] group-hover:bg-orange-500 flex items-center justify-center shrink-0 transition-colors">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0f2442] group-hover:text-orange-600 transition-colors">
                        {location.name}
                      </h3>
                      <p className="text-xs text-slate-400">{location.postcodePrefixes.slice(0, 2).join(', ')}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {location.responseTime}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:text-orange-500 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* More areas with pages — chip style */}
          {moreAreas.length > 0 && (
            <div className="mb-12">
              <h2 className="text-xl font-bold text-slate-600 mb-2">More Areas</h2>
              <p className="text-slate-400 text-sm mb-5">We also serve these areas across South London and Surrey.</p>
              <div className="flex flex-wrap gap-2">
                {moreAreas.map(location => (
                  <Link
                    key={location.slug}
                    href={`/areas/${location.slug}`}
                    className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 hover:border-[#0f2442] hover:bg-slate-100 text-slate-600 hover:text-[#0f2442] text-sm font-medium px-3 py-1.5 rounded-full transition-colors"
                  >
                    <MapPin className="w-3 h-3" />
                    {location.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Also covering — no dedicated pages */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-slate-600 mb-2">Also Covering</h2>
            <p className="text-slate-400 text-sm mb-5">
              We cover many more postcodes across London and Surrey — call us with your postcode to confirm.
            </p>
            <div className="flex flex-wrap gap-2">
              {ALSO_COVERING.map(area => (
                <span
                  key={area}
                  className="text-sm text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CTASection variant="light" title="Not Sure If We Cover You?" subtitle="Call us with your postcode — we cover many more areas beyond this list and can often reach you within hours." />
    </>
  )
}
