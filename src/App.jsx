import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Globe, Briefcase, ArrowRight, Compass, Network, Vault, Landmark, Lock, Coins, HeartPulse, GraduationCap, Scale, CheckCircle, FileText, MapPin, Menu, X, ChevronDown, Clock, Users, RefreshCw, Map, Building2, FileCheck, Settings } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function MidPageCTA({ headline, subheadline, buttonText = "Try the Demo", buttonLink = "https://app.blueprintglobal.io/onboarding", dark = false }) {
  const bg = dark ? 'bg-ink border-surface/10' : 'bg-porcelain border-graphite/10';
  const textPrimary = dark ? 'text-surface' : 'text-ink';
  const textSub = dark ? 'text-surface/60' : 'text-graphite';
  return (
    <section className={`${bg} py-20 px-6 md:px-12 border-t border-b relative z-10`}>
      <div className="max-w-3xl mx-auto text-center">
        <h3 className={`font-sans ${textPrimary} mb-10 ${dark ? 'text-4xl md:text-5xl font-medium tracking-tight' : 'text-2xl md:text-3xl font-medium'}`}>{headline}</h3>
        <a href={buttonLink} className="group inline-flex items-center gap-2 bg-bronze text-white px-8 py-4 rounded-[2rem] text-sm font-medium hover:bg-bronze/90 transition-all shadow-lg shadow-bronze/20">
          {buttonText} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
        {subheadline && <p className={`${textSub} font-data text-xs uppercase tracking-widest mt-6 opacity-80`}>{subheadline}</p>}
      </div>
    </section>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-[2rem] px-6 py-3 flex items-center justify-between w-[90%] max-w-6xl ${scrolled ? 'bg-porcelain/90 backdrop-blur-md shadow-sm border border-graphite/5' : 'bg-transparent'}`}>
        <div className={`font-sans font-semibold text-xl tracking-tight ${scrolled ? 'text-ink' : 'text-porcelain'} transition-colors duration-500`}>Blueprint Global</div>
        <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${scrolled ? 'text-ink' : 'text-porcelain/90'} transition-colors duration-500`}>
          <a href="#education" className="hover:text-bronze transition-colors hover:-translate-y-[1px] transform inline-block">What We Do</a>
          <a href="#how-it-works" className="hover:text-bronze transition-colors hover:-translate-y-[1px] transform inline-block">How It Works</a>
          <a href="#about" className="hover:text-bronze transition-colors hover:-translate-y-[1px] transform inline-block">About</a>
        </div>
        <div className="flex items-center gap-4">
        <a href="https://app.blueprintglobal.io/dashboard" className={`hidden md:block font-sans text-[15px] font-medium transition-colors ${scrolled ? 'text-ink/80 hover:text-bronze' : 'text-porcelain/80 hover:text-white'}`}>Client Login</a>
        <a href="https://app.blueprintglobal.io/onboarding" className="group bg-bronze text-white px-5 py-2.5 rounded-[2rem] text-sm font-medium flex items-center gap-2 hover:bg-bronze/90 transition-all shadow-md shadow-bronze/10">
          <span>Try the Demo</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
        <button className={`md:hidden p-1 transition-colors ${scrolled ? 'text-ink' : 'text-porcelain'}`} onClick={() => setMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </nav>

      <div className={`fixed inset-0 bg-ink z-50 transition-transform duration-500 flex flex-col pt-24 px-8 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <button className="absolute top-8 right-8 text-surface p-2" onClick={() => setMenuOpen(false)}>
          <X size={28} />
        </button>
        <div className="flex flex-col gap-8 text-2xl font-sans font-medium text-surface">
          <a href="#education" onClick={() => setMenuOpen(false)} className="border-b border-surface/10 pb-4 hover:text-bronze transition-colors">What We Do</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="border-b border-surface/10 pb-4 hover:text-bronze transition-colors">How It Works</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="border-b border-surface/10 pb-4 hover:text-bronze transition-colors">About</a>
          <a href="https://app.blueprintglobal.io/dashboard" onClick={() => setMenuOpen(false)} className="text-bronze mt-4">Client Login</a>
          <a href="https://app.blueprintglobal.io/onboarding" className="group bg-surface text-ink px-6 py-4 rounded-[2rem] text-lg mt-4 flex items-center justify-between hover:bg-white transition-colors">
            Try the Demo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </>
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
    <section ref={heroRef} className="relative min-h-[85dvh] lg:min-h-[90dvh] pb-24 w-full flex flex-col justify-center overflow-hidden bg-ink text-surface pt-32 lg:pt-40">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
          alt="Refined architecture"
          className="hero-image object-cover w-full h-full opacity-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-ink/40"></div>
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-32 xl:px-48 mt-12 md:mt-16">
        <div className="max-w-4xl">
          <h1 className="text-[3.5rem] md:text-7xl lg:text-[5.5rem] leading-[1.1] tracking-tight mb-12 md:mb-16">
            <span className="block hero-text font-sans font-medium text-surface drop-shadow-lg">Your entire life is tied</span>
            <span className="block hero-text font-sans font-medium text-surface/90 drop-shadow-lg mt-1 md:mt-3">to one country.</span>
            <span className="block hero-text font-sans font-medium text-white/60 drop-shadow-lg mt-5 md:mt-8">It doesn't have to be.</span>
          </h1>
          
          <p className="hero-text font-sans font-medium text-2xl md:text-3xl text-bronze/90 mb-10 md:mb-12 max-w-3xl drop-shadow-md">
            We build your international life. You live it.
          </p>
          
          <p className="hero-text text-lg md:text-xl text-porcelain/80 font-sans leading-relaxed max-w-2xl mb-14 md:mb-20 drop-shadow-md">
            Blueprint designs international structures for entrepreneurs, investors, and globally mobile families.
          </p>

          <div className="hero-text flex flex-col sm:flex-row items-start gap-5">
            <a href="https://app.blueprintglobal.io/onboarding" className="group bg-surface text-ink px-8 py-4 rounded-[2rem] text-[15px] font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors shadow-lg shadow-white/5 relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">Try the Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
            </a>
            <a href="#how-it-works" className="bg-transparent text-white border border-white/20 px-8 py-4 rounded-[2rem] text-[15px] font-medium flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-all">
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBand() {
  return (
    <section className="bg-ink text-surface/70 py-12 px-6 border-b border-surface/5 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-start md:items-center gap-12 md:gap-20 lg:gap-24">
        <div className="flex flex-col items-start gap-1">
          <span className="font-data text-[10px] uppercase tracking-widest text-bronze/60">Approach</span>
          <span className="text-xl md:text-2xl font-sans mt-2 text-surface tracking-tight flex items-center gap-3">
            <ShieldCheck size={24} className="text-bronze flex-shrink-0" />
            One Firm. The Full Picture.
          </span>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="font-data text-[10px] uppercase tracking-widest text-bronze/60">Foundation</span>
          <span className="text-xl md:text-2xl font-sans mt-2 text-surface tracking-tight flex items-center gap-3">
            <Briefcase size={24} className="text-bronze flex-shrink-0" />
            CPA-Led
          </span>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="font-data text-[10px] uppercase tracking-widest text-bronze/60">Priority</span>
          <span className="text-xl md:text-2xl font-sans mt-2 text-surface tracking-tight flex items-center gap-3">
            <FileText size={24} className="text-bronze flex-shrink-0" />
            Compliance-First
          </span>
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
      gsap.from('.edu-card-wrapper', {
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
        <div className="edu-header mb-14 text-center flex flex-col items-center px-4">
          <h2 className="font-data text-xs uppercase tracking-widest text-bronze mb-5">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-ink leading-[1.2] w-full">
            <span className="block text-ink">Most people don't know these problems exist</span>
            <span className="block text-ink md:mt-1">— until they're stuck.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-6">
          {cards.map((card, idx) => (
            <div key={idx} className="edu-card-wrapper h-full flex">
              <div className="group flex flex-col bg-white p-8 rounded-[2rem] border border-graphite/5 shadow-sm hover:-translate-y-[2px] transition-transform duration-300 w-full relative overflow-hidden">
                <div className="mb-8">
                  <div className="w-12 h-12 rounded-full bg-porcelain flex items-center justify-center text-bronze mb-5">
                    {card.icon}
                  </div>
                  <h4 className="text-xl font-sans font-medium text-ink leading-tight">{card.title}</h4>
                </div>
                
                <div className="flex flex-col gap-6 flex-grow">
                  <div>
                    <span className="font-data text-[10px] uppercase tracking-widest text-bronze/80 mb-2 block">The Problem</span>
                    <p className="text-graphite font-sans leading-relaxed text-[15px]">
                      {card.problem}
                    </p>
                  </div>
                  
                  <div className="border-t border-graphite/5 transition-colors group-hover:border-bronze/20"></div>
                  
                  <div>
                    <span className="font-data text-[10px] uppercase tracking-widest text-ink/40 mb-2 block transition-colors group-hover:text-bronze/80">The Solution</span>
                    <p className="text-ink/90 font-sans leading-relaxed text-[15px]">
                      {card.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
      gsap.from('.get-card-wrapper', {
        scrollTrigger: { trigger: getRef.current, start: 'top 70%' },
        y: 40, opacity: 0, duration: 1, stagger: 0.12, ease: 'power3.out'
      });
    }, getRef);
    return () => ctx.revert();
  }, []);

  const deliverables = [
    { num: '01', icon: <Map className="text-bronze" size={24} strokeWidth={1.5} />, title: "Your Global Blueprint", desc: "A written roadmap covering residency, banking, entities, and compliance — tailored to your exact situation. Not a template." },
    { num: '02', icon: <Landmark className="text-bronze" size={24} strokeWidth={1.5} />, title: "Bank Accounts Opened", desc: "Accounts opened and verified in stable jurisdictions, with your name on them — ready to move capital from day one." },
    { num: '03', icon: <Building2 className="text-bronze" size={24} strokeWidth={1.5} />, title: "Entities Formed", desc: "Holding companies, trusts, or foundations structured and registered where they serve you best — with proper documentation." },
    { num: '04', icon: <FileCheck className="text-bronze" size={24} strokeWidth={1.5} />, title: "Residency or Citizenship Filed", desc: "Applications submitted, tracked, and followed through. We handle the paperwork and coordinate with local counsel." },
    { num: '05', icon: <ShieldCheck className="text-bronze" size={24} strokeWidth={1.5} />, title: "Compliance Handled", desc: "Cross-border reporting, tax filings, and ongoing obligations managed so nothing falls through the cracks." },
    { num: '06', icon: <Settings className="text-bronze" size={24} strokeWidth={1.5} />, title: "Ongoing Adjustments", desc: "Laws change. Your life changes. We update your structure so it stays current, compliant, and optimized." },
  ];

  return (
    <section ref={getRef} className="py-20 px-6 md:px-12 bg-porcelain">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="font-data text-xs uppercase tracking-widest text-bronze mb-5">What You Get</h2>
          <h3 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-ink leading-[1.1] max-w-2xl">
            Tangible outcomes.<br/>
            <span className="text-bronze/80">Not just advice.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-5xl mx-auto">
          {deliverables.map((item, idx) => (
            <div key={idx} className="get-card-wrapper">
              <div className="flex flex-col group bg-white p-8 md:p-10 rounded-[2rem] border border-graphite/5 transition-transform hover:-translate-y-[2px] duration-300 shadow-sm relative overflow-hidden h-full cursor-default">
                <div className="absolute top-0 right-0 p-8">
                  <span className="font-data text-6xl text-bronze/10 group-hover:text-bronze/20 transition-colors duration-500 font-bold">{item.num}</span>
                </div>
                <div className="w-14 h-14 rounded-full bg-porcelain flex items-center justify-center mb-8 border border-graphite/10 relative z-10 group-hover:bg-bronze/10 transition-colors">
                  {item.icon}
                </div>
                <div className="relative z-10 flex flex-col flex-grow">
                  <h4 className="text-xl md:text-2xl font-sans font-medium mb-4 text-ink group-hover:text-bronze transition-colors">{item.title}</h4>
                  <p className="text-graphite font-sans leading-relaxed text-[15px] md:text-[16px] max-w-xl">{item.desc}</p>
                </div>
              </div>
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
      gsap.from('.who-card-wrapper', {
        scrollTrigger: { trigger: whoRef.current, start: 'top 75%' },
        y: 30, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out'
      });
    }, whoRef);
    return () => ctx.revert();
  }, []);

  const profiles = [
    { title: "Global Income", desc: "You earn income in more than one country and face redundant tax exposure." },
    { title: "Second Passports", desc: "You seek a second passport or residency to expand your mobility and secure your future." },
    { title: "Digital Assets", desc: "You hold significant crypto and need a compliant, structural bridge to traditional finance." },
    { title: "Relocating", desc: "You're planning a strategic move abroad and need to cleanly transition your life." },
    { title: "Asset Protection", desc: "You want to insulate your wealth across trusted jurisdictions from localized risks." },
    { title: "Family Planning", desc: "You need cross-border architecture for your family's education, healthcare, and succession." }
  ];

  return (
    <section ref={whoRef} className="py-24 px-6 md:px-12 bg-ink relative z-10 overflow-hidden text-surface">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }}></div>
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 60% 40%, rgba(156, 123, 82, 0.15) 0%, transparent 60%)' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="who-header text-center mb-16 flex flex-col items-center">
          <h2 className="font-data text-xs uppercase tracking-widest text-bronze mb-5">Who This Is For</h2>
          <h3 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-white max-w-2xl">
            This is for you if...
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {profiles.map((profile, idx) => (
            <div key={idx} className="who-card-wrapper h-full">
              <div className="group bg-surface/5 border border-surface/10 p-8 rounded-[2rem] hover:bg-surface/10 hover:border-bronze/30 transition-all duration-300 h-full flex flex-col cursor-default shadow-sm hover:shadow-md backdrop-blur-sm">
                <CheckCircle className="text-bronze/50 mb-6 group-hover:text-bronze transition-colors flex-shrink-0" size={28} strokeWidth={1.5} />
                <h4 className="text-lg md:text-xl font-sans font-medium text-white mb-3">{profile.title}</h4>
                <p className="text-surface/60 font-sans leading-relaxed text-[15px] md:text-base group-hover:text-surface/80 transition-colors">
                  {profile.desc}
                </p>
              </div>
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
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-60">
          <circle cx="100" cy="100" r="40" fill="none" stroke="#9C7B52" strokeWidth="1" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#9C7B52" strokeWidth="1" strokeDasharray="4 4"/>
          <circle cx="100" cy="100" r="80" fill="none" stroke="#9C7B52" strokeWidth="1" opacity="0.5"/>
          <circle cx="100" cy="60" r="3" fill="#9C7B52" />
          <circle cx="160" cy="100" r="3" fill="#9C7B52" />
          <circle cx="50" cy="130" r="3" fill="#9C7B52" />
          <circle cx="120" cy="170" r="3" fill="#9C7B52" />
          <path d="M100 100 L160 100" stroke="#9C7B52" strokeWidth="1" opacity="0.3" />
          <path d="M100 100 L50 130" stroke="#9C7B52" strokeWidth="1" opacity="0.3" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Build",
      subtitle: "We design and execute your structure.",
      desc: "We create your custom blueprint — then execute it. Bank accounts, entities, residency applications, compliance filings. Everything coordinated by one team, in the right sequence.",
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-60">
          <rect x="80" y="40" width="40" height="30" fill="none" stroke="#9C7B52" strokeWidth="1" />
          <rect x="40" y="100" width="30" height="40" fill="none" stroke="#9C7B52" strokeWidth="1" />
          <rect x="85" y="100" width="30" height="40" fill="none" stroke="#9C7B52" strokeWidth="1" />
          <rect x="130" y="100" width="30" height="40" fill="none" stroke="#9C7B52" strokeWidth="1" />
          <path d="M100 70 L100 85 M100 85 L55 85 L55 100 M100 85 L145 85 L145 100" stroke="#9C7B52" strokeWidth="1" fill="none" />
          <circle cx="100" cy="160" r="15" fill="none" stroke="#9C7B52" strokeWidth="1" />
          <path d="M100 140 L100 145" stroke="#9C7B52" strokeWidth="1" />
        </svg>
      )
    },
    {
      num: "03",
      title: "Maintain",
      subtitle: "We keep it running.",
      desc: "Laws change. Your life changes. We handle renewals, annual filings, and adjustments so your structure stays current and compliant — without you having to track it all yourself.",
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-60">
          <path d="M100 50 A 50 50 0 0 1 143.3 125" fill="none" stroke="#9C7B52" strokeWidth="1" />
          <path d="M143.3 125 L135 125 M143.3 125 L147 118" stroke="#9C7B52" strokeWidth="1" fill="none" />
          <path d="M143.3 125 A 50 50 0 0 1 56.7 125" fill="none" stroke="#9C7B52" strokeWidth="1" />
          <path d="M56.7 125 L65 125 M56.7 125 L53 132" stroke="#9C7B52" strokeWidth="1" fill="none" />
          <path d="M56.7 125 A 50 50 0 0 1 100 50" fill="none" stroke="#9C7B52" strokeWidth="1" />
          <path d="M100 50 L100 58 M100 50 L93 46" stroke="#9C7B52" strokeWidth="1" fill="none" />
          <rect x="90" y="85" width="20" height="25" fill="none" stroke="#9C7B52" strokeWidth="1" />
          <path d="M96 92 L104 92 M96 98 L104 98" stroke="#9C7B52" strokeWidth="1" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="bg-porcelain pt-24 pb-32 px-6 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto mb-16">
        <div className="who-header text-center mb-16 flex flex-col items-center">
          <h2 className="font-data text-xs uppercase tracking-widest text-bronze mb-5">How It Works</h2>
          <h3 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-ink">Map. Build. Maintain.</h3>
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative flex flex-col pb-16">
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
            <div className={`w-full md:w-1/2 h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden relative z-10 hidden md:flex items-center justify-center border border-graphite/10 bg-[#0E1014]`}>
              <div className="w-48 h-48 md:w-64 md:h-64">
                {step.svg}
              </div>
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
    <section id="about" ref={aboutRef} className="pt-0 pb-24 px-6 md:px-12 bg-porcelain relative z-20">
      <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-16 border border-graphite/5 shadow-sm flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden about-item ring-2 ring-bronze/30 shadow-md flex-shrink-0">
          <img
            src="/martin.jpg"
            alt="Martin Popiel - Founder"
            className="w-full h-full object-cover object-top filter contrast-[1.05] saturate-[0.9]"
          />
        </div>
        <div className="about-item flex-grow">
          <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-ink mb-8">
            Meet the Architect
          </h2>
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-sans font-medium text-ink mb-1">
              Martin Popiel, CPA
            </h3>
            <p className="text-graphite/60 font-sans text-xs tracking-widest uppercase">
              Chartered Professional Accountant
            </p>
          </div>
          <p className="text-graphite font-sans leading-relaxed text-[15px] md:text-[17px] max-w-2xl mb-4">
            Martin built Blueprint after navigating the exact cross-border complexities our clients face. Holding multiple citizenships, maintaining global residencies, and building multinational businesses across three languages, he experienced firsthand how disconnected the international advisory world truly is.
          </p>
          <p className="text-graphite font-sans leading-relaxed text-[15px] md:text-[17px] max-w-2xl mb-8">
            He found one firm for banking, another for residency, and another for tax — with none of them speaking to each other. Blueprint was designed to be the single master architect that sees the entire picture and coordinates everything under one roof.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="flex items-center gap-2 bg-porcelain px-4 py-2 rounded-full text-xs font-data uppercase tracking-widest text-ink/80 border border-graphite/5 hover:bg-porcelain/50 transition-colors">
              <ShieldCheck size={14} className="text-bronze"/> CPA Ontario
            </span>
            <a href="https://www.linkedin.com/in/martinpopiel/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#0A66C2]/10 px-4 py-2 rounded-full text-xs font-data uppercase tracking-widest text-[#0A66C2] border border-[#0A66C2]/20 hover:bg-[#0A66C2]/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqRef = useRef(null);
  const [openIdx, setOpenIdx] = React.useState(null);

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
      icon: <Scale size={18} className="text-bronze flex-shrink-0" />,
      q: "Is this tax evasion?",
      a: "Absolutely not. Everything we coordinate is fully legal and compliant. We work with licensed professionals in every jurisdiction — tax attorneys, immigration lawyers, banking compliance officers. There are no grey areas."
    },
    {
      icon: <Clock size={18} className="text-bronze flex-shrink-0" />,
      q: "How long does this take?",
      a: "It depends on your situation. Some structures can be in place within 6 months. More complex, multi-jurisdiction roadmaps can take a year or longer. We scope the timeline during your initial assessment."
    },
    {
      icon: <Coins size={18} className="text-bronze flex-shrink-0" />,
      q: "How much does it cost?",
      a: "It depends on the scope. A single residency application is different from a full multi-jurisdiction structure. We provide a clear quote after the initial assessment — no hidden fees, no hourly billing surprises."
    },
    {
      icon: <Users size={18} className="text-bronze flex-shrink-0" />,
      q: "I already have an accountant and lawyer. Do I still need this?",
      a: "Probably. Your local accountant and lawyer are great for domestic matters. But cross-border structuring requires coordination across multiple jurisdictions — that's the gap Blueprint fills. We work alongside your existing team, not against them."
    },
    {
      icon: <RefreshCw size={18} className="text-bronze flex-shrink-0" />,
      q: "What if my situation changes after we build the structure?",
      a: "That's what the Maintain phase is for. Laws change, life changes. We handle renewals, annual filings, and structural adjustments so everything stays current and compliant."
    }
  ];

  return (
    <section ref={faqRef} className="py-32 px-6 md:px-12 bg-ink text-surface relative z-10 border-t border-surface/5">
      <div className="max-w-3xl mx-auto">
        <div className="faq-header mb-16 text-center">
          <h2 className="font-data text-xs uppercase tracking-widest text-bronze mb-5">FAQ</h2>
          <h3 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-surface">Common Questions</h3>
        </div>

        <div className="flex flex-col gap-4">
          {questions.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item border ${isOpen ? 'border-surface/20 bg-surface/[0.04]' : 'border-surface/10 bg-surface/[0.01] hover:bg-surface/[0.03]'} rounded-2xl transition-colors cursor-pointer overflow-hidden`}
                onClick={() => setOpenIdx(isOpen ? null : idx)}
              >
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4 text-surface">
                    {item.icon}
                    <h4 className="text-lg md:text-xl font-sans font-medium">{item.q}</h4>
                  </div>
                  <ChevronDown size={20} className={`text-surface/40 transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </div>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="text-surface/60 font-sans leading-relaxed text-[15px] p-6 pt-0 pl-[52px]">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-surface pt-24 pb-12 px-6 md:px-12 relative z-10 border-t border-surface/5 overflow-hidden">
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
        <p>&copy; {new Date().getFullYear()} Blueprint Group LLC. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-surface transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-surface transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

function BlueprintThread() {
  return (
    <div className="hidden md:block fixed left-[60px] lg:left-[80px] top-0 h-screen w-px bg-bronze/15 z-0 pointer-events-none"></div>
  );
}

export default function App() {
  return (
    <div className="bg-ink min-h-screen font-sans selection:bg-bronze/30 selection:text-white">
      <BlueprintThread />
      <Navbar />
      <Hero />
      <TrustBand />
      <Education />
      <MidPageCTA
        headline={<span>These problems are solvable.<br className="hidden md:block" /> Here's what you walk away with.</span>}
        buttonText="Try the Demo"
        buttonLink="https://app.blueprintglobal.io/onboarding"
        subheadline="Free. No account required."
        bg="bg-porcelain"
      />
      
      <WhatYouGet />
      
      <MidPageCTA 
        headline="Start Your Blueprint" 
        buttonText="Start Your Blueprint"
        buttonLink="https://app.blueprintglobal.io/onboarding"
        subheadline="Used by entrepreneurs across 40+ countries."
        dark 
      />
      
      <WhoThisIsFor />
      <HowItWorks />
      
      <About />
      <FAQ />
      <Footer />
    </div>
  );
}
