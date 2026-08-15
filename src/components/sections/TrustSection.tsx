import Image from 'next/image'
import { Shield, Clock, Award, Users, Zap, ThumbsUp, CheckCircle } from 'lucide-react'
import { BUSINESS } from '@/data/business'

const TRUST_POINTS = [
  {
    icon: Shield,
    title: 'Free Written Quote',
    description: 'We provide a full written quote before any work begins. No surprises, no pressure — you decide when you are ready.',
    colour: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Award,
    title: 'Building Regs Compliant',
    description: 'All window and door installations completed to current UK Building Regulations standards.',
    colour: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Glazing',
    description: 'Broken glass is a security emergency. Our glaziers respond within 2 hours, day or night.',
    colour: 'text-red-600',
    bg: 'bg-red-50',
  },
  {
    icon: ThumbsUp,
    title: 'No Hidden Costs',
    description: 'Transparent fixed-price quotes before any work begins. No surprises on your invoice.',
    colour: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: Users,
    title: 'Specialist Glaziers',
    description: 'Qualified, experienced glaziers specialising in structural glass, double glazing, and bespoke installations.',
    colour: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: Zap,
    title: 'Same-Day Availability',
    description: 'Most glass repairs and replacements can be completed same-day. We carry stock on every van.',
    colour: 'text-yellow-600',
    bg: 'bg-yellow-50',
  },
]

const STATS = [
  { value: 'Free', label: 'Written Quotes' },
  { value: '24/7', label: 'Emergency Cover' },
  { value: '2hr', label: 'Response Time' },
  { value: 'Same Day', label: 'Repairs Available' },
]

export default function TrustSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="trust-heading">
      <div className="container-custom">
        {/* Stats bar */}
        <div className="bg-[#0f2442] rounded-2xl p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-center">
          {STATS.map(stat => (
            <div key={stat.label}>
              <div className="text-4xl font-black text-orange-400 mb-1">{stat.value}</div>
              <div className="text-slate-300 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="badge-primary mb-4">Why Choose Us</p>
          <h2 id="trust-heading" className="text-4xl font-black text-[#0f2442] mb-4">
            London's Glazing Specialists You Can Trust
          </h2>
          <p className="text-slate-500 text-lg">
            When it comes to glass, precision and expertise matter. Here is why London homeowners,
            landlords, and businesses choose BuilderFix Glazing — and come back every time.
          </p>
        </div>

        {/* Trust grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {TRUST_POINTS.map(point => (
            <div key={point.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-slate-200 transition-colors">
              <div className={`w-12 h-12 ${point.bg} ${point.colour} rounded-xl flex items-center justify-center mb-4`}>
                <point.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#0f2442] text-lg mb-2">{point.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Glazier photo strip */}
        <div className="relative rounded-2xl overflow-hidden h-80 mb-14">
          <Image
            src="https://images.unsplash.com/photo-1741947837536-9a8779380a2d?auto=format&fit=crop&w=1920&q=80"
            alt="Professional glazier installing window"
            fill
            className="object-cover object-[center_75%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2442]/80 to-transparent flex items-center">
            <div className="px-10">
              <p className="text-white text-2xl font-black mb-1">Trusted by 2,000+ London homeowners</p>
              <p className="text-slate-300 text-base">Free written quote — no obligation to proceed</p>
            </div>
          </div>
          {/* Brand badge — simulates logo on worker uniform */}
          <div className="absolute bottom-4 right-6 flex items-center gap-2 bg-[#0f2442]/90 backdrop-blur-sm border border-orange-400/40 rounded-xl px-4 py-2.5 shadow-xl">
            <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center shrink-0">
              <span className="text-white font-black text-xs">LF</span>
            </div>
            <div className="leading-tight">
              <p className="text-white font-black text-sm">{BUSINESS.name}</p>
              <p className="text-orange-400 text-xs font-medium">Glazing Specialist</p>
            </div>
          </div>
        </div>

        {/* Promise strip */}
        <div className="border-t border-slate-100 pt-10">
          <div className="flex flex-wrap justify-center gap-6">
            {['Free written quote', 'Fixed price agreed upfront', 'No hidden charges', 'No obligation to proceed'].map(item => (
              <div key={item} className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-5 py-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-semibold text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
