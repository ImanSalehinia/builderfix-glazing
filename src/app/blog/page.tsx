import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import { BLOG_IDEAS } from '@/data/faqs'
import { BUSINESS, SITE_CONFIG } from '@/data/business'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: `Glazing Guides & Glass Advice for London Homeowners | ${BUSINESS.name} Blog`,
  description: `Expert guides, cost breakdowns, and glazing advice for London homeowners and landlords. Double glazing costs, window types, bi-fold doors, emergency glass repair and more.`,
  alternates: { canonical: `${SITE_CONFIG.url}/blog` },
}

const CATEGORIES = ['All', 'Cost Guides', 'Guides', 'Inspiration', 'Commercial']

const CATEGORY_IMAGES: Record<string, string> = {
  'Cost Guides': 'https://images.unsplash.com/photo-1527352774566-e4916e36c645?auto=format&fit=crop&w=600&q=70',
  'Guides':      'https://images.unsplash.com/photo-1564182842834-681b7be6de4b?auto=format&fit=crop&w=600&q=70',
  'Inspiration': 'https://images.unsplash.com/photo-1684831652490-77ba946774c0?auto=format&fit=crop&w=600&q=70',
  'Commercial':  'https://images.unsplash.com/photo-1574854986069-a8653af0944e?auto=format&fit=crop&w=600&q=70',
  'Landlords':   'https://images.unsplash.com/photo-jJnZg7vBfMs?auto=format&fit=crop&w=600&q=70',
  default:       'https://images.unsplash.com/photo-1609214776366-38e385f6e265?auto=format&fit=crop&w=600&q=70',
}

const SLUG_IMAGES: Record<string, string> = {
  'bifold-doors-cost-uk':            'https://images.unsplash.com/photo-XQvF5WkM6Ro?auto=format&fit=crop&w=600&q=70',
  'double-glazing-cost-london':      'https://images.unsplash.com/photo-4gRNmhGzYZE?auto=format&fit=crop&w=600&q=70',
  'roof-lantern-cost':               'https://images.unsplash.com/photo-1674752792204-5ac7f336b98d?auto=format&fit=crop&w=600&q=70',
  'composite-door-cost':             'https://images.unsplash.com/photo-1617307074423-6344f18d357f?auto=format&fit=crop&w=600&q=70',
  'misted-double-glazing-fix':       'https://images.unsplash.com/photo-SW8sKEBvbts?auto=format&fit=crop&w=600&q=70',
  'frameless-shower-enclosure-guide':'https://images.unsplash.com/photo-1771239048293-72abf673adb2?auto=format&fit=crop&w=600&q=70',
  'glass-balustrade-guide':          'https://images.unsplash.com/photo-1500213448252-2636420cec9a?auto=format&fit=crop&w=600&q=70',
  'shop-front-glazing-guide':        'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=600&q=70',
  'emergency-glazing-what-to-do':    'https://images.unsplash.com/photo-NeK5dKVhnig?auto=format&fit=crop&w=600&q=70',
  'walk-on-glass-floors':            'https://images.unsplash.com/photo-n2r6EVOE6ls?auto=format&fit=crop&w=600&q=70',
  'glazing-brentford':               'https://images.unsplash.com/photo-pYGnj4jrMDU?auto=format&fit=crop&w=600&q=70',
  'glazing-richmond':                'https://images.unsplash.com/photo-Z2Jb1-ORRp8?auto=format&fit=crop&w=600&q=70',
  'glazing-ealing':                  'https://images.unsplash.com/photo-DrhYt-kAe9s?auto=format&fit=crop&w=600&q=70',
  'glazing-hampstead':               'https://images.unsplash.com/photo-Nc17eN7pXtI?auto=format&fit=crop&w=600&q=70',
  'glazing-chiswick':                'https://images.unsplash.com/photo-WWB_n0uPgdQ?auto=format&fit=crop&w=600&q=70',
  'glazing-wimbledon':               'https://images.unsplash.com/photo-W9m2HnXKuHA?auto=format&fit=crop&w=600&q=70',
}

function getBlogImage(slug: string, category: string): string {
  return SLUG_IMAGES[slug] ?? CATEGORY_IMAGES[category] ?? CATEGORY_IMAGES.default
}

const READ_TIMES: Record<string, string> = {
  'Cost Guides': '6 min read',
  'Guides': '8 min read',
  'Inspiration': '4 min read',
  'Commercial': '7 min read',
  default: '5 min read',
}

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
            Glazing &amp; Glass Guides
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Practical, honest glazing advice from London&apos;s glass specialists.
            Cost guides, how-to articles, and product comparisons to help you make the right decision.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Featured article */}
          <Link href={`/blog/${featured.slug}`} className="block rounded-2xl mb-12 group hover:shadow-2xl transition-shadow overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <Image
                  src={getBlogImage(featured.slug, featured.category)}
                  alt={featured.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="bg-gradient-to-br from-[#0f2442] to-[#1a3a6b] text-white p-10 flex flex-col justify-center">
                <span className="badge-primary mb-4 inline-block text-xs" style={{ backgroundColor: 'rgba(249,115,22,0.2)', color: '#fed7aa', borderColor: 'rgba(249,115,22,0.3)' }}>
                  Featured Guide
                </span>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 group-hover:text-orange-300 transition-colors leading-tight">
                  {featured.title}
                </h2>
                <div className="flex items-center gap-4 text-slate-400 text-sm mb-6">
                  <span className="flex items-center gap-1.5"><Tag className="w-3.5 h-3.5" />{featured.category}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{READ_TIMES[featured.category] ?? READ_TIMES.default}</span>
                </div>
                <span className="flex items-center gap-2 text-orange-400 font-semibold">
                  Read guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
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
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-md transition-all group"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={getBlogImage(article.slug, article.category)}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-orange-600 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-400">{READ_TIMES[article.category] ?? READ_TIMES.default}</span>
                  </div>
                  <h2 className="font-bold text-[#0f2442] text-lg mb-3 leading-snug group-hover:text-orange-600 transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  <span className="text-orange-500 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="light" />
    </>
  )
}
