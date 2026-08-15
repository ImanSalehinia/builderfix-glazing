import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length).trim() + '...'
}

export function generateStars(rating: number): string {
  return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating))
}

export function formatPhoneForHref(phone: string): string {
  return 'tel:' + phone.replace(/\s+/g, '')
}

export function formatWhatsAppHref(phone: string, message?: string): string {
  const number = phone.replace(/[\s+]/g, '')
  const encodedMessage = message ? encodeURIComponent(message) : encodeURIComponent('Hello, I\'d like to get a free quote for your glazing services.')
  return `https://wa.me/${number}?text=${encodedMessage}`
}

export function buildWhatsAppMessage(serviceTitle: string): string {
  return `Hi BuilderFix Glazing 👋

I'd like a free quote for: *${serviceTitle}*

My details:
• Name:
• Postcode:
• Property type: (house / flat / commercial)
• Extra info:

Please get back to me at your earliest convenience. Thank you!`
}

export function buildContactMessage(serviceTitle: string): string {
  return `Hi, I'd like a free quote for ${serviceTitle}.

About my property:
• Postcode:
• Property type: (e.g. house / flat / commercial)
• Additional details:

Thank you!`
}
