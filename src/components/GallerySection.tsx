import React, { useState } from 'react';
import { Image as ImageIcon, Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_DATA } from '../data/modData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const categories = ['All', 'Creatures', 'Structures', 'Ambience', 'Night Events'];

  const filteredGallery = selectedCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    const index = GALLERY_DATA.findIndex((g) => g.id === item.id);
    if (index !== -1) setActiveModalIndex(index);
  };

  const closeLightbox = () => setActiveModalIndex(null);

  const nextImage = () => {
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex + 1) % GALLERY_DATA.length);
    }
  };

  const prevImage = () => {
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length);
    }
  };

  const currentLightboxItem = activeModalIndex !== null ? GALLERY_DATA[activeModalIndex] : null;

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-900/50 text-xs font-mono text-red-400 uppercase tracking-widest mb-4">
          <ImageIcon className="w-3.5 h-3.5" />
          <span>Atmospheric Visuals</span>
        </div>
        <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-wider text-white mb-6">
          MOD GALLERY
        </h2>
        <p className="text-gray-400 text-base sm:text-lg font-sans">
          Preview the nightmare before downloading. All screenshots captured in-game on Minecraft 1.20.1.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-6" />
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-outfit font-semibold transition-all ${
              selectedCategory === cat
                ? 'bg-red-800 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)] border border-red-600'
                : 'bg-stone-950/80 text-gray-400 hover:text-white border border-stone-800 hover:border-red-950'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGallery.map((item) => (
          <div
            key={item.id}
            onClick={() => openLightbox(item)}
            className="group relative rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 hover:border-red-600/70 shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
          >
            <div className="aspect-[4/3] overflow-hidden bg-stone-900">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.1] group-hover:scale-110 group-hover:brightness-100 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Gradient Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080709] via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

            {/* Top Right Zoom Icon */}
            <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 border border-stone-800 text-gray-300 group-hover:text-red-400 group-hover:border-red-600/50 backdrop-blur-md transition-all">
              <Maximize2 className="w-4 h-4" />
            </div>

            {/* Caption Info */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest bg-red-950/80 px-2 py-0.5 rounded border border-red-900/50 inline-block mb-2">
                {item.category}
              </span>
              <h3 className="font-outfit text-lg font-bold text-white group-hover:text-red-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-gray-400 line-clamp-2 mt-1 font-sans">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {currentLightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn">
          <div className="relative max-w-5xl w-full bg-[#0d0a0e] border border-red-900/60 rounded-2xl overflow-hidden shadow-2xl">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/80 text-gray-300 hover:text-white hover:bg-red-900/80 transition-colors border border-stone-800"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image */}
            <div className="relative aspect-[16/9] max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={currentLightboxItem.imageUrl}
                alt={currentLightboxItem.title}
                className="max-h-full max-w-full object-contain"
                referrerPolicy="no-referrer"
              />

              {/* Prev / Next controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 p-3 rounded-full bg-black/70 hover:bg-red-900/80 text-white border border-stone-800 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 p-3 rounded-full bg-black/70 hover:bg-red-900/80 text-white border border-stone-800 transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Image Detail Bar */}
            <div className="p-6 bg-[#080709] border-t border-red-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-mono text-red-400 bg-red-950 px-2.5 py-0.5 rounded border border-red-900/60">
                    {currentLightboxItem.category}
                  </span>
                  <span className="text-xs font-mono text-gray-500">
                    Image {(activeModalIndex ?? 0) + 1} of {GALLERY_DATA.length}
                  </span>
                </div>
                <h3 className="font-outfit text-xl font-bold text-white">
                  {currentLightboxItem.title}
                </h3>
                <p className="text-sm font-sans text-gray-300 mt-1">
                  {currentLightboxItem.caption}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                <span>PRESS ESC TO CLOSE</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
