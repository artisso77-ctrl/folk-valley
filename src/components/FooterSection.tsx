import React from 'react';
import { Skull, MessageSquare, Github, Flame, ArrowUp, Shield, Radio, Heart } from 'lucide-react';
import { MOD_INFO } from '../data/modData';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050406] border-t border-red-950/60 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative text-gray-400 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-900">
          {/* Brand & Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-stone-950 border border-red-900/60 shadow-[0_0_15px_rgba(185,28,28,0.3)]">
                <Skull className="w-5 h-5 text-red-600" />
              </div>
              <span className="font-cinzel text-2xl font-black text-white tracking-widest">
                FOLK VALLEY
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed font-sans max-w-sm">
              A psychological horror mod that transforms your Minecraft survival experience into an unpredictable nightmare filled with ambient terror and stalking entities.
            </p>

            {/* Server Operational Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-950 border border-stone-800 text-xs font-mono text-gray-300">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Mod Network Status: <strong className="text-emerald-400">OPERATIONAL</strong></span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3 font-outfit text-sm">
            <h4 className="font-mono text-xs text-red-500 uppercase tracking-widest font-bold">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-red-400 transition-colors">About the Mod</a></li>
              <li><a href="#features" className="hover:text-red-400 transition-colors">Core Features</a></li>
              <li><a href="#bestiary" className="hover:text-red-400 transition-colors">Entity Bestiary</a></li>
              <li><a href="#gallery" className="hover:text-red-400 transition-colors">In-Game Gallery</a></li>
              <li><a href="#download" className="hover:text-red-400 transition-colors">Download ({MOD_INFO.latestVersion})</a></li>
              <li><a href="#faq" className="hover:text-red-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Community Links (Discord, GitHub, CurseForge, Modrinth) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs text-red-500 uppercase tracking-widest font-bold">
              Community & Code
            </h4>
            <p className="text-xs text-gray-400">
              Join our official Discord community to report bugs, submit feedback, or find players for co-op horror servers.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              {/* Discord Placeholder */}
              <a
                href="https://discord.gg/placeholder-folk-valley"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-stone-900 hover:bg-indigo-950/80 text-gray-200 hover:text-indigo-300 px-3.5 py-2 rounded-xl border border-stone-800 hover:border-indigo-600/60 transition-all text-xs font-mono"
              >
                <MessageSquare className="w-4 h-4 text-indigo-400" />
                <span>Discord</span>
              </a>

              {/* GitHub Placeholder */}
              <a
                href="https://github.com/placeholder/folk-valley-mod"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-gray-200 hover:text-white px-3.5 py-2 rounded-xl border border-stone-800 transition-all text-xs font-mono"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              {/* CurseForge Placeholder */}
              <a
                href="https://www.curseforge.com/minecraft/mc-mods/placeholder-folk-valley"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-stone-900 hover:bg-orange-950/80 text-gray-200 hover:text-orange-300 px-3.5 py-2 rounded-xl border border-stone-800 hover:border-orange-600/60 transition-all text-xs font-mono"
              >
                <Flame className="w-4 h-4 text-orange-500" />
                <span>CurseForge</span>
              </a>

              {/* Modrinth Placeholder */}
              <a
                href="https://modrinth.com/mod/placeholder-folk-valley"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-stone-900 hover:bg-emerald-950/80 text-gray-200 hover:text-emerald-300 px-3.5 py-2 rounded-xl border border-stone-800 hover:border-emerald-600/60 transition-all text-xs font-mono"
              >
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Modrinth</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            <p>© {new Date().getFullYear()} Folk Valley Mod Development Team. All rights reserved.</p>
            <p className="text-[10px] text-gray-600 mt-1">
              NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-stone-900 hover:bg-red-950 text-gray-400 hover:text-red-400 px-3.5 py-2 rounded-xl border border-stone-800 transition-all"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
