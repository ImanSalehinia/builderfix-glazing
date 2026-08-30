import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Square, Wrench, DoorOpen, Home, Layers, Sparkles, Building, AlertTriangle } from 'lucide-react'
import { SERVICES, SERVICE_CATEGORIES } from '@/data/services'
import { BUSINESS, SITE_CONFIG } from '@/data/business'
import CTASection from '@/components/sections/CTASection'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: `All Glazing Services London | ${BUSINESS.name}`,
  description: `Complete range of specialist glazing services across London and Surrey — double glazing, bi-fold doors, walk-on glass floors, emergency glazing and more. Free quotes from ${BUSINESS.phone}.`,
  alternates: { canonical: `${SITE_CONFIG.url}/services` },
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'window-installation': <Square className="w-5 h-5" />,
  'glass-repair':        <Wrench className="w-5 h-5" />,
  'doors':               <DoorOpen className="w-5 h-5" />,
  'roof-glazing':        <Home className="w-5 h-5" />,
  'walk-on-glass':       <Layers className="w-5 h-5" />,
  'specialist-glass':    <Sparkles className="w-5 h-5" />,
  'commercial':          <Building className="w-5 h-5" />,
  'emergency':           <AlertTriangle className="w-5 h-5" />,
}

const q = '?auto=format&fit=crop&w=600&q=70'
const u = (id: string) => `https://images.unsplash.com/${id}${q}`

const SERVICE_IMAGES: Record<string, string> = {
  // Window Installation — real job photos where available
  'double-glazing':          '/images/job-upvc-windows-london.jpg',
  'upvc-windows':            u('photo-1610637988384-3154e5644f4b'),
  'aluminium-windows':       u('photo-1571661683744-fef3696325d6'),
  'sash-windows':            u('photo-1441105501384-23156f198d37'),
  'secondary-glazing':       u('photo-1526324373519-cc874618aabd'),
  'bay-windows':             u('photo-1547638600-6a225c984679'),
  // Glass Repair
  'broken-window-repair':    u('photo-1663045579290-4785a5c424fe'),
  'sealed-unit-replacement': u('photo-1501186758051-167ca3c0fde8'),
  'glass-replacement':       u('photo-1584257354413-32f8603c40fe'),
  'window-repair':           u('photo-1585646578973-cbcf2dfd0c8c'),
  // Doors
  'composite-doors':         u('photo-1510266988780-b681a96dca2a'),
  'bifold-doors':            u('photo-1758998202918-d921125a700f'),
  'patio-doors':             u('photo-1525570665650-76bb26af503d'),
  'french-doors':            u('photo-1621215040051-a6fe2c73f1af'),
  'door-glass-replacement':  u('photo-1493895565436-93db25637518'),
  // Roof & Skylights — real job photos where available
  'roof-lanterns':           u('photo-1775518799956-a01b2af318eb'),
  'velux-windows':           '/images/job-velux-inside-sky.jpg',
  'conservatory':            u('photo-1558455322-911adf441b5a'),
  'flat-roof-lights':        '/images/job-flat-rooflights-rooftop.jpg',
  // Walk-on Glass
  'walk-on-glass-floors':    u('photo-1732408078286-3337c3471dd9'),
  'glass-staircases':        u('photo-1662624915212-28c69aff68f3'),
  'glass-mezzanine':         u('photo-1668015642434-a5d2c8ffb6f4'),
  'juliet-balcony':          u('photo-1597663459867-9903bf92dcfd'),
  // Specialist Glass
  'shower-enclosures':       u('photo-1609280069904-ab36feb3f20c'),
  'glass-balustrades':       u('photo-1598016894037-d316c9763027'),
  'glass-splashbacks':       u('photo-1701421047804-956d0988a237'),
  'mirror-installation':     u('photo-1617228206053-477863025d9c'),
  'frosted-glass':           u('photo-1607355298884-7663019fa61e'),
  // Commercial
  'shop-fronts':             u('photo-1528698827591-e19ccd7bc23d'),
  'office-glazing':          u('photo-1497366754035-f200968a6e72'),
  'curtain-walling':         u('photo-1523477593243-78bbf626fd3b'),
  'commercial-glass-repair': u('photo-1583922606661-0822ed0bd916'),
  // Emergency
  'emergency-glazing':       u('photo-1599700403969-f77b3aa74837'),
  'emergency-boarding':      u('photo-1751486403820-7cf45ebec080'),
  'break-in-repair':         u('photo-1441804238730-210ce1c2cc00'),
}

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Services', href: '/services' }]} />

      {/* Hero */}
      <section className="bg-slate-50 py-16">
        <div className="container-custom max-w-3xl text-center mx-auto">
          <p className="badge-primary mb-4">All Services</p>
          <h1 className="text-5xl font-black text-[#0f2442] mb-5">
            All Glazing Services
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed mb-8">
            From a single cracked pane to a full walk-on glass floor installation —
            BuilderFix Glazing covers every glass and glazing need across London and Surrey.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {['Building Regs Compliant', 'Free Written Quotes', 'Same-Day Available', '24/7 Emergency', 'Fixed Price'].map(item => (
              <span key={item} className="flex items-center gap-1.5 bg-white border border-slate-100 rounded-full px-4 py-1.5 text-slate-600 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services by category */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {SERVICE_CATEGORIES.map(category => {
            const categoryServices = SERVICES.filter(
              s => s.category === category.slug || category.services.includes(s.slug)
            )
            if (categoryServices.length === 0) return null

            return (
              <div key={category.slug} id={category.slug} className="mb-16 last:mb-0">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 bg-[#0f2442] rounded-xl flex items-center justify-center text-white">
                    {CATEGORY_ICONS[category.slug] ?? <Square className="w-5 h-5" />}
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-[#0f2442]">{category.name}</h2>
                    <p className="text-slate-500 text-sm">{category.description}</p>
                  </div>
                </div>

                {/* Service cards with images */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {categoryServices.map(service => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all group"
                    >
                      {/* Image */}
                      <div className="relative h-36 overflow-hidden">
                        <Image
                          src={SERVICE_IMAGES[service.slug] ?? u('1527352774566-e4916e36c645')}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>

                      {/* Info */}
                      <div className="p-4">
                        <h3 className="font-bold text-[#0f2442] mb-1 group-hover:text-orange-600 transition-colors text-sm">
                          {service.title}
                        </h3>
                        <p className="text-slate-400 text-xs mb-3 line-clamp-2 leading-relaxed">
                          {service.shortDescription}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-orange-600 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full">
                            {service.priceRange}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <CTASection variant="light" title="Not Sure Which Service You Need?" subtitle="Call us and describe what you need — we'll advise you honestly and provide a free, no-obligation quote." />
    </>
  )
}
