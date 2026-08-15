import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Square, Wrench, DoorOpen, Home, Layers, Sparkles, Building, AlertTriangle } from 'lucide-react'
import { SERVICE_CATEGORIES, SERVICES } from '@/data/services'

const FEATURED_SERVICES = [
  'double-glazing',
  'walk-on-glass-floors',
  'bifold-doors',
  'emergency-glazing',
  'sealed-unit-replacement',
  'glass-balustrades',
  'composite-doors',
  'roof-lanterns',
  'shower-enclosures',
  'glass-staircases',
  'shop-fronts',
  'juliet-balcony',
]

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

const SERVICE_IMAGES: Record<string, string> = {
  'double-glazing':          'https://images.unsplash.com/photo-1527352774566-e4916e36c645?auto=format&fit=crop&w=800&q=70',
  'walk-on-glass-floors':    'https://images.unsplash.com/photo-1609214776366-38e385f6e265?auto=format&fit=crop&w=800&q=70',
  'bifold-doors':            'https://images.unsplash.com/photo-1684831652490-77ba946774c0?auto=format&fit=crop&w=800&q=70',
  'emergency-glazing':       'https://images.unsplash.com/photo-1564182842834-681b7be6de4b?auto=format&fit=crop&w=800&q=70',
  'sealed-unit-replacement': 'https://images.unsplash.com/photo-1741947837536-9a8779380a2d?auto=format&fit=crop&w=800&q=70',
  'glass-balustrades':       'https://images.unsplash.com/photo-1500213448252-2636420cec9a?auto=format&fit=crop&w=800&q=70',
  'composite-doors':         'https://images.unsplash.com/photo-1617307074423-6344f18d357f?auto=format&fit=crop&w=800&q=70',
  'roof-lanterns':           'https://images.unsplash.com/photo-1674752792204-5ac7f336b98d?auto=format&fit=crop&w=800&q=70',
  'shower-enclosures':       'https://images.unsplash.com/photo-1771239048293-72abf673adb2?auto=format&fit=crop&w=800&q=70',
  'glass-staircases':        'https://images.unsplash.com/photo-1500213448252-2636420cec9a?auto=format&fit=crop&w=800&q=70',
  'shop-fronts':             'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=800&q=70',
  'juliet-balcony':          'https://images.unsplash.com/photo-1574854986069-a8653af0944e?auto=format&fit=crop&w=800&q=70',
}

export default function ServicesGrid() {
  const featured = FEATURED_SERVICES
    .map(slug => SERVICES.find(s => s.slug === slug))
    .filter(Boolean) as typeof SERVICES

  return (
    <section className="section-padding bg-slate-50" aria-labelledby="services-heading">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="badge-primary mb-4">Our Glazing Services</p>
          <h2 id="services-heading" className="text-4xl font-black text-[#0f2442] mb-4">
            Specialist Glazing for Every Project
          </h2>
          <p className="text-slate-500 text-lg">
            From emergency glass repair to dramatic walk-on glass floors and bi-fold doors —
            BuilderFix Glazing covers every glazing and glass installation need across London.
          </p>
        </div>

        {/* Category tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-12">
          {SERVICE_CATEGORIES.map(cat => (
            <Link
              key={cat.slug}
              href={`/services#${cat.slug}`}
              className="bg-white rounded-xl p-3 text-center border border-slate-100 hover:border-orange-300 hover:bg-orange-50 transition-all group"
            >
              <div className="w-9 h-9 bg-[#0f2442] group-hover:bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-2 transition-colors text-white">
                {CATEGORY_ICONS[cat.slug] ?? <Square className="w-5 h-5" />}
              </div>
              <p className="text-xs font-semibold text-slate-600 group-hover:text-[#0f2442] leading-tight">
                {cat.name}
              </p>
            </Link>
          ))}
        </div>

        {/* Featured service cards with image backgrounds */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {featured.map(service => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all group card-hover"
            >
              {/* Image top */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={SERVICE_IMAGES[service.slug] ?? SERVICE_IMAGES['double-glazing']}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Price badge over image */}
                <div className="absolute top-3 right-3">
                  <span className="text-xs font-bold text-white bg-orange-500/90 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                    {service.priceRange}
                  </span>
                </div>
                {/* Dark gradient at bottom of image */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Card body */}
              <div className="p-5">
                <h3 className="font-bold text-[#0f2442] text-lg mb-1.5 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {service.shortDescription}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    ⏱ {service.duration}
                  </span>
                  <span className="flex items-center gap-1 text-orange-500 text-sm font-semibold group-hover:gap-2 transition-all">
                    More info <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#0f2442] hover:bg-[#1a3a6b] text-white font-bold px-8 py-4 rounded-xl transition-colors"
          >
            View All Glazing Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  )
}
