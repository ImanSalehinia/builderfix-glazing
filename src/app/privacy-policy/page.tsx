import type { Metadata } from 'next'
import { BUSINESS, SITE_CONFIG } from '@/data/business'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: `Privacy Policy | ${BUSINESS.name}`,
  description: `Privacy Policy for ${BUSINESS.name}. How we collect, use, and protect your personal data.`,
  alternates: { canonical: `${SITE_CONFIG.url}/privacy-policy` },
  robots: { index: false, follow: true },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Privacy Policy', href: '/privacy-policy' }]} />
      <div className="section-padding">
        <div className="container-custom max-w-3xl">
          <h1 className="text-4xl font-black text-[#0f2442] mb-3">Privacy Policy</h1>
          <p className="text-slate-400 text-sm mb-10">Last updated: November 2024</p>

          <div className="prose-custom space-y-8">
            <section>
              <h2>1. Who We Are</h2>
              <p>
                {BUSINESS.name} (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is a glazing and glass specialist company
                registered in England and Wales, operating from {BUSINESS.address.city},
                {BUSINESS.address.county}. This Privacy Policy explains how we collect, use,
                and protect the personal data you provide to us.
              </p>
            </section>

            <section>
              <h2>2. Data We Collect</h2>
              <p>We collect the following types of personal data:</p>
              <ul>
                <li><strong>Contact information:</strong> name, email address, phone number, and postal address or postcode</li>
                <li><strong>Enquiry details:</strong> the service you require, your preferred appointment date, and any message or description you provide</li>
                <li><strong>Usage data:</strong> technical information about how you use our website, including IP address, browser type, and pages visited (collected via cookies)</li>
              </ul>
            </section>

            <section>
              <h2>3. How We Use Your Data</h2>
              <p>We use your data to:</p>
              <ul>
                <li>Respond to your enquiry and provide a quote</li>
                <li>Schedule and manage your appointment</li>
                <li>Send appointment reminders and follow-up communications</li>
                <li>Improve our website and services</li>
                <li>Comply with our legal obligations</li>
              </ul>
            </section>

            <section>
              <h2>4. Legal Basis for Processing</h2>
              <p>
                We process your data on the basis of: (a) your consent when you submit an enquiry form;
                (b) the performance of a contract when you engage our services; and (c) legitimate
                interests in improving our business and communicating with existing customers.
              </p>
            </section>

            <section>
              <h2>5. Data Sharing</h2>
              <p>
                We do not sell your personal data. We may share your data with trusted third-party
                service providers who assist us in operating our business (such as email providers
                and CRM software), under strict data processing agreements.
              </p>
            </section>

            <section>
              <h2>6. Data Retention</h2>
              <p>
                We retain your personal data for a maximum of 7 years following your last interaction
                with us, in line with our legal and accounting obligations. You may request deletion
                of your data at any time (see Your Rights below).
              </p>
            </section>

            <section>
              <h2>7. Your Rights</h2>
              <p>Under UK GDPR, you have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing</li>
                <li>Data portability</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at{' '}
                <a href={`mailto:${BUSINESS.email}`} className="text-orange-600 hover:underline">{BUSINESS.email}</a>.
              </p>
            </section>

            <section>
              <h2>8. Cookies</h2>
              <p>
                We use essential and analytical cookies on our website. Please see our{' '}
                <a href="/cookie-policy" className="text-orange-600 hover:underline">Cookie Policy</a>{' '}
                for full details.
              </p>
            </section>

            <section>
              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{' '}
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
