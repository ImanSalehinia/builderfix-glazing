'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { BUSINESS } from '@/data/business'
import { formatPhoneForHref } from '@/lib/utils'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Double Glazing', href: '/services/double-glazing' },
      { label: 'Window Replacement', href: '/services/glass-replacement' },
      { label: 'Bi-fold Doors', href: '/services/bifold-doors' },
      { label: 'Composite Doors', href: '/services/composite-doors' },
      { label: 'Sealed Unit Replacement', href: '/services/sealed-unit-replacement' },
      { label: 'Walk-on Glass Floors', href: '/services/walk-on-glass-floors' },
      { label: 'Glass Balustrades', href: '/services/glass-balustrades' },
      { label: 'Emergency Glazing', href: '/services/emergency-glazing' },
      { label: 'View All Services →', href: '/services' },
    ],
  },
  {
    label: 'Areas',
    href: '/areas',
    children: [
      { label: 'Chelsea', href: '/areas/chelsea' },
      { label: 'Kensington', href: '/areas/kensington' },
      { label: 'Mayfair', href: '/areas/mayfair' },
      { label: 'Notting Hill', href: '/areas/notting-hill' },
      { label: 'Hampstead', href: '/areas/hampstead' },
      { label: 'Richmond', href: '/areas/richmond' },
      { label: 'Wimbledon', href: '/areas/wimbledon' },
      { label: 'Chiswick', href: '/areas/chiswick' },
      { label: 'View All Areas →', href: '/areas' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#0f2442] text-white text-sm py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="text-slate-300">Building Regs Compliant · Free Written Quotes</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-300">Emergency 24/7 Available</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-300">Mon–Fri: {BUSINESS.hours.weekdays}</span>
            <a href={formatPhoneForHref(BUSINESS.phone)} className="font-semibold text-orange-400 hover:text-orange-300 transition-colors">
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm border-b border-slate-100'}`}
      >
        <div className="container-custom flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img src="/images/logo-bf.svg" alt="BuilderFix Glazing" width={40} height={40} className="shrink-0" />
            <div className="hidden sm:block">
              <div className="font-black text-[#0f2442] text-lg leading-tight">{BUSINESS.name}</div>
              <div className="text-xs text-slate-500 leading-tight">Glazing & Glass Specialists</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map(item => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-0.5 px-3 py-2 text-sm font-medium text-slate-700 rounded-lg hover:bg-slate-50 hover:text-[#0f2442] transition-colors"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5 text-slate-400" />}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                    {item.children.map(child => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0f2442] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={formatPhoneForHref(BUSINESS.phone)}
              className="flex items-center gap-2 text-sm font-semibold text-[#0f2442] hover:text-orange-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white max-h-[80vh] overflow-y-auto">
            <div className="container-custom py-4 flex flex-col gap-1">
              <a
                href={formatPhoneForHref(BUSINESS.phone)}
                className="flex items-center gap-3 bg-[#0f2442] text-white rounded-xl px-4 py-3 font-semibold mb-2"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center bg-orange-500 text-white rounded-xl px-4 py-3 font-semibold mb-2"
                onClick={() => setMobileOpen(false)}
              >
                Get a Free Quote
              </Link>
              {NAV_ITEMS.map(item => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2.5 text-slate-700 font-medium hover:text-[#0f2442] hover:bg-slate-50 rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-3 border-l-2 border-slate-100 pl-3 mb-1">
                      {item.children.map(child => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 px-2 text-sm text-slate-500 hover:text-[#0f2442] transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  )
}
