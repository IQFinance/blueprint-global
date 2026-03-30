import React, { useState, useEffect, useRef } from 'react';
import {
  ShieldCheck,
  Globe,
  Briefcase,
  ArrowRight,
  Network,
  Landmark,
  Lock,
  Coins,
  HeartPulse,
  GraduationCap,
  Scale,
  CheckCircle,
  MapPin,
  ChevronDown,
  Plane,
  Lightbulb,
  FileText,
  Clock,
  Users,
  RefreshCw,
  Menu,
  X,
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Blueprint Thread (decorative vertical line + section dots) */
const THREAD_OFFSETS = ['15%', '30%', '46%', '60%', '74%', '88%'];

function BlueprintThread() {
  return (
    <div className="hidden md:block fixed left-[72px] top-0 bottom-0 z-30 pointer-events-none">
      {/* The line itself */}
      <div className="absolute inset-0 w-px bg-bronze/[0.12]" />
      {/* Section marker dots */}
      {THREAD_OFFSETS.map((top) => (
        <div
          key={top}
          className="absolute -left-[3px] w-[7px] h-[7px] rounded-full bg-bronze/30"
          style={{ top }}
        />
      ))}
    </div>
  );
}

/* ─── Navbar ────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { label: 'What We Do', href: '#education' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
  ];

  return (
    <>
      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 px-5 py-3 flex items-center justify-between w-[92%] max-w-5xl rounded-full ${
          scrolled
            ? 'bg-porcelain/95 backdrop-blur-sm shadow-sm border border-ink/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <span
          className={`font-sans font-semibold text-[15px] tracking-tight transition-colors duration-500 ${
            scrolled ? 'text-ink' : 'text-porcelain'
          }`}
        >
          Blueprint Global
        </span>

        {/* Desktop links */}
        <div
          className={`hidden md:flex items-center gap-7 text-[13px] font-medium transition-colors duration-500 ${
            scrolled ? 'text-ink/60' : 'text-porcelain/70'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-bronze transition-colors hover:-translate-y-px transform inline-block"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://app.blueprintglobal.io/dashboard"
            className={`hidden md:block text-[13px] font-medium transition-colors duration-500 ${
              scrolled ? 'text-ink/50 hover:text-bronze' : 'text-porcelain/60 hover:text-white'
            }`}
          >
            Client Login
          </a>
          <a
            href="https://app.blueprintglobal.io/onboarding"
            className="bg-bronze text-white px-4 py-2 rounded-full text-[13px] font-medium flex items-center gap-1.5 hover:bg-bronze/90 transition-colors"
          >
            Try the Demo <ArrowRight size={13} />
          </a>
          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-1.5 rounded-full transition-colors ${
              scrolled ? 'text-ink' : 'text-porcelain'
            }`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(22,24,27,0.6)', backdropFilter: 'blur(4px)' }}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-[min(85vw,340px)] bg-ink flex flex-col px-7 py-8 transition-transform duration-300 ease-out md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-12">
          <span className="font-sans font-semibold text-[15px] text-porcelain tracking-tight">
            Blueprint Global
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-porcelain/50 hover:text-porcelain transition-colors p-1"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-1 mb-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-porcelain/70 hover:text-porcelain font-sans text-[18px] font-medium py-3.5 border-b border-white/[0.06] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://app.blueprintglobal.io/dashboard"
            onClick={() => setMobileOpen(false)}
            className="text-porcelain/50 hover:text-porcelain font-sans text-[18px] font-medium py-3.5 border-b border-white/[0.06] transition-colors"
          >
            Client Login
          </a>
        </div>

        <a
          href="https://app.blueprintglobal.io/onboarding"
          onClick={() => setMobileOpen(false)}
          className="w-full bg-bronze text-white rounded-full text-[14px] font-semibold flex items-center justify-center gap-2 py-4 hover:bg-bronze/90 transition-colors mt-auto"
        >
          Try the Demo <ArrowRight size={14} />
        </a>
      </div>
    </>
  );
}

/* ─── Hero ──────────────────────────────────────────────────── */
function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-image', {
        scale: 1.06,
        duration: 2.2,
        ease: 'power3.out',
      });
      gsap.from('.hero-text', {
        y: 44,
        opacity: 0,
        duration: 1.1,
        stagger: 0.09,
        ease: 'power3.out',
        delay: 0.15,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] w-full flex flex-col justify-center px-6 md:px-12 lg:px-20 overflow-hidden bg-ink text-porcelain"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
          alt="City skyline architecture"
          className="hero-image object-cover w-full h-full opacity-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10" />
        <div className="absolute inset-0 bg-ink/30" />
      </div>

      <div className="relative z-10 max-w-4xl pt-28 pb-16">

        {/* Eyebrow */}
        <div className="hero-text flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-bronze/60" />
          <span className="font-data text-[10px] uppercase tracking-[0.22em] text-bronze/90">
            International Structuring
          </span>
        </div>

        {/* H1 */}
        <h1 className="hero-text font-sans font-semibold text-[2.6rem] sm:text-5xl md:text-[3.75rem] lg:text-[4.75rem] leading-[1.04] tracking-[-0.02em] mb-4 text-balance text-white">
          Your entire life is tied<br className="hidden sm:block" /> to one country.
        </h1>
        <h2 className="hero-text font-sans font-semibold text-[2.6rem] sm:text-5xl md:text-[3.75rem] lg:text-[4.75rem] leading-[1.04] tracking-[-0.02em] mb-8 text-balance text-white/40">
          It doesn&apos;t have to be.
        </h2>

        {/* Italic tagline */}
        <p className="hero-text font-drama italic text-[1.45rem] md:text-[1.75rem] text-bronze leading-snug mb-6 max-w-lg">
          We build your international life. You live it.
        </p>

        {/* Body */}
        <p className="hero-text text-[15px] md:text-[16px] text-porcelain/60 font-sans leading-relaxed max-w-[38rem] mb-10">
          Blueprint designs and builds complete international structures for
          entrepreneurs, investors, and globally mobile families.
        </p>

        {/* CTA group */}
        <div className="hero-text flex flex-wrap items-center gap-4">
          <a
            href="https://app.blueprintglobal.io/onboarding"
            className="inline-flex items-center gap-2 bg-porcelain text-ink px-8 py-4 rounded-full text-[14px] font-semibold hover:bg-white transition-colors"
          >
            Try the Demo <ArrowRight size={15} />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 border border-white/30 text-porcelain/80 px-8 py-4 rounded-full text-[14px] font-medium hover:border-white/60 hover:text-white transition-colors"
          >
            See How It Works
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-30">
        <span className="font-data text-[9px] uppercase tracking-[0.22em] text-porcelain">
          Scroll
        </span>
        <ChevronDown size={13} className="text-porcelain" />
      </div>
    </section>
  );
}

/* ─── Trust Band ────────────────────────────────────────────── */
function TrustBand() {
  const ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.trust-item', {
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-ink text-porcelain/55 py-14 px-6 border-b border-white/[0.06]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-white/[0.07]">
        <div className="trust-item sm:pr-12 flex flex-col gap-2">
          <span className="font-data text-[10px] uppercase tracking-[0.18em] text-bronze/75">
            Approach
          </span>
          <div className="flex items-center gap-2.5 mt-1">
            <ShieldCheck size={20} className="text-bronze flex-shrink-0" strokeWidth={1.5} />
            <p className="text-[17px] font-sans font-medium text-porcelain leading-snug tracking-tight">
              One Firm. The Full Picture.
            </p>
          </div>
        </div>
        <div className="trust-item sm:px-12 flex flex-col gap-2">
          <span className="font-data text-[10px] uppercase tracking-[0.18em] text-bronze/75">
            Foundation
          </span>
          <div className="flex items-center gap-2.5 mt-1">
            <Briefcase size={20} className="text-bronze flex-shrink-0" strokeWidth={1.5} />
            <p className="text-[17px] font-sans font-medium text-porcelain leading-snug tracking-tight">
              CPA-Led
            </p>
          </div>
        </div>
        <div className="trust-item sm:pl-12 flex flex-col gap-2">
          <span className="font-data text-[10px] uppercase tracking-[0.18em] text-bronze/75">
            Priority
          </span>
          <div className="flex items-center gap-2.5 mt-1">
            <FileText size={20} className="text-bronze flex-shrink-0" strokeWidth={1.5} />
            <p className="text-[17px] font-sans font-medium text-porcelain leading-snug tracking-tight">
              Compliance-First
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Education ─────────────────────────────────────────────── */
const eduCards = [
  {
    icon: <Globe size={18} strokeWidth={1.5} />,
    title: 'Tax Residency',
    summary: "You're paying taxes based on where you were born — not where you live or earn.",
    problem: "You're paying taxes based on where you were born — not where you live or earn.",
    solution: 'We help you establish residency in jurisdictions that align with your actual lifestyle and income sources.',
  },
  {
    icon: <ShieldCheck size={18} strokeWidth={1.5} />,
    title: 'Banking & Capital Access',
    summary: 'Your bank can freeze your account, restrict transfers, or close you out — with no warning.',
    problem: 'Your bank can freeze your account, restrict transfers, or close you out — with no warning.',
    solution: "We open accounts across stable jurisdictions so your capital is always accessible, never trapped.",
  },
  {
    icon: <Briefcase size={18} strokeWidth={1.5} />,
    title: 'Ownership Structures',
    summary: 'Holding everything in your personal name means one lawsuit could take it all.',
    problem: 'Holding everything in your personal name means one lawsuit could take it all.',
    solution: 'We design entity structures — trusts, foundations, holding companies — that separate you from your assets.',
  },
  {
    icon: <Landmark size={18} strokeWidth={1.5} />,
    title: 'Citizenship & Mobility',
    summary: 'A single passport limits where you can live, work, and move freely.',
    problem: 'A single passport limits where you can live, work, and move freely.',
    solution: 'We map pathways to second citizenships and residency permits that expand your options permanently.',
  },
  {
    icon: <Lock size={18} strokeWidth={1.5} />,
    title: 'Risk & Asset Protection',
    summary: 'Political instability, lawsuits, or currency devaluation can wipe out years of progress overnight.',
    problem: 'Political instability, lawsuits, or currency devaluation can wipe out years of progress overnight.',
    solution: 'We spread your risk across jurisdictions so no single event can compromise your entire position.',
  },
  {
    icon: <HeartPulse size={18} strokeWidth={1.5} />,
    title: 'Healthcare Access',
    summary: "You're stuck with one country's healthcare system — long waits, limited options, no portability.",
    problem: "You're stuck with one country's healthcare system — long waits, limited options, no portability.",
    solution: 'We connect you with global health networks that follow you wherever you go.',
  },
  {
    icon: <GraduationCap size={18} strokeWidth={1.5} />,
    title: 'Education Planning',
    summary: "Your children's education options are limited to one country's school system.",
    problem: "Your children's education options are limited to one country's school system.",
    solution: 'We map international schooling and university pathways that keep doors open for the next generation.',
  },
  {
    icon: <Scale size={18} strokeWidth={1.5} />,
    title: 'Succession & Estate',
    summary: 'Without cross-border planning, your estate could face double taxation or probate in multiple countries.',
    problem: 'Without cross-border planning, your estate could face double taxation or probate in multiple countries.',
    solution: 'We structure succession plans that transfer wealth cleanly across borders, without legal friction.',
  },
  {
    icon: <Coins size={18} strokeWidth={1.5} />,
    title: 'Digital Asset Integration',
    summary: 'Crypto profits sit in a grey zone — hard to bank, hard to spend, easy to lose to bad compliance.',
    problem: 'Crypto profits sit in a grey zone — hard to bank, hard to spend, easy to lose to bad compliance.',
    solution: 'We build compliant bridges between your digital holdings and the traditional financial system.',
  },
];

function EduCard({ card, idx }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article
      className="edu-card bg-white rounded-2xl border border-ink/[0.06] overflow-hidden group cursor-pointer"
      onClick={() => setExpanded((v) => !v)}
    >
      {/* Collapsed header — always visible */}
      <div className="p-6 flex items-start gap-4">
        <div className="w-9 h-9 rounded-xl bg-porcelain flex items-center justify-center text-bronze flex-shrink-0 group-hover:bg-bronze/10 transition-colors duration-300">
          {card.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[14px] font-sans font-semibold text-ink leading-tight mb-1.5">
            {card.title}
          </h3>
          <p className="text-[12px] font-sans leading-relaxed text-ink/45 line-clamp-2">
            {card.summary}
          </p>
        </div>
        <ChevronDown
          size={14}
          className={`text-bronze/50 flex-shrink-0 mt-0.5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
        />
      </div>

      {/* Expandable detail */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-0">
          <div className="h-px w-full bg-ink/[0.07] mb-4" />
          <p className="text-[12px] font-sans leading-relaxed text-ink/50 mb-3">
            <span className="font-semibold text-ink/70">The problem: </span>
            {card.problem}
          </p>
          <p className="text-[12px] font-sans leading-relaxed text-ink/50">
            <span className="font-semibold text-ink/70">What we do: </span>
            {card.solution}
          </p>
        </div>
      </div>
    </article>
  );
}

function Education() {
  const eduRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.edu-header', {
        scrollTrigger: { trigger: eduRef.current, start: 'top 82%' },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
      gsap.from('.edu-card', {
        scrollTrigger: { trigger: eduRef.current, start: 'top 72%' },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.07,
        ease: 'power3.out',
      });
    }, eduRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={eduRef} id="education" className="py-28 px-6 md:px-12 bg-porcelain">
      <div className="max-w-6xl mx-auto">
        <div className="edu-header mb-14 max-w-2xl">
          <span className="font-data text-[10px] uppercase tracking-[0.2em] text-bronze">
            What We Do
          </span>
          <h2 className="text-[2rem] md:text-[2.75rem] font-sans font-semibold tracking-tight text-ink leading-[1.08] mt-4 text-balance">
            Most people don&apos;t know these problems exist — until they&apos;re stuck.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {eduCards.map((card, idx) => (
            <EduCard key={idx} card={card} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Mid-Page CTA ──────────────────────────────────────────── */
function MidPageCTA({ variant = 'a' }) {
  const ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.midcta-inner', {
        scrollTrigger: { trigger: ref.current, start: 'top 82%' },
        y: 24,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  // variant a — after Education (light)
  if (variant === 'a') {
    return (
      <section ref={ref} className="bg-porcelain border-t border-b border-ink/[0.07] py-20 px-6">
        <div className="midcta-inner max-w-xl mx-auto text-center">
          <p className="font-drama italic text-[1.6rem] md:text-[1.9rem] leading-[1.2] mb-8 text-balance text-ink/75">
            These problems are solvable. Here&apos;s what you walk away with.
          </p>
          <a
            href="https://app.blueprintglobal.io/onboarding"
            className="inline-flex items-center gap-2 bg-bronze text-white px-8 py-3.5 rounded-full text-[13px] font-medium tracking-wide hover:bg-bronze/90 transition-colors"
          >
            Try the Demo <ArrowRight size={14} />
          </a>
          <p className="font-data text-[10px] uppercase tracking-[0.18em] mt-5 text-ink/25">
            Free. No account required.
          </p>
        </div>
      </section>
    );
  }

  // variant b — after WhatYouGet + SocialProof (dark, larger)
  if (variant === 'b') {
    return (
      <section ref={ref} className="bg-ink border-t border-white/[0.07] py-24 px-6">
        <div className="midcta-inner max-w-2xl mx-auto text-center">
          <p className="font-drama italic text-[2rem] md:text-[2.6rem] leading-[1.15] mb-3 text-balance text-porcelain/80">
            Sound like what you need?
          </p>
          <p className="font-drama italic text-[2rem] md:text-[2.6rem] leading-[1.15] mb-10 text-balance text-porcelain/40">
            Let&apos;s talk.
          </p>
          <a
            href="https://app.blueprintglobal.io/onboarding"
            className="inline-flex items-center gap-2 bg-bronze text-white px-9 py-4 rounded-full text-[14px] font-semibold tracking-wide hover:bg-bronze/90 transition-colors"
          >
            Start Your Blueprint <ArrowRight size={15} />
          </a>
          <p className="font-data text-[10px] uppercase tracking-[0.18em] mt-5 text-porcelain/25">
            Used by entrepreneurs across 40+ countries.
          </p>
        </div>
      </section>
    );
  }

  // variant c — after HowItWorks (light)
  if (variant === 'c') {
    return (
      <section ref={ref} className="bg-porcelain border-t border-b border-ink/[0.07] py-20 px-6">
        <div className="midcta-inner max-w-xl mx-auto text-center">
          <p className="font-drama italic text-[1.6rem] md:text-[1.9rem] leading-[1.2] mb-8 text-balance text-ink/75">
            Ready to start mapping your structure?
          </p>
          <a
            href="https://app.blueprintglobal.io/onboarding"
            className="inline-flex items-center gap-2 bg-bronze text-white px-8 py-3.5 rounded-full text-[13px] font-medium tracking-wide hover:bg-bronze/90 transition-colors"
          >
            Try the Demo <ArrowRight size={14} />
          </a>
          <p className="font-data text-[10px] uppercase tracking-[0.18em] mt-5 text-ink/25">
            It takes 5 minutes.
          </p>
        </div>
      </section>
    );
  }

  return null;
}

/* ─── What You Get ──────────────────────────────────────────── */
const deliverables = [
  {
    num: '01',
    title: 'Your Global Blueprint',
    desc: 'A written roadmap covering residency, banking, entities, and compliance — tailored to your exact situation. Not a template.',
  },
  {
    num: '02',
    title: 'Bank Accounts Opened',
    desc: 'Accounts opened and verified in stable jurisdictions, with your name on them — ready to move capital from day one.',
  },
  {
    num: '03',
    title: 'Entities Formed',
    desc: 'Holding companies, trusts, or foundations structured and registered where they serve you best — with proper documentation.',
  },
  {
    num: '04',
    title: 'Residency or Citizenship Filed',
    desc: 'Applications submitted, tracked, and followed through. We handle the paperwork and coordinate with local counsel.',
  },
  {
    num: '05',
    title: 'Compliance Handled',
    desc: "Cross-border reporting, tax filings, and ongoing obligations managed so nothing falls through the cracks.",
  },
  {
    num: '06',
    title: 'Ongoing Adjustments',
    desc: 'Laws change. Your life changes. We update your structure so it stays current, compliant, and optimized.',
  },
];

function WhatYouGet() {
  const getRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.get-header', {
        scrollTrigger: { trigger: getRef.current, start: 'top 82%' },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
      gsap.from('.get-item', {
        scrollTrigger: { trigger: getRef.current, start: 'top 72%' },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, getRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={getRef} className="py-28 px-6 md:px-12 bg-porcelain">
      <div className="max-w-4xl mx-auto">
        <div className="get-header mb-16 max-w-2xl">
          <span className="font-data text-[10px] uppercase tracking-[0.2em] text-bronze">
            What You Get
          </span>
          <h2 className="text-[2rem] md:text-[2.75rem] font-sans font-semibold tracking-tight text-ink leading-[1.08] mt-4 text-balance">
            Tangible outcomes. Not just advice.
          </h2>
        </div>

        <div className="flex flex-col">
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              className="get-item flex items-start gap-8 py-8 border-b border-ink/[0.07] last:border-0 group"
            >
              {/* Large number */}
              <span className="font-data text-[3.25rem] leading-none text-bronze/20 flex-shrink-0 w-16 text-right transition-colors duration-500 group-hover:text-bronze/40 hidden sm:block">
                {item.num}
              </span>
              {/* Vertical rule */}
              <div className="hidden sm:block w-px self-stretch bg-bronze/[0.12] flex-shrink-0" />
              {/* Content */}
              <div className="flex-1 min-w-0 pt-1">
                <h3 className="text-[16px] font-sans font-semibold text-ink mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[13px] font-sans leading-relaxed text-ink/50">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Social Proof ──────────────────────────────────────────── */
function SocialProof() {
  const ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.proof-item', {
        scrollTrigger: { trigger: ref.current, start: 'top 82%' },
        y: 28,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const stats = [
    { value: '40+', label: 'Countries' },
    { value: '9', label: 'Jurisdictions' },
    { value: '200+', label: 'Structures Designed' },
  ];

  /* Minimal world map SVG — just continental outlines at low opacity */
  return (
    <section ref={ref} className="bg-ink py-20 px-6 border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto">
        {/* Map */}
        <div className="proof-item relative w-full h-[180px] mb-10 overflow-hidden">
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Simplified continental outlines */}
            <g fill="none" stroke="rgba(246,242,234,0.08)" strokeWidth="1">
              {/* North America */}
              <path d="M120,80 L200,60 L260,70 L290,120 L270,180 L240,220 L210,260 L180,300 L160,280 L130,230 L100,180 L90,130 Z" />
              {/* South America */}
              <path d="M200,290 L240,280 L270,300 L280,360 L265,420 L240,450 L215,440 L195,400 L185,350 L190,310 Z" />
              {/* Europe */}
              <path d="M430,60 L480,55 L510,75 L520,110 L495,130 L460,125 L440,100 L425,80 Z" />
              {/* Africa */}
              <path d="M430,150 L480,140 L510,160 L520,220 L510,290 L490,340 L465,360 L440,345 L420,290 L415,220 L420,170 Z" />
              {/* Asia */}
              <path d="M530,55 L650,45 L750,60 L820,80 L850,120 L840,160 L790,175 L720,165 L660,150 L600,140 L550,120 L525,95 Z" />
              {/* Australia */}
              <path d="M720,280 L790,270 L840,290 L850,340 L830,380 L790,390 L745,375 L720,340 L710,300 Z" />
            </g>
            {/* Active jurisdiction dots */}
            {/* Singapore */}
            <circle cx="762" cy="270" r="4" fill="#9C7B52" opacity="0.9" />
            <circle cx="762" cy="270" r="8" fill="#9C7B52" opacity="0.2" />
            {/* Switzerland */}
            <circle cx="474" cy="95" r="4" fill="#9C7B52" opacity="0.9" />
            <circle cx="474" cy="95" r="8" fill="#9C7B52" opacity="0.2" />
            {/* UAE */}
            <circle cx="590" cy="165" r="4" fill="#9C7B52" opacity="0.9" />
            <circle cx="590" cy="165" r="8" fill="#9C7B52" opacity="0.2" />
            {/* Panama */}
            <circle cx="218" cy="265" r="4" fill="#9C7B52" opacity="0.9" />
            <circle cx="218" cy="265" r="8" fill="#9C7B52" opacity="0.2" />
            {/* Paraguay */}
            <circle cx="238" cy="360" r="4" fill="#9C7B52" opacity="0.9" />
            <circle cx="238" cy="360" r="8" fill="#9C7B52" opacity="0.2" />
            {/* USA */}
            <circle cx="170" cy="155" r="4" fill="#9C7B52" opacity="0.9" />
            <circle cx="170" cy="155" r="8" fill="#9C7B52" opacity="0.2" />
            {/* Canada */}
            <circle cx="155" cy="105" r="4" fill="#9C7B52" opacity="0.9" />
            <circle cx="155" cy="105" r="8" fill="#9C7B52" opacity="0.2" />
            {/* Ireland */}
            <circle cx="430" cy="75" r="4" fill="#9C7B52" opacity="0.9" />
            <circle cx="430" cy="75" r="8" fill="#9C7B52" opacity="0.2" />
          </svg>
        </div>

        {/* Caption */}
        <p className="proof-item font-data text-[10px] uppercase tracking-[0.2em] text-porcelain/30 text-center mb-10">
          Active across 9 jurisdictions on 5 continents
        </p>

        {/* Stats */}
        <div className="proof-item flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-20">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-data text-[2.75rem] text-bronze/75 leading-none mb-2">
                {s.value}
              </p>
              <p className="font-data text-[10px] uppercase tracking-[0.2em] text-porcelain/30">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Who This Is For ───────────────────────────────────────── */
const whoItems = [
  'You earn income in more than one country.',
  'You want a second passport or residency.',
  'You hold crypto and need compliant structure.',
  "You're planning a move abroad.",
  'You want to protect wealth across jurisdictions.',
  'You need cross-border family planning — education, healthcare, succession.',
];

function WhoThisIsFor() {
  const whoRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.who-header', {
        scrollTrigger: { trigger: whoRef.current, start: 'top 82%' },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
      gsap.from('.who-item', {
        scrollTrigger: { trigger: whoRef.current, start: 'top 72%' },
        y: 22,
        opacity: 0,
        duration: 0.8,
        stagger: 0.09,
        ease: 'power3.out',
      });
    }, whoRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={whoRef}
      className="bg-ink py-28 px-6 md:px-12 border-t border-white/[0.06] relative overflow-hidden"
    >
      {/* Subtle radial accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(156,123,82,0.04) 0%, transparent 70%)',
        }}
      />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="who-header mb-14">
          <span className="font-data text-[10px] uppercase tracking-[0.2em] text-bronze">
            Who This Is For
          </span>
          <h2 className="text-[2rem] md:text-[2.75rem] font-sans font-semibold tracking-tight text-porcelain leading-[1.08] mt-4">
            This is for you if...
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-white/[0.07]">
          {whoItems.map((item, idx) => (
            <div key={idx} className="who-item flex items-start gap-4 py-5 first:pt-0">
              <CheckCircle
                size={18}
                className="text-bronze mt-0.5 flex-shrink-0"
                strokeWidth={1.5}
              />
              <p className="text-porcelain/70 font-sans text-[15px] md:text-[16px] leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works — SVG panels ─────────────────────────────── */
function RadarSVG() {
  return (
    <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Concentric rings */}
      <circle cx="160" cy="120" r="80" fill="none" stroke="#9C7B52" strokeWidth="0.75" opacity="0.3" />
      <circle cx="160" cy="120" r="52" fill="none" stroke="#9C7B52" strokeWidth="0.75" opacity="0.4" />
      <circle cx="160" cy="120" r="26" fill="none" stroke="#9C7B52" strokeWidth="0.75" opacity="0.5" />
      {/* Cross-hairs */}
      <line x1="160" y1="34" x2="160" y2="206" stroke="#9C7B52" strokeWidth="0.5" opacity="0.15" />
      <line x1="74" y1="120" x2="246" y2="120" stroke="#9C7B52" strokeWidth="0.5" opacity="0.15" />
      {/* Dots at various positions */}
      <circle cx="222" cy="78" r="3.5" fill="#9C7B52" opacity="0.7" />
      <circle cx="130" cy="58" r="2.5" fill="#9C7B52" opacity="0.5" />
      <circle cx="96" cy="148" r="4" fill="#9C7B52" opacity="0.8" />
      <circle cx="194" cy="168" r="2.5" fill="#9C7B52" opacity="0.5" />
      <circle cx="160" cy="120" r="4" fill="#9C7B52" opacity="1" />
      {/* Sweep line */}
      <line x1="160" y1="120" x2="226" y2="66" stroke="#9C7B52" strokeWidth="0.75" opacity="0.35" />
    </svg>
  );
}

function OrgChartSVG() {
  return (
    <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Root node */}
      <rect x="110" y="20" width="100" height="36" rx="4" fill="none" stroke="#9C7B52" strokeWidth="1" opacity="0.6" />
      <line x1="160" y1="56" x2="160" y2="80" stroke="#9C7B52" strokeWidth="0.75" opacity="0.3" />
      {/* Branch line */}
      <line x1="72" y1="80" x2="248" y2="80" stroke="#9C7B52" strokeWidth="0.75" opacity="0.3" />
      {/* Left node */}
      <line x1="72" y1="80" x2="72" y2="100" stroke="#9C7B52" strokeWidth="0.75" opacity="0.3" />
      <rect x="22" y="100" width="100" height="36" rx="4" fill="none" stroke="#9C7B52" strokeWidth="1" opacity="0.45" />
      {/* Center node */}
      <line x1="160" y1="80" x2="160" y2="100" stroke="#9C7B52" strokeWidth="0.75" opacity="0.3" />
      <rect x="110" y="100" width="100" height="36" rx="4" fill="none" stroke="#9C7B52" strokeWidth="1" opacity="0.55" />
      {/* Right node */}
      <line x1="248" y1="80" x2="248" y2="100" stroke="#9C7B52" strokeWidth="0.75" opacity="0.3" />
      <rect x="198" y="100" width="100" height="36" rx="4" fill="none" stroke="#9C7B52" strokeWidth="1" opacity="0.45" />
      {/* Sub-left */}
      <line x1="72" y1="136" x2="72" y2="156" stroke="#9C7B52" strokeWidth="0.75" opacity="0.2" />
      <rect x="22" y="156" width="100" height="30" rx="4" fill="none" stroke="#9C7B52" strokeWidth="0.75" opacity="0.3" />
      {/* Sub-right */}
      <line x1="248" y1="136" x2="248" y2="156" stroke="#9C7B52" strokeWidth="0.75" opacity="0.2" />
      <rect x="198" y="156" width="100" height="30" rx="4" fill="none" stroke="#9C7B52" strokeWidth="0.75" opacity="0.3" />
    </svg>
  );
}

function MaintainSVG() {
  return (
    <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Circular arrow path */}
      <path
        d="M160,50 A80,80 0 1,1 80,160"
        fill="none" stroke="#9C7B52" strokeWidth="1.25" opacity="0.5"
        strokeLinecap="round"
      />
      {/* Arrow head */}
      <polygon points="72,148 68,168 88,160" fill="#9C7B52" opacity="0.5" />
      {/* Center dot */}
      <circle cx="160" cy="120" r="5" fill="#9C7B52" opacity="0.6" />
      {/* Calendar icon — top */}
      <rect x="144" y="22" width="32" height="26" rx="3" fill="none" stroke="#9C7B52" strokeWidth="1" opacity="0.55" />
      <line x1="144" y1="31" x2="176" y2="31" stroke="#9C7B52" strokeWidth="0.75" opacity="0.4" />
      <line x1="152" y1="18" x2="152" y2="26" stroke="#9C7B52" strokeWidth="1" opacity="0.5" />
      <line x1="168" y1="18" x2="168" y2="26" stroke="#9C7B52" strokeWidth="1" opacity="0.5" />
      {/* Checkmark icon — right */}
      <circle cx="258" cy="120" r="14" fill="none" stroke="#9C7B52" strokeWidth="1" opacity="0.45" />
      <polyline points="251,120 256,126 266,114" fill="none" stroke="#9C7B52" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      {/* Document icon — bottom */}
      <rect x="144" y="192" width="32" height="26" rx="3" fill="none" stroke="#9C7B52" strokeWidth="1" opacity="0.45" />
      <line x1="150" y1="201" x2="170" y2="201" stroke="#9C7B52" strokeWidth="0.75" opacity="0.35" />
      <line x1="150" y1="207" x2="170" y2="207" stroke="#9C7B52" strokeWidth="0.75" opacity="0.35" />
      <line x1="150" y1="213" x2="163" y2="213" stroke="#9C7B52" strokeWidth="0.75" opacity="0.35" />
    </svg>
  );
}

const steps = [
  {
    num: '01',
    title: 'Map',
    subtitle: 'We learn your situation.',
    desc: 'We start with a detailed assessment: where you live, where your income comes from, what you own, and where you want to go. No recommendations until we understand the full picture.',
    Visual: RadarSVG,
  },
  {
    num: '02',
    title: 'Build',
    subtitle: 'We design and execute your structure.',
    desc: 'We create your custom blueprint — then execute it. Bank accounts, entities, residency applications, compliance filings. Everything coordinated by one team, in the right sequence.',
    Visual: OrgChartSVG,
  },
  {
    num: '03',
    title: 'Maintain',
    subtitle: 'We keep it running.',
    desc: "Laws change. Your life changes. We handle renewals, annual filings, and adjustments so your structure stays current and compliant — without you having to track it all yourself.",
    Visual: MaintainSVG,
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-porcelain pt-28 pb-36 px-6 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto mb-16">
        <span className="font-data text-[10px] uppercase tracking-[0.2em] text-bronze">
          How It Works
        </span>
        <h2 className="text-[2rem] md:text-[2.75rem] font-sans font-semibold tracking-tight text-ink leading-[1.08] mt-4">
          Map. Build. Maintain.
        </h2>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col pb-8">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="w-full bg-white rounded-2xl shadow-sm border border-ink/[0.06] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-14 mb-4 sticky group"
            style={{ top: `calc(100px + ${idx * 24}px)` }}
          >
            <div className="w-full md:w-1/2 relative z-10">
              <span className="font-data text-[3.25rem] text-bronze/20 mb-5 block leading-none transition-colors duration-500 group-hover:text-bronze/35">
                {step.num}
              </span>
              <h3 className="text-2xl md:text-[1.75rem] font-sans font-semibold text-ink mb-1.5 leading-tight">
                {step.title}
              </h3>
              <p className="text-bronze font-sans text-[14px] mb-5">{step.subtitle}</p>
              <p className="text-[13px] font-sans leading-relaxed text-ink/50 max-w-md">
                {step.desc}
              </p>
            </div>
            {/* SVG visual panel */}
            <div className="hidden md:flex w-full md:w-1/2 h-[220px] rounded-xl overflow-hidden items-center justify-center bg-[#0E1014] border border-white/[0.06] relative z-10 p-6">
              <step.Visual />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── About ─────────────────────────────────────────────────── */
function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.about-item', {
        scrollTrigger: { trigger: aboutRef.current, start: 'top 85%' },
        y: 22,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, aboutRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-28 px-6 md:px-12 bg-porcelain relative z-20">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl border border-ink/[0.06] p-8 md:p-12 flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* Avatar */}
          <div className="about-item w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden ring-2 ring-bronze/30 flex-shrink-0 shadow-sm">
            <img
              src="/martin.jpg"
              alt="Martin Popiel — Founder"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="about-item flex-1 min-w-0">
            <span className="font-data text-[10px] uppercase tracking-[0.2em] text-bronze">
              About
            </span>
            <h2 className="text-2xl md:text-[1.75rem] font-sans font-semibold text-ink mt-2.5 mb-0.5 tracking-tight">
              Martin Popiel, CPA
            </h2>
            <p className="text-ink/30 font-sans text-[13px] mb-7">
              Chartered Professional Accountant &middot; Entrepreneur &middot; Digital Nomad
            </p>
            <p className="text-[14px] font-sans leading-relaxed text-ink/55 mb-4">
              Martin built Blueprint after living the problem firsthand. An
              entrepreneur and business owner who has been location-independent
              for years, he spent time across 40+ countries and saw how
              disconnected the international advisory world was — one firm for
              banking, another for residency, another for tax, none of them
              talking to each other.
            </p>
            <p className="text-[14px] font-sans leading-relaxed text-ink/55 mb-8">
              Blueprint is the firm he wished existed: one team that sees the
              full picture and coordinates everything under one roof — partnering
              with local counsel in every jurisdiction to ensure every structure
              holds up.
            </p>

            {/* Credential badges */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 bg-porcelain px-3.5 py-1.5 rounded-full text-[10px] font-data uppercase tracking-[0.12em] text-ink/60 border border-ink/[0.07]">
                <ShieldCheck size={11} className="text-bronze" />
                CPA Ontario
              </span>
              <span className="inline-flex items-center gap-1.5 bg-porcelain px-3.5 py-1.5 rounded-full text-[10px] font-data uppercase tracking-[0.12em] text-ink/60 border border-ink/[0.07]">
                <Lightbulb size={11} className="text-bronze" />
                Entrepreneur
              </span>
              <span className="inline-flex items-center gap-1.5 bg-porcelain px-3.5 py-1.5 rounded-full text-[10px] font-data uppercase tracking-[0.12em] text-ink/60 border border-ink/[0.07]">
                <Plane size={11} className="text-bronze" />
                40+ Countries
              </span>
              <span className="inline-flex items-center gap-1.5 bg-porcelain px-3.5 py-1.5 rounded-full text-[10px] font-data uppercase tracking-[0.12em] text-ink/60 border border-ink/[0.07]">
                <Network size={11} className="text-bronze" />
                Global Partner Network
              </span>
              <a
                href="https://www.linkedin.com/in/martinpopiel/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#0A66C2]/10 px-3.5 py-1.5 rounded-full text-[10px] font-data uppercase tracking-[0.12em] text-[#0A66C2] border border-[#0A66C2]/20 hover:bg-[#0A66C2]/20 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─────────────────��─────────────────────────────────── */
const questions = [
  {
    icon: <Scale size={16} strokeWidth={1.5} />,
    q: 'Is this legal?',
    a: 'Yes. Everything we coordinate is fully legal and compliant. We work with licensed professionals in every jurisdiction — tax attorneys, immigration lawyers, banking compliance officers. There are no grey areas.',
  },
  {
    icon: <Clock size={16} strokeWidth={1.5} />,
    q: 'How long does this take?',
    a: 'It depends on your situation. Some structures can be in place within 6 months. More complex, multi-jurisdiction roadmaps can take a year or longer. We scope the timeline during your initial assessment.',
  },
  {
    icon: <Coins size={16} strokeWidth={1.5} />,
    q: 'How much does it cost?',
    a: "It depends on the scope. A single residency application is different from a full multi-jurisdiction structure. We provide a clear quote after the initial assessment — no hidden fees, no hourly billing surprises.",
  },
  {
    icon: <Users size={16} strokeWidth={1.5} />,
    q: 'I already have an accountant and lawyer. Do I still need this?',
    a: "Probably. Your local accountant and lawyer are great for domestic matters. But cross-border structuring requires coordination across multiple jurisdictions — that's the gap Blueprint fills. We work alongside your existing team, not against them.",
  },
  {
    icon: <RefreshCw size={16} strokeWidth={1.5} />,
    q: 'What if my situation changes after we build the structure?',
    a: "That's what the Maintain phase is for. Laws change, life changes. We handle renewals, annual filings, and structural adjustments so everything stays current and compliant.",
  },
];

function FAQ() {
  const faqRef = useRef(null);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.faq-header', {
        scrollTrigger: { trigger: faqRef.current, start: 'top 82%' },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
      gsap.from('.faq-item', {
        scrollTrigger: { trigger: faqRef.current, start: 'top 72%' },
        y: 22,
        opacity: 0,
        duration: 0.8,
        stagger: 0.09,
        ease: 'power3.out',
      });
    }, faqRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={faqRef} className="py-28 px-6 md:px-12 bg-ink text-porcelain">
      <div className="max-w-3xl mx-auto">
        <div className="faq-header mb-14">
          <span className="font-data text-[10px] uppercase tracking-[0.2em] text-bronze">
            FAQ
          </span>
          <h2 className="text-[2rem] md:text-[2.75rem] font-sans font-semibold tracking-tight text-porcelain leading-[1.08] mt-4">
            Common Questions
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-white/[0.07]">
          {questions.map((item, idx) => (
            <div key={idx} className="faq-item">
              <button
                className="w-full flex items-center gap-4 py-5 text-left group hover:bg-white/[0.03] px-2 -mx-2 rounded-lg transition-colors"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
              >
                <span className="text-bronze flex-shrink-0">{item.icon}</span>
                <span className="flex-1 text-[14px] md:text-[15px] font-sans font-medium text-porcelain group-hover:text-bronze transition-colors leading-snug">
                  {item.q}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-porcelain/30 flex-shrink-0 transition-transform duration-300 ${
                    open === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === idx ? 'max-h-56 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-[13px] font-sans leading-relaxed text-porcelain/50 pb-5 pl-8">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-ink text-porcelain border-t border-bronze/[0.12] pt-16 pb-10 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 pb-12 mb-10 border-b border-white/[0.07]">
          <div className="max-w-xs">
            <p className="font-sans font-semibold text-[15px] tracking-tight mb-3">
              Blueprint Global
            </p>
            <p className="font-sans text-porcelain/40 text-[13px] leading-relaxed">
              One firm. One plan. Your entire international structure — designed,
              built, and maintained under one roof.
            </p>
          </div>

          <div className="flex gap-14">
            <div className="flex flex-col gap-3">
              <span className="font-data text-[10px] uppercase tracking-[0.18em] text-bronze mb-1">
                Services
              </span>
              {['What We Do', 'How It Works', 'About'].map((label, i) => (
                <a
                  key={i}
                  href={i === 0 ? '#education' : i === 1 ? '#how-it-works' : '#about'}
                  className="font-sans text-[13px] text-porcelain/50 hover:text-porcelain transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-data text-[10px] uppercase tracking-[0.18em] text-bronze mb-1">
                Platform
              </span>
              <a
                href="https://app.blueprintglobal.io/onboarding"
                className="font-sans text-[13px] text-porcelain/50 hover:text-porcelain transition-colors"
              >
                Try the Demo
              </a>
              <a
                href="https://app.blueprintglobal.io/dashboard"
                className="font-sans text-[13px] text-porcelain/50 hover:text-porcelain transition-colors"
              >
                Client Login
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer — footer only */}
        <p className="font-sans text-porcelain/18 text-[11px] leading-relaxed max-w-3xl mb-8">
          Blueprint Global coordinates international structuring and
          project-manages the implementation process. We do not provide tax,
          legal, investment, or immigration advice. All advisory services are
          delivered by licensed professionals in their respective jurisdictions.
          Past outcomes do not guarantee future results. Each client&apos;s structure
          depends on their individual circumstances.
        </p>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-[11px] font-sans text-porcelain/22">
          <p>&copy; {new Date().getFullYear()} Blueprint Group LLC. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-porcelain transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-porcelain transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── App ───────────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="bg-ink min-h-screen">
      <BlueprintThread />
      <Navbar />
      <Hero />
      <TrustBand />
      <Education />
      <MidPageCTA variant="a" />
      <WhatYouGet />
      <SocialProof />
      <MidPageCTA variant="b" />
      <WhoThisIsFor />
      <HowItWorks />
      <MidPageCTA variant="c" />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
}
