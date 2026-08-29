import type { Metadata } from 'next'
import Image from 'next/image'
import { BUSINESS, SITE_CONFIG } from '@/data/business'
import CTASection from '@/components/sections/CTASection'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Our Work Gallery | ${BUSINESS.name}`,
  description: `Browse our gallery of completed glazing and glass installation projects across London and Surrey. Real photos from real jobs — Velux, flat rooflights, uPVC windows and more.`,
  alternates: { canonical: `${SITE_CONFIG.url}/gallery` },
}

const GALLERY_ITEMS = [
  {
    src: '/images/job-velux-inside-sky.jpg',
    alt: 'Velux window installed in London home — bright blue sky view from inside',
    title: 'Velux Window Installation',
    location: 'West London',
    service: 'velux-windows',
    serviceLabel: 'Velux Windows',
    wide: true,
  },
  {
    src: '/images/job-flat-rooflights-rooftop.jpg',
    alt: 'Flat roof lights photographed from rooftop during installation',
    title: 'Flat Rooflights Installation',
    location: 'Brentford',
    service: 'flat-roof-lights',
    serviceLabel: 'Flat Rooflights',
  },
  {
    src: '/images/job-flat-rooflight-dome.jpg',
    alt: 'Dome flat rooflight with London skyline visible',
    title: 'Dome Flat Rooflight',
    location: 'Central London',
    service: 'flat-roof-lights',
    serviceLabel: 'Flat Rooflights',
  },
  {
    src: '/images/job-team-velux-rooftop.jpg',
    alt: 'BuilderFix glazier on rooftop installing Velux window',
    title: 'Velux Roof Installation',
    location: 'West London',
    service: 'velux-windows',
    serviceLabel: 'Velux Windows',
    wide: true,
  },
  {
    src: '/images/job-velux-loft-bedroom.jpg',
    alt: 'Velux window fitted in loft bedroom conversion',
    title: 'Velux — Loft Bedroom',
    location: 'Twickenham',
    service: 'velux-windows',
    serviceLabel: 'Velux Windows',
  },
  {
    src: '/images/job-flat-rooflight-aluminium.jpg',
    alt: 'Grey aluminium flat rooflight close-up after installation',
    title: 'Aluminium Flat Rooflight',
    location: 'Richmond',
    service: 'flat-roof-lights',
    serviceLabel: 'Flat Rooflights',
  },
  {
    src: '/images/job-flat-rooflight-install.jpg',
    alt: 'Flat rooflight during installation process on London property',
    title: 'Rooflight — During Install',
    location: 'Chiswick',
    service: 'flat-roof-lights',
    serviceLabel: 'Flat Rooflights',
  },
  {
    src: '/images/job-velux-ceiling-view.jpg',
    alt: 'Velux window fitted in corridor ceiling — natural light flooding hallway',
    title: 'Velux — Corridor Ceiling',
    location: 'Kew',
    service: 'velux-windows',
    serviceLabel: 'Velux Windows',
  },
  {
    src: '/images/job-upvc-windows-london.jpg',
    alt: 'New uPVC double glazed windows on London terraced house',
    title: 'uPVC Double Glazing',
    location: 'Brentford',
    service: 'upvc-windows',
    serviceLabel: 'uPVC Windows',
    wide: true,
  },
  {
    src: '/images/job-glass-roof-commercial.jpg',
    alt: 'Victorian glass roof on London commercial building',
    title: 'Commercial Glass Roof',
    location: 'Central London',
    service: 'conservatory',
    serviceLabel: 'Glass Roofs',
  },
]

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
            Every photo below is from a real job completed by our team across London and Surrey.
            Velux windows, flat rooflights, uPVC double glazing, and more.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.src}
                className={`relative group overflow-hidden rounded-2xl bg-slate-100 ${item.wide ? 'sm:col-span-2' : ''}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={item.wide ? '(max-width: 640px) 100vw, 66vw' : '(max-width: 640px) 100vw, 33vw'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2442]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="font-bold text-base leading-snug">{item.title}</p>
                  <p className="text-sm text-slate-300 mt-1">{item.location}</p>
                  <Link
                    href={`/services/${item.service}`}
                    className="inline-block mt-2 text-xs font-semibold bg-orange-500/90 hover:bg-orange-500 text-white px-3 py-1 rounded-full transition-colors"
                  >
                    {item.serviceLabel} →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-[#0f2442] mb-3">Want to See More?</h2>
            <p className="text-slate-600 mb-2 max-w-xl mx-auto">
              These are just a sample of our completed projects. We&apos;re happy to share photos
              of similar work to your project — just ask when you contact us for a quote.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        variant="light"
        title="Like What You See?"
        subtitle="Get a free, no-obligation quote for your project. Call us, WhatsApp us, or complete our online form."
      />
    </>
  )
}
