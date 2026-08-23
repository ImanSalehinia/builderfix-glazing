import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/data/testimonials'
import { formatDate } from '@/lib/utils'
import { Testimonial } from '@/types'
import Link from 'next/link'

interface TestimonialsSectionProps {
  limit?: number
  showViewAll?: boolean
  title?: string
}

export default function TestimonialsSection({
  limit = 6,
  showViewAll = true,
  title = "What Our Customers Say",
}: TestimonialsSectionProps) {
  const displayed = TESTIMONIALS.slice(0, limit)

  if (displayed.length === 0) return null

  return (
    <section className="section-padding bg-slate-50" aria-labelledby="reviews-heading">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="badge-success mb-4">Verified Reviews</p>
          <h2 id="reviews-heading" className="text-4xl font-black text-[#0f2442] mb-4">
            {title}
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map(s => (
                <Star key={s} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-black text-[#0f2442]">4.9</span>
            <span className="text-slate-500">on Google</span>
          </div>
          <p className="text-slate-500 text-lg">
            Real reviews from real customers across London and Surrey. Every review is verified
            and comes from a completed job.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayed.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {showViewAll && (
          <div className="text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 border-2 border-[#0f2442] text-[#0f2442] hover:bg-[#0f2442] hover:text-white font-bold px-8 py-4 rounded-xl transition-all"
            >
              Read All Reviews
              <Star className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        {testimonial.verified && (
          <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">
            Verified
          </span>
        )}
      </div>

      {/* Quote icon */}
      <Quote className="w-8 h-8 text-orange-200 mb-3" />

      {/* Review text */}
      <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4 italic">
        &ldquo;{testimonial.review}&rdquo;
      </p>

      {/* Footer */}
      <div className="border-t border-slate-50 pt-4 flex items-center justify-between">
        <div>
          <p className="font-bold text-[#0f2442] text-sm">{testimonial.name}</p>
          <p className="text-xs text-slate-400">{testimonial.location}</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-medium text-orange-600">{testimonial.service}</p>
          <p className="text-xs text-slate-400">{formatDate(testimonial.date)}</p>
        </div>
      </div>
    </div>
  )
}
