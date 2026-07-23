import React from 'react';
import { X, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';
import { CHANGELOG_v142, MOD_INFO } from '../data/modData';

interface ChangelogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChangelogModal: React.FC<ChangelogModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative max-w-2xl w-full bg-[#0d0a0e] border border-red-800/70 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-red-950/50">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-stone-900 hover:bg-red-950 text-gray-400 hover:text-white transition-colors border border-stone-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-red-950 border border-red-700/60">
            <Sparkles className="w-6 h-6 text-red-400" />
          </div>
          <div>
            <h3 className="font-cinzel text-2xl font-bold text-white">
              PATCH NOTES - {MOD_INFO.latestVersion}
            </h3>
            <span className="text-xs font-mono text-red-400">
              {MOD_INFO.updateName} • {MOD_INFO.releaseDate}
            </span>
          </div>
        </div>

        <p className="text-sm font-sans text-gray-300 mb-6">
          Below are the major changes, AI pathfinding enhancements, and bug fixes shipped in the latest Folk Valley release:
        </p>

        <div className="space-y-3 mb-8 max-h-[50vh] overflow-y-auto pr-2">
          {CHANGELOG_v142.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-black/60 border border-stone-800 text-sm font-sans text-gray-200"
            >
              <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-gray-200 font-outfit font-semibold border border-stone-700 transition-colors"
          >
            Close Patch Notes
          </button>
        </div>
      </div>
    </div>
  );
};
