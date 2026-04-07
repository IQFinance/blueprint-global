import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-ink text-surface pt-24 pb-12 px-6 md:px-12 relative z-10 border-t border-bronze/10 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-20 border-b border-surface/10 pb-16">
        <div className="w-full md:w-1/3">
          <div className="font-sans font-semibold text-2xl tracking-tight mb-4">Blueprint Global</div>
          <p className="font-sans text-surface/60 text-[15px] leading-relaxed max-w-sm">
            One firm. One plan. Your entire international structure: designed, built, and maintained under one roof.
          </p>
        </div>
        <div className="flex gap-16 md:gap-32">
          <div className="flex flex-col gap-4">
            <span className="font-data text-xs uppercase tracking-widest text-bronze mb-2">Services</span>
            <a href="/#education" className="font-sans text-[15px] text-surface/80 hover:text-white transition-colors">What We Do</a>
            <a href="/#how-it-works" className="font-sans text-[15px] text-surface/80 hover:text-white transition-colors">How It Works</a>
            <a href="/#about" className="font-sans text-[15px] text-surface/80 hover:text-white transition-colors">About</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-data text-xs uppercase tracking-widest text-bronze mb-2">Company</span>
            <Link href="/blog" className="font-sans text-[15px] text-surface/80 hover:text-white transition-colors">Blog</Link>
            <Link href="/contact" className="font-sans text-[15px] text-surface/80 hover:text-white transition-colors">Contact</Link>
            <a href="https://app.blueprintglobal.io/dashboard" className="font-sans text-[15px] text-surface/80 hover:text-white transition-colors">Client Login</a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mb-8">
        <p className="font-sans text-surface/30 text-xs leading-relaxed max-w-4xl">
          Blueprint Global coordinates international structuring and project-manages the implementation process. We do not provide tax, legal, investment, or immigration advice. All advisory services are delivered by licensed professionals in their respective jurisdictions. Past outcomes do not guarantee future results. Each client&apos;s structure depends on their individual circumstances.
        </p>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-surface/40">
        <p>&copy; {new Date().getFullYear()} Blueprint Group LLC. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-surface transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-surface transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
