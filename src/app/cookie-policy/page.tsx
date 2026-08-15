import type { Metadata } from 'next'
import { BUSINESS, SITE_CONFIG } from '@/data/business'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: `Cookie Policy | ${BUSINESS.name}`,
  description: `Cookie Policy for ${BUSINESS.name}. How we use cookies on our website.`,
  alternates: { canonical: `${SITE_CONFIG.url}/cookie-policy` },
  robots: { index: false, follow: true },
}

export default function CookiePolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Cookie Policy', href: '/cookie-policy' }]} />
      <div className="section-padding">
        <div className="container-custom max-w-3xl">
          <h1 className="text-4xl font-black text-[#0f2442] mb-3">Cookie Policy</h1>
          <p className="text-slate-400 text-sm mb-10">Last updated: November 2024</p>

          <div className="prose-custom space-y-8">
            <section>
              <h2>What Are Cookies?</h2>
              <p>
                Cookies are small text files placed on your device when you visit a website.
                They are widely used to make websites work efficiently and to provide information
                to the website owner.
              </p>
            </section>

            <section>
              <h2>Cookies We Use</h2>
              <p>We use the following types of cookies:</p>
              <ul>
                <li><strong>Essential cookies:</strong> These are necessary for the website to function and cannot be switched off. They include session cookies and security cookies.</li>
                <li><strong>Analytical cookies:</strong> We use Google Analytics to understand how visitors interact with our website, which pages are most popular, and how we can improve the user experience. This data is anonymised.</li>
                <li><strong>Marketing cookies:</strong> With your consent, we may use cookies to track visitors across websites to enable us to display relevant advertising.</li>
              </ul>
            </section>

            <section>
              <h2>Managing Cookies</h2>
              <p>
                You can control cookies through your browser settings. Most browsers allow you
                to refuse cookies, accept only certain types, or delete existing cookies.
                Please note that disabling certain cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2>Third-Party Cookies</h2>
              <p>
                We may use third-party services such as Google Analytics, Google Maps, and social
                media plugins, which may set their own cookies. We do not control these cookies
                and recommend you review the relevant privacy policies.
              </p>
            </section>

            <section>
              <h2>Contact Us</h2>
              <p>
                If you have questions about our use of cookies, please contact us at{' '}
                <a href={`mailto:${BUSINESS.email}`} className="text-orange-600 hover:underline">{BUSINESS.email}</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
