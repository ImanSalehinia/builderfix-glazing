'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Phone, MessageCircle, Send, CheckCircle } from 'lucide-react'
import { sendGAEvent } from '@next/third-parties/google'
import { BUSINESS } from '@/data/business'
import { formatPhoneForHref, formatWhatsAppHref, buildWhatsAppMessage, buildContactMessage } from '@/lib/utils'
import { SERVICES } from '@/data/services'

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
    ? ''
    : 'Please enter a valid email address'
}

function validatePhone(value: string) {
  const digits = value.replace(/\s|-/g, '')
  if (!/^\d+$/.test(digits)) return 'Phone number must contain only digits'
  if (digits.length !== 11) return 'UK phone numbers are 11 digits (e.g. 07700 900000)'
  if (!/^0(1|2|3|7|8)/.test(digits)) return 'Please enter a valid UK phone number'
  return ''
}

function validatePostcode(value: string) {
  return /^[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}$/i.test(value.trim())
    ? ''
    : 'Please enter a valid UK postcode (e.g. SW19 1AA)'
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [message, setMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; phone?: string; postcode?: string }>({})
  const searchParams = useSearchParams()

  useEffect(() => {
    const serviceSlug = searchParams.get('service')
    if (serviceSlug) {
      const found = SERVICES.find(s => s.slug === serviceSlug)
      if (found) {
        setSelectedService(found.slug)
        setMessage(buildContactMessage(found.title))
      }
    }
  }, [searchParams])

  // WhatsApp message changes as service is selected
  const currentService = SERVICES.find(s => s.slug === selectedService)
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    currentService ? buildWhatsAppMessage(currentService.title) : undefined
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    const form = e.currentTarget
    const emailVal = (form.elements.namedItem('email') as HTMLInputElement).value
    const phoneVal = (form.elements.namedItem('phone') as HTMLInputElement).value
    const postcodeVal = (form.elements.namedItem('postcode') as HTMLInputElement).value
    const emailErr = validateEmail(emailVal)
    const phoneErr = validatePhone(phoneVal)
    const postcodeErr = validatePostcode(postcodeVal)
    if (emailErr || phoneErr || postcodeErr) {
      setFieldErrors({ email: emailErr || undefined, phone: phoneErr || undefined, postcode: postcodeErr || undefined })
      return
    }
    setFieldErrors({})
    setLoading(true)

    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      postcode: (form.elements.namedItem('postcode') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      urgency: (form.elements.namedItem('urgency') as HTMLSelectElement).value,
      preferredDate: (form.elements.namedItem('preferredDate') as HTMLInputElement).value,
      message,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
      sendGAEvent('event', 'generate_lead', {
        event_category: 'contact_form',
        event_label: data.service || 'not_specified',
      })
    } catch {
      setError('Something went wrong. Please call us directly or try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-black text-[#0f2442] mb-2">Thank You!</h3>
        <p className="text-slate-600 mb-4">
          We have received your enquiry and will be in touch within 2 hours during business hours.
          For urgent matters, please call us directly.
        </p>
        <a
          href={formatPhoneForHref(BUSINESS.phone)}
          className="inline-flex items-center gap-2 bg-[#0f2442] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#1a3a6b] transition-colors"
        >
          <Phone className="w-4 h-4" />
          {BUSINESS.phone}
        </a>
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-3 gap-10">
      {/* Form */}
      <div className="lg:col-span-2">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
          <h2 className="text-2xl font-black text-[#0f2442] mb-2">Get Your Free Quote</h2>
          <p className="text-slate-500 text-sm mb-6">Complete the form below and we&apos;ll get back to you within 2 hours.</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Smith"
                className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="07700 000000"
                onBlur={e => setFieldErrors(prev => ({ ...prev, phone: validatePhone(e.target.value) || undefined }))}
                className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow ${fieldErrors.phone ? 'border-red-400' : 'border-slate-200'}`}
              />
              {fieldErrors.phone && <p className="text-xs text-red-500 mt-1">{fieldErrors.phone}</p>}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@example.com"
                onBlur={e => setFieldErrors(prev => ({ ...prev, email: validateEmail(e.target.value) || undefined }))}
                className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow ${fieldErrors.email ? 'border-red-400' : 'border-slate-200'}`}
              />
              {fieldErrors.email && <p className="text-xs text-red-500 mt-1">{fieldErrors.email}</p>}
            </div>
            <div>
              <label htmlFor="postcode" className="block text-sm font-semibold text-slate-700 mb-1.5">Postcode *</label>
              <input
                type="text"
                id="postcode"
                name="postcode"
                required
                placeholder="SW19 1AA"
                onBlur={e => setFieldErrors(prev => ({ ...prev, postcode: validatePostcode(e.target.value) || undefined }))}
                className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow ${fieldErrors.postcode ? 'border-red-400' : 'border-slate-200'}`}
              />
              {fieldErrors.postcode && <p className="text-xs text-red-500 mt-1">{fieldErrors.postcode}</p>}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-1.5">Service Required *</label>
              <select
                id="service"
                name="service"
                required
                value={selectedService}
                onChange={e => {
                  setSelectedService(e.target.value)
                  const found = SERVICES.find(s => s.slug === e.target.value)
                  if (found) setMessage(buildContactMessage(found.title))
                  else setMessage('')
                }}
                className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
              >
                <option value="">Select a service</option>
                {SERVICES.map(s => (
                  <option key={s.slug} value={s.slug}>{s.title}</option>
                ))}
                <option value="other">Other / Not listed</option>
              </select>
            </div>
            <div>
              <label htmlFor="urgency" className="block text-sm font-semibold text-slate-700 mb-1.5">How Urgent?</label>
              <select
                id="urgency"
                name="urgency"
                className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
              >
                <option value="standard">Standard – anytime this week</option>
                <option value="soon">As soon as possible</option>
                <option value="emergency">Emergency – today if possible</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="preferred-date" className="block text-sm font-semibold text-slate-700 mb-1.5">Preferred Date</label>
            <input
              type="date"
              id="preferred-date"
              name="preferredDate"
              min={new Date().toISOString().split('T')[0]}
              className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
              Your Message
              {selectedService && <span className="text-orange-500 font-normal ml-2 text-xs">✓ Pre-filled — just add your details</span>}
            </label>
            <textarea
              id="message"
              name="message"
              rows={7}
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Select a service above and your message will be pre-filled automatically."
              className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow resize-none font-mono"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors"
          >
            {loading ? (
              <span className="animate-pulse">Sending your enquiry...</span>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send My Free Quote Request
              </>
            )}
          </button>
          {error && (
            <p className="text-sm text-red-600 text-center mt-3 font-medium">{error}</p>
          )}
          <p className="text-xs text-slate-400 text-center mt-3">
            We respond within 2 hours · No obligation · Your details are never shared
          </p>
        </form>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Direct contact */}
        <div className="bg-[#0f2442] rounded-2xl p-6 text-white">
          <h3 className="font-bold text-lg mb-4">Prefer to Talk?</h3>
          <p className="text-slate-300 text-sm mb-5">
            Speak directly to our team. We&apos;re available 7 days a week.
          </p>
          <a
            href={formatPhoneForHref(BUSINESS.phone)}
            className="flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white font-bold px-5 py-3.5 rounded-xl transition-colors mb-3"
          >
            <Phone className="w-5 h-5" />
            {BUSINESS.phone}
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25d366] hover:bg-[#22bf5b] text-white font-bold px-5 py-3.5 rounded-xl transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            {currentService ? `WhatsApp — ${currentService.title}` : 'WhatsApp Us'}
          </a>
        </div>

        {/* Hours */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
          <h3 className="font-bold text-[#0f2442] mb-4">Opening Hours</h3>
          <div className="space-y-2 text-sm">
            {[
              { day: 'Monday – Friday', hours: BUSINESS.hours.weekdays },
              { day: 'Saturday', hours: BUSINESS.hours.saturday },
              { day: 'Sunday', hours: BUSINESS.hours.sunday },
              { day: 'Emergency', hours: '24/7 available' },
            ].map(item => (
              <div key={item.day} className="flex justify-between">
                <span className="text-slate-600">{item.day}</span>
                <span className={`font-semibold ${item.day === 'Emergency' ? 'text-red-600' : 'text-[#0f2442]'}`}>
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Promise */}
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
          <h3 className="font-bold text-[#0f2442] mb-3">Our Promise</h3>
          <ul className="space-y-2 text-sm">
            {[
              'Response within 2 hours',
              'Transparent fixed quotes',
              'No hidden charges',
              'Free written quote provided',
              'No obligation to proceed',
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-slate-600">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
