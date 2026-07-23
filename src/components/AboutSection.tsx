import React, { useState } from 'react';
import { Skull, ShieldAlert, Eye, Volume2, Flame, Sparkles, BookOpen, UserX, Wind } from 'lucide-react';
import { CREATURE_BESTIARY } from '../data/modData';

export const AboutSection: React.FC = () => {
  const [activeCreatureId, setActiveCreatureId] = useState(CREATURE_BESTIARY[0].id);

  const activeCreature = CREATURE_BESTIARY.find((c) => c.id === activeCreatureId) || CREATURE_BESTIARY[0];

  const getCreatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Eye': return <Eye className="w-6 h-6 text-red-500" />;
      case 'UserX': return <UserX className="w-6 h-6 text-amber-500" />;
      case 'Wind': return <Wind className="w-6 h-6 text-purple-500" />;
      default: return <Skull className="w-6 h-6 text-red-500" />;
    }
  };

  const getDangerBadge = (level: string) => {
    switch (level) {
      case 'Lethal':
        return 'bg-red-950 text-red-400 border-red-700/60 shadow-[0_0_10px_rgba(220,38,38,0.4)]';
      case 'Severe':
        return 'bg-amber-950 text-amber-400 border-amber-700/60';
      case 'Existential':
        return 'bg-purple-950 text-purple-300 border-purple-700/60 shadow-[0_0_10px_rgba(168,85,247,0.4)]';
      default:
        return 'bg-stone-900 text-gray-300 border-stone-700';
    }
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-950/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-900/50 text-xs font-mono text-red-400 uppercase tracking-widest mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Survive The Unknown</span>
        </div>
        <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-wider text-white mb-6">
          ABOUT THE MOD
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-8" />
      </div>

      {/* Main Grid: Description + Lore Vignette */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        {/* Left Column: Deep Narrative Description */}
        <div className="lg:col-span-7 space-y-6">
          <div className="card-horror p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Skull className="w-48 h-48 text-red-600" />
            </div>

            <h3 className="font-outfit text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-red-500" />
              <span>Psychological Survival Redefined</span>
            </h3>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-sans mb-4">
              <strong>Folk Valley</strong> is a psychological horror mod for Minecraft designed to shatter your sense of safety. Unlike traditional monster mods that rely on high-damage mobs, Folk Valley relies on suspense, paranoia, and unpredictable mind games.
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-sans mb-6">
              It adds <span className="text-red-400 font-semibold">mysterious entities</span>, disturbing ambient soundscapes, abandoned cursed structures, terrifying 3D positional audio, and random night events that make even building a humble wooden shelter feel dangerous and unpredictable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-red-950/60 text-xs font-mono">
              <div className="flex items-center gap-2.5 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span>Custom Sanity Meter</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span>Procedural Audio Stalking</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span>Volumetric Fog Storms</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span>Multiplayer Synchronized Events</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Feature Teaser Card */}
        <div className="lg:col-span-5">
          <div className="relative group rounded-2xl overflow-hidden border border-red-900/40 shadow-2xl">
            <img
              src="/src/assets/images/haunted_cabin_1784837734876.jpg"
              alt="Haunted Cabin Structure"
              className="w-full h-80 lg:h-96 object-cover filter brightness-75 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080709] via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-xs font-mono text-red-400 uppercase tracking-widest block mb-1">
                World Generation
              </span>
              <h4 className="font-outfit text-xl font-bold text-white mb-2">
                Unseen Structures & Cryptic Lore
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                Discover abandoned cabins with lingering journals, sacrificial bone altars, and deep caves where light source torches slowly sputter out.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bestiary Interactive Section */}
      <div id="bestiary" className="pt-8">
        <div className="text-center mb-10">
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-3">
            ENTITY BESTIARY & THREAT INDEX
          </h3>
          <p className="text-sm font-sans text-gray-400 max-w-xl mx-auto">
            Click an entity profile below to study its hunting behavior and lore before embarking into Folk Valley.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Entity List Buttons */}
          <div className="lg:col-span-4 space-y-3">
            {CREATURE_BESTIARY.map((creature) => {
              const isSelected = creature.id === activeCreatureId;
              return (
                <button
                  key={creature.id}
                  onClick={() => setActiveCreatureId(creature.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-red-950/80 border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.3)] text-white'
                      : 'bg-stone-950/60 border-stone-800 hover:border-red-900/50 text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-black/60 border border-red-900/30">
                      {getCreatureIcon(creature.icon)}
                    </div>
                    <div>
                      <span className="font-outfit font-bold text-base block">
                        {creature.name}
                      </span>
                      <span className="text-[11px] font-mono text-gray-400">
                        Threat: {creature.dangerLevel}
                      </span>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${getDangerBadge(creature.dangerLevel)}`}>
                    {creature.dangerLevel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Entity Info Card */}
          <div className="lg:col-span-8">
            <div className="card-horror p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between border-red-700/50">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-red-950/90 border border-red-600/50 shadow-[0_0_15px_rgba(220,38,38,0.4)]">
                      {getCreatureIcon(activeCreature.icon)}
                    </div>
                    <div>
                      <h4 className="font-cinzel text-2xl sm:text-3xl font-black text-white">
                        {activeCreature.name}
                      </h4>
                      <span className="text-xs font-mono text-red-400">
                        Codename: ENTITY_{activeCreature.id.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className={`px-3 py-1 rounded-lg text-xs font-mono border ${getDangerBadge(activeCreature.dangerLevel)}`}>
                    Threat Level: {activeCreature.dangerLevel}
                  </div>
                </div>

                <div className="space-y-4 font-sans text-sm sm:text-base">
                  <div className="bg-black/60 border border-stone-800 p-4 rounded-xl">
                    <span className="text-xs font-mono text-red-400 uppercase tracking-wider block mb-1">
                      Observed AI Behavior
                    </span>
                    <p className="text-gray-200 leading-relaxed">
                      {activeCreature.behavior}
                    </p>
                  </div>

                  <div className="bg-black/60 border border-stone-800 p-4 rounded-xl">
                    <span className="text-xs font-mono text-amber-500 uppercase tracking-wider block mb-1">
                      Surviving Journal Excerpt
                    </span>
                    <p className="text-gray-400 italic leading-relaxed">
                      &ldquo;{activeCreature.lore}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between text-xs font-mono text-gray-500">
                <span>Sanity Impact: High</span>
                <span>Spawn Conditions: Night / Low Light &lt; 4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
