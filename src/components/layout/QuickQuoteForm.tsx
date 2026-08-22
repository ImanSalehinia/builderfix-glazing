'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { sendGAEvent } from '@next/third-parties/google'

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
    ? ''
    : 'Please enter a valid email address'
}

function validatePhone(value: string) {
  const digits = value.replace(/\s|-/g, '')
  if (!/^\d+$/.test(digits)) return 'Digits only'
  if (digits.length !== 11) return 'Must be 11 digits (e.g. 07700 900000)'
  if (!/^0(1|2|3|7|8)/.test(digits)) return 'Invalid UK number'
  return ''
}

function validatePostcode(value: string) {
  return /^[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}$/i.test(value.trim())
    ? ''
    : 'Invalid postcode (e.g. SW19 1AA)'
}

export default function QuickQuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; phone?: string; postcode?: string }>({})

  if (submitted) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col items-center justify-center text-center min-h-[260px]">
        <CheckCircle className="w-12 h-12 text-green-400 mb-3" />
        <h3 className="text-white font-bold text-lg mb-2">Request Received!</h3>
        <p className="text-slate-400 text-sm">We'll call you back within 2 hours.</p>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    const form = e.currentTarget
    const phoneVal = (form.elements.namedItem('phone') as HTMLInputElement).value
    const emailVal = (form.elements.namedItem('email') as HTMLInputElement).value
    const postcodeVal = (form.elements.namedItem('postcode') as HTMLInputElement).value

    const phoneErr = validatePhone(phoneVal)
    const emailErr = validateEmail(emailVal)
    const postcodeErr = validatePostcode(postcodeVal)

    if (phoneErr || emailErr || postcodeErr) {
      setFieldErrors({ phone: phoneErr || undefined, email: emailErr || undefined, postcode: postcodeErr || undefined })
      return
    }
    setFieldErrors({})
    setLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: (form.elements.namedItem('name') as HTMLInputElement).value,
          phone: phoneVal,
          email: emailVal,
          postcode: postcodeVal,
          service: (form.elements.namedItem('service') as HTMLSelectElement).value || 'Not specified',
          urgency: 'standard',
          message: 'Quick quote request from footer form.',
        }),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
      sendGAEvent('event', 'generate_lead', {
        event_category: 'quote_form',
        event_label: (form.elements.namedItem('service') as HTMLSelectElement).value || 'not_specified',
      })
    } catch {
      setError('Something went wrong. Please call us directly.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (hasError?: string) =>
    `w-full bg-white/10 border rounded-lg px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 ${hasError ? 'border-red-400' : 'border-white/20'}`

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7">
      <h3 className="text-white font-bold text-lg mb-1">Quick Quote Request</h3>
      <p className="text-slate-400 text-sm mb-5">Fill in your details and we'll call you back.</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className={inputClass()}
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              required
              onBlur={e => setFieldErrors(prev => ({ ...prev, phone: validatePhone(e.target.value) || undefined }))}
              className={inputClass(fieldErrors.phone)}
            />
            {fieldErrors.phone && <p className="text-xs text-red-400 mt-1">{fieldErrors.phone}</p>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              onBlur={e => setFieldErrors(prev => ({ ...prev, email: validateEmail(e.target.value) || undefined }))}
              className={inputClass(fieldErrors.email)}
            />
            {fieldErrors.email && <p className="text-xs text-red-400 mt-1">{fieldErrors.email}</p>}
          </div>
          <div>
            <input
              type="text"
              name="postcode"
              placeholder="Postcode (e.g. SW19 1AA)"
              required
              onBlur={e => setFieldErrors(prev => ({ ...prev, postcode: validatePostcode(e.target.value) || undefined }))}
              className={inputClass(fieldErrors.postcode)}
            />
            {fieldErrors.postcode && <p className="text-xs text-red-400 mt-1">{fieldErrors.postcode}</p>}
          </div>
        </div>

        <select
          name="service"
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Select a service</option>
          <option>Double Glazing Installation</option>
          <option>Window Replacement</option>
          <option>Bi-fold Doors</option>
          <option>Composite Doors</option>
          <option>Walk-on Glass Floor</option>
          <option>Glass Balustrade / Staircase</option>
          <option>Sealed Unit Replacement</option>
          <option>Roof Lantern / Skylight</option>
          <option>Shower Enclosure</option>
          <option>Emergency Glass Repair</option>
          <option>Other</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 disabled:bg-orange-300 text-white font-bold py-3.5 rounded-xl transition-colors"
        >
          {loading ? <span className="animate-pulse">Sending...</span> : (
            <>Request Free Quote <ArrowRight className="w-4 h-4" /></>
          )}
        </button>

        {error && <p className="text-xs text-red-400 text-center">{error}</p>}
        <p className="text-xs text-slate-500 text-center">We respond within 2 hours · No obligation</p>
      </form>
    </div>
  )
}
