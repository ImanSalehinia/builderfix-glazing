import { BUSINESS, SITE_CONFIG } from '@/data/business'
import { Service } from '@/types'
import { Location } from '@/types'

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BUSINESS.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    description: SITE_CONFIG.description,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.county,
      postalCode: BUSINESS.address.postcode,
      addressCountry: 'GB',
    },
    sameAs: Object.values(BUSINESS.social).filter(Boolean),
  }
}

export function generateLocalBusinessSchema() {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    name: BUSINESS.name,
    image: `${SITE_CONFIG.url}/images/og-image.jpg`,
    url: SITE_CONFIG.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.county,
      postalCode: BUSINESS.address.postcode,
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '51.4048',
      longitude: '-0.3209',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '09:00',
        closes: '17:00',
      },
    ],
    priceRange: '££',
    currenciesAccepted: 'GBP',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    areaServed: BUSINESS.primaryAreas.map(area => ({ '@type': 'City', name: area })),
    knowsAbout: ['Double Glazing', 'Glass Installation', 'Window Replacement', 'Bi-fold Doors', 'Emergency Glazing', 'Glass Balustrades', 'Walk-on Glass Floors'],
  }

  // Only include aggregateRating if we have a real Google Business URL
  if (BUSINESS.googleReviews.url) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.googleReviews.rating,
      bestRating: 5,
    }
  }

  return schema
}

export function generateServiceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      url: SITE_CONFIG.url,
    },
    areaServed: ['London', 'Surrey', 'Greater London'],
    url: `${SITE_CONFIG.url}/services/${service.slug}`,
    serviceType: service.title,
    offers: {
      '@type': 'Offer',
      description: service.priceRange,
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
  }
}

export function generateLocationSchema(location: Location) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${BUSINESS.name} – ${location.name}`,
    description: location.description,
    url: `${SITE_CONFIG.url}/areas/${location.slug}`,
    telephone: BUSINESS.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.name,
      addressRegion: location.county,
      addressCountry: 'GB',
    },
    areaServed: {
      '@type': 'City',
      name: location.name,
    },
  }
}

export function generateBreadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.href}`,
    })),
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BUSINESS.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    inLanguage: 'en-GB',
    publisher: {
      '@type': 'Organization',
      name: BUSINESS.name,
      url: SITE_CONFIG.url,
    },
  }
}
