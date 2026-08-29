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
  // ── Real job photos (our own photography — unique to each article) ────
  'double-glazing-cost-london':           '/images/job-upvc-windows-london.jpg',
  'velux-window-guide':                   '/images/job-velux-inside-sky.jpg',
  'skylight-installation-guide':          '/images/job-velux-loft-bedroom.jpg',
  'flat-roof-light-guide':                '/images/job-flat-rooflights-rooftop.jpg',
  'roof-lantern-buying-guide':            '/images/job-flat-rooflight-dome.jpg',
  'roof-lantern-cost':                    '/images/job-flat-rooflight-aluminium.jpg',
  'roof-lantern-extension-london':        '/images/job-flat-rooflight-install.jpg',
  'window-replacement-process':           '/images/job-team-velux-rooftop.jpg',
  'conservatory-roof-replacement-guide':  '/images/job-glass-roof-commercial.jpg',
  'glazing-hampstead':                    '/images/job-velux-ceiling-view.jpg',
  // ── Windows & double glazing ──────────────────────────────────────────
  'upvc-vs-aluminium-windows':            'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=600&q=70',
  'signs-need-new-windows':               'https://images.unsplash.com/photo-1496092607007-ca127e0b6a10?auto=format&fit=crop&w=600&q=70',
  'energy-efficient-windows-guide':       'https://images.unsplash.com/photo-1465577512280-1c2d41a79862?auto=format&fit=crop&w=600&q=70',
  'how-long-double-glazing-lasts':        'https://images.unsplash.com/photo-1610589672541-569e18b299c5?auto=format&fit=crop&w=600&q=70',
  'window-energy-ratings':                'https://images.unsplash.com/photo-1531383339897-f369f6422e40?auto=format&fit=crop&w=600&q=70',
  'aluminium-windows-cost-london':        'https://images.unsplash.com/photo-1630368177606-471ad5e501c4?auto=format&fit=crop&w=600&q=70',
  'toughened-vs-laminated-glass':         'https://images.unsplash.com/photo-1572739275114-ec3764ba1477?auto=format&fit=crop&w=600&q=70',
  'triple-glazing-worth-it':              'https://images.unsplash.com/photo-1641035856054-55ee7bf8b02a?auto=format&fit=crop&w=600&q=70',
  'triple-glazing-london-2025':           'https://images.unsplash.com/photo-1532974607400-fefe903e13f0?auto=format&fit=crop&w=600&q=70',
  'misted-double-glazing-fix':            'https://images.unsplash.com/photo-1514994792087-578fe80d0ff9?auto=format&fit=crop&w=600&q=70',
  'window-condensation-causes':           'https://images.unsplash.com/photo-1634842570200-8b2936c7d86d?auto=format&fit=crop&w=600&q=70',
  'new-build-windows':                    'https://images.unsplash.com/photo-1480419657797-45303e551e19?auto=format&fit=crop&w=600&q=70',
  'window-noise-reduction':               'https://images.unsplash.com/photo-1686326395532-abeaa79e7462?auto=format&fit=crop&w=600&q=70',
  'acoustic-secondary-glazing-london':    'https://images.unsplash.com/photo-1629795892844-3bd09c92b5fa?auto=format&fit=crop&w=600&q=70',
  'secondary-glazing-cost':               'https://images.unsplash.com/photo-1690576770610-1d8ddceffcce?auto=format&fit=crop&w=600&q=70',
  'secondary-glazing-noise-reduction':    'https://images.unsplash.com/photo-1591618296647-3824fca4468d?auto=format&fit=crop&w=600&q=70',
  'frameless-bifold-doors-london':        'https://images.unsplash.com/photo-1527270997612-014349a46e9c?auto=format&fit=crop&w=600&q=70',
  'landlord-window-obligations':          'https://images.unsplash.com/photo-1662561797374-04350672c032?auto=format&fit=crop&w=600&q=70',
  // ── Bi-fold & patio doors ─────────────────────────────────────────────
  'bifold-doors-cost-uk':                 'https://images.unsplash.com/photo-1661895061354-bea49f08792f?auto=format&fit=crop&w=600&q=70',
  'bifold-vs-patio-doors':                'https://images.unsplash.com/photo-1565261949232-3fcc78206c0c?auto=format&fit=crop&w=600&q=70',
  'bifold-door-ideas':                    'https://images.unsplash.com/photo-1566767937961-5fc54d085819?auto=format&fit=crop&w=600&q=70',
  'aluminium-bifold-doors-maintenance':   'https://images.unsplash.com/photo-1560598477-be1f9e036249?auto=format&fit=crop&w=600&q=70',
  'bifold-doors-kensington-chelsea':      'https://images.unsplash.com/photo-1758998202918-d921125a700f?auto=format&fit=crop&w=600&q=70',
  // ── Composite & front doors ───────────────────────────────────────────
  'composite-door-cost':                  'https://images.unsplash.com/photo-1559871753-75a00941f6b2?auto=format&fit=crop&w=600&q=70',
  // ── Sash & Victorian / heritage ───────────────────────────────────────
  'sash-window-restoration-guide':        'https://images.unsplash.com/photo-1692630223684-ccf2c0d71887?auto=format&fit=crop&w=600&q=70',
  'sash-window-draught-proofing':         'https://images.unsplash.com/photo-1560339855-f8eb88b24b57?auto=format&fit=crop&w=600&q=70',
  'london-victorian-windows':             'https://images.unsplash.com/photo-1635106768840-ae433112fc5a?auto=format&fit=crop&w=600&q=70',
  'conservation-area-windows':            'https://images.unsplash.com/photo-1736068988157-187446479442?auto=format&fit=crop&w=600&q=70',
  'sash-windows-mayfair-belgravia':       'https://images.unsplash.com/photo-1741213308572-247449832d66?auto=format&fit=crop&w=600&q=70',
  'glazing-bars-guide':                   'https://images.unsplash.com/photo-1723515212954-8301111fd82a?auto=format&fit=crop&w=600&q=70',
  // ── Security, locks & planning ────────────────────────────────────────
  'window-fensa-certificate':             'https://images.unsplash.com/photo-1761518471391-f7c8cb8f00b0?auto=format&fit=crop&w=600&q=70',
  'planning-permission-windows':          'https://images.unsplash.com/photo-1667984975516-10c576370e8f?auto=format&fit=crop&w=600&q=70',
  'window-draught-proofing':              'https://images.unsplash.com/photo-1555687438-3c1534a2cbcf?auto=format&fit=crop&w=600&q=70',
  'window-security-guide':                'https://images.unsplash.com/photo-1700129039132-33e930d00a0f?auto=format&fit=crop&w=600&q=70',
  'anti-snap-locks-guide':                'https://images.unsplash.com/photo-1605515376258-e19dee486e79?auto=format&fit=crop&w=600&q=70',
  'window-handles-locks-upgrade':         'https://images.unsplash.com/photo-1736069014068-1247d98ae3fb?auto=format&fit=crop&w=600&q=70',
  'break-in-glass-repair':                'https://images.unsplash.com/photo-1657946258219-2b01a5c06d5a?auto=format&fit=crop&w=600&q=70',
  // ── Emergency glazing ─────────────────────────────────────────────────
  'emergency-glazing-what-to-do':         'https://images.unsplash.com/photo-1715982946282-6fecef8546b7?auto=format&fit=crop&w=600&q=70',
  'emergency-glazier-london-24-7':        'https://images.unsplash.com/photo-1715535849211-6aa42b89d7b1?auto=format&fit=crop&w=600&q=70',
  // ── Shower, bathroom & kitchen glass ─────────────────────────────────
  'frameless-shower-enclosure-guide':     'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?auto=format&fit=crop&w=600&q=70',
  'best-glass-bathroom':                  'https://images.unsplash.com/photo-1639751898256-e80ef909ea8d?auto=format&fit=crop&w=600&q=70',
  'obscure-glass-bathroom':               'https://images.unsplash.com/photo-1704428381342-ea9df943619e?auto=format&fit=crop&w=600&q=70',
  'glass-splashback-guide':               'https://images.unsplash.com/photo-1609280069904-ab36feb3f20c?auto=format&fit=crop&w=600&q=70',
  'glass-splashback-colours':             'https://images.unsplash.com/photo-1650894622070-1c4cc26d7492?auto=format&fit=crop&w=600&q=70',
  // ── Balustrade, staircase & walk-on glass ─────────────────────────────
  'glass-balustrade-guide':               'https://images.unsplash.com/photo-1598016894037-d316c9763027?auto=format&fit=crop&w=600&q=70',
  'glass-staircase-ideas':                'https://images.unsplash.com/photo-1542320796-afe459710874?auto=format&fit=crop&w=600&q=70',
  'glass-balustrade-cost-london':         'https://images.unsplash.com/photo-1500213448252-2636420cec9a?auto=format&fit=crop&w=600&q=70',
  'walk-on-glass-floor-cost-london':      'https://images.unsplash.com/photo-1662624915212-28c69aff68f3?auto=format&fit=crop&w=600&q=70',
  // ── Commercial glazing ────────────────────────────────────────────────
  'shop-front-glazing-guide':             'https://images.unsplash.com/photo-1647927397990-1a6a0f1819ce?auto=format&fit=crop&w=600&q=70',
  'office-glass-partitions-guide':        'https://images.unsplash.com/photo-1605513524006-063ed6ed31e7?auto=format&fit=crop&w=600&q=70',
  'automatic-doors-guide':                'https://images.unsplash.com/photo-1785899777879-9c8769881692?auto=format&fit=crop&w=600&q=70',
  // ── Luxury & inspiration ──────────────────────────────────────────────
  'luxury-glazing-london-townhouses':     'https://images.unsplash.com/photo-1772209254309-dec2ae65153b?auto=format&fit=crop&w=600&q=70',
  // ── Local area pages ──────────────────────────────────────────────────
  'glazing-kensington-chelsea':           'https://images.unsplash.com/photo-1684831652490-77ba946774c0?auto=format&fit=crop&w=600&q=70',
  'glazing-brentford':                    'https://images.unsplash.com/photo-1559585612-f2221bef763a?auto=format&fit=crop&w=600&q=70',
  'glazing-richmond':                     'https://images.unsplash.com/photo-1616928639003-ca0a77310da6?auto=format&fit=crop&w=600&q=70',
  'glazing-ealing':                       'https://images.unsplash.com/photo-1684366454532-874b9118195c?auto=format&fit=crop&w=600&q=70',
  'glazing-chiswick':                     'https://images.unsplash.com/photo-1665111909425-c9c7a0edde5a?auto=format&fit=crop&w=600&q=70',
  'glazing-wimbledon':                    'https://images.unsplash.com/photo-1665924173016-c1247ad2ada6?auto=format&fit=crop&w=600&q=70',
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
