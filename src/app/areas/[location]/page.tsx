import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Clock, CheckCircle, Phone, ArrowRight, Shield } from 'lucide-react'
import { LOCATIONS } from '@/data/locations'
import { SERVICES } from '@/data/services'
import { BUSINESS, SITE_CONFIG } from '@/data/business'
import { generateLocationSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import CTASection from '@/components/sections/CTASection'
import FAQSection from '@/components/sections/FAQSection'
import { formatPhoneForHref } from '@/lib/utils'

interface Params {
  params: Promise<{ location: string }>
}

export async function generateStaticParams() {
  return LOCATIONS.map(loc => ({ location: loc.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { location: slug } = await params
  const location = LOCATIONS.find(l => l.slug === slug)
  if (!location) return {}

  return {
    title: `Glazing Specialist ${location.name} | Glass Repairs ${location.name} | ${BUSINESS.name}`,
    description: `Professional glazing and glass specialist services in ${location.name}, ${location.county}. ${location.responseTime} response time. Free written quote. Call ${BUSINESS.phone}.`,
    keywords: [
      `glazing ${location.name}`,
      `glazier ${location.name}`,
      `double glazing ${location.name}`,
      `window replacement ${location.name}`,
      `emergency glazing ${location.name}`,
      `glass repair ${location.name}`,
      `bifold doors ${location.name}`,
      `glazing specialist ${location.county}`,
    ],
    alternates: { canonical: `${SITE_CONFIG.url}/areas/${slug}` },
    openGraph: {
      title: `Glazing & Glass Specialists in ${location.name}`,
      description: location.description,
    },
  }
}

export default async function LocationPage({ params }: Params) {
  const { location: slug } = await params
  const location = LOCATIONS.find(l => l.slug === slug)
  if (!location) notFound()

  const popularServiceData = SERVICES.filter(s => location.popularServices.includes(s.slug))
  const nearbyLocations = LOCATIONS.filter(l => location.nearbyAreas.some(a => l.name.includes(a) || l.slug.includes(a.toLowerCase().replace(/ /g, '-'))))

  const locationFaqs = [
    {
      question: `Do you provide glazing services in ${location.name}?`,
      answer: `Yes, we provide a full range of glazing and glass installation services throughout ${location.name} and the surrounding ${location.county} area. Our response time in ${location.name} is typically ${location.responseTime}.`,
    },
    {
      question: `How quickly can you respond to a job in ${location.name}?`,
      answer: `For standard bookings in ${location.name}, we typically offer same-day or next-day appointments. For emergencies, we aim to be with you within ${location.responseTime}.`,
    },
    {
      question: `Are you local glazing specialists in ${location.name}?`,
      answer: `We are based in West London and have served the ${location.name} area for over ${BUSINESS.yearsExperience} years. Our glaziers are familiar with the local area and the typical property types found in ${location.name}.`,
    },
    {
      question: `What glazing services do you offer in ${location.name}?`,
      answer: `In ${location.name}, we offer double glazing installation, window replacement, sealed unit replacement, bi-fold doors, composite doors, emergency glass repair, glass balustrades, shower enclosures, roof lanterns, and shop fronts. Contact us to discuss your specific requirements.`,
    },
    {
      question: `Do you offer emergency glazing services in ${location.name}?`,
      answer: location.emergencyAvailable
        ? `Yes. We offer 24/7 emergency glazing services in ${location.name}. Our emergency team aims to respond within ${location.responseTime} for all genuine glazing emergencies.`
        : `We offer emergency glazing services in ${location.name} during extended hours. For urgent repairs, please call us directly and we will do our best to assist.`,
    },
  ]

  const schemas = [
    generateLocationSchema(location),
    generateFAQSchema(locationFaqs),
    generateBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Areas', href: '/areas' },
      { name: location.name, href: `/areas/${location.slug}` },
    ]),
  ]

  return (
    <>
      <SchemaMarkup schemas={schemas} />
      <Breadcrumbs items={[
        { name: 'Areas', href: '/areas' },
        { name: location.name, href: `/areas/${location.slug}` },
      ]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2442] to-[#1a3a6b] text-white py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span className="text-orange-300 font-semibold">{location.name}, {location.county}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
                Glazing &amp; Glass Specialists in {location.name}
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {location.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-8 text-sm">
                <div className="bg-white/10 rounded-lg px-4 py-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span className="text-slate-200">Response: <strong className="text-white">{location.responseTime}</strong></span>
                </div>
                {location.emergencyAvailable && (
                  <div className="bg-white/10 rounded-lg px-4 py-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span className="text-slate-200"><strong className="text-white">24/7</strong> Emergency Available</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={formatPhoneForHref(BUSINESS.phone)}
                  className="flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS.phone}
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl transition-colors"
                >
                  Free Quote <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Info card */}
            <div className="bg-white rounded-2xl p-8 text-slate-900 shadow-2xl">
              <h2 className="text-xl font-bold text-[#0f2442] mb-5">Why {location.name} Homeowners Trust Us</h2>
              <ul className="space-y-3 mb-6">
                {[
                  `Fast response in ${location.name}: ${location.responseTime}`,
                  'Free, no-obligation written quote',
                  'Fixed price agreed before work starts',
                  'Building Regulations compliant installations',
                  'Local glazing specialists — London & Surrey',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors"
              >
                Get My Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <article className="prose-custom">
            <h2 className="text-3xl font-black text-[#0f2442] mb-6">
              Professional Glazing Services in {location.name}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              {location.description} Whether you need a single glass repair, a full window replacement,
              or an emergency call-out, our team of qualified glaziers is ready to help.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              We have been serving the {location.name} area for over {BUSINESS.yearsExperience} years,
              building a reputation for quality glazing, honest pricing, and genuine reliability.
              Our glaziers understand the types of properties in {location.name} — from
              Victorian sash windows to modern aluminium systems — and bring the right skills and materials
              for every job.
            </p>

            {location.landmarks.length > 0 && (
              <>
                <h3 className="text-2xl font-bold text-[#0f2442] mt-8 mb-4">
                  Local Knowledge in {location.name}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Our teams are familiar with the {location.name} area, including landmarks
                  such as {location.landmarks.join(', ')}. This local knowledge means we
                  understand the area&apos;s properties, access requirements, and the expectations
                  of {location.name} homeowners and businesses.
                </p>
              </>
            )}

            <h3 className="text-2xl font-bold text-[#0f2442] mt-8 mb-4">
              Our Most Popular Services in {location.name}
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              While we cover all types of maintenance and repair work, the most frequently
              requested services in {location.name} include:
            </p>
          </article>

          {/* Popular services */}
          <div className="grid sm:grid-cols-2 gap-4 my-8">
            {popularServiceData.map(service => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-xl p-4 hover:border-orange-200 hover:bg-orange-50 transition-all group"
              >
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#0f2442] group-hover:text-orange-600 transition-colors">{service.title}</h4>
                  <p className="text-sm text-slate-500">{service.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>

          <article className="prose-custom">
            <h3 className="text-2xl font-bold text-[#0f2442] mt-8 mb-4">
              Emergency Glazing Services in {location.name}
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              {location.emergencyAvailable
                ? `We offer genuine 24/7 emergency glazing services in ${location.name}. Whether it is a smashed window at midnight or storm damage on a bank holiday, our emergency glaziers will be with you within ${location.responseTime}.`
                : `We offer extended-hours emergency glazing in ${location.name}. For urgent repairs, please call us directly on ${BUSINESS.phone} and we will prioritise your call.`
              }
            </p>

            {nearbyLocations.length > 0 && (
              <>
                <h3 className="text-2xl font-bold text-[#0f2442] mt-8 mb-4">
                  Nearby Areas We Also Cover
                </h3>
                <div className="flex flex-wrap gap-2">
                  {nearbyLocations.slice(0, 8).map(nearby => (
                    <Link
                      key={nearby.slug}
                      href={`/areas/${nearby.slug}`}
                      className="bg-slate-50 border border-slate-200 hover:border-orange-300 hover:bg-orange-50 text-slate-600 hover:text-[#0f2442] text-sm font-medium px-3 py-1.5 rounded-lg transition-colors"
                    >
                      {nearby.name}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </article>
        </div>
      </section>


      <FAQSection faqs={locationFaqs} title={`Glazing ${location.name} – FAQ`} subtitle={`Common questions about our glazing services in ${location.name}.`} />
      <CTASection />
    </>
  )
}
