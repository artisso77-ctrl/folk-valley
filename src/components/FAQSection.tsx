import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquareCode } from 'lucide-react';
import { FAQ_DATA } from '../data/modData';

export const FAQSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string>(FAQ_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQ_DATA.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-900/50 text-xs font-mono text-red-400 uppercase tracking-widest mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-wider text-white mb-6">
          FREQUENTLY ASKED
        </h2>
        <p className="text-gray-400 text-base sm:text-lg font-sans">
          Got questions about Folk Valley? Find instant answers about multiplayer, mod loaders, and performance.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-6" />
      </div>

      {/* Search Input */}
      <div className="relative mb-10 max-w-xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search questions (e.g., multiplayer, Forge, Iris shaders)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-stone-950/90 border border-stone-800 focus:border-red-600 rounded-xl py-3.5 pl-12 pr-4 text-sm text-gray-200 outline-none transition-all focus:ring-1 focus:ring-red-600"
        />
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`card-horror rounded-2xl overflow-hidden transition-all ${
                  isOpen ? 'border-red-700/80 shadow-[0_0_20px_rgba(220,38,38,0.2)]' : 'border-stone-800'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-outfit text-lg font-bold text-white hover:text-red-300 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-red-500 font-mono text-base">Q.</span>
                    <span>{faq.question}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 font-sans text-sm sm:text-base text-gray-300 border-t border-red-950/60 leading-relaxed bg-black/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 text-gray-500 font-sans">
            No questions found matching &ldquo;{searchQuery}&rdquo;. Try another term or join our Discord community!
          </div>
        )}
      </div>
    </section>
  );
};
