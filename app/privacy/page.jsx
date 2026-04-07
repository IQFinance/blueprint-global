import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Blueprint Global privacy policy — how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-ink min-h-screen font-sans selection:bg-bronze/30 selection:text-white">
      <Navbar />
      <main className="pt-32 pb-20 px-6 md:px-12">
        <article className="max-w-3xl mx-auto text-surface/80 font-sans leading-relaxed">
          <h1 className="text-4xl md:text-5xl font-drama font-normal tracking-tight text-surface mb-4">Privacy Policy</h1>
          <p className="text-surface/40 font-data text-xs uppercase tracking-widest mb-12">Last updated: April 2026</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-sans font-medium text-surface mb-3">1. Information We Collect</h2>
              <p className="mb-3">Blueprint Group LLC (&ldquo;Blueprint Global,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) collects information you provide directly:</p>
              <ul className="list-disc list-inside space-y-1 text-surface/70">
                <li>Name, email address, and phone number via contact forms</li>
                <li>Professional and financial information shared during consultations</li>
                <li>Booking and scheduling information</li>
                <li>Payment information processed through Stripe (we do not store card details)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-sans font-medium text-surface mb-3">2. Automatically Collected Information</h2>
              <ul className="list-disc list-inside space-y-1 text-surface/70">
                <li>Usage data via Google Analytics (anonymized)</li>
                <li>Session recordings and heatmaps via Microsoft Clarity</li>
                <li>A/B testing data via Keak</li>
                <li>Device type, browser, IP address, and referring pages</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-sans font-medium text-surface mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-1 text-surface/70">
                <li>To provide and improve our consulting services</li>
                <li>To communicate with you about your engagement</li>
                <li>To process payments and send invoices</li>
                <li>To analyze website performance and improve user experience</li>
                <li>To comply with legal and regulatory obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-sans font-medium text-surface mb-3">4. Third-Party Services</h2>
              <p className="mb-3">We use the following third-party services that may process your data:</p>
              <ul className="list-disc list-inside space-y-1 text-surface/70">
                <li><strong className="text-surface">Stripe</strong> &mdash; payment processing</li>
                <li><strong className="text-surface">GoHighLevel</strong> &mdash; CRM, scheduling, and client communication</li>
                <li><strong className="text-surface">Google Analytics</strong> &mdash; website analytics</li>
                <li><strong className="text-surface">Microsoft Clarity</strong> &mdash; session replay and heatmaps</li>
                <li><strong className="text-surface">Google Workspace</strong> &mdash; email and document management</li>
                <li><strong className="text-surface">Vercel</strong> &mdash; website hosting</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-sans font-medium text-surface mb-3">5. International Data Transfers</h2>
              <p className="text-surface/70">
                Given the international nature of our services, your data may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for all cross-border data transfers in accordance with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-sans font-medium text-surface mb-3">6. Data Retention</h2>
              <p className="text-surface/70">
                We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Client engagement records are retained for a minimum of 7 years per professional accounting standards.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-sans font-medium text-surface mb-3">7. Your Rights</h2>
              <p className="mb-3 text-surface/70">Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc list-inside space-y-1 text-surface/70">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data (subject to legal retention requirements)</li>
                <li>Opt out of marketing communications</li>
                <li>Request data portability</li>
              </ul>
              <p className="mt-3 text-surface/70">To exercise these rights, contact us at <a href="mailto:martin@blueprintglobal.io" className="text-bronze hover:underline">martin@blueprintglobal.io</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-sans font-medium text-surface mb-3">8. Cookies</h2>
              <p className="text-surface/70">
                We use essential cookies for site functionality and analytics cookies to understand how visitors use our site. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-sans font-medium text-surface mb-3">9. Contact</h2>
              <p className="text-surface/70">
                For privacy inquiries: <a href="mailto:martin@blueprintglobal.io" className="text-bronze hover:underline">martin@blueprintglobal.io</a>
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
