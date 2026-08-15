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

// Verified Unsplash image URLs per service (grouped by type for unverified ones)
const W  = 'https://images.unsplash.com/photo-1527352774566-e4916e36c645?auto=format&fit=crop&w=600&q=70' // window
const R  = 'https://images.unsplash.com/photo-1741947837536-9a8779380a2d?auto=format&fit=crop&w=600&q=70' // repair / window open
const D  = 'https://images.unsplash.com/photo-1684831652490-77ba946774c0?auto=format&fit=crop&w=600&q=70' // bifold/glass door
const CD = 'https://images.unsplash.com/photo-1617307074423-6344f18d357f?auto=format&fit=crop&w=600&q=70' // composite door
const SK = 'https://images.unsplash.com/photo-1674752792204-5ac7f336b98d?auto=format&fit=crop&w=600&q=70' // skylight / roof lantern
const GF = 'https://images.unsplash.com/photo-1609214776366-38e385f6e265?auto=format&fit=crop&w=600&q=70' // glass floor
const ST = 'https://images.unsplash.com/photo-1500213448252-2636420cec9a?auto=format&fit=crop&w=600&q=70' // staircase / balustrade
const SH = 'https://images.unsplash.com/photo-1771239048293-72abf673adb2?auto=format&fit=crop&w=600&q=70' // shower
const CO = 'https://images.unsplash.com/photo-1574854986069-a8653af0944e?auto=format&fit=crop&w=600&q=70' // commercial glass
const SF = 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=600&q=70' // shop front
const EM = 'https://images.unsplash.com/photo-1564182842834-681b7be6de4b?auto=format&fit=crop&w=600&q=70' // emergency / glazier

const SERVICE_IMAGES: Record<string, string> = {
  // Window installation
  'double-glazing':          W,
  'upvc-windows':            W,
  'aluminium-windows':       W,
  'sash-windows':            R,
  'secondary-glazing':       W,
  'bay-windows':             W,
  // Glass repair
  'broken-window-repair':    R,
  'sealed-unit-replacement': R,
  'glass-replacement':       EM,
  'window-repair':           R,
  // Doors
  'composite-doors':         CD,
  'bifold-doors':            D,
  'patio-doors':             D,
  'french-doors':            D,
  'door-glass-replacement':  CD,
  // Roof glazing
  'roof-lanterns':           SK,
  'velux-windows':           SK,
  'conservatory':            SK,
  'flat-roof-lights':        SK,
  // Walk-on glass
  'walk-on-glass-floors':    GF,
  'glass-staircases':        ST,
  'glass-mezzanine':         GF,
  'juliet-balcony':          CO,
  // Specialist glass
  'shower-enclosures':       SH,
  'glass-balustrades':       ST,
  'glass-splashbacks':       SH,
  'mirror-installation':     SH,
  'frosted-glass':           W,
  // Commercial
  'shop-fronts':             SF,
  'office-glazing':          CO,
  'curtain-walling':         CO,
  'commercial-glass-repair': EM,
  // Emergency
  'emergency-glazing':       EM,
  'emergency-boarding':      EM,
  'break-in-repair':         EM,
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
            LondonFix Glazing covers every glass and glazing need across London and Surrey.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {['FENSA Registered', 'Fully Insured', 'Free Quotes', 'Same-Day Available', '12-Month Guarantee'].map(item => (
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
                          src={SERVICE_IMAGES[service.slug] ?? W}
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
