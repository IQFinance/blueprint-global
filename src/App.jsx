import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { ShieldCheck, Globe, Briefcase, ArrowRight, ChevronRight, Compass, Network, Vault, Landmark, Lock, Coins, FileText, HeartPulse, GraduationCap, Scale } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function MidPageCTA({ headline, dark = false }) {
  const bg = dark ? 'bg-ink border-surface/10' : 'bg-porcelain border-graphite/10';
  const text = dark ? 'text-surface' : 'text-ink';
  const sub = dark ? 'text-surface/60' : 'text-graphite';
  return (
    <section className={`${bg} py-16 px-6 md:px-12 border-t border-b relative z-10`}>
      <div className="max-w-3xl mx-auto text-center">
        <p className={`${sub} font-sans text-lg mb-6`}>{headline}</p>
        <a href="https://app.blueprintglobal.io/onboarding" className="inline-flex items-center gap-2 bg-bronze text-white px-8 py-4 rounded-[2rem] text-sm font-medium hover:scale-[1.02] transition-transform shadow-sm">
          Book Your Blueprint <ArrowRight size={16} />
        </a>
        <p className={`${sub} font-data text-xs uppercase tracking-widest mt-6 opacity-60`}>No commitment required. 30-minute strategy call.</p>
      </div>
    </section>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 rounded-[2rem] px-6 py-3 flex items-center justify-between w-[90%] max-w-6xl ${scrolled ? 'bg-porcelain/90 backdrop-blur-md shadow-sm border border-graphite/5' : 'bg-transparent'}`}>
      <div className={`font-sans font-semibold text-xl tracking-tight ${scrolled ? 'text-ink' : 'text-porcelain'} transition-colors duration-500`}>Blueprint Global</div>
      <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${scrolled ? 'text-ink' : 'text-porcelain/90'} transition-colors duration-500`}>
        <a href="#capabilities" className="hover:text-bronze transition-colors hover:-translate-y-[1px] transform inline-block">Capabilities</a>
        <a href="#framework" className="hover:text-bronze transition-colors hover:-translate-y-[1px] transform inline-block">Methodology</a>
        <a href="#engagement" className="hover:text-bronze transition-colors hover:-translate-y-[1px] transform inline-block">About</a>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://app.blueprintglobal.io/dashboard" className={`hidden md:block font-sans text-[15px] font-medium transition-colors ${scrolled ? 'text-ink/80 hover:text-bronze' : 'text-porcelain/80 hover:text-white'}`}>Client Login</a>
        <a href="https://app.blueprintglobal.io/onboarding" className="bg-bronze text-white px-5 py-2.5 rounded-[2rem] text-sm font-medium flex items-center gap-2 hover:scale-[1.02] transition-transform shadow-sm">
          <span>Book Your Blueprint</span>
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
          <span className="block hero-text font-sans font-medium">Sovereign wealth strategy</span>
          <span className="block hero-text font-drama italic text-bronze mt-2 whitespace-nowrap">for global professionals.</span>
        </h1>
        <p className="hero-text text-lg md:text-xl text-porcelain/80 font-sans leading-relaxed max-w-2xl mb-10">
          We map your profile against our 9-layer global wealth architecture spanning tax residency, ownership structures, capital access, risk transfer, and succession planning to build a completely unified, frictionless global life.
        </p>
        <div className="hero-text flex gap-4">
          <a href="https://app.blueprintglobal.io/onboarding" className="bg-surface text-ink px-8 py-4 rounded-[2rem] text-sm font-medium flex items-center gap-2 hover:scale-[1.02] transition-transform">
            Start Your 9-Layer Assessment
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function TrustBand() {
  return (
    <section className="bg-ink text-surface/70 py-16 px-6 border-b border-surface/5 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-4">
        <div className="flex flex-col md:border-r border-surface/10 w-full md:w-1/4">
          <span className="font-data text-xs uppercase tracking-widest text-bronze/90">Foundation</span>
          <span className="text-3xl font-sans mt-2 text-surface tracking-tight">CPA-Governed</span>
        </div>
        <div className="flex flex-col md:border-r border-surface/10 w-full md:w-1/4 md:pl-8">
          <span className="font-data text-xs uppercase tracking-widest text-bronze/90">Jurisdictions</span>
          <span className="text-3xl font-sans mt-2 text-surface tracking-tight">Active in 40+</span>
        </div>
        <div className="flex flex-col md:border-r border-surface/10 w-full md:w-1/4 md:pl-8">
          <span className="font-data text-xs uppercase tracking-widest text-bronze/90">Infrastructure</span>
          <span className="text-3xl font-sans mt-2 text-surface tracking-tight">Institutional</span>
        </div>
        <div className="flex flex-col w-full md:w-1/4 md:pl-8">
          <span className="font-data text-xs uppercase tracking-widest text-bronze/90">Scale</span>
          <span className="text-3xl font-sans mt-2 text-surface tracking-tight">Global Network</span>
        </div>
      </div>
    </section>
  );
}

function ClientProfiles() {
  return (
    <section className="bg-ink pt-20 pb-40 px-6 md:px-12 relative z-10 border-t border-surface/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="font-data text-xs uppercase tracking-widest text-bronze mb-5">Who We Serve</h2>
          <h3 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-surface max-w-3xl">
            Engineered specifically for capital generators.
          </h3>
          <p className="text-surface/40 font-data text-xs uppercase tracking-widest mt-6">Trusted by founders, investors, and executives across 40+ jurisdictions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-surface/10 p-10 rounded-[2rem] bg-surface/5 hover:bg-surface/10 transition-colors">
            <h4 className="text-xl font-sans font-medium text-surface mb-4">Scaling Entrepreneurs</h4>
            <p className="text-surface/60 font-sans leading-relaxed text-sm">Founders optimizing global tax before a liquidity event.</p>
          </div>
          <div className="border border-surface/10 p-10 rounded-[2rem] bg-surface/5 hover:bg-surface/10 transition-colors">
            <h4 className="text-xl font-sans font-medium text-surface mb-4">Crypto-Wealth Investors</h4>
            <p className="text-surface/60 font-sans leading-relaxed text-sm">Crypto-native individuals bridging into trad-fi with compliant banking and favorable residency.</p>
          </div>
          <div className="border border-surface/10 p-10 rounded-[2rem] bg-surface/5 hover:bg-surface/10 transition-colors">
            <h4 className="text-xl font-sans font-medium text-surface mb-4">High-Income Professionals</h4>
            <p className="text-surface/60 font-sans leading-relaxed text-sm">Executives and professionals relocating from high-tax jurisdictions to keep more of what they earn.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const capRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.cap-header', {
        scrollTrigger: { trigger: capRef.current, start: 'top 80%' },
        y: 30, opacity: 0, duration: 1, ease: 'power3.out'
      });
      gsap.from('.cap-card-initial', {
        scrollTrigger: { trigger: capRef.current, start: 'top 70%' },
        y: 40, opacity: 0, duration: 1, stagger: 0.12, ease: 'power3.out'
      });
    }, capRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => ScrollTrigger.refresh(), 100);
    return () => clearTimeout(timeout);
  }, [isExpanded]);

  const handleToggle = () => {
    if (isExpanded) {
      setIsExpanded(false);
      capRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <section ref={capRef} id="capabilities" className="py-32 px-6 md:px-12 bg-porcelain">
      <div className="max-w-6xl mx-auto">
        <div className="cap-header mb-20 max-w-2xl">
          <h2 className="font-data text-xs uppercase tracking-widest text-bronze mb-5">9-Layer Framework</h2>
          <h3 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-ink leading-[1.1]">Architectural precision across all dimensions of your global life.</h3>
          <p className="text-graphite/50 font-data text-xs uppercase tracking-widest mt-6">CPA-governed framework. Every layer independently verified.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
          <div className="cap-card-initial flex flex-col h-full bg-white p-10 rounded-[2.5rem] border border-graphite/5 shadow-sm hover:-translate-y-[2px] transition-transform duration-500">
            <div className="w-14 h-14 rounded-full bg-porcelain flex items-center justify-center mb-8 text-bronze z-10">
              <ShieldCheck size={24} strokeWidth={1.5} />
            </div>
            <h4 className="text-2xl font-sans font-medium mb-4 text-ink z-10">Capital Access</h4>
            <div className="h-px w-full bg-graphite/10 mb-5 z-10"></div>
            <p className="text-graphite font-sans leading-relaxed text-[15px] z-10 flex-grow">
              Access premium jurisdictional liquidity. We structure resilient treasury architectures that insulate assets from localized instability, ensuring capital is always working, never trapped.
            </p>
          </div>
          <div className="cap-card-initial flex flex-col h-full bg-white p-10 rounded-[2.5rem] border border-graphite/5 shadow-sm hover:-translate-y-[2px] transition-transform duration-500">
            <div className="w-14 h-14 rounded-full bg-porcelain flex items-center justify-center mb-8 text-bronze z-10">
              <Globe size={24} strokeWidth={1.5} />
            </div>
            <h4 className="text-2xl font-sans font-medium mb-4 text-ink z-10">Tax Residency</h4>
            <div className="h-px w-full bg-graphite/10 mb-5 z-10"></div>
            <p className="text-graphite font-sans leading-relaxed text-[15px] z-10 flex-grow">
              Strategic acquisition of alternate passports and residencies. We engineer your personal base to guarantee mobility rights, untethered optionality, and precise tax optimization.
            </p>
          </div>
          <div className="cap-card-initial flex flex-col h-full bg-white p-10 rounded-[2.5rem] border border-graphite/5 shadow-sm hover:-translate-y-[2px] transition-transform duration-500">
            <div className="w-14 h-14 rounded-full bg-porcelain flex items-center justify-center mb-8 text-bronze z-10">
              <Briefcase size={24} strokeWidth={1.5} />
            </div>
            <h4 className="text-2xl font-sans font-medium mb-4 text-ink z-10">Ownership Architecture</h4>
            <div className="h-px w-full bg-graphite/10 mb-5 z-10"></div>
            <p className="text-graphite font-sans leading-relaxed text-[15px] z-10 flex-grow">
              High-leverage entity allocation unbound by geography. We design foundation and trust structures for enduring wealth preservation, institutional access, and strict privacy control.
            </p>
          </div>

          <div className="cap-card-initial flex flex-col h-full bg-white p-10 rounded-[2.5rem] border border-graphite/5 shadow-sm hover:-translate-y-[2px] transition-transform duration-500">
            <div className="w-14 h-14 rounded-full bg-porcelain flex items-center justify-center mb-8 text-bronze z-10">
              <Landmark size={24} strokeWidth={1.5} />
            </div>
            <h4 className="text-2xl font-sans font-medium mb-4 text-ink z-10">Mobility & Nationality</h4>
            <div className="h-px w-full bg-graphite/10 mb-5 z-10"></div>
            <p className="text-graphite font-sans leading-relaxed text-[15px] z-10 flex-grow">
              Dual citizenship paths prioritizing access, security, and movement decoupled from single-sovereign control.
            </p>
          </div>
          <div className="cap-card-initial flex flex-col h-full bg-white p-10 rounded-[2.5rem] border border-graphite/5 shadow-sm hover:-translate-y-[2px] transition-transform duration-500">
            <div className="w-14 h-14 rounded-full bg-porcelain flex items-center justify-center mb-8 text-bronze z-10">
              <Lock size={24} strokeWidth={1.5} />
            </div>
            <h4 className="text-2xl font-sans font-medium mb-4 text-ink z-10">Risk Transfer</h4>
            <div className="h-px w-full bg-graphite/10 mb-5 z-10"></div>
            <p className="text-graphite font-sans leading-relaxed text-[15px] z-10 flex-grow">
              Institutional mechanisms mitigating jurisdictional litigation, volatile markets, and sovereign threats.
            </p>
          </div>
          <div className="cap-card-initial flex flex-col h-full bg-white p-10 rounded-[2.5rem] border border-graphite/5 shadow-sm hover:-translate-y-[2px] transition-transform duration-500">
            <div className="w-14 h-14 rounded-full bg-porcelain flex items-center justify-center mb-8 text-bronze z-10">
              <HeartPulse size={24} strokeWidth={1.5} />
            </div>
            <h4 className="text-2xl font-sans font-medium mb-4 text-ink z-10">Healthcare Overlay</h4>
            <div className="h-px w-full bg-graphite/10 mb-5 z-10"></div>
            <p className="text-graphite font-sans leading-relaxed text-[15px] z-10 flex-grow">
              Global medical access networks bypassing nationalized wait queues and coverage limits.
            </p>
          </div>

          {isExpanded && (
            <>
              <div className="cap-card-extended flex flex-col h-full bg-white p-10 rounded-[2.5rem] border border-graphite/5 shadow-sm hover:-translate-y-[2px] transition-all duration-500 opacity-100 translate-y-0">
                <div className="w-14 h-14 rounded-full bg-porcelain flex items-center justify-center mb-8 text-bronze z-10">
                  <GraduationCap size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-sans font-medium mb-4 text-ink z-10">Education Overlay</h4>
                <div className="h-px w-full bg-graphite/10 mb-5 z-10"></div>
                <p className="text-graphite font-sans leading-relaxed text-[15px] z-10 flex-grow">
                  Educational pathways mapped specifically to ensure legacy continuity, prestigious access, and high-quality stability for the next generation.
                </p>
              </div>
              <div className="cap-card-extended flex flex-col h-full bg-white p-10 rounded-[2.5rem] border border-graphite/5 shadow-sm hover:-translate-y-[2px] transition-all duration-500 opacity-100 translate-y-0">
                <div className="w-14 h-14 rounded-full bg-porcelain flex items-center justify-center mb-8 text-bronze z-10">
                  <Scale size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-sans font-medium mb-4 text-ink z-10">Succession Planning</h4>
                <div className="h-px w-full bg-graphite/10 mb-5 z-10"></div>
                <p className="text-graphite font-sans leading-relaxed text-[15px] z-10 flex-grow">
                  Dynastic planning structuring ensuring frictionless wealth transfer devoid of draconian estate taxes and probate interferences.
                </p>
              </div>
              <div className="cap-card-extended flex flex-col h-full bg-white p-10 rounded-[2.5rem] border border-graphite/5 shadow-sm hover:-translate-y-[2px] transition-all duration-500 opacity-100 translate-y-0">
                <div className="w-14 h-14 rounded-full bg-porcelain flex items-center justify-center mb-8 text-bronze z-10">
                  <Coins size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-sans font-medium mb-4 text-ink z-10">Digital Custody</h4>
                <div className="h-px w-full bg-graphite/10 mb-5 z-10"></div>
                <p className="text-graphite font-sans leading-relaxed text-[15px] z-10 flex-grow">
                  Sophisticated banking and legal rails bridging crypto wealth safely and favorably into trad-fi and global real estate.
                </p>
              </div>
            </>
          )}
        </div>

        <div className="mt-16 text-center">
          <button 

            onClick={handleToggle}
            className="font-data text-sm uppercase tracking-widest text-bronze glow-text hover:text-ink transition-colors cursor-pointer"
          >
            {isExpanded ? "Collapse" : "See All 9 Layers"}
          </button>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  const phiRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.phi-text', {
        scrollTrigger: { trigger: phiRef.current, start: 'top 75%' },
        y: 40, opacity: 0, duration: 1.2, stagger: 0.1, ease: 'power3.out'
      });
    }, phiRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={phiRef} id="philosophy" className="relative py-40 px-6 md:px-12 bg-ink text-surface overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop" 
          alt="Abstract architecture texture" 
          className="w-full h-full object-cover opacity-[0.08]"
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="phi-text font-sans text-xl md:text-3xl text-surface/60 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
          Most firms optimize for localized compliance.
        </p>
        <p className="phi-text font-drama italic text-4xl md:text-6xl text-bronze mb-12 max-w-4xl mx-auto leading-tight">
          We design for enduring sovereignty, untethered mobility, and permanent peace of mind.
        </p>
        <div className="phi-text h-16 w-px bg-bronze/50 mx-auto"></div>
      </div>
    </section>
  );
}

function Framework() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Mapping",
      desc: "We analyze your exact profile—citizenships, tax base, family overlay, and liquid/illiquid assets—to define the structural bottlenecks and immediate risk exposures.",
      keyword: "DISCOVER",
      gradient: "from-bronze/20 via-bronze/5 to-transparent"
    },
    {
      num: "02",
      title: "Structuring & Alignment",
      desc: "We engineer a cohesive architecture. This means sequencing banking access before entity formation, and aligning tax residency with mobility execution securely.",
      keyword: "STRUCTURE",
      gradient: "from-bronze/15 via-ink/10 to-transparent"
    },
    {
      num: "03",
      title: "Stewardship & Continuity",
      desc: "Implementation is just the beginning. We establish legacy preservation frameworks, ensuring seamless transitions and multigenerational control over your capital.",
      keyword: "STEWARD",
      gradient: "from-ink/30 via-bronze/10 to-transparent"
    }
  ];

  return (
    <section id="framework" className="bg-porcelain pt-32 pb-48 px-6 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="font-data text-xs uppercase tracking-widest text-bronze mb-5">Methodology</h2>
        <h3 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-ink">The Architecture Protocol.</h3>
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
              <h4 className="text-3xl font-sans font-medium mb-6 text-ink">{step.title}</h4>
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

function Engagement() {
  const engRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.eng-item', {
        scrollTrigger: { trigger: engRef.current, start: 'top 85%' },
        y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out'
      });
    }, engRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="engagement" ref={engRef} className="py-24 px-6 md:px-12 bg-porcelain relative z-20">
      <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 border border-graphite/5 shadow-sm flex flex-col items-center text-center">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-6 eng-item ring-4 ring-porcelain shadow-sm flex-shrink-0">
          <img 
            src="/martin.jpg" 
            alt="Martin Popiel - Founder" 
            className="w-full h-full object-cover object-top filter contrast-[1.05] saturate-[0.9]"
          />
        </div>
        <div className="eng-item">
          <h2 className="font-data text-xs uppercase tracking-widest text-bronze mb-3">Meet The Architect</h2>
          <h3 className="text-2xl md:text-3xl font-sans font-medium tracking-tight text-ink mb-4">
            Martin Popiel, CPA & Global Strategist
          </h3>
          <p className="text-graphite font-sans leading-relaxed text-[15px] md:text-base max-w-2xl mx-auto mb-8">
            This infrastructure was pioneered by our founder, Martin Popiel. Realizing the friction of the offshore world firsthand, he spent years traversing 40+ countries to aggregate the absolute best global strategies into one unified platform. Today, this system is governed by a formidable network of elite tax attorneys, jurisdictional bankers, and geopolitical analysts.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="flex items-center gap-2 bg-porcelain px-4 py-2 rounded-full text-xs font-data uppercase tracking-widest text-ink/80 border border-graphite/5">
              <ShieldCheck size={14} className="text-bronze"/> CPA-Governed
            </span>
            <span className="flex items-center gap-2 bg-porcelain px-4 py-2 rounded-full text-xs font-data uppercase tracking-widest text-ink/80 border border-graphite/5">
              <Globe size={14} className="text-bronze"/> 40+ Jurisdictions
            </span>
            <span className="flex items-center gap-2 bg-porcelain px-4 py-2 rounded-full text-xs font-data uppercase tracking-widest text-ink/80 border border-graphite/5">
              <Network size={14} className="text-bronze"/> Global Network
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function DecisionMotionGraphic() {
  const graphicRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Pulse root node
      gsap.to('.root-node', {
        scale: 1.3,
        opacity: 0.9,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut'
      });
      
      // Draw lines downwards
      gsap.fromTo('.path-line', 
        { strokeDasharray: 300, strokeDashoffset: 300 },
        { strokeDashoffset: 0, duration: 2.5, stagger: 0.15, ease: 'power2.out' }
      );
      
      // Simulate glowing flow along optimal paths
      gsap.fromTo('.optimal-path', 
        { strokeDashoffset: 300, stroke: "#9C7B52" },
        { 
           strokeDashoffset: 0, 
           stroke: "#C6A86A", 
           duration: 3, 
           ease: 'power2.inOut',
           repeat: -1,
           yoyo: true,
           delay: 1
        }
      );
      
      // Fade in text labels
      gsap.fromTo('.node-label',
        { opacity: 0, y: -5 },
        { opacity: 0.4, y: 0, duration: 1.5, stagger: 0.1, ease: 'power2.out', delay: 1 }
      );
      
      gsap.fromTo('.node-label-optimal',
        { opacity: 0, y: -5 },
        { opacity: 1, y: 0, duration: 1.5, stagger: 0.1, ease: 'power2.out', delay: 1.5 }
      );

      // Pulse optimal end nodes
      gsap.to('.optimal-node', {
        scale: 1.4,
        opacity: 0.9,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
        delay: 2.5
      });
      
    }, graphicRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={graphicRef} className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#0E1014] overflow-hidden pt-8">
      <svg className="w-full h-full max-w-[500px] overflow-visible" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Lines from Layer 1 to Layer 2 */}
        <path d="M 120 160 C 120 210, 60 200, 60 250" stroke="#9C7B52" strokeWidth="1.5" strokeDasharray="300" className="path-line optimal-path" />
        <path d="M 120 160 C 120 210, 180 200, 180 250" stroke="#F6F2EA" strokeWidth="1" strokeDasharray="300" className="path-line opacity-20" />
        
        <path d="M 380 160 C 380 210, 320 200, 320 250" stroke="#F6F2EA" strokeWidth="1" strokeDasharray="300" className="path-line opacity-20" />
        <path d="M 380 160 C 380 210, 440 200, 440 250" stroke="#9C7B52" strokeWidth="1.5" strokeDasharray="300" className="path-line optimal-path" />

        {/* Lines from Root to Layer 1 */}
        <path d="M 250 50 C 250 100, 120 90, 120 140" stroke="#9C7B52" strokeWidth="1.5" strokeDasharray="300" className="path-line optimal-path" />
        <path d="M 250 50 C 250 100, 380 90, 380 140" stroke="#9C7B52" strokeWidth="1.5" strokeDasharray="300" className="path-line optimal-path" />

        {/* Nodes & Labels */}
        
        {/* Root */}
        <circle cx="250" cy="40" r="4" fill="#9C7B52" className="root-node transform origin-[250px_40px]" />
        <circle cx="250" cy="40" r="14" stroke="#9C7B52" strokeWidth="1" opacity="0.2" className="root-node transform origin-[250px_40px]" />
        <text x="250" y="20" fill="#F6F2EA" className="node-label-optimal font-data text-[10px] tracking-widest uppercase" textAnchor="middle">User Profile</text>

        {/* Layer 1 Nodes */}
        <circle cx="120" cy="150" r="3" fill="#9C7B52" opacity="0.6" />
        <text x="120" y="130" fill="#9C7B52" className="node-label-optimal font-data text-[10px] tracking-widest uppercase" textAnchor="middle">Capital Access</text>
        
        <circle cx="380" cy="150" r="3" fill="#9C7B52" opacity="0.6" />
        <text x="380" y="130" fill="#9C7B52" className="node-label-optimal font-data text-[10px] tracking-widest uppercase" textAnchor="middle">Tax Residency</text>

        {/* Layer 2 Nodes */}
        {/* Singapore */}
        <circle cx="60" cy="260" r="3.5" fill="#9C7B52" className="optimal-node transform origin-[60px_260px]" style={{ filter: 'drop-shadow(0 0 6px #9C7B52)' }} />
        <text x="60" y="285" fill="#9C7B52" className="node-label-optimal font-data text-[10px] tracking-widest uppercase" textAnchor="middle">Singapore</text>
        
        {/* Switzerland */}
        <circle cx="180" cy="260" r="2.5" fill="#F6F2EA" opacity="0.3" />
        <text x="180" y="285" fill="#F6F2EA" className="node-label font-data text-[10px] tracking-widest uppercase" textAnchor="middle">Switzerland</text>

        {/* UAE */}
        <circle cx="320" cy="260" r="2.5" fill="#F6F2EA" opacity="0.3" />
        <text x="320" y="285" fill="#F6F2EA" className="node-label font-data text-[10px] tracking-widest uppercase" textAnchor="middle">UAE</text>

        {/* Paraguay */}
        <circle cx="440" cy="260" r="3.5" fill="#9C7B52" className="optimal-node transform origin-[440px_260px]" style={{ filter: 'drop-shadow(0 0 6px #9C7B52)' }} />
        <text x="440" y="285" fill="#9C7B52" className="node-label-optimal font-data text-[10px] tracking-widest uppercase" textAnchor="middle">Paraguay</text>

      </svg>
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-bronze/5 rounded-full blur-[100px] pointer-events-none"></div>
    </div>
  );
}

function AppShowcase() {
  return (
    <section id="platform" className="py-32 px-6 md:px-12 bg-ink text-surface relative z-10 border-t border-surface/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <h2 className="font-data text-xs uppercase tracking-widest text-bronze mb-5">The Intelligence Platform</h2>
          <h3 className="text-4xl md:text-5xl font-sans font-medium tracking-tight mb-8 leading-[1.1]">
            Decision-grade infrastructure, at your fingertips.
          </h3>
          <p className="text-surface/80 font-sans leading-relaxed mb-10 text-lg">
            Beyond our private advisory, Blueprint Global serves as your persistent architecture engine. Compare jurisdictions, optimize entity structures, and actively monitor your global footprint entirely from our discreet, member-only platform ecosystem.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.blueprintglobal.io/onboarding" className="bg-bronze text-white px-8 py-4 rounded-[2rem] text-sm font-medium hover:scale-[1.02] transition-transform shadow-sm flex items-center gap-2">
              Access the Platform <ArrowRight size={16} />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="rounded-[2rem] border border-surface/10 overflow-hidden shadow-2xl relative bg-[#0E1014] aspect-[4/3] group">
            <DecisionMotionGraphic />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-surface/5 opacity-50 pointer-events-none"></div>
          </div>
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
            Discreet, institutional-grade architecture for globally mobile families and entrepreneurs. Sovereignty requires structure.
          </p>
        </div>
        <div className="flex gap-16 md:gap-32">
          <div className="flex flex-col gap-4">
            <span className="font-data text-xs uppercase tracking-widest text-bronze mb-2">Practice</span>
            <a href="#capabilities" className="font-sans text-[15px] text-surface/80 hover:text-white transition-colors">Offshore Banking</a>
            <a href="#capabilities" className="font-sans text-[15px] text-surface/80 hover:text-white transition-colors">Dual Citizenship</a>
            <a href="#capabilities" className="font-sans text-[15px] text-surface/80 hover:text-white transition-colors">Global Strategy</a>
            <a href="#framework" className="font-sans text-[15px] text-surface/80 hover:text-white transition-colors">Methodology</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-data text-xs uppercase tracking-widest text-bronze mb-2">Firm</span>
            <a href="#engagement" className="font-sans text-[15px] text-surface/80 hover:text-white transition-colors">About</a>
            <a href="https://app.blueprintglobal.io/onboarding" className="font-sans text-[15px] text-surface/80 hover:text-white transition-colors">Platform Access</a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-surface/40">
        <p>&copy; {new Date().getFullYear()} Blueprint Group LLC. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-surface transition-colors">Privacy Memorandum</a>
          <a href="#" className="hover:text-surface transition-colors">Terms of Engagement</a>
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
      <Capabilities />
      <MidPageCTA headline="See how 9 layers work together to protect your wealth." />
      <Philosophy />
      <Framework />
      <MidPageCTA headline="Ready to map your global architecture?" dark />
      <ClientProfiles />
      <MidPageCTA headline="Sound like you? Let's talk." dark />
      <Engagement />
      <AppShowcase />
      <Footer />
    </div>
  );
}
