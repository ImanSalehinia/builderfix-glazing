'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { BUSINESS } from '@/data/business'
import { formatPhoneForHref, formatWhatsAppHref } from '@/lib/utils'

const GENERAL_WHATSAPP_MSG = `Hi BuilderFix Glazing 👋

I found your website and I'd like a free quote.

My details:
• Name:
• Postcode:
• Service needed:
• Property type: (house / flat / commercial)

Please get back to me. Thank you!`

export default function StickyButtons() {
  return (
    <>
      <a
        href={formatPhoneForHref(BUSINESS.phone)}
        className="sticky-phone"
        aria-label="Call us now"
        title="Call us now"
      >
        <Phone className="w-5 h-5" />
      </a>
      <a
        href={formatWhatsAppHref(BUSINESS.whatsapp, GENERAL_WHATSAPP_MSG)}
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-whatsapp"
        aria-label="Message us on WhatsApp"
        title="WhatsApp us"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </>
  )
}
