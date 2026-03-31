import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Globe, Briefcase, ArrowRight, Compass, Network, Vault, Landmark, Lock, Coins, HeartPulse, Activity, GraduationCap, Scale, CheckCircle, FileText, MapPin, Menu, X, ChevronDown, Clock, Users, RefreshCw, Map, Building2, FileCheck, Settings } from 'lucide-react';
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
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-[2rem] px-4 md:px-6 py-3 flex items-center justify-between w-[90%] max-w-6xl ${scrolled ? 'bg-porcelain/90 backdrop-blur-md shadow-sm border border-graphite/5' : 'bg-transparent'}`}>
        <div className={`font-sans font-semibold text-xl tracking-tight ${scrolled ? 'text-ink' : 'text-porcelain'} transition-colors duration-500`}>Blueprint Global</div>
        
        {/* Centered Desktop Links */}
        <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-medium ${scrolled ? 'text-ink' : 'text-porcelain/90'} transition-colors duration-500`}>
          <a href="#education" className="hover:text-bronze transition-colors hover:-translate-y-[1px] transform inline-block">What We Do</a>
          <a href="#how-it-works" className="hover:text-bronze transition-colors hover:-translate-y-[1px] transform inline-block">How It Works</a>
          <a href="#about" className="hover:text-bronze transition-colors hover:-translate-y-[1px] transform inline-block">About</a>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
        <a href="https://app.blueprintglobal.io/dashboard" className={`hidden md:block font-sans text-[15px] font-medium transition-colors ${scrolled ? 'text-ink/80 hover:text-bronze' : 'text-porcelain/80 hover:text-white'}`}>Client Login</a>
        <a href="https://app.blueprintglobal.io/onboarding" className="group bg-bronze text-white px-4 py-2 md:px-5 md:py-2.5 rounded-[2rem] text-sm font-medium flex items-center gap-2 hover:bg-bronze/90 transition-all shadow-md shadow-bronze/10">
          <span className="truncate">Try the Demo</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
        </a>
      </div>
        <button className={`md:hidden p-2 transition-colors ${scrolled ? 'text-ink' : 'text-porcelain'}`} onClick={() => setMenuOpen(true)}>
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
          <a href="https://app.blueprintglobal.io/onboarding" className="group bg-bronze text-white px-6 py-4 rounded-[2rem] text-lg mt-4 flex items-center justify-between hover:bg-bronze/90 transition-colors">
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
    <section ref={heroRef} id="hero" className="relative min-h-[70dvh] md:min-h-[78dvh] lg:min-h-[80dvh] pb-8 md:pb-16 w-full flex flex-col justify-center overflow-hidden bg-ink text-surface pt-28 lg:pt-32 scroll-mt-32">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
          alt="Refined architecture"
          className="hero-image object-cover w-full h-full opacity-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-ink/40"></div>
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-32 xl:px-48">
        <div className="max-w-none">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[4rem] leading-[1.1] tracking-tight mb-8 md:mb-10 max-w-5xl md:whitespace-nowrap">
            <span className="block hero-text font-drama font-normal text-surface drop-shadow-lg">Your life is tied to <span className="text-white relative inline-block">one<span className="absolute -bottom-1 left-0 w-full h-[4px] bg-bronze/80"></span></span> country</span>
            <span className="block hero-text font-drama font-normal text-bronze drop-shadow-lg mt-4 md:mt-6">...and it doesn't have to be.</span>
          </h1>
          
          <p className="hero-text text-lg md:text-[1.35rem] text-porcelain/60 font-sans leading-relaxed max-w-5xl md:whitespace-nowrap mb-10 md:mb-12 drop-shadow-md">
            International structures for entrepreneurs, investors, and mobile families.
          </p>

          <div className="hero-text flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <a href="https://app.blueprintglobal.io/onboarding" className="w-full sm:w-auto group bg-surface text-ink px-8 py-4 rounded-[2rem] text-[15px] font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors shadow-lg shadow-white/5 relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">Try the Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBand() {
  return (
    <section className="bg-ink py-12 md:py-16 px-6 relative z-10 overflow-hidden border-t border-b border-surface/5">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(156,123,82,0.15) 0%, transparent 70%)' }}></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16">
          <div className="flex items-center gap-3 group">
            <ShieldCheck size={18} className="text-bronze group-hover:scale-110 transition-transform" />
            <span className="font-data text-[11px] uppercase tracking-[0.15em] text-surface/50 group-hover:text-surface/80 transition-colors">CPA-Led Coordination</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-surface/10"></div>
          <div className="flex items-center gap-3 group">
            <Globe size={18} className="text-bronze group-hover:scale-110 transition-transform" />
            <span className="font-data text-[11px] uppercase tracking-[0.15em] text-surface/50 group-hover:text-surface/80 transition-colors">Multi-Jurisdictional Network</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-surface/10"></div>
          <div className="flex items-center gap-3 group">
            <Lock size={18} className="text-bronze group-hover:scale-110 transition-transform" />
            <span className="font-data text-[11px] uppercase tracking-[0.15em] text-surface/50 group-hover:text-surface/80 transition-colors">Compliance-First Approach</span>
          </div>
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
      gsap.from('.edu-pillar', {
        scrollTrigger: { trigger: eduRef.current, start: 'top 85%' },
        y: 30, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
      });
    }, eduRef);
    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      title: "Capital & Access",
      items: [
        { icon: <Globe size={20} />, title: "Tax Residency", problem: "You're paying taxes based on where you were born, not where you live or earn." },
        { icon: <ShieldCheck size={20} />, title: "Banking & Capital Access", problem: "Your bank can freeze your account or restrict your movement with no warning." },
        { icon: <Coins size={20} />, title: "Digital Asset Integration", problem: "Crypto profits often sit in a grey zone, making it hard to bank and harder to explain." }
      ]
    },
    {
      title: "Structure & Protection",
      items: [
        { icon: <Briefcase size={20} />, title: "Ownership Structures", problem: "Holding everything in your personal name means one lawsuit could take it all." },
        { icon: <Lock size={20} />, title: "Risk & Asset Protection", problem: "Political instability, lawsuits, or currency devaluation can wipe out progress overnight." },
        { icon: <Scale size={20} />, title: "Succession & Estate", problem: "Without cross-border planning, your estate could face double taxation or probate." }
      ]
    },
    {
      title: "Life & Mobility",
      items: [
        { icon: <Landmark size={20} />, title: "Citizenship & Mobility", problem: "A single passport limits where you can live, work, and move freely." },
        { icon: <Activity size={20} strokeWidth={1.5} />, title: "Healthcare Access", problem: "Stuck with one country's system: long waits and limited options." },
        { icon: <GraduationCap size={20} />, title: "Education Planning", problem: "Your children's education options are limited to one country's school system." }
      ]
    }
  ];

  return (
    <section ref={eduRef} id="education" className="py-24 md:py-32 px-6 md:px-12 bg-porcelain relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="edu-header mb-20 text-center flex flex-col items-center">
          <h2 className="font-data text-sm uppercase tracking-widest text-bronze mb-5">What We Do</h2>
          <h3 className="text-3xl md:text-5xl lg:text-[52px] font-drama font-normal tracking-tight text-ink leading-[1.1] max-w-none px-4">
            <span className="block text-ink">We build your international life.</span>
            <span className="block text-bronze/60 mt-3 md:mt-4">You live it.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {pillars.map((pillar, pIdx) => (
            <div key={pIdx} className="edu-pillar flex flex-col border-b border-graphite/10 last:border-b-0 md:border-b-0 pb-12 last:pb-0 md:pb-0">
              <h4 className="font-sans font-bold text-xl md:text-2xl text-bronze mb-4 tracking-tight uppercase md:whitespace-nowrap text-center">{pillar.title}</h4>
              <div className="w-16 h-px bg-bronze/30 mb-8 mx-auto"></div>
              
              <div className="flex flex-col gap-10">
                {pillar.items.map((item, iIdx) => (
                  <div key={iIdx} className="group pb-10 border-b border-graphite/5 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-bronze group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                      <span className="font-sans font-medium text-ink text-base md:text-lg">{item.title}</span>
                    </div>
                    <p className="text-graphite font-sans leading-relaxed text-sm md:text-[15px] opacity-80 group-hover:opacity-100 transition-opacity">
                      {item.problem}
                    </p>
                  </div>
                ))}
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
    { num: '01', icon: <Map className="text-bronze" size={24} strokeWidth={1.5} />, title: "STRATEGIC BLUEPRINT", desc: "A custom roadmap for your international life. No generic templates—just a clear plan built for your specific situation." },
    { num: '02', icon: <Landmark className="text-bronze" size={24} strokeWidth={1.5} />, title: "GLOBAL BANKING", desc: "We take care of opening bank accounts abroad. We get you verified and set up in the world's most stable countries." },
    { num: '03', icon: <Building2 className="text-bronze" size={24} strokeWidth={1.5} />, title: "ENTITY SETUP", desc: "We set up and coordinate your companies or trusts. We make sure everything is registered correctly and works for you." },
    { num: '04', icon: <FileCheck className="text-bronze" size={24} strokeWidth={1.5} />, title: "RESIDENCY & CITIZENSHIP", desc: "We handle the paperwork for your new residency or citizenship. We work with local experts so you don't have to." },
    { num: '05', icon: <ShieldCheck className="text-bronze" size={24} strokeWidth={1.5} />, title: "COMPLIANCE & REPORTING", desc: "We track your global tax filings and reports. We stay on top of the rules so your structure stays legal and safe." },
    { num: '06', icon: <Settings className="text-bronze" size={24} strokeWidth={1.5} />, title: "ONGOING SUPPORT", desc: "As laws and your life change, we update your structure. We make sure your international setup stays efficient and secure." },
  ];

  return (
    <section id="what-you-get" ref={getRef} className="py-16 md:py-32 px-6 md:px-12 bg-porcelain scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="font-data text-sm uppercase tracking-widest text-bronze mb-5">What You Get</h2>
          <h3 className="text-[1.65rem] md:text-5xl lg:text-[52px] font-drama font-normal tracking-tight text-ink leading-[1.1] max-w-none px-4">
            <span className="block text-ink">Strategic implementation.</span>
            <span className="block text-bronze mt-3 md:mt-4 italic font-medium">Everything, coordinated.</span>
          </h3>
        </div>

        <div className="flex flex-col max-w-5xl mx-auto border-t border-ink/5">
          {deliverables.map((item, idx) => (
            <div key={idx} className="get-row-wrapper border-b border-ink/5 py-8 md:py-10 group hover:bg-ink/[0.012] transition-colors">
              <div className="flex flex-row items-start gap-6 md:gap-10 group">
                <div className="flex items-center gap-6 md:w-24 flex-shrink-0">
                  <span className="font-data text-3xl md:text-5xl text-bronze/20 group-hover:text-bronze/40 transition-colors duration-500">{item.num}</span>
                  <div className="w-px h-10 bg-bronze/15 hidden md:block group-hover:bg-bronze transition-colors"></div>
                </div>
                
                <div className="flex-grow">
                  <h4 className="text-xl md:text-2xl font-sans font-bold text-bronze mb-2 tracking-tight uppercase group-hover:text-bronze/80 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-graphite/70 font-sans leading-relaxed text-[15px] md:text-[17px] max-w-4xl group-hover:text-graphite transition-colors">
                    {item.desc}
                  </p>
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
    { icon: <Globe size={24} strokeWidth={1.5} />, label: "01", title: "Global Income", desc: "You earn income in more than one country and face redundant tax exposure." },
    { icon: <Landmark size={24} strokeWidth={1.5} />, label: "02", title: "Second Passports", desc: "You seek a second passport or residency to expand your mobility and secure your future." },
    { icon: <Coins size={24} strokeWidth={1.5} />, label: "03", title: "Digital Assets", desc: "You hold significant crypto and need a compliant, structural bridge to traditional finance." },
    { icon: <Compass size={24} strokeWidth={1.5} />, label: "04", title: "Relocating", desc: "You're planning a strategic move abroad and need to cleanly transition your life." },
    { icon: <Lock size={24} strokeWidth={1.5} />, label: "05", title: "Asset Protection", desc: "You want to insulate your wealth across trusted jurisdictions from localized risks." },
    { icon: <GraduationCap size={24} strokeWidth={1.5} />, label: "06", title: "Family Planning", desc: "You need cross-border architecture for your family's education, healthcare, and succession." }
  ];

  return (
    <section id="who-this-is-for" ref={whoRef} className="py-16 md:py-32 px-6 md:px-12 bg-ink relative z-10 overflow-hidden text-surface scroll-mt-24">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(156, 123, 82, 0.1) 0%, transparent 70%)' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="who-header text-center mb-16 md:mb-20 flex flex-col items-center">
          <h2 className="font-data text-sm uppercase tracking-widest text-bronze mb-5">Who This Is For</h2>
          <h3 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-white max-w-2xl">
            This is for you if...
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {profiles.map((profile, idx) => (
            <div key={idx} className="who-card-wrapper h-full">
              <div className="group relative h-full flex flex-col p-6 md:p-8 rounded-[2rem] border border-white/10 cursor-default overflow-hidden transition-all duration-500 hover:border-bronze/30"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', backdropFilter: 'blur(10px)' }}>
                
                <div className="relative z-10 flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-bronze transition-colors group-hover:bg-bronze group-hover:text-white duration-300" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    {profile.icon}
                  </div>
                  <span className="font-data text-xs tracking-widest text-white/20 group-hover:text-bronze/40 transition-colors">{profile.label}</span>
                </div>
                
                <h4 className="text-xl font-sans font-medium text-white mb-3 relative z-10">{profile.title}</h4>
                <p className="text-surface/60 font-sans leading-relaxed text-[15px] group-hover:text-surface/90 transition-colors duration-300 relative z-10 flex-grow">
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
      subtitle: "Strategic assessment.",
      desc: "A deep-dive valuation of your global footprint. We identify risks and explore opportunities before drafting a single document.",
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
      subtitle: "Seamless execution.",
      desc: "We execute your custom blueprint. From offshore banking and entities to residencies and tax filings, we handle the entire implementation.",
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
      title: "You live it.",
      subtitle: "Ongoing optimization.",
      desc: "