import React from 'react';
import { Skull, Volume2, Home, Moon, CloudFog, Zap, Sparkles } from 'lucide-react';
import { FEATURES_DATA } from '../data/modData';

export const FeaturesSection: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Skull': return <Skull className="w-7 h-7 text-red-500" />;
      case 'Volume2': return <Volume2 className="w-7 h-7 text-amber-500" />;
      case 'Home': return <Home className="w-7 h-7 text-emerald-500" />;
      case 'Moon': return <Moon className="w-7 h-7 text-purple-500" />;
      case 'CloudFog': return <CloudFog className="w-7 h-7 text-cyan-500" />;
      case 'Zap': return <Zap className="w-7 h-7 text-yellow-500" />;
      default: return <Sparkles className="w-7 h-7 text-red-500" />;
    }
  };

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background glow accent */}
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-red-950/20 blur-[140px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-900/50 text-xs font-mono text-red-400 uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Mechanics</span>
        </div>
        <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-wider text-white mb-6">
          MOD FEATURES
        </h2>
        <p className="text-gray-400 text-base sm:text-lg font-sans">
          Engineered to seamlessly integrate into standard Minecraft survival while introducing profound psychological depth.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-6" />
      </div>

      {/* Features Grid: 6 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES_DATA.map((feature) => (
          <div
            key={feature.id}
            className="card-horror p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top accent glow line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 group-hover:border-red-900/60 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all">
                  {getFeatureIcon(feature.icon)}
                </div>
                <span className="text-[11px] font-mono text-gray-400 bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">
                  {feature.tag}
                </span>
              </div>

              <h3 className="font-outfit text-xl font-bold text-white group-hover:text-red-400 transition-colors mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed font-sans">
                {feature.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-900/80 flex items-center justify-between text-xs font-mono text-gray-400 group-hover:text-red-400/90 transition-colors">
              <span>EXPLORE MODULE</span>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
