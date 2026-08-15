import type { Metadata } from 'next'
import { BUSINESS, SITE_CONFIG } from '@/data/business'
import CTASection from '@/components/sections/CTASection'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: `Our Work Gallery | ${BUSINESS.name}`,
  description: `Browse our gallery of completed glazing and glass installation projects across London and Surrey. Before & after photos from real customer jobs.`,
  alternates: { canonical: `${SITE_CONFIG.url}/gallery` },
}

const GALLERY_CATEGORIES = [
  'All', 'Painting & Decorating', 'Kitchens', 'Bathrooms', 'Flooring',
  'Carpentry', 'Outdoor', 'Emergency Repairs',
]

const GALLERY_ITEMS = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  category: GALLERY_CATEGORIES[Math.floor(Math.random() * (GALLERY_CATEGORIES.length - 1)) + 1],
  title: [
    'Bathroom Renovation', 'Kitchen Refurbishment', 'Exterior Painting', 'Hardwood Flooring',
    'Bespoke Shelving', 'Plastered Walls', 'Decking Installation', 'Interior Decoration',
    'Tiled Bathroom', 'Laminate Flooring', 'Fence Repair', 'Ceiling Painting',
    'Door Replacement', 'TV Wall Mount', 'Loft Boarding', 'Pressure Washed Driveway',
    'Kitchen Tiles', 'Electrical Upgrade', 'Feature Wall', 'Garden Maintenance',
    'En-Suite Renovation', 'Alcove Shelving', 'Skirting & Architrave', 'Roof Repair',
  ][i],
  location: ['Sutton', 'Wimbledon', 'Kingston', 'Clapham', 'Richmond', 'Croydon', 'Battersea', 'Putney'][i % 8],
  bgClass: [
    'bg-slate-200', 'bg-blue-100', 'bg-orange-100', 'bg-green-100', 'bg-purple-100',
    'bg-yellow-100', 'bg-red-100', 'bg-teal-100',
  ][i % 8],
}))

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Gallery', href: '/gallery' }]} />

      <section className="bg-slate-50 py-16">
        <div className="container-custom max-w-3xl text-center mx-auto">
          <p className="badge-primary mb-4">Our Work</p>
          <h1 className="text-5xl font-black text-[#0f2442] mb-5">
            Project Gallery
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Browse a selection of completed projects from across London and Surrey.
            Every image shows real work on real properties carried out by our professionals.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Gallery grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_ITEMS.map(item => (
              <div
                key={item.id}
                className={`${item.bgClass} rounded-xl overflow-hidden aspect-square relative group cursor-pointer`}
              >
                {/* Placeholder image area */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4 opacity-60">
                    <div className="text-4xl mb-2">📸</div>
                    <p className="text-xs font-medium text-slate-600">{item.title}</p>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#0f2442]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <p className="font-bold text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-slate-300">{item.location}</p>
                    <p className="text-xs text-orange-300 mt-1">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-[#0f2442] mb-3">Want to See More?</h2>
            <p className="text-slate-600 mb-4">
              Follow us on social media for regular project updates, before & after photos,
              and behind-the-scenes content. Or contact us to discuss your project —
              we&apos;re happy to share similar completed work on request.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { label: 'Instagram', href: '[INSTAGRAM_URL]' },
                { label: 'Facebook', href: '[FACEBOOK_URL]' },
              ].map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0f2442] text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-[#1a3a6b] transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="light" title="Like What You See?" subtitle="Get a free, no-obligation quote for your project. Call us, WhatsApp us, or complete our online form." />
    </>
  )
}
