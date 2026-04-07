'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-[2rem] px-6 md:px-12 flex items-center justify-between w-[92%] md:w-[90%] max-w-6xl ${scrolled ? 'bg-porcelain/90 backdrop-blur-md shadow-sm border border-graphite/5' : 'bg-transparent'}`}>
        <Link href="/" className={`font-sans font-semibold text-lg md:text-xl tracking-tight ${scrolled ? 'text-ink' : 'text-porcelain'} transition-colors duration-500`}>Blueprint Global</Link>

        {/* Centered Desktop Links */}
        <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-bold ${scrolled ? 'text-ink' : 'text-porcelain/90'} transition-colors duration-500`}>
          <a href="#education" className="hover:text-bronze transition-colors hover:-translate-y-[1px] transform inline-block">What We Do</a>
          <a href="#how-it-works" className="hover:text-bronze transition-colors hover:-translate-y-[1px] transform inline-block">How It Works</a>
          <a href="#about" className="hover:text-bronze transition-colors hover:-translate-y-[1px] transform inline-block">About</a>
          <Link href="/blog" className="hover:text-bronze transition-colors hover:-translate-y-[1px] transform inline-block">Blog</Link>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://app.blueprintglobal.io/dashboard" className={`hidden md:block font-sans text-[15px] font-bold transition-colors ${scrolled ? 'text-ink/80 hover:text-bronze' : 'text-porcelain/80 hover:text-white'}`}>Client Login</a>
          <Link href="/contact" className="group bg-bronze text-white px-5 py-2.5 rounded-[2rem] text-sm font-medium hidden md:flex items-center gap-2 hover:bg-bronze/90 transition-all shadow-md shadow-bronze/10">
            <span>Get Started</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
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
          <Link href="/blog" onClick={() => setMenuOpen(false)} className="border-b border-surface/10 pb-4 hover:text-bronze transition-colors">Blog</Link>
          <a href="https://app.blueprintglobal.io/dashboard" onClick={() => setMenuOpen(false)} className="text-bronze mt-4">Client Login</a>
          <Link href="/contact" className="group bg-bronze text-white px-6 py-4 rounded-[2rem] text-lg mt-4 flex items-center justify-between hover:bg-bronze/90 transition-colors">
            Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </>
  );
}
