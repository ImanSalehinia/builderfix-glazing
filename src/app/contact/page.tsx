import type { Metadata } from 'next'
import { Suspense } from 'react'
import ContactForm from '@/components/sections/ContactForm'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { BUSINESS, SITE_CONFIG } from '@/data/business'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: `Contact Us | Free Quote | ${BUSINESS.name}`,
  description: `Contact ${BUSINESS.name} for a free, no-obligation quote. Call ${BUSINESS.phone}, WhatsApp us, or complete our online form. We respond within 2 hours.`,
  alternates: { canonical: `${SITE_CONFIG.url}/contact` },
}

export default function ContactPage() {
  const schemas = [
    generateBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Contact', href: '/contact' },
    ]),
  ]

  return (
    <>
      <SchemaMarkup schemas={schemas} />
      <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />

      <section className="bg-slate-50 py-14">
        <div className="container-custom max-w-2xl text-center mx-auto">
          <p className="badge-primary mb-4">Get In Touch</p>
          <h1 className="text-5xl font-black text-[#0f2442] mb-5">
            Get Your Free Quote
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Complete the form below, call us directly, or send us a WhatsApp message.
            We respond within 2 hours and all quotes are completely free with no obligation.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <Suspense fallback={<div className="h-96 animate-pulse bg-slate-100 rounded-2xl" />}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </>
  )
}
