import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Terms of Service',
  description: 'Blueprint Global terms of service — engagement terms, payment, and legal disclaimers.',
};

export default function TermsPage() {
  return (
    <div className="bg-ink min-h-screen font-sans selection:bg-bronze/30 selection:text-white">
      <Navbar />
      <main className="pt-32 pb-20 px-6 md:px-12">
        <article className="max-w-3xl mx-auto text-surface/80 font-sans leading-relaxed">
          <h1 className="text-4xl md:text-5xl font-drama font-normal tracking-tight text-surface mb-4">Terms of Service</h1>
          <p className="text-surface/40 font-data text-xs uppercase tracking-widest mb-12">Last updated: April 2026</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-sans font-medium text-surface mb-3">1. Services</h2>
              <p className="text-surface/70">
                Blueprint Group LLC (&ldquo;Blueprint Global&rdquo;) provides international structuring coordination and project management services. We coordinate with licensed professionals across jurisdictions to implement strategies for tax residency, asset protection, citizenship planning, entity formation, and related international structuring.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-sans font-medium text-surface mb-3">2. Important Disclaimer</h2>
              <p className="text-surface/70 mb-3">
                <strong className="text-surface">Blueprint Global is not a law firm, investment advisor, or immigration firm.</strong> We coordinate and project-manage the implementation of international structures. All tax, legal, immigration, and investment advice is provided by licensed professionals in their respective jurisdictions.
              </p>
              <p className="text-surface/70">
                Martin Popiel is a Chartered Professional Accountant (CPA) licensed in Ontario, Canada. CPA services are provided in accordance with applicable professional standards and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-sans font-medium text-surface mb-3">3. Engagement Terms</h2>
              <ul className="list-disc list-inside space-y-1 text-surface/70">
                <li>All engagements begin with a signed engagement letter outlining scope, timeline, and fees</li>
                <li>Scope changes require written agreement from both parties</li>
                <li>Client is responsible for providing accurate and complete information</li>
                <li>We may decline or terminate an engagement if we determine services are not appropriate for the client&rsquo;s situation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-sans font-medium text-surface mb-3">4. Fees and Payment</h2>
              <ul className="list-disc list-inside space-y-1 text-surface/70">
                <li>Fees are specified in the engagement letter and may include one-time and recurring components</li>
                <li>Payments are processed through Stripe</li>
                <li>Recurring advisory fees are billed monthly or quarterly as specified</li>
                <li>Third-party costs (government fees, legal fees, etc.) are billed separately at cost</li>
                <li>Refund policy is specified in each engagement letter</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-sans font-medium text-surface mb-3">5. Confidentiality</h2>
              <p className="text-surface/70">
                We maintain strict confidentiality of all client information. Information is shared with third-party professionals only as necessary to deliver the agreed services, and only with appropriate confidentiality protections in place.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-sans font-medium text-surface mb-3">6. Limitation of Liability</h2>
              <p className="text-surface/70">
                Blueprint Global&rsquo;s liability is limited to the fees paid for the specific services giving rise to the claim. We are not liable for outcomes dependent on third-party actions, government decisions, regulatory changes, or market conditions. Past outcomes do not guarantee future results.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-sans font-medium text-surface mb-3">7. Governing Law</h2>
              <p className="text-surface/70">
                These terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-sans font-medium text-surface mb-3">8. Contact</h2>
              <p className="text-surface/70">
                For questions about these terms: <a href="mailto:martin@blueprintglobal.io" className="text-bronze hover:underline">martin@blueprintglobal.io</a>
              </p>
              <p className="text-surface/70 mt-2">Blueprint Group LLC</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
