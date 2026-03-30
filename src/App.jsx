import React, { useState, useEffect } from 'react';
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

/* ─── Mid-Page CTA ──────────────────────────────────────────── */
function MidPageCTA({ headline, dark = false }) {
  return (
    <section
      className={`${
        dark
          ? 'bg-ink border-white/[0.08] text-porcelain'
          : 'bg-porcelain border-ink/[0.08] text-ink'
      } py-20 px-6 border-t border-b`}
    >
      <div className="max-w-2xl mx-auto text-center">
        <p
          className={`font-sans text-base md:text-[17px] leading-relaxed mb-8 ${
            dark ? 'text-porcelain/60' : 'text-ink/55'
          }`}
        >
          {headline}
        </p>
        <a
          href="https://app.blueprintglobal.io/onboarding"
          className="inline-flex items-center gap-2 bg-bronze text-white px-7 py-3.5 rounded-full text-[13px] font-medium tracking-wide hover:bg-bronze/90 transition-colors"
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
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 px-5 py-3 flex items-center justify-between w-[92%] max-w-5xl rounded-full ${
        scrolled
          ? 'bg-porcelain/95 backdrop-blur-sm shadow-md border border-ink/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <span
        className={`font-sans font-semibold text-[16px] tracking-tight transition-colors duration-300 ${
          scrolled ? 'text-ink' : 'text-porcelain'
        }`}
      >
        Blueprint Global
      </span>

      <div
        className={`hidden md:flex items-center gap-7 text-[13px] font-medium transition-colors duration-300 ${
          scrolled ? 'text-ink/65' : 'text-porcelain/75'
        }`}
      >
        <a href="#education" className="hover:text-bronze transition-colors">
          What We Do
        </a>
        <a href="#how-it-works" className="hover:text-bronze transition-colors">
          How It Works
        </a>
        <a href="#about" className="hover:text-bronze transition-colors">
          About
        </a>
      </div>

      <div className="flex items-center gap-3">
        <a
          href="https://app.blueprintglobal.io/dashboard"
          className={`hidden md:block text-[13px] font-medium transition-colors duration-300 ${
            scrolled
              ? 'text-ink/55 hover:text-bronze'
              : 'text-porcelain/65 hover:text-white'
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
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-center px-6 md:px-12 lg:px-20 overflow-hidden bg-ink text-porcelain">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
          alt="Refined architecture"
          className="object-cover w-full h-full opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/25" />
      </div>

      <div className="relative z-10 max-w-4xl pt-28 pb-16">
        <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5.25rem] font-sans font-medium leading-[1.06] tracking-tight mb-7 text-balance">
          Your entire life is tied to one country.
          <br />
          It doesn't have to be.
        </h1>
        <p className="font-drama italic text-xl md:text-2xl text-bronze mb-5 max-w-xl leading-snug">
          We build your international life. You live it.
        </p>
        <p className="text-[15px] md:text-base text-porcelain/65 font-sans leading-relaxed max-w-xl mb-10">
          Blueprint designs and builds complete international structures for
          entrepreneurs, investors, and globally mobile families. Legally, under
          one roof.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="https://app.blueprintglobal.io/onboarding"
            className="bg-porcelain text-ink px-7 py-3.5 rounded-full text-[13px] font-medium flex items-center gap-2 hover:bg-white transition-colors"
          >
            Try the Demo <ArrowRight size={14} />
          </a>
        </div>

        <p className="text-[11px] text-porcelain/30 font-sans leading-relaxed max-w-md">
          Blueprint Global coordinates international structuring. We do not
          provide tax, legal, or investment advice. All structures are
          implemented by licensed professionals in their respective
          jurisdictions.
        </p>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-35">
        <span className="font-data text-[10px] uppercase tracking-[0.2em] text-porcelain">
          Scroll
        </span>
        <ChevronDown size={14} className="text-porcelain" />
      </div>
    </section>
  );
}

/* ─── Trust Band ────────────────────────────────────────────── */
function TrustBand() {
  return (
    <section className="bg-ink text-porcelain/55 py-14 px-6 border-b border-white/[0.06]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-white/[0.08]">
        <div className="sm:pr-12">
          <span className="font-data text-[10px] uppercase tracking-[0.18em] text-bronze/75">
            Approach
          </span>
          <p className="text-[16px] font-sans font-medium text-porcelain mt-2 leading-snug">
            One Firm. The Full Picture.
          </p>
        </div>
        <div className="sm:px-12">
          <span className="font-data text-[10px] uppercase tracking-[0.18em] text-bronze/75">
            Foundation
          </span>
          <p className="text-2xl font-sans font-medium text-porcelain mt-2 tracking-tight">
            CPA-Led
          </p>
        </div>
        <div className="sm:pl-12">
          <span className="font-data text-[10px] uppercase tracking-[0.18em] text-bronze/75">
            Priority
          </span>
          <p className="text-2xl font-sans font-medium text-porcelain mt-2 tracking-tight">
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
    icon: <Globe size={18} strokeWidth={1.5} />,
    title: 'Tax Residency',
    problem:
      "You're paying taxes based on where you were born — not where you live or earn.",
    solution:
      'We help you establish residency in jurisdictions that align with your actual lifestyle and income sources.',
  },
  {
    icon: <ShieldCheck size={18} strokeWidth={1.5} />,
    title: 'Banking & Capital Access',
    problem:
      'Your bank can freeze your account, restrict transfers, or close you out — with no warning.',
    solution:
      "We open accounts across stable jurisdictions so your capital is always accessible, never trapped.",
  },
  {
    icon: <Briefcase size={18} strokeWidth={1.5} />,
    title: 'Ownership Structures',
    problem:
      'Holding everything in your personal name means one lawsuit could take it all.',
    solution:
      'We design entity structures — trusts, foundations, holding companies — that separate you from your assets.',
  },
  {
    icon: <Landmark size={18} strokeWidth={1.5} />,
    title: 'Citizenship & Mobility',
    problem:
      'A single passport limits where you can live, work, and move freely.',
    solution:
      'We map pathways to second citizenships and residency permits that expand your options permanently.',
  },
  {
    icon: <Lock size={18} strokeWidth={1.5} />,
    title: 'Risk & Asset Protection',
    problem:
      'Political instability, lawsuits, or currency devaluation can wipe out years of progress overnight.',
    solution:
      'We spread your risk across jurisdictions so no single event can compromise your entire position.',
  },
  {
    icon: <HeartPulse size={18} strokeWidth={1.5} />,
    title: 'Healthcare Access',
    problem:
      "You're stuck with one country's healthcare system — long waits, limited options, no portability.",
    solution: 'We connect you with global health networks that follow you wherever you go.',
  },
  {
    icon: <GraduationCap size={18} strokeWidth={1.5} />,
    title: 'Education Planning',
    problem:
      "Your children's education options are limited to one country's school system.",
    solution:
      'We map international schooling and university pathways that keep doors open for the next generation.',
  },
  {
    icon: <Scale size={18} strokeWidth={1.5} />,
    title: 'Succession & Estate',
    problem:
      'Without cross-border planning, your estate could face double taxation or probate in multiple countries.',
    solution:
      'We structure succession plans that transfer wealth cleanly across borders, without legal friction.',
  },
  {
    icon: <Coins size={18} strokeWidth={1.5} />,
    title: 'Digital Asset Integration',
    problem:
      'Crypto profits sit in a grey zone — hard to bank, hard to spend, easy to lose to bad compliance.',
    solution:
      'We build compliant bridges between your digital holdings and the traditional financial system.',
  },
];

function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 bg-porcelain">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <span className="font-data text-[10px] uppercase tracking-[0.18em] text-bronze">
            What We Do
          </span>
          <h2 className="text-3xl md:text-[2.5rem] font-sans font-medium tracking-tight text-ink leading-[1.1] mt-4 text-balance">
            Most people don't know these problems exist — until they're stuck.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {eduCards.map((card, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl border border-ink/[0.06] p-6 flex flex-col hover:-translate-y-[2px] transition-transform duration-300"
            >
              {/* Icon */}
              <div className="w-9 h-9 rounded-xl bg-porcelain flex items-center justify-center mb-5 text-bronze flex-shrink-0">
                {card.icon}
              </div>
              <h3 className="text-[15px] font-sans font-semibold text-ink mb-3 leading-tight">
                {card.title}
              </h3>
              <div className="h-px w-full bg-ink/[0.07] mb-4" />
              <p className="text-[13px] font-sans leading-relaxed text-ink/55 mb-3">
                <span className="font-semibold text-ink/75">The problem: </span>
                {card.problem}
              </p>
              <p className="text-[13px] font-sans leading-relaxed text-ink/55 flex-grow">
                <span className="font-semibold text-ink/75">What we do: </span>
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
  return (
    <section className="relative py-28 px-6 md:px-12 bg-ink text-porcelain overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop"
          alt=""
          role="presentation"
          className="w-full h-full object-cover opacity-[0.06]"
        />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="font-sans text-[17px] md:text-xl text-porcelain/45 font-light mb-5 leading-relaxed">
          Knowing the problems is step one.
        </p>
        <p className="font-drama italic text-[2.25rem] md:text-5xl text-bronze mb-12 leading-[1.1]">
          Here's what you actually walk away with.
        </p>
        <div className="h-12 w-px bg-bronze/35 mx-auto" />
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
  return (
    <section className="py-24 px-6 md:px-12 bg-porcelain">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <span className="font-data text-[10px] uppercase tracking-[0.18em] text-bronze">
            What You Get
          </span>
          <h2 className="text-3xl md:text-[2.5rem] font-sans font-medium tracking-tight text-ink leading-[1.1] mt-4 text-balance">
            Tangible outcomes. Not just advice.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {deliverables.map((item, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl border border-ink/[0.06] p-6 flex flex-col hover:-translate-y-[2px] transition-transform duration-300"
            >
              <span className="font-data text-[2rem] text-bronze/20 mb-4 block leading-none">
                {item.num}
              </span>
              <h3 className="text-[15px] font-sans font-semibold text-ink mb-3 leading-tight">
                {item.title}
              </h3>
              <div className="h-px w-full bg-ink/[0.07] mb-4" />
              <p className="text-[13px] font-sans leading-relaxed text-ink/55 flex-grow">
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
  return (
    <section className="bg-ink py-24 px-6 md:px-12 border-t border-white/[0.06]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-14">
          <span className="font-data text-[10px] uppercase tracking-[0.18em] text-bronze">
            Who This Is For
          </span>
          <h2 className="text-3xl md:text-[2.5rem] font-sans font-medium tracking-tight text-porcelain leading-[1.1] mt-4">
            This is for you if...
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-white/[0.08]">
          {whoItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 py-5 first:pt-0">
              <CheckCircle
                size={17}
                className="text-bronze mt-0.5 flex-shrink-0"
                strokeWidth={1.5}
              />
              <p className="text-porcelain/70 font-sans text-[15px] leading-relaxed">
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
    desc: 'We start with a detailed assessment: where you live, where your income comes from, what you own, and where you want to go. No recommendations until we understand the full picture.',
  },
  {
    num: '02',
    title: 'Build',
    subtitle: 'We design and execute your structure.',
    desc: 'We create your custom blueprint — then execute it. Bank accounts, entities, residency applications, compliance filings. Everything coordinated by one team, in the right sequence.',
  },
  {
    num: '03',
    title: 'Maintain',
    subtitle: 'We keep it running.',
    desc: "Laws change. Your life changes. We handle renewals, annual filings, and adjustments so your structure stays current and compliant — without you having to track it all yourself.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-porcelain py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="font-data text-[10px] uppercase tracking-[0.18em] text-bronze">
            How It Works
          </span>
          <h2 className="text-3xl md:text-[2.5rem] font-sans font-medium tracking-tight text-ink leading-[1.1] mt-4">
            Map. Build. Maintain.
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-ink/[0.06] p-7 md:p-10 flex flex-col sm:flex-row gap-6 sm:gap-10 items-start"
            >
              {/* Number + content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-data text-[2.5rem] text-bronze/18 leading-none flex-shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-xl font-sans font-semibold text-ink leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-bronze font-sans text-[13px] mt-0.5">
                      {step.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-[13px] font-sans leading-relaxed text-ink/55 max-w-lg">
                  {step.desc}
                </p>
              </div>
              {/* Step badge */}
              <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-xl bg-porcelain border border-ink/[0.06] flex-shrink-0 self-center">
                <span className="font-data text-[9px] uppercase tracking-[0.22em] text-ink/25 text-center leading-tight">
                  Step<br />{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About ─────────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-porcelain">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border border-ink/[0.06] p-8 md:p-10 flex flex-col sm:flex-row items-start gap-7">
          {/* Avatar */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden ring-2 ring-porcelain flex-shrink-0">
            <img
              src="/martin.jpg"
              alt="Martin Popiel — Founder"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="flex-1 min-w-0">
            <span className="font-data text-[10px] uppercase tracking-[0.18em] text-bronze">
              About
            </span>
            <h2 className="text-xl md:text-2xl font-sans font-semibold text-ink mt-2 mb-0.5">
              Martin Popiel, CPA
            </h2>
            <p className="text-ink/35 font-sans text-[13px] mb-6">
              Chartered Professional Accountant (CPA)
            </p>
            <p className="text-[13px] font-sans leading-relaxed text-ink/55 mb-4">
              Martin built Blueprint after living the problem firsthand. After
              visiting 40+ countries, he saw how disconnected the international
              advisory world was — one firm for banking, another for residency,
              another for tax, none of them talking to each other.
            </p>
            <p className="text-[13px] font-sans leading-relaxed text-ink/55 mb-7">
              Blueprint is the firm he wished existed: one team that sees the
              full picture and coordinates everything under one roof — partnering
              with local counsel in every jurisdiction to ensure every structure
              holds up.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 bg-porcelain px-3 py-1.5 rounded-full text-[10px] font-data uppercase tracking-[0.12em] text-ink/65 border border-ink/[0.07]">
                <MapPin size={11} className="text-bronze" />
                40+ Countries
              </span>
              <span className="inline-flex items-center gap-1.5 bg-porcelain px-3 py-1.5 rounded-full text-[10px] font-data uppercase tracking-[0.12em] text-ink/65 border border-ink/[0.07]">
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
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 px-6 md:px-12 bg-ink text-porcelain">
      <div className="max-w-3xl mx-auto">
        <div className="mb-14">
          <span className="font-data text-[10px] uppercase tracking-[0.18em] text-bronze">
            FAQ
          </span>
          <h2 className="text-3xl md:text-[2.5rem] font-sans font-medium tracking-tight text-porcelain leading-[1.1] mt-4">
            Common Questions
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-white/[0.08]">
          {questions.map((item, idx) => (
            <div key={idx}>
              <button
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
              >
                <span className="text-[14px] font-sans font-medium text-porcelain group-hover:text-bronze transition-colors leading-snug">
                  {item.q}
                </span>
                <ChevronDown
                  size={15}
                  className={`text-bronze flex-shrink-0 transition-transform duration-200 ${
                    open === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {open === idx && (
                <p className="text-[13px] font-sans leading-relaxed text-porcelain/50 pb-5">
                  {item.a}
                </p>
              )}
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
    <footer className="bg-ink text-porcelain border-t border-white/[0.08] pt-16 pb-10 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 pb-12 mb-10 border-b border-white/[0.08]">
          <div className="max-w-xs">
            <p className="font-sans font-semibold text-[16px] tracking-tight mb-3">
              Blueprint Global
            </p>
            <p className="font-sans text-porcelain/45 text-[13px] leading-relaxed">
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
                  className="font-sans text-[13px] text-porcelain/55 hover:text-porcelain transition-colors"
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
                className="font-sans text-[13px] text-porcelain/55 hover:text-porcelain transition-colors"
              >
                Try the Demo
              </a>
              <a
                href="https://app.blueprintglobal.io/dashboard"
                className="font-sans text-[13px] text-porcelain/55 hover:text-porcelain transition-colors"
              >
                Client Login
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="font-sans text-porcelain/20 text-[11px] leading-relaxed max-w-3xl mb-8">
          Blueprint Global coordinates international structuring and
          project-manages the implementation process. We do not provide tax,
          legal, investment, or immigration advice. All advisory services are
          delivered by licensed professionals in their respective jurisdictions.
          Past outcomes do not guarantee future results. Each client's structure
          depends on their individual circumstances.
        </p>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-[11px] font-sans text-porcelain/25">
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
