import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Users, Star, ArrowRight } from 'lucide-react'
import { BUSINESS, SITE_CONFIG } from '@/data/business'
import CTASection from '@/components/sections/CTASection'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: `About Us | ${BUSINESS.name}`,
  description: `Learn about ${BUSINESS.name} — London's trusted glazing and glass specialists since ${BUSINESS.founded}. Over ${BUSINESS.yearsExperience} years of experience, ${BUSINESS.projectsCompleted.toLocaleString()}+ jobs completed.`,
  alternates: { canonical: `${SITE_CONFIG.url}/about` },
}

const TEAM_VALUES = [
  { icon: CheckCircle, title: 'Honesty', description: 'We quote accurately, work transparently, and never add charges you haven\'t agreed to.' },
  { icon: Award, title: 'Quality', description: 'Every job is completed to the same high standard, whether it\'s a small repair or a full renovation.' },
  { icon: Users, title: 'Reliability', description: 'We show up on time, communicate clearly, and always follow through on our commitments.' },
  { icon: Star, title: 'Pride', description: 'We take genuine pride in our work and the relationships we build with our customers.' },
]

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'About Us', href: '/about' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2442] to-[#1a3a6b] text-white py-20">
        <div className="container-custom max-w-3xl text-center mx-auto">
          <p className="badge-primary mb-5" style={{ backgroundColor: 'rgba(249,115,22,0.15)', color: '#fed7aa', borderColor: 'rgba(249,115,22,0.3)' }}>
            Our Story
          </p>
          <h1 className="text-5xl font-black text-white mb-6">
            About {BUSINESS.name}
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            We are London&apos;s trusted glazing and glass specialists.
            For over {BUSINESS.yearsExperience} years, we have been helping homeowners,
            landlords, and businesses across the capital with all their glazing needs.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="badge-primary mb-5">Who We Are</p>
              <h2 className="text-4xl font-black text-[#0f2442] mb-6">
                Built on Quality, Sustained by Trust
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  {BUSINESS.name} was founded in {BUSINESS.founded} with a simple but powerful
                  vision: to provide the kind of professional, honest, and high-quality glazing
                  service that London homeowners truly deserve.
                </p>
                <p>
                  Over the years, we have grown from a small team of trusted glaziers into a
                  well-established specialist serving thousands of customers across Greater
                  London and Surrey. But despite our growth, the principles that guided us from the
                  beginning have never changed.
                </p>
                <p>
                  Every job starts with a free written quote — no pressure, no obligation.
                  We invest in training, tools, and processes so that every customer receives
                  the same consistently excellent standard of service, whether it is a single
                  pane replacement or a full structural glass installation.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: `${BUSINESS.yearsExperience}+`, label: 'Years in Business', colour: 'bg-blue-50 text-blue-700' },
                { value: `${(BUSINESS.projectsCompleted / 1000).toFixed(0)}k+`, label: 'Jobs Completed', colour: 'bg-orange-50 text-orange-700' },
                { value: `${BUSINESS.googleReviews.rating}★`, label: 'Google Rating', colour: 'bg-yellow-50 text-yellow-700' },
                { value: `${BUSINESS.googleReviews.count}+`, label: 'Verified Reviews', colour: 'bg-green-50 text-green-700' },
              ].map(stat => (
                <div key={stat.label} className={`${stat.colour} rounded-2xl p-6 text-center`}>
                  <div className="text-5xl font-black mb-2">{stat.value}</div>
                  <div className="font-semibold text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="badge-primary mb-4">Our Values</p>
            <h2 className="text-4xl font-black text-[#0f2442] mb-4">The Principles We Work By</h2>
            <p className="text-slate-500 text-lg">
              These are not just words — they are the commitments we make to every customer
              on every job we undertake.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_VALUES.map(value => (
              <div key={value.title} className="bg-white rounded-2xl p-6 border border-slate-100 text-center">
                <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-[#0f2442] text-lg mb-3">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
