import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const HERO_IMAGE = "/main.png";
const HERO_IMAGE_NT = "/natrajan.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-28 lg:pb-28 lg:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}>
          <div className="flex flex-row items-center gap-4 sm:gap-8 lg:items-start lg:gap-10">
           <div className="relative shrink-0 rounded-t-[3.75rem] rounded-b-lg border-2 border-gold-600 bg-cream-100 p-1 shadow-[0_8px_18px_rgba(91,35,14,0.25)] sm:rounded-t-[7rem] sm:rounded-b-xl sm:border-4">
             <span
               aria-hidden="true"
               className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-2 border-gold-600 bg-cream-100 sm:-top-3 sm:h-5 sm:w-5" />
             <div className="rounded-t-[3.25rem] rounded-b-md border border-maroon-600/70 bg-gold-100 p-1 sm:rounded-t-[6.5rem] sm:rounded-b-lg sm:border-2">
               <img
                    src={HERO_IMAGE_NT}
                    alt="Natrajan Ji"
                  className="aspect-square h-24 w-24 rounded-t-[2.75rem] rounded-b-md object-cover sm:h-[200px] sm:w-[200px] sm:rounded-t-[6rem]" />
             </div>
            </div>
          <div className="min-w-0 flex-1">
          <p className="font-deva text-sm leading-snug text-gold-700 sm:text-lg">नृत्ये भक्तिः, नृत्ये शक्तिः।</p>
             
          <h1 className="mt-2 font-script text-4xl font-semibold italic leading-[0.95] text-maroon-600 sm:mt-4 sm:text-7xl lg:text-[5.5rem]">
            Goonj
          </h1>
          <p className="mt-2 font-display text-sm uppercase tracking-[0.2em] text-gold-700 sm:mt-3 sm:text-2xl sm:tracking-[0.42em]">
            Kathak
          </p>
          <p className="mt-1 font-display text-[10px] uppercase tracking-[0.12em] text-maroon-700/70 sm:mt-2 sm:text-sm sm:tracking-[0.3em]">
            Dance Academy · Indore
          </p>
            </div>
            </div>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-maroon-800/80 sm:text-lg">
            A classical Kathak school where students learn rhythm before choreography — ghungroo on the
            ankles, taal in the body, and the confidence to hold a stage.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-2 sm:gap-4">
            <a
              href="#courses"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection('courses');
              }}
              className="rounded-full bg-maroon-600 px-4 py-2.5 sm:px-7 sm:py-3.5 font-display text-xs sm:text-sm tracking-wide text-cream-100 shadow-gold transition-colors duration-150 ease-soft hover:bg-maroon-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon-600 whitespace-nowrap">
              
              View the courses
            </a>
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection('contact');
              }}
              className="rounded-full border border-gold-600/50 px-4 py-2.5 sm:px-7 sm:py-3.5 font-display text-xs sm:text-sm tracking-wide text-maroon-700 transition-colors duration-150 ease-soft hover:bg-cream-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600 whitespace-nowrap">
              
              Visit the academy
            </a>
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-maroon-800/70">
            <MapPinIcon className="h-4 w-4 text-gold-700" aria-hidden="true" />
            25, New Nagin Nagar, Airport Road, Indore
          </p>
        </motion.div>

        {/* Gold-ringed oval portrait, echoing the academy's poster */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="relative mx-auto w-full max-w-md">
          
          <div className="rounded-[50%] border-2 border-gold-500/70 p-2.5 shadow-gold">
            <div className="overflow-hidden rounded-[50%] border border-gold-600/40 bg-cream-200">
              <img
                src={HERO_IMAGE}
                alt="Kathak dancer in a maroon and gold costume mid-spin"
                className="aspect-[3/4] w-full object-cover" />
              
            </div>
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-gold-600/40 bg-cream-100 px-6 py-2 font-display text-xs uppercase tracking-[0.28em] text-gold-700">
            Est. Indore
          </div>
        </motion.div>
      </div>
    </section>);

}