import type { Metadata } from 'next'
import { BUSINESS, SITE_CONFIG } from '@/data/business'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: `Terms & Conditions | ${BUSINESS.name}`,
  description: `Terms and Conditions for ${BUSINESS.name}'s glazing and glass specialist services.`,
  alternates: { canonical: `${SITE_CONFIG.url}/terms-conditions` },
  robots: { index: false, follow: true },
}

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Terms & Conditions', href: '/terms-conditions' }]} />
      <div className="section-padding">
        <div className="container-custom max-w-3xl">
          <h1 className="text-4xl font-black text-[#0f2442] mb-3">Terms &amp; Conditions</h1>
          <p className="text-slate-400 text-sm mb-10">Last updated: November 2024</p>

          <div className="prose-custom space-y-8">
            <section>
              <h2>1. Introduction</h2>
              <p>
                These Terms and Conditions govern the services provided by {BUSINESS.name}
                (&quot;the Company&quot;, &quot;we&quot;, &quot;us&quot;) to our clients (&quot;you&quot;). By engaging our services,
                you agree to these terms in full.
              </p>
            </section>

            <section>
              <h2>2. Quotes and Pricing</h2>
              <p>
                All quotes are provided in writing and are valid for 30 days unless otherwise stated.
                Fixed-price quotes will not change unless the scope of work materially changes.
                Hourly-rate jobs are charged for time on site. Any additional materials required
                will be agreed with you before purchase.
              </p>
            </section>

            <section>
              <h2>3. Booking and Cancellation</h2>
              <p>
                We request at least 24 hours&apos; notice for cancellations or rescheduling. Cancellations
                with less than 24 hours&apos; notice may incur a cancellation fee equivalent to one hour
                of the booked professional&apos;s time. Emergency bookings are non-cancellable once a
                professional is deployed.
              </p>
            </section>

            <section>
              <h2>4. Payment Terms</h2>
              <p>
                For jobs under £500, payment is due on completion. For larger projects, we may
                request a deposit of up to 25% with the balance due on completion. We accept
                bank transfer, credit/debit card, and cash.
              </p>
            </section>

            <section>
              <h2>5. Workmanship Guarantee</h2>
              <p>
                All workmanship is guaranteed for a minimum of 12 months from the date of completion.
                This guarantee covers defects in our work but does not cover damage caused by third
                parties, general wear and tear, or misuse. Materials are subject to the manufacturer&apos;s warranty.
              </p>
            </section>

            <section>
              <h2>6. Insurance</h2>
              <p>
                We carry public liability insurance up to £5 million. A copy of our insurance
                certificate is available on request. This insurance covers damage or injury
                caused by our professionals during the course of their work.
              </p>
            </section>

            <section>
              <h2>7. Limitation of Liability</h2>
              <p>
                Our total liability to you for any claim shall not exceed the value of the contract
                for the work in question. We are not liable for indirect losses, loss of earnings,
                or consequential damages.
              </p>
            </section>

            <section>
              <h2>8. Governing Law</h2>
              <p>
                These Terms and Conditions are governed by the law of England and Wales. Any disputes
                shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2>9. Contact</h2>
              <p>
                For questions regarding these Terms and Conditions, please contact us at{' '}
                <a href={`mailto:${BUSINESS.email}`} className="text-orange-600 hover:underline">{BUSINESS.email}</a>{' '}
                or {BUSINESS.phone}.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
