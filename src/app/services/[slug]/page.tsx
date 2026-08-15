import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Clock, PoundSterling, Phone, ArrowRight } from 'lucide-react'
import { SERVICES } from '@/data/services'
import { BUSINESS, SITE_CONFIG } from '@/data/business'
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'
import { formatPhoneForHref, formatWhatsAppHref, buildWhatsAppMessage, buildContactMessage } from '@/lib/utils'
import { MessageCircle } from 'lucide-react'

interface Params {
  params: Promise<{ slug: string }>
}

const CATEGORY_IMAGES: Record<string, string> = {
  'window-installation': 'https://images.unsplash.com/photo-1527352774566-e4916e36c645?auto=format&fit=crop&w=1920&q=80',
  'glass-repair':        'https://images.unsplash.com/photo-1564182842834-681b7be6de4b?auto=format&fit=crop&w=1920&q=80',
  'doors':               'https://images.unsplash.com/photo-1684831652490-77ba946774c0?auto=format&fit=crop&w=1920&q=80',
  'roof-glazing':        'https://images.unsplash.com/photo-1527352774566-e4916e36c645?auto=format&fit=crop&w=1920&q=80',
  'walk-on-glass':       'https://images.unsplash.com/photo-1609214776366-38e385f6e265?auto=format&fit=crop&w=1920&q=80',
  'specialist-glass':    'https://images.unsplash.com/photo-1564182842834-681b7be6de4b?auto=format&fit=crop&w=1920&q=80',
  'commercial':          'https://images.unsplash.com/photo-1574854986069-a8653af0944e?auto=format&fit=crop&w=1920&q=80',
  'emergency':           'https://images.unsplash.com/photo-1564182842834-681b7be6de4b?auto=format&fit=crop&w=1920&q=80',
}

export async function generateStaticParams() {
  return SERVICES.map(service => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find(s => s.slug === slug)
  if (!service) return {}

  return {
    title: `${service.title} in London & Surrey | ${BUSINESS.name}`,
    description: `${service.shortDescription} From ${service.priceRange}. Free written quote. Call ${BUSINESS.phone} or book online.`,
    keywords: service.keywords,
    alternates: { canonical: `${SITE_CONFIG.url}/services/${slug}` },
    openGraph: {
      title: `${service.title} in London & Surrey`,
      description: service.shortDescription,
      type: 'website',
    },
  }
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params
  const service = SERVICES.find(s => s.slug === slug)
  if (!service) notFound()

  const relatedServices = SERVICES.filter(s => service.relatedServices.includes(s.slug))
  const schemas = [
    generateServiceSchema(service),
    generateFAQSchema(service.faqs),
    generateBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Services', href: '/services' },
      { name: service.title, href: `/services/${service.slug}` },
    ]),
  ]

  return (
    <>
      <SchemaMarkup schemas={schemas} />
      <Breadcrumbs items={[
        { name: 'Services', href: '/services' },
        { name: service.title, href: `/services/${service.slug}` },
      ]} />

      {/* Hero */}
      <section className="relative overflow-hidden text-white py-16 lg:py-24">
        <Image
          src={CATEGORY_IMAGES[service.category] ?? CATEGORY_IMAGES['window-installation']}
          alt={`${service.title} - LondonFix Glazing`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2442]/95 via-[#0f2442]/80 to-[#0f2442]/60" />
        <div className="relative z-10 container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="badge-primary mb-5" style={{ backgroundColor: 'rgba(249,115,22,0.15)', color: '#fed7aa', borderColor: 'rgba(249,115,22,0.3)' }}>
                Professional Service
              </p>
              <h1 className="text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
                {service.title} in London &amp; Surrey
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {service.shortDescription}
              </p>

              <div className="flex flex-wrap gap-4 mb-8 text-sm">
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <PoundSterling className="w-4 h-4 text-orange-400" />
                  <span className="text-slate-200">From <strong className="text-white">{service.priceRange}</strong></span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span className="text-slate-200"><strong className="text-white">{service.duration}</strong></span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={formatPhoneForHref(BUSINESS.phone)}
                  className="flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS.phone}
                </a>
                <a
                  href={formatWhatsAppHref(BUSINESS.whatsapp, buildWhatsAppMessage(service.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-[#25d366] hover:bg-[#22bf5b] text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Quote
                </a>
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl transition-colors"
                >
                  Email Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Features card */}
            <div className="bg-white rounded-2xl p-8 text-slate-900 shadow-2xl">
              <h2 className="text-xl font-bold text-[#0f2442] mb-5">What&apos;s Included</h2>
              <ul className="space-y-3">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-slate-100 mt-6 pt-6 space-y-2 text-sm">
                {[
                  'Free written quote provided',
                  'Fixed price — agreed before we start',
                  'No obligation to proceed',
                  'Building Regulations compliant',
                ].map(item => (
                  <div key={item} className="flex items-center gap-2 text-slate-500">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <article className="prose-custom">
            <h2 className="text-3xl font-black text-[#0f2442] mb-6">
              Professional {service.title} Across London &amp; Surrey
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              {service.description}
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              At {BUSINESS.name}, we understand that every property and every client is different.
              That is why our {service.title.toLowerCase()} service begins with a thorough assessment
              of your specific requirements, followed by a transparent, fixed-price quote so you know
              exactly what you will pay before any work begins.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Our glaziers are qualified, experienced professionals working across London and Surrey.
              We pride ourselves on punctuality, cleanliness, and leaving your property in a
              better condition than we found it.
            </p>

            <h3 className="text-2xl font-bold text-[#0f2442] mt-8 mb-4">
              Why Choose Us for {service.title}?
            </h3>
            <ul className="space-y-3 mb-6">
              {[
                'Fixed, transparent pricing with no hidden charges',
                'Free written quote before any work begins',
                'Same-day and next-day appointments available',
                'Building Regulations compliant installations',
                'Local glazing specialists covering London & Surrey',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-[#0f2442] mt-8 mb-4">
              Areas We Cover for {service.title}
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our {service.title.toLowerCase()} professionals operate across Greater London and
              Surrey, with particularly fast response times in South London, Sutton, Croydon,
              Kingston upon Thames, Richmond, Wimbledon, and Epsom. For a full list of our
              service areas, please visit our{' '}
              <Link href="/areas" className="text-orange-600 hover:underline">areas page</Link>.
            </p>

            <h3 className="text-2xl font-bold text-[#0f2442] mt-8 mb-4">Pricing</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our {service.title.toLowerCase()} service typically starts from {service.priceRange}.
              This can vary based on the scope of work, materials required, and accessibility.
              We always provide a full written quote before commencing any work, so there are
              never any surprises.
            </p>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
              <p className="font-semibold text-[#0f2442] mb-1">Need an accurate quote?</p>
              <p className="text-slate-600 text-sm mb-3">
                Call us on{' '}
                <a href={formatPhoneForHref(BUSINESS.phone)} className="text-orange-600 font-semibold">
                  {BUSINESS.phone}
                </a>{' '}
                or submit an online enquiry for a free, no-obligation written quote.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <FAQSection
          faqs={service.faqs}
          title={`${service.title} FAQ`}
          subtitle={`Common questions about our ${service.title.toLowerCase()} service.`}
        />
      )}

      {/* Testimonials */}

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl font-black text-[#0f2442] mb-8">Related Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedServices.map(related => (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="bg-white rounded-xl p-5 border border-slate-100 hover:border-orange-200 hover:shadow-md transition-all group"
                >
                  <h3 className="font-bold text-[#0f2442] mb-1 group-hover:text-orange-600 transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-3">{related.shortDescription}</p>
                  <span className="text-orange-500 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
