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
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-[2rem] px-6 md:px-12 flex items-center justify-between w-[92%] md:w-[90%] max-w-6xl ${scrolled ? 'bg-porcelain/90 backdrop-blur-md shadow-sm border border-graphite/5' : 'bg-transparent'}`}>
        <div className={`font-sans font-semibold text-lg md:text-xl tracking-tight ${scrolled ? 'text-ink' : 'text-porcelain'} transition-colors duration-500`}>Blueprint Global</div>
        
        {/* Centered Desktop Links */}
        <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-medium ${scrolled ? 'text-ink' : 'text-porcelain/90'} transition-colors duration-500`}>
          <a href="#education" className="hover:text-bronze transition-colors hover:-translate-y-[1px] transform inline-block">What We Do</a>
          <a href="#how-it-works" className="hover:text-bronze transition-colors hover:-translate-y-[1px] transform inline-block">How It Works</a>
          <a href="#about" className="hover:text-bronze transition-colors hover:-translate-y-[1px] transform inline-block">About</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://app.blueprintglobal.io/dashboard" className={`hidden md:block font-sans text-[15px] font-medium transition-colors ${scrolled ? 'text-ink/80 hover:text-bronze' : 'text-porcelain/80 hover:text-white'}`}>Client Login</a>
          <a href="https://app.blueprintglobal.io/onboarding" className="group bg-bronze text-white px-5 py-2.5 rounded-[2rem] text-sm font-medium hidden md:flex items-center gap-2 hover:bg-bronze/90 transition-all shadow-md shadow-bronze/10">
            <span>Try the Demo</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button className={`p-1 transition-colors ${scrolled ? 'text-ink' : 'text-porcelain'} md:hidden`} onClick={() => setMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
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
    <section ref={heroRef} id="hero" className="relative min-h-[75dvh] lg:min-h-[85vh] pb-4 md:pb-12 w-full flex flex-col justify-end overflow-hidden bg-ink text-surface pt-24 lg:pt-28 scroll-mt-32">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
          alt="Refined architecture"
          className="hero-image object-cover w-full h-full opacity-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/30"></div>
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 max-w-6xl mx-auto mt-auto pb-10 md:pb-24">
        <div className="max-w-none text-left -ml-6 md:-ml-12 lg:-ml-20">
          <h1 className="text-[1.45rem] sm:text-4xl md:text-6xl lg:text-[4rem] leading-[1.2] md:leading-[1.1] tracking-tight mb-6 md:mb-10 max-w-5xl">
            <span className="block hero-text font-drama font-normal text-surface drop-shadow-lg">Your life is tied to <span className="text-white relative inline-block">one<span className="absolute -bottom-1 left-0 w-full h-[3px] bg-bronze/80"></span></span> country</span>
            <span className="block hero-text font-drama font-normal text-bronze drop-shadow-lg mt-3 md:mt-6">...and it doesn't have to be.</span>
          </h1>
          
          <p className="hero-text text-[15px] md:text-[1.35rem] text-porcelain/80 font-sans leading-relaxed max-w-2xl md:max-w-none md:whitespace-nowrap mb-8 md:mb-12 drop-shadow-md">
            International structures for entrepreneurs, investors, and mobile families.
          </p>

          <div className="hero-text flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <a href="https://app.blueprintglobal.io/onboarding" className="group bg-surface text-ink px-8 py-4 rounded-[2rem] text-[15px] font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors shadow-lg shadow-white/5 relative overflow-hidden">
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
    <section className="bg-ink py-12 md:py-16 px-6 md:px-12 relative z-10 overflow-hidden border-t border-b border-surface/5">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(156,123,82,0.15) 0%, transparent 70%)' }}></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-12 lg:gap-20">
          <div className="flex items-center gap-3 group">
            <ShieldCheck size={15} className="text-bronze group-hover:scale-110 transition-transform md:w-[18px] md:h-[18px]" />
            <span className="font-data text-[10px] md:text-[12px] whitespace-nowrap uppercase tracking-[0.15em] text-surface/40 group-hover:text-surface/70 transition-colors">CPA-Led Coordination</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-surface/10"></div>
          <div className="flex items-center gap-3 group">
            <Globe size={15} className="text-bronze group-hover:scale-110 transition-transform md:w-[18px] md:h-[18px]" />
            <span className="font-data text-[10px] md:text-[12px] whitespace-nowrap uppercase tracking-[0.15em] text-surface/40 group-hover:text-surface/70 transition-colors">Multi-Jurisdictional Network</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-surface/10"></div>
          <div className="flex items-center gap-3 group">
            <Lock size={15} className="text-bronze group-hover:scale-110 transition-transform md:w-[18px] md:h-[18px]" />
            <span className="font-data text-[10px] md:text-[12px] whitespace-nowrap uppercase tracking-[0.15em] text-surface/40 group-hover:text-surface/70 transition-colors">Compliance-First Approach</span>
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
    <section ref={eduRef} id="education" className="py-12 md:py-32 px-6 md:px-12 bg-porcelain relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="edu-header mb-8 md:mb-20 text-center flex flex-col items-center">
          <h2 className="font-data text-sm uppercase tracking-[0.2em] text-bronze mb-6">What We Do</h2>
          <h3 className="text-[1.65rem] sm:text-3xl md:text-5xl lg:text-[52px] font-drama font-normal tracking-tight text-ink leading-[1.2] md:leading-[1.1] max-w-none px-2">
            <span className="block text-ink mb-4 md:mb-6">We build your international life.</span>
            <span className="block text-bronze text-[2.2rem] md:text-6xl lg:text-[64px] font-medium">You live it.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-20">
          {pillars.map((pillar, pIdx) => (
            <div key={pIdx} className="edu-pillar flex flex-col">
              <h4 className="font-sans font-bold text-xl md:text-2xl text-bronze mb-4 tracking-tight uppercase whitespace-nowrap text-center">{pillar.title}</h4>
              <div className="w-16 h-px bg-bronze/30 mb-8 mx-auto"></div>
              
              <div className="flex flex-col gap-10">
                {pillar.items.map((item, iIdx) => (
                  <div key={iIdx} className="group pb-6 border-b border-graphite/5 last:border-0 last:pb-0">
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
      gsap.from('.get-row-wrapper', {
        scrollTrigger: { trigger: getRef.current, start: 'top 70%' },
        y: 40, opacity: 0, duration: 1, stagger: 0.12, ease: 'power3.out'
      });
    }, getRef);
    return () => ctx.revert();
  }, []);

  const deliverables = [
    { num: '01', icon: <Map className="text-bronze" size={20} strokeWidth={1.5} />, title: "STRATEGIC BLUEPRINT", desc: "A custom roadmap for your international life. No generic templates—just a clear plan built for your specific situation." },
    { num: '02', icon: <Landmark className="text-bronze" size={20} strokeWidth={1.5} />, title: "GLOBAL BANKING", desc: "We take care of opening bank accounts abroad. We get you verified and set up in the world's most stable countries." },
    { num: '03', icon: <Building2 className="text-bronze" size={20} strokeWidth={1.5} />, title: "ENTITY SETUP", desc: "We set up and coordinate your companies or trusts. We make sure everything is registered correctly and works for you." },
    { num: '04', icon: <FileCheck className="text-bronze" size={20} strokeWidth={1.5} />, title: "RESIDENCY & CITIZENSHIP", desc: "We handle the paperwork for your new residency or citizenship. We work with local experts so you don't have to." },
    { num: '05', icon: <ShieldCheck className="text-bronze" size={20} strokeWidth={1.5} />, title: "COMPLIANCE & REPORTING", desc: "We track your global tax filings and reports. We stay on top of the rules so your structure stays legal and safe." },
    { num: '06', icon: <Settings className="text-bronze" size={20} strokeWidth={1.5} />, title: "ONGOING SUPPORT", desc: "As laws and your life change, we update your structure. We make sure your international setup stays efficient and secure." },
  ];

  return (
    <section id="what-you-get" ref={getRef} className="py-12 md:py-32 px-6 md:px-12 bg-porcelain scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-16 flex flex-col items-center">
          <h2 className="font-data text-sm uppercase tracking-[0.2em] text-bronze mb-6">What You Get</h2>
          <h3 className="text-[1.55rem] md:text-5xl lg:text-[52px] font-drama font-normal tracking-tight text-ink leading-[1.2] md:leading-[1.1] max-w-none px-2">
            <span className="block text-ink mb-4 md:mb-6">Strategic implementation.</span>
            <span className="block text-bronze text-[1.65rem] sm:text-[2rem] md:text-6xl lg:text-[64px] font-semibold md:font-normal">Everything, coordinated.</span>
          </h3>
        </div>

        <div className="flex flex-col max-w-5xl mx-auto border-t border-ink/5">
          {deliverables.map((item, idx) => (
            <div key={idx} className="get-row-wrapper border-b border-ink/5 py-4 md:py-8 group hover:bg-ink/[0.012] transition-colors">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 group">
                <div className="flex items-center gap-4 md:w-24 flex-shrink-0">
                  <span className="font-data text-3xl md:text-5xl text-bronze/20 group-hover:text-bronze/40 transition-colors duration-500">{item.num}</span>
                  <div className="w-px h-8 bg-bronze/15 hidden md:block group-hover:bg-bronze transition-colors"></div>
                </div>
                
                <div className="flex-grow">
                  <h4 className="text-lg md:text-2xl font-sans font-bold text-bronze mb-1 tracking-tight uppercase group-hover:text-bronze/80 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-graphite/70 font-sans leading-relaxed text-sm md:text-[17px] max-w-4xl group-hover:text-graphite transition-colors">
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
    // Kill any existing triggers to prevent conflicts
    ScrollTrigger.getAll().filter(st => st.vars.trigger === whoRef.current).forEach(st => st.kill());

    let ctx = gsap.context(() => {
      // Header animation
      gsap.from('.who-header', {
        scrollTrigger: { 
          trigger: whoRef.current, 
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        y: 30, 
        opacity: 0, 
        duration: 1, 
        ease: 'power3.out'
      });

      // Card animations - targeting the wrapper
      gsap.from('.who-card-wrapper', {
        scrollTrigger: { 
          trigger: whoRef.current, 
          start: 'top 70%',
          toggleActions: 'play none none none'
        },
        y: 60, 
        opacity: 0, 
        duration: 1.2, 
        stagger: 0.2, 
        ease: 'power4.out'
      });

      // Icon pop animation - explicit targeting
      gsap.from('.who-icon-inner', {
        scrollTrigger: { 
          trigger: whoRef.current, 
          start: 'top 65%',
          toggleActions: 'play none none none'
        },
        scale: 0, 
        opacity: 0, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: 'back.out(2)',
        delay: 0.4
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
    <section id="who-this-is-for" ref={whoRef} className="py-16 md:py-32 px-6 md:px-12 bg-ink relative z-10 overflow-visible text-surface scroll-mt-24">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(156, 123, 82, 0.1) 0%, transparent 70%)' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="who-header text-center mb-16 md:mb-20 flex flex-col items-center">
          <h2 className="font-data text-sm uppercase tracking-widest text-bronze mb-5">Who This Is For</h2>
          <h3 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-white max-w-2xl">
            This is for you if...
          </h3>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 relative z-10 pb-[140px] md:pb-0">
          {profiles.map((profile, idx) => (
            <div
              key={idx}
              className="who-card-wrapper w-full rounded-[2.5rem] md:rounded-[2rem] border border-white/10 p-8 flex flex-col relative mb-6 md:mb-0 sticky md:static group"
              style={{
                top: `calc(100px + ${idx * 20}px)`,
                background: 'rgba(20, 22, 26, 0.97)',
                backdropFilter: 'blur(16px)',
                zIndex: 10 + idx
              }}
            >
              <div className="relative z-10 flex items-start justify-between mb-8">
                <div className="who-icon-inner w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-bronze transition-colors group-hover:bg-bronze group-hover:text-white duration-300" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  {profile.icon}
                </div>
                <span className="font-data text-xs tracking-widest text-white/20 group-hover:text-bronze/40 transition-colors">{profile.label}</span>
              </div>
              
              <h4 className="text-xl font-sans font-medium text-white mb-3 relative z-10">{profile.title}</h4>
              <p className="text-surface/60 font-sans leading-relaxed text-[15px] group-hover:text-surface/90 transition-colors duration-300 relative z-10 flex-grow">
                {profile.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const howRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.how-step', {
        scrollTrigger: { 
          trigger: howRef.current, 
          start: 'top 75%',
          toggleActions: 'play none none none'
        },
        y: 40, 
        opacity: 0, 
        duration: 1, 
        stagger: 0.2, 
        ease: 'power3.out'
      });
    }, howRef);
    return () => ctx.revert();
  }, []);

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
      title: "Maintain",
      subtitle: "Ongoing optimization.",
      desc: "As laws and your life evolve, we ensure your structure remains compliant and optimized. One partner for the long-term management of your international life.",
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
    <section id="how-it-works" ref={howRef} className="bg-porcelain pt-16 md:pt-32 pb-16 md:pb-32 px-6 md:px-12 relative z-10 scroll-mt-24">
      <div className="max-w-6xl mx-auto mb-12 md:mb-16">
        <div className="who-header text-center mb-12 md:mb-16 flex flex-col items-center">
          <h2 className="font-data text-sm uppercase tracking-[0.2em] text-bronze mb-5">How It Works</h2>
          <h3 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-ink">Map. Build. <span className="text-bronze">Maintain.</span></h3>
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative flex flex-col pb-16">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="how-step w-full bg-surface rounded-[2.5rem] md:rounded-[3rem] shadow-sm border border-graphite/5 p-8 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-16 transform relative overflow-hidden mb-6 md:mb-8 sticky group"
            style={{
              top: `calc(100px + ${idx * 20}px)`
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
    <section id="about" ref={aboutRef} className="py-24 md:py-32 px-6 md:px-12 bg-porcelain relative z-10 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Main card */}
        <div className="about-item relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-graphite/8 shadow-xl"
          style={{ background: 'linear-gradient(150deg, #1a1c1f 0%, #16181B 60%, #1e1a15 100%)' }}>
          
          {/* Subtle bronze glow top-right */}
          <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none" style={{ background: 'radial-gradient(circle at 100% 0%, rgba(156,123,82,0.18) 0%, transparent 60%)' }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none" style={{ background: 'radial-gradient(circle at 0% 100%, rgba(156,123,82,0.08) 0%, transparent 60%)' }}></div>

          <div className="relative z-10 p-6 md:p-16 lg:p-20 flex flex-col md:flex-row gap-8 md:gap-20 items-center">
            {/* Photo Column — compact on mobile */}
            <div className="w-full md:w-[320px] flex-shrink-0">
              <div className="aspect-video md:aspect-[4/5] w-full rounded-2xl overflow-hidden about-item ring-1 ring-bronze/20 shadow-2xl relative group">
                <img
                  src="/martin.jpg"
                  alt="Martin Popiel - Founder"
                  className="w-full h-full object-cover object-[center_20%] filter contrast-[1.05] saturate-[0.85] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Content Column */}
            <div className="about-item flex-grow flex flex-col text-left">
              <span className="font-data text-[14px] md:text-[20px] uppercase tracking-[0.4em] text-bronze mb-3 block">The Architect</span>
              
              <div className="mb-4 md:mb-6">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-drama font-normal tracking-tight text-white mb-1">
                  Martin Popiel, CPA
                </h2>
                <p className="text-white/40 font-sans text-[11px] md:text-[14px] tracking-widest uppercase">Chartered Professional Accountant</p>
              </div>
              
              <div className="text-white/80 font-sans leading-relaxed text-[15px] md:text-[19px] max-w-2xl mb-6 md:mb-10 space-y-4">
                <p>
                  Martin lives the international life he builds for others. With multiple citizenships, residencies and businesses across three continents, he understands the complexity of a global footprint.<span className="hidden md:inline"> One firm for banking. Another for residency. Another for tax. None of them talking to each other.</span>
                </p>
                <p>
                  He founded Blueprint to solve this problem, providing a single team to coordinate your entire international structure under one roof.
                </p>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
                {[
                  { icon: <ShieldCheck size={14} />, label: "CPA Ontario" },
                  { icon: <Globe size={14} />, label: "3 Languages" },
                  { icon: <MapPin size={14} />, label: "40+ Countries" }
                ].map((badge, i) => (
                  <span key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] md:text-[12px] font-data uppercase tracking-widest text-white/70 border border-white/10 bg-white/[0.03]">
                    <span className="text-bronze">{badge.icon}</span>
                    {badge.label}
                  </span>
                ))}
                
                <a href="https://www.linkedin.com/in/martinpopiel/" target="_blank" rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] md:text-[12px] font-data uppercase tracking-widest text-white/90 border border-[#0a66c2]/30 bg-[#0a66c2]/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </div>
            </div>
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
      q: "Is this legal?",
      a: "Yes, fully. Every structure we coordinate is built on established legal frameworks, implemented by licensed professionals in each jurisdiction. We work with tax attorneys, immigration lawyers, and banking compliance officers to ensure everything is transparent and above board."
    },
    {
      icon: <Clock size={18} className="text-bronze flex-shrink-0" />,
      q: "How long does this take?",
      a: "It depends on your situation. Some structures can be in place within 6 months. More complex, multi-jurisdiction roadmaps can take a year or longer. We scope the timeline during your initial assessment."
    },
    {
      icon: <Coins size={18} className="text-bronze flex-shrink-0" />,
      q: "How much does it cost?",
      a: "It depends on the scope. A single residency application is different from a full multi-jurisdiction structure. We provide a clear quote after the initial assessment: no hidden fees, no hourly billing surprises."
    },
    {
      icon: <Users size={18} className="text-bronze flex-shrink-0" />,
      q: "I already have an accountant and lawyer. Do I still need this?",
      a: "Probably. Your local accountant and lawyer are great for domestic matters. But cross-border structuring requires coordination across multiple jurisdictions: that's the gap Blueprint fills. We work alongside your existing team, not against them."
    },
    {
      icon: <RefreshCw size={18} className="text-bronze flex-shrink-0" />,
      q: "What if my situation changes after we build the structure?",
      a: "That's what the Maintain phase is for. Laws change, life changes. We handle renewals, annual filings, and structural adjustments so everything stays current and compliant."
    }
  ];

  return (
    <section id="faq" ref={faqRef} className="py-16 md:py-32 px-6 md:px-12 bg-ink text-surface relative z-10 border-t border-surface/5 scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <div className="faq-header mb-16 text-center">
          <h2 className="font-data text-sm uppercase tracking-widest text-bronze mb-5">FAQ</h2>
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
      
      <WhatYouGet />
      
      <MidPageCTA 
        headline="Start Your Blueprint" 
        buttonText="Start Your Blueprint"
        buttonLink="https://app.blueprintglobal.io/onboarding"
        subheadline="Built for globally mobile founders and families."
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
