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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.googleReviews.rating,
      reviewCount: BUSINESS.googleReviews.count,
      bestRating: 5,
      worstRating: 1,
    },
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
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
      latitude: '51.3604',
      longitude: '-0.1954',
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
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: '51.3604', longitude: '-0.1954' },
      geoRadius: '40000',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.googleReviews.rating,
      reviewCount: BUSINESS.googleReviews.count,
      bestRating: 5,
    },
    founder: { '@type': 'Person', name: BUSINESS.name },
    foundingDate: BUSINESS.founded.toString(),
  }
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
    },
    areaServed: 'London, Surrey',
    url: `${SITE_CONFIG.url}/services/${service.slug}`,
    serviceType: service.title,
    offers: {
      '@type': 'Offer',
      price: service.priceRange,
      priceCurrency: 'GBP',
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
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  }
}
