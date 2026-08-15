import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageCircle, CheckCircle, Star } from 'lucide-react'
import { BUSINESS } from '@/data/business'
import { formatPhoneForHref, formatWhatsAppHref } from '@/lib/utils'

interface HeroSectionProps {
  title?: string
  subtitle?: string
}

export default function HeroSection({
  title,
  subtitle = "Walk-on glass floors · Bi-fold doors · Double glazing · Emergency repairs",
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden text-white min-h-[88vh] flex items-center" aria-labelledby="hero-heading">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1609214776366-38e385f6e265?auto=format&fit=crop&w=1920&q=80"
        alt="Structural glass floor installation by BuilderFix Glazing"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a30]/75 via-[#0f2442]/65 to-[#0f2442]/90" />

      <div className="relative z-10 container-custom py-24 lg:py-32 w-full">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
            <Star className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
            London&apos;s Trusted Glazing Specialists
          </div>

          {/* Heading */}
          {title ? (
            <h1 id="hero-heading" className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] mb-6 tracking-tight">
              {title}
            </h1>
          ) : (
            <h1 id="hero-heading" className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] mb-6 tracking-tight">
              London&apos;s Specialist<br />
              <span className="text-orange-400">Glazing &amp; Glass</span><br />
              Experts
            </h1>
          )}

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-3 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <p className="text-base text-slate-400 mb-10">
            Building Regs compliant &nbsp;·&nbsp; Free written quotes
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={formatPhoneForHref(BUSINESS.phone)}
              className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-400 text-white font-bold text-lg px-10 py-4 rounded-xl transition-all hover:scale-105 shadow-xl shadow-orange-500/30"
            >
              <Phone className="w-5 h-5" />
              {BUSINESS.phone}
            </a>
            <a
              href={formatWhatsAppHref(BUSINESS.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25d366] hover:bg-[#22bf5b] text-white font-bold text-lg px-10 py-4 rounded-xl transition-all hover:scale-105 shadow-xl shadow-green-500/30"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold text-lg px-10 py-4 rounded-xl transition-all"
            >
              Free Quote →
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              'Building Regs Compliant',
              'Free Written Quote',
              'Same-Day Repairs',
              '24/7 Emergency',
            ].map(item => (
              <div key={item} className="flex items-center gap-1.5 text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                {item}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
