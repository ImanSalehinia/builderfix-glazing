import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import { BLOG_IDEAS } from '@/data/faqs'
import { BUSINESS, SITE_CONFIG } from '@/data/business'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: `Blog | Home Improvement & Property Maintenance Guides | ${BUSINESS.name}`,
  description: `Expert guides, cost breakdowns, and tips for London homeowners and landlords. Read our blog for advice on property maintenance, home improvement, and finding the right tradesperson.`,
  alternates: { canonical: `${SITE_CONFIG.url}/blog` },
}

const CATEGORIES = ['All', 'Cost Guides', 'Guides', 'Seasonal', 'Inspiration', 'Landlords']

export default function BlogPage() {
  const featured = BLOG_IDEAS[0]
  const articles = BLOG_IDEAS.slice(1)

  return (
    <>
      <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }]} />

      <section className="bg-slate-50 py-14">
        <div className="container-custom max-w-2xl text-center mx-auto">
          <p className="badge-primary mb-4">Expert Advice</p>
          <h1 className="text-5xl font-black text-[#0f2442] mb-5">
            Home Improvement &amp; Property Maintenance Guides
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Practical, honest advice from London&apos;s property maintenance professionals.
            Cost guides, how-to articles, seasonal checklists, and landlord resources.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Featured article */}
          <Link href={`/blog/${featured.slug}`} className="block bg-gradient-to-br from-[#0f2442] to-[#1a3a6b] text-white rounded-2xl p-10 mb-12 group hover:shadow-2xl transition-shadow">
            <span className="badge-primary mb-4 inline-block" style={{ backgroundColor: 'rgba(249,115,22,0.2)', color: '#fed7aa', borderColor: 'rgba(249,115,22,0.3)' }}>
              Featured Article
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 group-hover:text-orange-300 transition-colors">
              {featured.title}
            </h2>
            <div className="flex items-center gap-4 text-slate-400 text-sm mb-4">
              <span className="flex items-center gap-1.5"><Tag className="w-3.5 h-3.5" />{featured.category}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />8 min read</span>
            </div>
            <span className="flex items-center gap-2 text-orange-400 font-semibold">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  cat === 'All'
                    ? 'bg-[#0f2442] text-white border-[#0f2442]'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-orange-300 hover:text-[#0f2442]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Article grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="bg-white border border-slate-100 rounded-2xl p-6 hover:border-orange-200 hover:shadow-md transition-all group"
              >
                {/* Placeholder image */}
                <div className="bg-slate-100 rounded-xl aspect-[16/9] mb-4 flex items-center justify-center">
                  <span className="text-4xl">📰</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-orange-600 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-400">5 min read</span>
                </div>
                <h2 className="font-bold text-[#0f2442] text-lg mb-3 leading-snug group-hover:text-orange-600 transition-colors">
                  {article.title}
                </h2>
                <span className="text-orange-500 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="light" />
    </>
  )
}
