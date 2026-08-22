import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck, Star, ExternalLink } from 'lucide-react'
import { BUSINESS } from '@/data/business'
import { formatPhoneForHref, formatWhatsAppHref } from '@/lib/utils'
import { SERVICES } from '@/data/services'
import QuickQuoteForm from './QuickQuoteForm'

const FOOTER_SERVICES = [
  'double-glazing', 'bifold-doors', 'walk-on-glass-floors', 'composite-doors',
  'sealed-unit-replacement', 'roof-lanterns', 'glass-balustrades', 'shower-enclosures',
  'emergency-glazing', 'shop-fronts',
]

const FOOTER_AREAS = [
  { name: 'Brentford', slug: 'brentford' },
  { name: 'Richmond', slug: 'richmond' },
  { name: 'Chelsea', slug: 'chelsea' },
  { name: 'Kensington', slug: 'kensington' },
  { name: 'Chiswick', slug: 'chiswick' },
  { name: 'Wimbledon', slug: 'wimbledon' },
  { name: 'Notting Hill', slug: 'notting-hill' },
  { name: 'Hampstead', slug: 'hampstead' },
  { name: 'Fulham', slug: 'fulham' },
  { name: 'Kingston', slug: 'kingston-upon-thames' },
]

const footerServices = SERVICES.filter(s => FOOTER_SERVICES.includes(s.slug))

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0f2442] text-slate-300">

      {/* Quote + Contact strip */}
      <div className="border-b border-slate-700">
        <div className="container-custom py-14">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left: contact info */}
            <div>
              <p className="text-orange-400 text-sm font-semibold uppercase tracking-wider mb-3">Get In Touch</p>
              <h2 className="text-3xl font-black text-white mb-6 leading-tight">
                Free quote — we respond<br />within 2 hours
              </h2>
              <div className="space-y-4 mb-8">
                <a
                  href={formatPhoneForHref(BUSINESS.phone)}
                  className="flex items-center gap-4 bg-orange-500 hover:bg-orange-400 text-white font-bold text-xl px-7 py-4 rounded-xl transition-all hover:scale-105 w-full sm:w-auto"
                >
                  <Phone className="w-6 h-6 shrink-0" />
                  {BUSINESS.phone}
                </a>
                <a
                  href={formatWhatsAppHref(BUSINESS.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#25d366] hover:bg-[#22bf5b] text-white font-bold text-xl px-7 py-4 rounded-xl transition-all hover:scale-105 w-full sm:w-auto"
                >
                  <MessageCircle className="w-6 h-6 shrink-0" />
                  WhatsApp Us
                </a>
              </div>
              {BUSINESS.googleReviews.url && (
                <a
                  href={BUSINESS.googleReviews.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-5 py-3 mb-6 transition-colors w-full sm:w-auto"
                >
                  <div className="flex">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{BUSINESS.googleReviews.rating} / 5 on Google</div>
                    <div className="text-slate-400 text-xs">{BUSINESS.googleReviews.count}+ verified reviews</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 ml-auto" />
                </a>
              )}
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                  Mon–Fri: {BUSINESS.hours.weekdays} · Sat: {BUSINESS.hours.saturday}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                  <span className="text-orange-400 font-medium">Emergency: 24/7 available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                  <a href={`mailto:${BUSINESS.email}`} className="hover:text-white transition-colors">
                    {BUSINESS.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Right: quick quote form */}
            <QuickQuoteForm />

          </div>
        </div>
      </div>

      {/* Main footer links */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo-bf.svg" alt="BuilderFix Glazing" width={40} height={40} />
              <div className="font-black text-white text-lg leading-tight">{BUSINESS.name}</div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              London&apos;s specialist glazing and glass installation company. Building Regulations compliant,
              serving London and Surrey since {BUSINESS.founded}.
            </p>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
              <span className="text-slate-400">{BUSINESS.address.city}, {BUSINESS.address.county}</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Our Services</h3>
            <ul className="space-y-2">
              {footerServices.map(service => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-slate-400 text-sm hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-orange-400 text-sm font-medium hover:text-orange-300 transition-colors">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Areas We Cover</h3>
            <ul className="space-y-2">
              {FOOTER_AREAS.map(area => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}`} className="text-slate-400 text-sm hover:text-white transition-colors">
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas" className="text-orange-400 text-sm font-medium hover:text-orange-300 transition-colors">
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Links + Trust */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2 mb-6">
              {[
                { label: 'Gallery', href: '/gallery' },
                { label: 'Customer Reviews', href: '/reviews' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms & Conditions', href: '/terms-conditions' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="border-t border-slate-700 pt-4">
              <p className="text-white text-xs font-semibold mb-3 uppercase tracking-wider">Our Promise</p>
              <div className="space-y-2">
                {['Free written quote', 'No hidden charges', 'Fixed price agreed upfront'].map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-green-400 shrink-0" />
                    <span className="text-slate-400 text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© {currentYear} {BUSINESS.name}. All rights reserved. Registered in England & Wales.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <Link href="/terms-conditions" className="hover:text-slate-300 transition-colors">Terms</Link>
            <Link href="/cookie-policy" className="hover:text-slate-300 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>

    </footer>
  )
}
