import React, { useState, useEffect } from 'react';
import { Skull, Download, Menu, X, Radio, BookOpen, Flame, HelpCircle, Image, Sparkles } from 'lucide-react';
import { MOD_INFO } from '../data/modData';

interface NavbarProps {
  onOpenChangelog: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChangelog }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Bestiary', href: '#bestiary' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Download', href: '#download' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/5 py-3 shadow-2xl shadow-black/90'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Elegant Dark Rotated Gem Icon */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative flex items-center justify-center w-8 h-8 bg-red-700 rotate-45 border border-red-500 shadow-[0_0_15px_rgba(185,28,28,0.5)] group-hover:bg-red-600 transition-colors">
            <span className="-rotate-45 font-bold text-white text-xs tracking-tighter font-mono">FV</span>
          </div>
          <div>
            <span className="tracking-[0.25em] font-black text-white text-lg sm:text-xl font-cinzel group-hover:text-red-400 transition-colors glitch-hover">
              FOLK VALLEY
            </span>
            <span className="block text-[9px] font-mono tracking-[0.2em] text-red-500/90 uppercase -mt-1">
              MINECRAFT HORROR
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-[11px] uppercase tracking-widest font-medium text-white/60">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-red-500 transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}

          <button
            onClick={onOpenChangelog}
            className="px-3 py-1 bg-red-950/40 hover:bg-red-900/50 border border-red-900/60 text-red-400 hover:text-red-300 text-[10px] uppercase tracking-[0.15em] font-mono rounded-sm transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-3 h-3 text-red-500" />
            <span>Ver {MOD_INFO.latestVersion}</span>
          </button>
        </nav>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#download"
            className="flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-[0.2em] px-5 py-2.5 border border-red-500/60 shadow-[0_0_20px_rgba(185,28,28,0.3)] transition-all hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]"
          >
            <Download className="w-4 h-4" />
            <span>ENTER THE VALLEY</span>
          </a>
        </div>

        {/* Mobile menu trigger button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#download"
            className="p-2 bg-red-950/80 border border-red-600/50 text-red-400 rounded-lg text-xs font-bold"
          >
            <Download className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-stone-900 text-gray-300 hover:text-white border border-stone-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-red-500" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0a0e]/98 backdrop-blur-xl border-b border-red-900/40 px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-4 font-outfit">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-gray-200 hover:text-red-400 font-medium tracking-wide py-1 border-b border-stone-900/80"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChangelog();
              }}
              className="flex items-center justify-between text-sm text-red-400 bg-red-950/50 border border-red-900/60 p-3 rounded-lg"
            >
              <span>Changelog ({MOD_INFO.latestVersion})</span>
              <Sparkles className="w-4 h-4 text-red-400" />
            </button>

            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-red-800 text-white font-bold py-3 rounded-lg border border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.4)] mt-2"
            >
              <Download className="w-5 h-5" />
              <span>DOWNLOAD FOLK VALLEY</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
