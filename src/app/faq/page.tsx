import type { Metadata } from 'next'
import { GENERAL_FAQS } from '@/data/faqs'
import { BUSINESS, SITE_CONFIG } from '@/data/business'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: `FAQ | Frequently Asked Questions | ${BUSINESS.name}`,
  description: `Answers to the most common questions about ${BUSINESS.name}'s glazing and glass specialist services in London and Surrey.`,
  alternates: { canonical: `${SITE_CONFIG.url}/faq` },
}

export default function FAQPage() {
  const schemas = [
    generateFAQSchema(GENERAL_FAQS),
    generateBreadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'FAQ', href: '/faq' }]),
  ]

  return (
    <>
      <SchemaMarkup schemas={schemas} />
      <Breadcrumbs items={[{ name: 'FAQ', href: '/faq' }]} />

      <section className="bg-slate-50 py-16">
        <div className="container-custom max-w-2xl text-center mx-auto">
          <p className="badge-primary mb-4">FAQ</p>
          <h1 className="text-5xl font-black text-[#0f2442] mb-5">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Everything you need to know about our services, pricing, and how we work.
            Can&apos;t find your answer? Call us on{' '}
            <a href={`tel:${BUSINESS.phone}`} className="text-orange-600 font-semibold">{BUSINESS.phone}</a>.
          </p>
        </div>
      </section>

      <FAQSection
        faqs={GENERAL_FAQS}
        title="Your Questions Answered"
        subtitle="Honest, clear answers to every common question about our glazing and glass specialist services."
      />

      <CTASection variant="light" title="Still Have Questions?" subtitle="Our friendly team is happy to talk through any queries you might have. No hard sell, just honest advice." />
    </>
  )
}
