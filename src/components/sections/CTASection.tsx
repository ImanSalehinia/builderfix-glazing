import Link from 'next/link'
import { Phone, MessageCircle, ArrowRight } from 'lucide-react'
import { BUSINESS } from '@/data/business'
import { formatPhoneForHref, formatWhatsAppHref } from '@/lib/utils'

interface CTASectionProps {
  title?: string
  subtitle?: string
  variant?: 'primary' | 'light'
  whatsappMessage?: string
  contactHref?: string
}

export default function CTASection({
  title = "Ready to Get Started?",
  subtitle = "Call us now for a free, no-obligation quote. Same-day appointments available. Glazing specialists across London and Surrey.",
  variant = 'primary',
  whatsappMessage,
  contactHref = '/contact',
}: CTASectionProps) {
  if (variant === 'light') {
    return (
      <section className="section-padding bg-orange-50 border-y border-orange-100">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-[#0f2442] mb-4">{title}</h2>
          <p className="text-slate-600 text-lg mb-8">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={formatPhoneForHref(BUSINESS.phone)}
              className="flex items-center justify-center gap-2.5 bg-[#0f2442] text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#1a3a6b] transition-colors"
            >
              <Phone className="w-5 h-5" />
              {BUSINESS.phone}
            </a>
            <Link
              href={contactHref}
              className="flex items-center justify-center gap-2 border-2 border-[#0f2442] text-[#0f2442] font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#0f2442] hover:text-white transition-all"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding hero-gradient text-white" aria-labelledby="cta-heading">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="cta-heading" className="text-4xl font-black text-white mb-4">
            {title}
          </h2>
          <p className="text-slate-300 text-xl mb-10 leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={formatPhoneForHref(BUSINESS.phone)}
              className="flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-400 text-white font-bold text-xl px-10 py-5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-orange-500/30"
            >
              <Phone className="w-6 h-6" />
              {BUSINESS.phone}
            </a>
            <a
              href={formatWhatsAppHref(BUSINESS.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#25d366] hover:bg-[#22bf5b] text-white font-bold text-xl px-10 py-5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-green-500/30"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Us
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            {[
              'Free written quotes',
              'No hidden fees',
              'Same-day available',
              'No obligation',
              '24/7 emergency',
            ].map(item => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="text-green-400">✓</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
