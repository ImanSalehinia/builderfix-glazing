import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Tag, ArrowLeft, CheckCircle, Phone } from 'lucide-react'
import { BLOG_IDEAS } from '@/data/faqs'
import { BUSINESS, SITE_CONFIG } from '@/data/business'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import CTASection from '@/components/sections/CTASection'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { formatPhoneForHref } from '@/lib/utils'
import { notFound } from 'next/navigation'

interface Params {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_IDEAS.map(b => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const article = BLOG_IDEAS.find(b => b.slug === slug)
  if (!article) return {}

  return {
    title: `${article.title} | ${BUSINESS.name} Blog`,
    description: `${article.title}. Expert advice from London's trusted glazing and glass specialists. Read our guide now.`,
    alternates: { canonical: `${SITE_CONFIG.url}/blog/${slug}` },
    openGraph: { title: article.title, type: 'article' },
  }
}

function generateArticleContent(title: string, category: string): string {
  return `This is a placeholder for the full article content for "${title}". In production, this would be replaced with a full ${800 + Math.floor(Math.random() * 700)}-word article written by our expert team covering all aspects of ${title.toLowerCase()}.`
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params
  const article = BLOG_IDEAS.find(b => b.slug === slug)
  if (!article) notFound()

  const relatedArticles = BLOG_IDEAS.filter(b => b.category === article.category && b.slug !== slug).slice(0, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    author: { '@type': 'Organization', name: BUSINESS.name },
    publisher: { '@type': 'Organization', name: BUSINESS.name },
    datePublished: '2024-11-01',
    dateModified: '2024-11-01',
    url: `${SITE_CONFIG.url}/blog/${slug}`,
  }

  const schemas = [
    articleSchema,
    generateBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Blog', href: '/blog' },
      { name: article.title, href: `/blog/${slug}` },
    ]),
  ]

  return (
    <>
      <SchemaMarkup schemas={schemas} />
      <Breadcrumbs items={[
        { name: 'Blog', href: '/blog' },
        { name: article.title, href: `/blog/${slug}` },
      ]} />

      <div className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article */}
            <article className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-orange-600 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    7 min read
                  </span>
                </div>
                <h1 className="text-4xl font-black text-[#0f2442] leading-tight mb-4">
                  {article.title}
                </h1>
                <p className="text-slate-500">
                  By {BUSINESS.name} · Last updated November 2024
                </p>
              </div>

              {/* Placeholder image */}
              <div className="bg-slate-100 rounded-2xl aspect-[16/9] flex items-center justify-center mb-8">
                <span className="text-6xl">📰</span>
              </div>

              {/* Article content placeholder */}
              <div className="prose-custom">
                <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
                  Whether you are a homeowner, landlord, or business owner in London,
                  understanding {article.title.toLowerCase()} is essential for making
                  informed property decisions. In this guide, our experts break down everything
                  you need to know.
                </p>

                <h2>Key Points Covered in This Guide</h2>
                <ul className="space-y-2 mb-6">
                  {[
                    'Everything you need to know before getting started',
                    'Typical costs and what affects pricing in London',
                    'How to choose a reliable professional',
                    'Common mistakes to avoid',
                    'When to DIY vs call a professional',
                  ].map(point => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600">{point}</span>
                    </li>
                  ))}
                </ul>

                <h2>Introduction</h2>
                <p>
                  {generateArticleContent(article.title, article.category)} Our team of
                  experienced London tradespeople has put together this comprehensive guide
                  to help you navigate the process with confidence.
                </p>

                <h2>What Does This Typically Cost in London?</h2>
                <p>
                  Costs in London vary significantly depending on the scope of work, materials
                  required, and access. As a general guide, most homeowners in Greater London and
                  Surrey can expect to pay competitive rates for quality workmanship. Always obtain
                  at least two or three written quotes before proceeding.
                </p>
                <p>
                  At {BUSINESS.name}, we provide free, no-obligation written quotes for all work.
                  Our prices are transparent and competitive, and we never add hidden charges.
                </p>

                <h2>Choosing the Right Professional</h2>
                <p>
                  When selecting a tradesperson for this type of work, always verify:
                </p>
                <ul>
                  <li>They carry appropriate public liability insurance</li>
                  <li>They are registered with a recognised trade body</li>
                  <li>They can provide references or verifiable reviews</li>
                  <li>They provide a written quote before starting work</li>
                  <li>They offer a workmanship guarantee</li>
                </ul>

                <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 mt-8">
                  <h3 className="font-bold text-[#0f2442] mb-2">Need Professional Help?</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {BUSINESS.name} provides expert services across London and Surrey.
                    Call us for a free, no-obligation quote.
                  </p>
                  <a
                    href={formatPhoneForHref(BUSINESS.phone)}
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <Link href="/blog" className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Author */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-[#0f2442] mb-3">Written by Experts</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  This guide was written by the professional team at {BUSINESS.name}, with over{' '}
                  {BUSINESS.yearsExperience} years of experience serving London and Surrey homeowners.
                </p>
              </div>

              {/* CTA card */}
              <div className="bg-[#0f2442] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-3">Get a Free Quote</h3>
                <p className="text-slate-300 text-sm mb-5">
                  Ready to get the job done? Our professionals are available across London and Surrey.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 rounded-xl transition-colors text-sm mb-3"
                >
                  Request a Quote
                </Link>
                <a
                  href={formatPhoneForHref(BUSINESS.phone)}
                  className="flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white py-2.5 rounded-xl text-sm font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {BUSINESS.phone}
                </a>
              </div>

              {/* Related articles */}
              {relatedArticles.length > 0 && (
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="font-bold text-[#0f2442] mb-4">Related Articles</h3>
                  <div className="space-y-3">
                    {relatedArticles.map(related => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="block text-sm text-slate-600 hover:text-orange-600 transition-colors border-b border-slate-100 pb-3 last:border-0 last:pb-0"
                      >
                        {related.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Category tag */}
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-slate-500">Filed in: </span>
                <span className="text-sm font-semibold text-orange-600">{article.category}</span>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <CTASection />
    </>
  )
}
