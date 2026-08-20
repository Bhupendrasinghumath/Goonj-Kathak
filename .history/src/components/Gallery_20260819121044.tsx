import React from 'react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { academyItems, awardItems } from '../data/gallery';
import type { GalleryItem } from '../data/gallery';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedImage(null);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [selectedImage]);

  const openImage = (item: GalleryItem) => setSelectedImage(item);

  return (
    <section id="gallery" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-script text-4xl font-semibold italic text-maroon-600 sm:text-5xl">Gallery</h2>
          <p className="max-w-md text-sm leading-relaxed text-maroon-800/70">
            Rehearsals, recitals and sangeet nights from the academy floor.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="font-display text-2xl text-maroon-700 sm:text-3xl">Awards</h3>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
            {awardItems.map((item, index) =>
              <figure
                key={item.src}
                className={`group relative cursor-zoom-in rounded-xl border-2 border-gold-600/50 bg-cream-100 p-2 shadow-[0_12px_24px_-16px_rgba(51,6,12,0.65)] transition-transform duration-300 hover:z-10 hover:-translate-y-1 hover:rotate-0 ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}
                onClick={() => openImage(item)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') openImage(item);
                }}
                role="button"
                tabIndex={0}
                aria-label={`Open ${item.caption}`}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-44 w-full rounded-lg object-cover transition-transform duration-500 ease-soft group-hover:scale-105 sm:h-56" />
                <figcaption className="px-1 pb-2 pt-3 text-center font-display text-[10px] uppercase tracking-[0.16em] text-maroon-700 sm:text-xs sm:tracking-[0.22em]">
                  {item.caption}
                </figcaption>
              </figure>
            )}
          </div>

          <h3 className="mt-14 font-display text-2xl text-maroon-700 sm:text-3xl">Academy Dance Classes</h3>
          <div className="mt-5 columns-2 gap-3 sm:columns-3 sm:gap-5 lg:columns-4">
            {academyItems.map((item) =>
              <figure
                key={item.src}
                className="group relative mb-3 inline-block w-full break-inside-avoid cursor-zoom-in overflow-hidden rounded-2xl border border-gold-600/35 bg-cream-200 shadow-gold transition-shadow duration-300 hover:shadow-[0_18px_36px_-18px_rgba(51,6,12,0.6)] sm:mb-5"
                onClick={() => openImage(item)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') openImage(item);
                }}
                role="button"
                tabIndex={0}
                aria-label={`Open ${item.caption}`}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-auto w-full object-cover transition-transform duration-500 ease-soft group-hover:scale-105" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-maroon-800/90 via-maroon-800/55 to-transparent px-5 pb-4 pt-10 font-display text-[12px] uppercase tracking-[0.22em] text-cream-100">
                  {item.caption}
                </figcaption>
              </figure>
            )}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {selectedImage &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-maroon-800/85 p-5 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.caption}>
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="relative max-h-[90vh] max-w-5xl"
              onClick={(event) => event.stopPropagation()}>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[82vh] max-w-full rounded-xl border-2 border-gold-400 object-contain shadow-2xl" />
              <p className="mt-3 text-center font-display text-xs uppercase tracking-[0.22em] text-cream-100">
                {selectedImage.caption}
              </p>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute -right-3 -top-3 rounded-full border border-gold-400 bg-cream-100 px-3 py-1.5 font-display text-sm text-maroon-800 shadow-lg transition-colors hover:bg-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-300"
                aria-label="Close image">
                ×
              </button>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </section>);

}