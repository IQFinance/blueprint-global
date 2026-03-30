import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Globe, Briefcase, ArrowRight, Compass, Network, Vault, Landmark, Lock, Coins, HeartPulse, GraduationCap, Scale, CheckCircle, FileText, MapPin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function MidPageCTA({ headline, dark = false }) {
  const bg = dark ? 'bg-ink border-surface/10' : 'bg-porcelain border-graphite/10';
  const sub = dark ? 'text-surface/60' : 'text-graphite';
  return (
    <section className={`${bg} py-12 px-6 md:px-12 border-t border-b relative z-10`}>
      <div className="max-w-3xl mx-auto text-center">
        <p className={`${sub} font-sans text-lg mb-6`}>{headline}</p>
        <a href="https://app.blueprintglobal.io/onboarding" className="inline-flex items-center gap-2 bg-bronze text-white px-8 py-4 rounded-[2rem] text-sm font-medium hover:scale-[1.02] transition-transform shadow-sm">
          Try the Demo <ArrowRight size={16} />
        </a>
        <p className={`${sub} font-data text-xs uppercase tracking-widest mt-6 opacity-60`}>Free. No account required.</p>
      </div>
    </section>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 rounded-[2rem] px-6 py-3 flex items-center justify-between w-[90%] max-w-6xl ${scrolled ? 'bg-porcelain/90 backdrop-blur-md shadow-sm border border-graphite/5' : 'bg-transparent'}`}>
      <div className={`font-sans font-semibold text-xl tracking-tight ${scrolled ? 'text-ink' : 'text-porcelain'} transition-colors duration-500`}>Blueprint Global</div>
      <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${scrolled ? 'text-ink' : 'text-porcelain/90'} transition-colors duration-500`}>
        <a href="#education" className="hover:text-bronze transition-colors hover:-translate-y-[1px] transform inline-block">What We Do</a>
        <a href="#how-it-works" className="hover:text-bronze transition-colors hover:-translate-y-[1px] transform inline-block">How It Works</a>
        <a href="#about" className="hover:text-bronze transition-colors hover:-translate-y-[1px] transform inline-block">About</a>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://app.blueprintglobal.io/dashboard" className={`hidden md:block font-sans text-[15px] font-medium transition-colors ${scrolled ? 'text-ink/80 hover:text-bronze' : 'text-porcelain/80 hover:text-white'}`}>Client Login</a>
        <a href="https://app.blueprintglobal.io/onboarding" className="bg-bronze text-white px-5 py-2.5 rounded-[2rem] text-sm font-medium flex items-center gap-2 hover:scale-[1.02] transition-transform shadow-sm">
          <span>Try the Demo</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 40, opacity: 0, duration: 1.2, stagger: 0.08, ease: 'power3.out', delay: 0.2
      });
      gsap.from('.hero-image', {
        scale: 1.05, duration: 2, ease: 'power3.out'
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[100dvh] w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden bg-ink text-surface pt-16">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
          alt="Refined architecture"
          className="hero-image object-cover w-full h-full opacity-[0.65]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/20 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-4xl mt-[-5dvh]">
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight mb-6 text-balance">
          <span className="block hero-text font-sans font-medium">Your entire life is tied to one country.</span>
          <span className="block hero-text font-sans font-medium mt-2">It doesn't have to be.</span>
        </h1>
        <p className="hero-text font-drama italic text-2xl md:text-3xl text-bronze mb-6 max-w-3xl">
          We build your international life. You live it.
        </p>
        <p className="hero-text text-lg md:text-xl text-porcelain/80 font-sans leading-relaxed max-w-2xl mb-10">
          Blueprint designs and builds complete international structures for entrepreneurs, investors, and globally mobile families. Legally, under one roof.
        </p>
        <div className="hero-text flex gap-4">
          <a href="https://app.blueprintglobal.io/onboarding" className="bg-surface text-ink px-8 py-4 rounded-[2rem] text-sm font-medium flex items-center gap-2 hover:scale-[1.02] transition-transform">
            Try the Demo
            <ArrowRight size={16} />
          </a>
        </div>
        <p className="hero-text text-xs text-porcelain/40 font-sans mt-4 max-w-lg">
          Blueprint Global coordinates international structuring. We do not provide tax, legal, or investment advice. All structures are implemented by licensed professionals in their respective jurisdictions.
        </p>
      </div>
    </section>
  );
}

function TrustBand() {
  return (
    <section className="bg-ink text-surface/70 py-16 px-6 border-b border-surface/5 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-4">
        <div className="flex flex-col md:border-r border-surface/10 w-full md:w-1/3">
          <span className="font-data text-xs uppercase tracking-widest text-bronze/90">Approach</span>
          <span className="text-2xl font-sans mt-2 text-surface tracking-tight leading-tight">One Firm. The Full Picture.</span>
        </div>
        <div className="flex flex-col md:border-r border-surface/10 w-full md:w-1/3 md:pl-8">
          <span className="font-data text-xs uppercase tracking-widest text-bronze/90">Foundation</span>
          <span className="text-3xl font-sans mt-2 text-surface tracking-tight">CPA-Led</span>
        </div>
        <div className="flex flex-col w-full md:w-1/3 md:pl-8">
          <span className="font-data text-xs uppercase tracking-widest text-bronze/90">Priority</span>
          <span className="text-3xl font-sans mt-2 text-surface tracking-tight">Compliance-First</span>
        </div>
      </div>
    </section>
  );
}

function Education() {
  const eduRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.edu-header', {
        scrollTrigger: { trigger: eduRef.current, start: 'top 80%' },
        y: 30, opacity: 0, duration: 1, ease: 'power3.out'
      });
      gsap.from('.edu-card', {
        scrollTrigger: { trigger: eduRef.current, start: 'top 70%' },
        y: 40, opacity: 0, duration: 1, stagger: 0.08, ease: 'power3.out'
      });
    }, eduRef);
    return () => ctx.revert();
  }, []);

  const cards = [
    {
      icon: <Globe size={24} strokeWidth={1.5} />,
      title: "Tax Residency",
      problem: "You're paying taxes based on where you were born — not where you live or earn.",
      solution: "We help you establish residency in jurisdictions that align with your actual lifestyle and income sources."
    },
    {
      icon: <ShieldCheck size={24} strokeWidth={1.5} />,
      title: "Banking & Capital Access",
      problem: "Your bank can freeze your account, restrict transfers, or close you out — with no warning.",
      solution: "We open accounts across stable jurisdictions so your capital is always accessible, never trapped."
    },
    {
      icon: <Briefcase size={24} strokeWidth={1.5} />,
      title: "Ownership Structures",
      problem: "Holding everything in your personal name means one lawsuit could take it all.",
      solution: "We design entity structures — trusts, foundations, holding companies — that separate you from your assets."
    },
    {
      icon: <Landmark size={24} strokeWidth={1.5} />,
      title: "Citizenship & Mobility",
      problem: "A single passport limits where you can live, work, and move freely.",
      solution: "We map pathways to second citizenships and residency permits that expand your options permanently."
    },
    {
      icon: <Lock size={24} strokeWidth={1.5} />,
      title: "Risk & Asset Protection",
      problem: "Political instability, lawsuits, or currency devaluation can wipe out years of progress overnight.",
      solution: "We spread your risk across jurisdictions so no single event can compromise your entire position."
    },
    {
      icon: <HeartPulse size={24} strokeWidth={1.5} />,
      title: "Healthcare Access",
      problem: "You're stuck with one country's healthcare system — long waits, limited options, no portability.",
      solution: "We connect you with global health networks that follow you wherever you go."
    },
    {
      icon: <GraduationCap size={24} strokeWidth={1.5} />,
      title: "Education Planning",
      problem: "Your children's education options are limited to one country's school system.",
      solution: "We map international schooling and university pathways that keep doors open for the next generation."
    },
    {
      icon: <Scale size={24} strokeWidth={1.5} />,
      title: "Succession & Estate",
      problem: "Without cross-border planning, your estate could face double taxation or probate in multiple countries.",
      solution: "We structure succession plans that transfer wealth cleanly across borders, without legal friction."
    },
    {
      icon: <Coins size={24} strokeWidth={1.5} />,
      title: "Digital Asset Integration",
      problem: "Crypto profits sit in a grey zone — hard to bank, hard to spend, easy to lose to bad compliance.",
      solution: "We build compliant bridges between your digital holdings and the traditional financial system."
    }
  ];

  return (
    <section ref={eduRef} id="education" className="py-20 px-6 md:px-12 bg-porcelain">
      <div className="max-w-6xl mx-auto">
        <div className="edu-header mb-14 max-w-2xl">
          <h2 className="font-data text-xs uppercase tracking-widest text-bronze mb-5">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-ink leading-[1.1]">Most people don't know these problems exist — until they're stuck.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
          {cards.map((card, idx) => (
            <div key={idx} className="edu-card flex flex-col h-full bg-white p-10 rounded-[2.5rem] border border-graphite/5 shadow-sm hover:-translate-y-[2px] transition-transform duration-500">
              <div className="w-14 h-14 rounded-full bg-porcelain flex items-center justify-center mb-8 text-bronze">
                {card.icon}
              </div>
              <h4 className="text-2xl font-sans font-medium mb-4 text-ink">{card.title}</h4>
              <div className="h-px w-full bg-graphite/10 mb-5"></div>
              <p className="text-graphite font-sans leading-relaxed text-[15px] mb-4">
                <span className="font-medium text-ink">The problem:</span> {card.problem}
              </p>
              <p className="text-graphite font-sans leading-relaxed text-[15px] flex-grow">
                <span className="font-medium text-ink">What we do:</span> {card.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Bridge() {
  const bridgeRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.bridge-text', {
        scrollTrigger: { trigger: bridgeRef.current, start: 'top 75%' },
        y: 40, opacity: 0, duration: 1.2, stagger: 0.1, ease: 'power3.out'
      });
    }, bridgeRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={bridgeRef} className="relative py-24 px-6 md:px-12 bg-ink text-surface overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop"
          alt="Abstract architecture texture"
          className="w-full h-full object-cover opacity-[0.08]"
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="bridge-text font-sans text-xl md:text-3xl text-surface/60 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
          Knowing the problems is step one.
        </p>
        <p className="bridge-text font-drama italic text-4xl md:text-6xl text-bronze mb-12 max-w-4xl mx-auto leading-tight">
          Here's what you actually walk away with.
        </p>
        <div className="bridge-text h-16 w-px bg-bronze/50 mx-auto"></div>
      </div>
    </section>
  );
}

function WhatYouGet() {
  const getRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.get-header', {
        scrollTrigger: { trigger: getRef.current, start: 'top 80%' },
        y: 30, opacity: 0, duration: 1, ease: 'power3.out'
      });
      gsap.from('.get-card', {
        scrollTrigger: { trigger: getRef.current, start: 'top 70%' },
        y: 40, opacity: 0, duration: 1, stagger: 0.12, ease: 'power3.out'
      });
    }, getRef);
    return () => ctx.revert();
  }, []);

  const deliverables = [
    {
      num: "01",
      title: "Your Global Blueprint",
      desc: "A written roadmap covering residency, banking, entities, and compliance — tailored to your exact situation. Not a template."
    },
    {
      num: "02",
      title: "Bank Accounts Opened",
      desc: "Accounts opened and verified in stable jurisdictions, with your name on them — ready to move capital from day one."
    },
    {
      num: "03",
      title: "Entities Formed",
      desc: "Holding companies, trusts, or foundations structured and registered where they serve you best — with proper documentation."
    },
    {
      num: "04",
      title: "Residency or Citizenship Filed",
      desc: "Applications submitted, tracked, and followed through. We handle the paperwork and coordinate with local counsel."
    },
    {
      num: "05",
      title: "Compliance Handled",
      desc: "Cross-border reporting, tax filings, and ongoing obligations managed so nothing falls through the cracks."
    },
    {
      num: "06",
      title: "Ongoing Adjustments",
      desc: "Laws change. Your life changes. We update your structure so it stays current, compliant, and optimized."
    }
  ];

  return (
    <section ref={getRef} className="py-20 px-6 md:px-12 bg-porcelain">
      <div className="max-w-6xl mx-auto">
        <div className="get-header mb-14 max-w-2xl">
          <h2 className="font-data text-xs uppercase tracking-widest text-bronze mb-5">What You Get</h2>
          <h3 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-ink leading-[1.1]">Tangible outcomes. Not just advice.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item, idx) => (
            <div key={idx} className="get-card bg-white p-10 rounded-[2.5rem] border border-graphite/5 shadow-sm hover:-translate-y-[2px] transition-transform duration-500">
              <span className="font-data text-4xl text-bronze/20 mb-4 block">{item.num}</span>
              <h4 className="text-xl font-sans font-medium mb-4 text-ink">{item.title}</h4>
              <div className="h-px w-full bg-graphite/10 mb-5"></div>
              <p className="text-graphite font-sans leading-relaxed text-[15px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoThisIsFor() {
  const whoRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.who-header', {
        scrollTrigger: { trigger: whoRef.current, start: 'top 80%' },
        y: 30, opacity: 0, duration: 1, ease: 'power3.out'
      });
      gsap.from('.who-item', {
        scrollTrigger: { trigger: whoRef.current, start: 'top 70%' },
        y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out'
      });
    }, whoRef);
    return () => ctx.revert();
  }, []);

  const items = [
    "You earn income in more than one country.",
    "You want a second passport or residency.",
    "You hold crypto and need compliant structure.",
    "You're planning a move abroad.",
    "You want to protect wealth across jurisdictions.",
    "You need cross-border family planning — education, healthcare, succession."
  ];

  return (
    <section ref={whoRef} className="bg-ink pt-20 pb-24 px-6 md:px-12 relative z-10 border-t border-surface/5">
      <div className="max-w-4xl mx-auto">
        <div className="who-header mb-16">
          <h2 className="font-data text-xs uppercase tracking-widest text-bronze mb-5">Who This Is For</h2>
          <h3 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-surface max-w-3xl">
            This is for you if...
          </h3>
        </div>

        <div className="flex flex-col gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="who-item flex items-start gap-4 border-b border-surface/10 pb-6">
              <CheckCircle size={22} className="text-bronze mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <p className="text-surface/80 font-sans text-lg leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Map",
      subtitle: "We learn your situation.",
      desc: "We start with a detailed assessment: where you live, where your income comes from, what you own, and where you want to go. No recommendations until we understand the full picture.",
      keyword: "MAP",
      gradient: "from-bronze/20 via-bronze/5 to-transparent"
    },
    {
      num: "02",
      title: "Build",
      subtitle: "We design and execute your structure.",
      desc: "We create your custom blueprint — then execute it. Bank accounts, entities, residency applications, compliance filings. Everything coordinated by one team, in the right sequence.",
      keyword: "BUILD",
      gradient: "from-bronze/15 via-ink/10 to-transparent"
    },
    {
      num: "03",
      title: "Maintain",
      subtitle: "We keep it running.",
      desc: "Laws change. Your life changes. We handle renewals, annual filings, and adjustments so your structure stays current and compliant — without you having to track it all yourself.",
      keyword: "MAINTAIN",
      gradient: "from-ink/30 via-bronze/10 to-transparent"
    }
  ];

  return (
    <section id="how-it-works" className="bg-porcelain pt-24 pb-32 px-6 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="font-data text-xs uppercase tracking-widest text-bronze mb-5">How It Works</h2>
        <h3 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-ink">Map. Build. Maintain.</h3>
      </div>

      <div className="max-w-5xl mx-auto relative flex flex-col pb-32">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="w-full bg-surface rounded-[3rem] shadow-sm border border-graphite/5 p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 md:gap-16 transform relative overflow-hidden mb-8 sticky group"
            style={{
              top: `calc(120px + ${idx * 30}px)`
            }}
          >
            <div className="w-full md:w-1/2 relative z-10">
              <span className="font-data text-5xl text-bronze/20 mb-6 block transition-colors duration-700 group-hover:text-bronze/40">{step.num}</span>
              <h4 className="text-3xl font-sans font-medium mb-2 text-ink">{step.title}</h4>
              <p className="text-bronze font-sans text-lg mb-6">{step.subtitle}</p>
              <p className="text-graphite font-sans leading-relaxed text-lg">{step.desc}</p>
            </div>
            <div className={`w-full md:w-1/2 h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden relative z-10 hidden md:flex items-center justify-center border border-graphite/10 bg-[#0E1014] bg-gradient-to-br ${step.gradient}`}>
              <span className="font-data text-[4rem] md:text-[5rem] tracking-[0.3em] uppercase text-surface/[0.07] select-none">{step.keyword}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.about-item', {
        scrollTrigger: { trigger: aboutRef.current, start: 'top 85%' },
        y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out'
      });
    }, aboutRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-24 px-6 md:px-12 bg-porcelain relative z-20">
      <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 border border-graphite/5 shadow-sm flex flex-col md:flex-row items-start gap-8 md:gap-12">
        <div className="w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden about-item ring-4 ring-porcelain shadow-sm flex-shrink-0">
          <img
            src="/martin.jpg"
            alt="Martin Popiel - Founder"
            className="w-full h-full object-cover object-top filter contrast-[1.05] saturate-[0.9]"
          />
        </div>
        <div className="about-item">
          <h2 className="font-data text-xs uppercase tracking-widest text-bronze mb-3">About</h2>
          <h3 className="text-2xl md:text-3xl font-sans font-medium tracking-tight text-ink mb-2">
            Martin Popiel, CPA
          </h3>
          <p className="text-graphite/50 font-sans text-sm mb-6">
            Chartered Professional Accountant (CPA)
          </p>
          <p className="text-graphite font-sans leading-relaxed text-[15px] md:text-base max-w-2xl mb-4">
            Martin built Blueprint after living the problem firsthand. After visiting 40+ countries, he saw how disconnected the international advisory world was — one firm for banking, another for residency, another for tax, none of them talking to each other.
          </p>
          <p className="text-graphite font-sans leading-relaxed text-[15px] md:text-base max-w-2xl mb-8">
            Blueprint is the firm he wished existed: one team that sees the full picture and coordinates everything under one roof — partnering with local counsel in every jurisdiction to ensure every structure holds up.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="flex items-center gap-2 bg-porcelain px-4 py-2 rounded-full text-xs font-data uppercase tracking-widest text-ink/80 border border-graphite/5">
              <MapPin size={14} className="text-bronze"/> 40+ Countries
            </span>
            <span className="flex items-center gap-2 bg-porcelain px-4 py-2 rounded-full text-xs font-data uppercase tracking-widest text-ink/80 border border-graphite/5">
              <Network size={14} className="text-bronze"/> Global Partner Network
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.faq-header', {
        scrollTrigger: { trigger: faqRef.current, start: 'top 80%' },
        y: 30, opacity: 0, duration: 1, ease: 'power3.out'
      });
      gsap.from('.faq-item', {
        scrollTrigger: { trigger: faqRef.current, start: 'top 70%' },
        y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out'
      });
    }, faqRef);
    return () => ctx.revert();
  }, []);

  const questions = [
    {
      q: "Is this legal?",
      a: "Yes. Everything we coordinate is fully legal and compliant. We work with licensed professionals in every jurisdiction — tax attorneys, immigration lawyers, banking compliance officers. There are no grey areas."
    },
    {
      q: "How long does this take?",
      a: "It depends on your situation. Some structures can be in place within 6 months. More complex, multi-jurisdiction roadmaps can take a year or longer. We scope the timeline during your initial assessment."
    },
    {
      q: "How much does it cost?",
      a: "It depends on the scope. A single residency application is different from a full multi-jurisdiction structure. We provide a clear quote after the initial assessment — no hidden fees, no hourly billing surprises."
    },
    {
      q: "I already have an accountant and lawyer. Do I still need this?",
      a: "Probably. Your local accountant and lawyer are great for domestic matters. But cross-border structuring requires coordination across multiple jurisdictions — that's the gap Blueprint fills. We work alongside your existing team, not against them."
    },
    {
      q: "What if my situation changes after we build the structure?",
      a: "That's what the Maintain phase is for. Laws change, life changes. We handle renewals, annual filings, and structural adjustments so everything stays current and compliant."
    }
  ];

  return (
    <section ref={faqRef} className="py-32 px-6 md:px-12 bg-ink text-surface">
      <div className="max-w-4xl mx-auto">
        <div className="faq-header mb-16">
          <h2 className="font-data text-xs uppercase tracking-widest text-bronze mb-5">FAQ</h2>
          <h3 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-surface">Common Questions</h3>
        </div>

        <div className="flex flex-col gap-10">
          {questions.map((item, idx) => (
            <div key={idx} className="faq-item border-b border-surface/10 pb-10">
              <h4 className="text-xl font-sans font-medium text-surface mb-3">{item.q}</h4>
              <p className="text-surface/60 font-sans leading-relaxed text-[15px]">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-surface pt-24 pb-12 px-6 md:px-12 rounded-t-[3rem] mt-[-3rem] relative z-20 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-20 border-b border-surface/10 pb-16">
        <div className="w-full md:w-1/3">
          <div className="font-sans font-semibold text-2xl tracking-tight mb-4">Blueprint Global</div>
          <p className="font-sans text-surface/60 text-[15px] leading-relaxed max-w-sm">
            One firm. One plan. Your entire international structure — designed, built, and maintained under one roof.
          </p>
        </div>
        <div className="flex gap-16 md:gap-32">
          <div className="flex flex-col gap-4">
            <span className="font-data text-xs uppercase tracking-widest text-bronze mb-2">Services</span>
            <a href="#education" className="font-sans text-[15px] text-surface/80 hover:text-white transition-colors">What We Do</a>
            <a href="#how-it-works" className="font-sans text-[15px] text-surface/80 hover:text-white transition-colors">How It Works</a>
            <a href="#about" className="font-sans text-[15px] text-surface/80 hover:text-white transition-colors">About</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-data text-xs uppercase tracking-widest text-bronze mb-2">Platform</span>
            <a href="https://app.blueprintglobal.io/onboarding" className="font-sans text-[15px] text-surface/80 hover:text-white transition-colors">Try the Demo</a>
            <a href="https://app.blueprintglobal.io/dashboard" className="font-sans text-[15px] text-surface/80 hover:text-white transition-colors">Client Login</a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mb-8">
        <p className="font-sans text-surface/30 text-xs leading-relaxed max-w-4xl">
          Blueprint Global coordinates international structuring and project-manages the implementation process. We do not provide tax, legal, investment, or immigration advice. All advisory services are delivered by licensed professionals in their respective jurisdictions. Past outcomes do not guarantee future results. Each client's structure depends on their individual circumstances.
        </p>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-surface/40">
        <p>&copy; {new Date().getFullYear()} Blueprint Group LLC. All rights reserved. CPA Ontario, Canada.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-surface transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-surface transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

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
