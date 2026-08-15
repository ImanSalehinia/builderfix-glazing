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
const u = (id: string) => `https://images.unsplash.com/photo-${id}${q}`

const SERVICE_IMAGES: Record<string, string> = {
  // Window installation
  'double-glazing':          u('1527352774566-e4916e36c645'), // window exterior
  'upvc-windows':            u('1558618666-fcd25c85cd64'),    // white uPVC house
  'aluminium-windows':       u('1486325212027-8081e485255e'), // slim frame modern window
  'sash-windows':            u('1741947837536-9a8779380a2d'), // sash / period window
  'secondary-glazing':       u('1493809842364-78817add7ffb'), // interior window light
  'bay-windows':             u('1564013799919-ab600027ffc6'), // bay window exterior
  // Glass repair
  'broken-window-repair':    u('1564182842834-681b7be6de4b'), // glazier repairing
  'sealed-unit-replacement': u('1584824486516-0f5d3a3f8e4a'), // misty sealed unit
  'glass-replacement':       u('1600585152220-90363fe7e115'), // glass panel install
  'window-repair':           u('1504307651254-35680f356dfd'), // tradesperson window
  // Doors
  'composite-doors':         u('1617307074423-6344f18d357f'), // composite front door
  'bifold-doors':            u('1684831652490-77ba946774c0'), // bifold open to garden
  'patio-doors':             u('1600596542815-0281ded34c24'), // patio sliding door
  'french-doors':            u('1600607687939-ce8a6c25118c'), // french doors room
  'door-glass-replacement':  u('1549517045-bc93de630367'), // door glass panel
  // Roof glazing
  'roof-lanterns':           u('1674752792204-5ac7f336b98d'), // roof lantern
  'velux-windows':           u('1674752792204-5ac7f336b98d'), // velux / roof window
  'conservatory':            u('1600566752355-35792bedcfea'), // conservatory interior
  'flat-roof-lights':        u('1609214776366-38e385f6e265'), // flat glass roof light
  // Walk-on glass
  'walk-on-glass-floors':    u('1609214776366-38e385f6e265'), // structural glass floor
  'glass-staircases':        u('1500213448252-2636420cec9a'), // glass staircase
  'glass-mezzanine':         u('1486406146926-c627a92ad1ab'), // mezzanine glass level
  'juliet-balcony':          u('1600585154340-be6161a56a0c'), // juliet balcony exterior
  // Specialist glass
  'shower-enclosures':       u('1771239048293-72abf673adb2'), // frameless shower
  'glass-balustrades':       u('1573496799652-408c2ac9fe98'), // glass balustrade terrace
  'glass-splashbacks':       u('1556909114-f6e7ad7d3136'),    // kitchen splashback
  'mirror-installation':     u('1578662996442-48f60103fc96'), // large mirror interior
  'frosted-glass':           u('1741947837536-9a8779380a2d'), // glazier / frosted window
  // Commercial
  'shop-fronts':             u('1528698827591-e19ccd7bc23d'), // glass shop front
  'office-glazing':          u('1574854986069-a8653af0944e'), // office glass partition
  'curtain-walling':         u('1477959858617-67f85cf4f1df'), // curtain wall building
  'commercial-glass-repair': u('1504307651254-35680f356dfd'), // commercial repair
  // Emergency
  'emergency-glazing':       u('1564182842834-681b7be6de4b'), // glazier emergency
  'emergency-boarding':      u('1504307651254-35680f356dfd'), // boarding up
  'break-in-repair':         u('1600585152220-90363fe7e115'), // glass repair after break-in
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
