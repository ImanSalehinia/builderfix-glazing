export interface Service {
  slug: string
  title: string
  shortDescription: string
  description: string
  icon: string
  category: string
  keywords: string[]
  features: string[]
  faqs: FAQ[]
  relatedServices: string[]
  priceRange: string
  duration: string
  image: string
}

export interface Location {
  slug: string
  name: string
  county: string
  description: string
  landmarks: string[]
  postcodePrefixes: string[]
  nearbyAreas: string[]
  popularServices: string[]
  emergencyAvailable: boolean
  responseTime: string
  image: string
}

export interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  review: string
  service: string
  date: string
  avatar?: string
  verified: boolean
}

export interface FAQ {
  question: string
  answer: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  author: string
  publishedAt: string
  readingTime: number
  image: string
  featured: boolean
}

export interface ServiceCategory {
  name: string
  slug: string
  description: string
  icon: string
  services: string[]
}

export interface BreadcrumbItem {
  name: string
  href: string
}

export interface ContactFormData {
  name: string
  phone: string
  email: string
  postcode: string
  service: string
  preferredDate: string
  message: string
  urgency: string
}
