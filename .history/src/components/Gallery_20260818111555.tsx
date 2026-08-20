import React from 'react';
import { galleryItems } from '../data/gallery';

export function Gallery() {
  const [lead, ...rest] = galleryItems;

  return (
    <section id="gallery" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-script text-4xl font-semibold italic text-maroon-600 sm:text-5xl">Gallery</h2>
          <p className="max-w-md text-sm leading-relaxed text-maroon-800/70">
            Rehearsals, recitals and sangeet nights from the academy floor.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <figure className="group relative overflow-hidden rounded-2xl border border-gold-600/35 bg-cream-200 sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <img
              src={lead.src}
              alt={lead.alt}
              className="h-72 w-full object-cover transition-transform duration-300 ease-soft group-hover:scale-[1.03] lg:h-full lg:min-h-[34rem]" />
            
            <figcaption className="absolute inset-x-0 bottom-0 bg-maroon-800/70 px-5 py-3 font-display text-xs uppercase tracking-[0.22em] text-cream-100">
              {lead.caption}
            </figcaption>
          </figure>

          {rest.map((item) =>
          <figure
            key={item.src}
            className="group relative overflow-hidden rounded-2xl border border-gold-600/35 bg-cream-200">
            
              <img
              src={item.src}
              alt={item.alt}
              className="h-64 w-full object-cover transition-transform duration-300 ease-soft group-hover:scale-[1.03]" />
            
              <figcaption className="absolute inset-x-0 bottom-0 bg-maroon-800/70 px-5 py-3 font-display text-xs uppercase tracking-[0.22em] text-cream-100">
                {item.caption}
              </figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>);

}