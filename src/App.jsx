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
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Mid-Page CTA ──────────────────────────────────────────── */
function MidPageCTA({ headline, dark = false }) {
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

  return (
    <section
      ref={ref}
      className={`${
        dark
          ? 'bg-ink border-white/[0.07] text-porcelain'
          : 'bg-porcelain border-ink/[0.07] text-ink'
      } py-20 px-6 border-t border-b`}
    >
      <div className="midcta-inner max-w-xl mx-auto text-center">
        <p
          className={`font-drama italic text-[1.6rem] md:text-[1.9rem] leading-[1.2] mb-8 text-balance ${
            dark ? 'text-porcelain/80' : 'text-ink/75'
          }`}
        >
          {headline}
        </p>
        <a
          href="https://app.blueprintglobal.io/onboarding"
          className="inline-flex items-center gap-2 bg-bronze text-white px-8 py-3.5 rounded-full text-[13px] font-medium tracking-wide hover:bg-bronze/90 transition-colors"
        >
          Try the Demo <ArrowRight size={14} />
        </a>
        <p
          className={`font-data text-[10px] uppercase tracking-[0.18em] mt-5 ${
            dark ? 'text-porcelain/25' : 'text-ink/25'
          }`}
        >
          Free. No account required.
        </p>
      </div>
    </section>
  );
}

/* ─── Navbar ────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
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

      <div
        className={`hidden md:flex items-center gap-7 text-[13px] font-medium transition-colors duration-500 ${
          scrolled ? 'text-ink/60' : 'text-porcelain/70'
        }`}
      >
        <a href="#education" className="hover:text-bronze transition-colors hover:-translate-y-px transform inline-block">
          What We Do
        </a>
        <a href="#how-it-works" className="hover:text-bronze transition-colors hover:-translate-y-px transform inline-block">
          How It Works
        </a>
        <a href="#about" className="hover:text-bronze transition-colors hover:-translate-y-px transform inline-block">
          About
        </a>
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
      </div>
    </nav>
  );
}

/* ─── Hero ──────────────────────────────────────────────────── */
function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Background image subtle scale-in
      gsap.from('.hero-image', {
        scale: 1.06,
        duration: 2.2,
        ease: 'power3.out',
      });
      // Text elements stagger up
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
        {/* Two-layer overlay: top vignette + bottom ink pool for legibility */}
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

        {/* H1 — maximum legibility at all breakpoints */}
        <h1 className="hero-text font-sans font-semibold text-[2.6rem] sm:text-5xl md:text-[3.75rem] lg:text-[4.75rem] leading-[1.04] tracking-[-0.02em] mb-4 text-balance text-white">
          Your entire life is tied<br className="hidden sm:block" /> to one country.
        </h1>
        <h2 className="hero-text font-sans font-semibold text-[2.6rem] sm:text-5xl md:text-[3.75rem] lg:text-[4.75rem] leading-[1.04] tracking-[-0.02em] mb-8 text-balance text-white/40">
          It doesn&apos;t have to be.
        </h2>

        {/* Italic tagline — visual counterpoint */}
        <p className="hero-text font-drama italic text-[1.45rem] md:text-[1.75rem] text-bronze leading-snug mb-6 max-w-lg">
          We build your international life. You live it.
        </p>

        {/* Body */}
        <p className="hero-text text-[15px] md:text-[16px] text-porcelain/60 font-sans leading-relaxed max-w-[38rem] mb-10">
          Blueprint designs and builds complete international structures for
          entrepreneurs, investors, and globally mobile families. Legally, under
          one roof.
        </p>

        {/* CTA group */}
        <div className="hero-text flex flex-wrap items-center gap-4 mb-8">
          <a
            href="https://app.blueprintglobal.io/onboarding"
            className="inline-flex items-center gap-2 bg-porcelain text-ink px-8 py-4 rounded-full text-[14px] font-semibold hover:bg-white transition-colors"
          >
            Try the Demo <ArrowRight size={15} />
          </a>
          <a
            href="#education"
            className="inline-flex items-center gap-2 text-porcelain/55 text-[13px] font-sans hover:text-porcelain transition-colors"
          >
            See what we do <ChevronDown size={14} className="mt-px" />
          </a>
        </div>

        {/* Trust micro-copy */}
        <p className="hero-text text-[11px] text-porcelain/25 font-sans leading-relaxed max-w-md">
          Blueprint Global coordinates international structuring. We do not
          provide tax, legal, or investment advice. All structures are
          implemented by licensed professionals in their respective
          jurisdictions.
        </p>
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
        <div className="trust-item sm:pr-12">
          <span className="font-data text-[10px] uppercase tracking-[0.18em] text-bronze/75">
            Approach
          </span>
          <p className="text-[17px] font-sans font-medium text-porcelain mt-2 leading-snug tracking-tight">
            One Firm. The Full Picture.
          </p>
        </div>
        <div className="trust-item sm:px-12">
          <span className="font-data text-[10px] uppercase tracking-[0.18em] text-bronze/75">
            Foundation
          </span>
          <p className="text-[1.6rem] font-sans font-medium text-porcelain mt-2 tracking-tight">
            CPA-Led
          </p>
        </div>
        <div className="trust-item sm:pl-12">
          <span className="font-data text-[10px] uppercase tracking-[0.18em] text-bronze/75">
            Priority
          </span>
          <p className="text-[1.6rem] font-sans font-medium text-porcelain mt-2 tracking-tight">
            Compliance-First
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Education ─────────────────────────────────────────────── */
const eduCards = [
  {
    icon: <Globe size={20} strokeWidth={1.5} />,
    title: 'Tax Residency',
    problem:
      "You're paying taxes based on where you were born — not where you live or earn.",
    solution:
      'We help you establish residency in jurisdictions that align with your actual lifestyle and income sources.',
  },
  {
    icon: <ShieldCheck size={20} strokeWidth={1.5} />,
    title: 'Banking & Capital Access',
    problem:
      'Your bank can freeze your account, restrict transfers, or close you out — with no warning.',
    solution:
      "We open accounts across stable jurisdictions so your capital is always accessible, never trapped.",
  },
  {
    icon: <Briefcase size={20} strokeWidth={1.5} />,
    title: 'Ownership Structures',
    problem:
      'Holding everything in your personal name means one lawsuit could take it all.',
    solution:
      'We design entity structures — trusts, foundations, holding companies — that separate you from your assets.',
  },
  {
    icon: <Landmark size={20} strokeWidth={1.5} />,
    title: 'Citizenship & Mobility',
    problem:
      'A single passport limits where you can live, work, and move freely.',
    solution:
      'We map pathways to second citizenships and residency permits that expand your options permanently.',
  },
  {
    icon: <Lock size={20} strokeWidth={1.5} />,
    title: 'Risk & Asset Protection',
    problem:
      'Political instability, lawsuits, or currency devaluation can wipe out years of progress overnight.',
    solution:
      'We spread your risk across jurisdictions so no single event can compromise your entire position.',
  },
  {
    icon: <HeartPulse size={20} strokeWidth={1.5} />,
    title: 'Healthcare Access',
    problem:
      "You're stuck with one country's healthcare system — long waits, limited options, no portability.",
    solution: 'We connect you with global health networks that follow you wherever you go.',
  },
  {
    icon: <GraduationCap size={20} strokeWidth={1.5} />,
    title: 'Education Planning',
    problem:
      "Your children's education options are limited to one country's school system.",
    solution:
      'We map international schooling and university pathways that keep doors open for the next generation.',
  },
  {
    icon: <Scale size={20} strokeWidth={1.5} />,
    title: 'Succession & Estate',
    problem:
      'Without cross-border planning, your estate could face double taxation or probate in multiple countries.',
    solution:
      'We structure succession plans that transfer wealth cleanly across borders, without legal friction.',
  },
  {
    icon: <Coins size={20} strokeWidth={1.5} />,
    title: 'Digital Asset Integration',
    problem:
      'Crypto profits sit in a grey zone — hard to bank, hard to spend, easy to lose to bad compliance.',
    solution:
      'We build compliant bridges between your digital holdings and the traditional financial system.',
  },
];

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
        <div className="edu-header mb-16 max-w-2xl">
          <span className="font-data text-[10px] uppercase tracking-[0.2em] text-bronze">
            What We Do
          </span>
          <h2 className="text-[2rem] md:text-[2.75rem] font-sans font-semibold tracking-tight text-ink leading-[1.08] mt-4 text-balance">
            Most people don&apos;t know these problems exist — until they&apos;re stuck.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {eduCards.map((card, idx) => (
            <article
              key={idx}
              className="edu-card bg-white rounded-2xl border border-ink/[0.06] p-7 flex flex-col hover:-translate-y-1 transition-transform duration-500 group"
            >
              <div className="w-10 h-10 rounded-xl bg-porcelain flex items-center justify-center mb-5 text-bronze flex-shrink-0 group-hover:bg-bronze/10 transition-colors duration-300">
                {card.icon}
              </div>
              <h3 className="text-[15px] font-sans font-semibold text-ink mb-3 leading-tight">
                {card.title}
              </h3>
              <div className="h-px w-full bg-ink/[0.07] mb-4" />
              <p className="text-[13px] font-sans leading-relaxed text-ink/50 mb-3">
                <span className="font-semibold text-ink/70">The problem: </span>
                {card.problem}
              </p>
              <p className="text-[13px] font-sans leading-relaxed text-ink/50 flex-grow">
                <span className="font-semibold text-ink/70">What we do: </span>
                {card.solution}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Bridge ────────────────────────────────────────────────── */
function Bridge() {
  const bridgeRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.bridge-text', {
        scrollTrigger: { trigger: bridgeRef.current, start: 'top 78%' },
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: 'power3.out',
      });
    }, bridgeRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={bridgeRef}
      className="relative py-28 px-6 md:px-12 bg-ink text-porcelain overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop"
          alt=""
          role="presentation"
          className="w-full h-full object-cover opacity-[0.07]"
        />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="bridge-text font-sans text-[17px] md:text-xl text-porcelain/40 font-light mb-6 leading-relaxed">
          Knowing the problems is step one.
        </p>
        <p className="bridge-text font-drama italic text-[2.4rem] md:text-[3.25rem] lg:text-[3.75rem] text-bronze mb-14 leading-[1.1] text-balance">
          Here&apos;s what you actually walk away with.
        </p>
        <div className="bridge-text h-14 w-px bg-bronze/30 mx-auto" />
      </div>
    </section>
  );
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
      gsap.from('.get-card', {
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
      <div className="max-w-6xl mx-auto">
        <div className="get-header mb-16 max-w-2xl">
          <span className="font-data text-[10px] uppercase tracking-[0.2em] text-bronze">
            What You Get
          </span>
          <h2 className="text-[2rem] md:text-[2.75rem] font-sans font-semibold tracking-tight text-ink leading-[1.08] mt-4 text-balance">
            Tangible outcomes. Not just advice.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {deliverables.map((item, idx) => (
            <article
              key={idx}
              className="get-card bg-white rounded-2xl border border-ink/[0.06] p-7 flex flex-col hover:-translate-y-1 transition-transform duration-500"
            >
              <span className="font-data text-[2.25rem] text-bronze/18 mb-4 block leading-none">
                {item.num}
              </span>
              <h3 className="text-[15px] font-sans font-semibold text-ink mb-3 leading-tight">
                {item.title}
              </h3>
              <div className="h-px w-full bg-ink/[0.07] mb-4" />
              <p className="text-[13px] font-sans leading-relaxed text-ink/50 flex-grow">
                {item.desc}
              </p>
            </article>
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
    <section ref={whoRef} className="bg-ink py-28 px-6 md:px-12 border-t border-white/[0.06]">
      <div className="max-w-3xl mx-auto">
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

/* ─── How It Works ──────────────────────────────────────────── */
const steps = [
  {
    num: '01',
    title: 'Map',
    subtitle: 'We learn your situation.',
    keyword: 'MAP',
    desc: 'We start with a detailed assessment: where you live, where your income comes from, what you own, and where you want to go. No recommendations until we understand the full picture.',
  },
  {
    num: '02',
    title: 'Build',
    subtitle: 'We design and execute your structure.',
    keyword: 'BUILD',
    desc: 'We create your custom blueprint — then execute it. Bank accounts, entities, residency applications, compliance filings. Everything coordinated by one team, in the right sequence.',
  },
  {
    num: '03',
    title: 'Maintain',
    subtitle: 'We keep it running.',
    keyword: 'MAINTAIN',
    desc: "Laws change. Your life changes. We handle renewals, annual filings, and adjustments so your structure stays current and compliant — without you having to track it all yourself.",
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
            {/* Visual panel */}
            <div className="hidden md:flex w-full md:w-1/2 h-[240px] rounded-xl overflow-hidden items-center justify-center bg-[#0E1014] border border-white/[0.06] relative z-10">
              <span className="font-data text-[3.5rem] tracking-[0.28em] uppercase text-white/[0.05] select-none">
                {step.keyword}
              </span>
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
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border border-ink/[0.06] p-8 md:p-12 flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* Avatar */}
          <div className="about-item w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-porcelain flex-shrink-0 shadow-sm">
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
              Chartered Professional Accountant (CPA)
            </p>
            <p className="text-[14px] font-sans leading-relaxed text-ink/55 mb-4">
              Martin built Blueprint after living the problem firsthand. After
              visiting 40+ countries, he saw how disconnected the international
              advisory world was — one firm for banking, another for residency,
              another for tax, none of them talking to each other.
            </p>
            <p className="text-[14px] font-sans leading-relaxed text-ink/55 mb-8">
              Blueprint is the firm he wished existed: one team that sees the
              full picture and coordinates everything under one roof — partnering
              with local counsel in every jurisdiction to ensure every structure
              holds up.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 bg-porcelain px-3.5 py-1.5 rounded-full text-[10px] font-data uppercase tracking-[0.12em] text-ink/60 border border-ink/[0.07]">
                <MapPin size={11} className="text-bronze" />
                40+ Countries
              </span>
              <span className="inline-flex items-center gap-1.5 bg-porcelain px-3.5 py-1.5 rounded-full text-[10px] font-data uppercase tracking-[0.12em] text-ink/60 border border-ink/[0.07]">
                <Network size={11} className="text-bronze" />
                Global Partner Network
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ───────────────────────────────────────────────────── */
const questions = [
  {
    q: 'Is this legal?',
    a: 'Yes. Everything we coordinate is fully legal and compliant. We work with licensed professionals in every jurisdiction — tax attorneys, immigration lawyers, banking compliance officers. There are no grey areas.',
  },
  {
    q: 'How long does this take?',
    a: 'It depends on your situation. Some structures can be in place within 6 months. More complex, multi-jurisdiction roadmaps can take a year or longer. We scope the timeline during your initial assessment.',
  },
  {
    q: 'How much does it cost?',
    a: "It depends on the scope. A single residency application is different from a full multi-jurisdiction structure. We provide a clear quote after the initial assessment — no hidden fees, no hourly billing surprises.",
  },
  {
    q: 'I already have an accountant and lawyer. Do I still need this?',
    a: "Probably. Your local accountant and lawyer are great for domestic matters. But cross-border structuring requires coordination across multiple jurisdictions — that's the gap Blueprint fills. We work alongside your existing team, not against them.",
  },
  {
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
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
              >
                <span className="text-[14px] md:text-[15px] font-sans font-medium text-porcelain group-hover:text-bronze transition-colors leading-snug">
                  {item.q}
                </span>
                <ChevronDown
                  size={15}
                  className={`text-bronze flex-shrink-0 transition-transform duration-300 ${
                    open === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-[13px] font-sans leading-relaxed text-porcelain/50 pb-5">
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
    <footer className="bg-ink text-porcelain border-t border-white/[0.07] pt-16 pb-10 px-6 md:px-12">
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

        {/* Disclaimer */}
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
          <p>
            &copy; {new Date().getFullYear()} Blueprint Group LLC. All rights
            reserved. CPA Ontario, Canada.
          </p>
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
      <Navbar />
      <Hero />
      <TrustBand />
      <Education />
      <MidPageCTA headline="These problems are solvable. Here's what you walk away with." />
      <Bridge />
      <WhatYouGet />
      <MidPageCTA headline="Sound like what you need? Let's talk." dark />
      <WhoThisIsFor />
      <HowItWorks />
      <MidPageCTA headline="Ready to start mapping your structure?" />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
}
