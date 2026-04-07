import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Contact',
  description: 'Schedule a discovery session with Blueprint Global. Start building your international structure today.',
};

export default function ContactPage() {
  return (
    <div className="bg-ink min-h-screen font-sans selection:bg-bronze/30 selection:text-white">
      <Navbar />
      <main className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-data text-sm uppercase tracking-[0.2em] text-bronze mb-6">Contact</h1>
          <h2 className="text-4xl md:text-5xl font-drama font-normal tracking-tight text-surface mb-6">
            Start Your Blueprint
          </h2>
          <p className="text-surface/60 font-sans text-lg leading-relaxed max-w-2xl mb-12">
            Book a discovery session to discuss your situation. We&apos;ll assess your global footprint, identify opportunities, and outline next steps.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* GHL Booking Widget — replace iframe src with your GHL calendar URL */}
            <div className="border border-surface/10 rounded-2xl p-8 min-h-[500px] flex flex-col">
              <h3 className="text-xl font-sans font-medium text-surface mb-6">Book a Discovery Session</h3>
              <div className="flex-grow flex items-center justify-center">
                {/* TODO: Replace with GHL booking calendar embed */}
                <iframe
                  src="https://app.blueprintglobal.io/widget/booking/blueprint-discovery"
                  style={{ width: '100%', height: '100%', border: 'none', minHeight: '400px' }}
                  title="Book a Discovery Session"
                />
              </div>
            </div>

            {/* Direct contact */}
            <div className="flex flex-col gap-8">
              <div className="border border-surface/10 rounded-2xl p-8">
                <h3 className="text-xl font-sans font-medium text-surface mb-4">Direct Contact</h3>
                <div className="space-y-4 text-surface/70 font-sans">
                  <p>
                    <span className="font-data text-xs uppercase tracking-widest text-bronze block mb-1">Email</span>
                    <a href="mailto:martin@blueprintglobal.io" className="hover:text-bronze transition-colors">martin@blueprintglobal.io</a>
                  </p>
                  <p>
                    <span className="font-data text-xs uppercase tracking-widest text-bronze block mb-1">LinkedIn</span>
                    <a href="https://www.linkedin.com/in/martinpopiel/" target="_blank" rel="noopener noreferrer" className="hover:text-bronze transition-colors">linkedin.com/in/martinpopiel</a>
                  </p>
                </div>
              </div>

              <div className="border border-surface/10 rounded-2xl p-8">
                <h3 className="text-xl font-sans font-medium text-surface mb-4">What to Expect</h3>
                <ul className="space-y-3 text-surface/70 font-sans text-[15px]">
                  <li className="flex items-start gap-3">
                    <span className="font-data text-bronze text-sm mt-0.5">01</span>
                    <span>30-minute discovery call to understand your situation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-data text-bronze text-sm mt-0.5">02</span>
                    <span>Custom strategic assessment with clear recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-data text-bronze text-sm mt-0.5">03</span>
                    <span>Detailed proposal with scope, timeline, and pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
