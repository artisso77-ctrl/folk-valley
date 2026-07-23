import React from 'react';
import { Download, Compass, ShieldAlert, Sparkles, ChevronDown, Gamepad2 } from 'lucide-react';
import { MOD_INFO } from '../data/modData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image Container with Gradient Mask */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/folk_valley_hero_1784837721631.jpg"
          alt="Folk Valley Dark Minecraft Forest"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.25] saturate-[0.85] scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080709] via-[#080709]/70 to-[#080709]/80" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#080709]/60 to-[#080709]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Top Announcement Chip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-red-900/30 border border-red-800/50 text-red-500 text-[10px] uppercase tracking-[0.2em] font-mono mb-8 backdrop-blur-md animate-red-pulse">
          <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping" />
          <span>{MOD_INFO.updateName} • {MOD_INFO.latestVersion}</span>
        </div>

        {/* Big Title: FOLK VALLEY */}
        <h1 className="font-cinzel text-6xl sm:text-8xl md:text-9xl lg:text-[110px] font-extrabold leading-[0.88] text-white tracking-tighter mb-6 glitch-hover">
          FOLK <span className="text-red-700/90 drop-shadow-[0_0_30px_rgba(185,28,28,0.5)]">VALLEY</span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-lg sm:text-xl md:text-2xl text-white/60 font-light italic max-w-2xl mb-4 leading-relaxed">
          &ldquo;A Minecraft Horror Mod that transforms your world into a nightmare.&rdquo;
        </p>

        {/* Tagline Detail */}
        <p className="text-white/40 text-xs sm:text-sm max-w-xl font-mono tracking-wide mb-10 leading-relaxed uppercase">
          {MOD_INFO.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
          <a
            href="#download"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-red-700 hover:bg-red-600 text-white font-bold uppercase tracking-[0.25em] text-xs py-4 px-8 border border-red-500 shadow-[0_0_20px_rgba(185,28,28,0.3)] hover:shadow-[0_0_35px_rgba(220,38,38,0.6)] transition-all"
          >
            <Download className="w-4 h-4" />
            <span>ENTER THE VALLEY</span>
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900/60 hover:bg-zinc-800/80 text-white/70 hover:text-white font-bold uppercase tracking-[0.2em] text-xs py-4 px-7 border border-white/10 hover:border-red-900/60 backdrop-blur-md transition-all"
          >
            <Compass className="w-4 h-4 text-red-500" />
            <span>DISCOVER LORE</span>
          </a>
        </div>

        {/* Supported Version badge text */}
        <div className="flex items-center gap-2 text-[11px] font-mono text-white/50 bg-zinc-900/50 border border-white/5 px-4 py-2 backdrop-blur-sm">
          <Gamepad2 className="w-4 h-4 text-red-500" />
          <span>Minecraft Version: <strong className="text-white font-semibold">{MOD_INFO.minecraftVersion}</strong> (Forge / Fabric / NeoForge)</span>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl mt-16 pt-8 border-t border-white/5">
          {MOD_INFO.stats.map((stat, idx) => (
            <div key={idx} className="bg-zinc-900/40 border border-white/5 p-4 backdrop-blur-sm text-center">
              <div className="font-outfit text-2xl sm:text-3xl font-black text-red-500 font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Down indicator */}
        <a href="#about" className="mt-12 text-gray-500 hover:text-red-400 transition-colors animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};
