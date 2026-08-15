'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQ } from '@/types'
import { cn } from '@/lib/utils'

interface FAQSectionProps {
  faqs: FAQ[]
  title?: string
  subtitle?: string
}

export default function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our glazing and glass specialist services.",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section-padding bg-white" aria-labelledby="faq-heading">
      <div className="container-custom max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="badge-primary mb-4">FAQs</p>
          <h2 id="faq-heading" className="text-4xl font-black text-[#0f2442] mb-4">{title}</h2>
          <p className="text-slate-500 text-lg">{subtitle}</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-100 rounded-xl overflow-hidden hover:border-orange-200 transition-colors"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-[#0f2442] text-base">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-orange-500 shrink-0 transition-transform duration-200',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
