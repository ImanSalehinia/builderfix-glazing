import Link from 'next/link'
import { Home, Phone, ArrowRight } from 'lucide-react'
import { BUSINESS } from '@/data/business'
import { formatPhoneForHref } from '@/lib/utils'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50">
      <div className="container-custom max-w-2xl text-center py-20">
        <div className="text-9xl font-black text-slate-100 mb-4">404</div>
        <h1 className="text-4xl font-black text-[#0f2442] mb-4">
          Page Not Found
        </h1>
        <p className="text-slate-500 text-lg mb-8 leading-relaxed">
          The page you are looking for does not exist or may have moved.
          Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-[#0f2442] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#1a3a6b] transition-colors"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </Link>
          <a
            href={formatPhoneForHref(BUSINESS.phone)}
            className="flex items-center justify-center gap-2 bg-orange-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-orange-600 transition-colors"
          >
            <Phone className="w-5 h-5" />
            {BUSINESS.phone}
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {[
            { label: 'All Services', href: '/services' },
            { label: 'Areas We Cover', href: '/areas' },
            { label: 'Contact Us', href: '/contact' },
            { label: 'Our Blog', href: '/blog' },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium transition-colors"
            >
              {link.label}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
