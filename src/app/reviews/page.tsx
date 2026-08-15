import type { Metadata } from 'next'
import { Star, ExternalLink } from 'lucide-react'
import { BUSINESS, SITE_CONFIG } from '@/data/business'
import CTASection from '@/components/sections/CTASection'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: `Customer Reviews | ${BUSINESS.name}`,
  description: `${BUSINESS.name} — ${BUSINESS.googleReviews.rating} star rated glazing specialists in London. Read our reviews on Google.`,
  alternates: { canonical: `${SITE_CONFIG.url}/reviews` },
}

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS.name,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: BUSINESS.googleReviews.rating,
    reviewCount: BUSINESS.googleReviews.count,
    bestRating: 5,
    worstRating: 1,
  },
}

export default function ReviewsPage() {
  return (
    <>
      <SchemaMarkup schemas={[reviewSchema, generateBreadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'Reviews', href: '/reviews' }])]} />
      <Breadcrumbs items={[{ name: 'Customer Reviews', href: '/reviews' }]} />

      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-2xl text-center mx-auto">
          <p className="badge-success mb-4">Verified Reviews</p>
          <h1 className="text-5xl font-black text-[#0f2442] mb-5">
            What Our Customers Say
          </h1>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="flex">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-8 h-8 fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="text-5xl font-black text-[#0f2442]">{BUSINESS.googleReviews.rating}</span>
          </div>
          <p className="text-slate-500 text-lg mb-8">
            Based on <strong>{BUSINESS.googleReviews.count}+</strong> verified customer reviews on Google
          </p>
          {BUSINESS.googleReviews.url ? (
            <a
              href={BUSINESS.googleReviews.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-orange-300 text-slate-700 font-semibold px-8 py-4 rounded-xl transition-colors shadow-sm"
            >
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              Read Our Google Reviews
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-500 font-semibold px-8 py-4 rounded-xl">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              Google Reviews page coming soon
            </div>
          )}
          <p className="text-slate-400 text-sm mt-6">
            Our Google Business profile is being set up. Reviews will be linked here shortly.
          </p>
        </div>
      </section>

      <CTASection variant="light" />
    </>
  )
}
