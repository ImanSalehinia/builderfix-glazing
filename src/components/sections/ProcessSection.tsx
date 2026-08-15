import { Phone, ClipboardCheck, Wrench, Star } from 'lucide-react'

const STEPS = [
  {
    step: '01',
    icon: Phone,
    title: 'Call or Request a Quote',
    description: 'Phone, WhatsApp, or complete our online form. Tell us what glazing work you need and we\'ll arrange a free survey or provide an instant quote.',
    colour: 'bg-blue-50 text-blue-600',
  },
  {
    step: '02',
    icon: ClipboardCheck,
    title: 'Free Survey & Fixed Quote',
    description: 'For larger projects, one of our glazing specialists visits to measure and assess. You receive a written fixed-price quote — no surprises.',
    colour: 'bg-orange-50 text-orange-600',
  },
  {
    step: '03',
    icon: Wrench,
    title: 'Expert Installation',
    description: 'Our glaziers arrive on time with all glass and materials. Work is completed precisely and cleanly, with all waste removed from site.',
    colour: 'bg-green-50 text-green-600',
  },
  {
    step: '04',
    icon: Star,
    title: 'Guaranteed & Certified',
    description: 'You receive your FENSA certificate, guarantee documentation, and a follow-up to make sure you\'re completely satisfied.',
    colour: 'bg-purple-50 text-purple-600',
  },
]

export default function ProcessSection() {
  return (
    <section className="section-padding bg-slate-50" aria-labelledby="process-heading">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="badge-primary mb-4">How It Works</p>
          <h2 id="process-heading" className="text-4xl font-black text-[#0f2442] mb-4">
            From First Call to Perfect Glass — 4 Simple Steps
          </h2>
          <p className="text-slate-500 text-lg">
            Whether it is an emergency repair or a full bi-fold door installation, our process
            is straightforward, transparent, and designed around your convenience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%-1px)] w-full h-0.5 bg-slate-200 z-0" />
              )}
              <div className="relative z-10 bg-white rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:shadow-md transition-all">
                <div className="text-4xl font-black text-slate-100 mb-4">{step.step}</div>
                <div className={`w-12 h-12 ${step.colour} rounded-xl flex items-center justify-center mb-4`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#0f2442] text-lg mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
