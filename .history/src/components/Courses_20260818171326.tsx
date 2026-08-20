import React from 'react';
import { ClockIcon, GraduationCapIcon } from 'lucide-react';
import { courses } from '../data/courses';
import { LotusDivider } from './LotusDivider';

const NATARAJA_IMAGE = "/73e38787-881d-4026-8fa3-0fb4ced70a26.jpg";


export function Courses() {
  const featured = courses.find((course) => course.featured);
  const others = courses.filter((course) => !course.featured);

  return (
    <section id="courses" className="border-y border-gold-600/20 bg-cream-50/70 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-script text-4xl font-semibold italic text-maroon-600 sm:text-5xl">
            Courses available
          </h2>
          <p className="mt-4 text-base leading-relaxed text-maroon-800/75">
            Kathak is the heart of the academy. Everything else grows out of it.
          </p>
        </div>

        <LotusDivider className="mt-10" />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          {featured &&
          <article className="relative flex flex-col overflow-hidden rounded-3xl border border-gold-600/40 bg-cream-100 p-8 shadow-gold sm:p-10">
              {/* Nataraja motif — the cosmic dancer, watermarked behind the academy's core discipline */}
              <img
              src={NATARAJA_IMAGE}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-10 w-[24rem] select-none opacity-[0.28] mix-blend-multiply sm:-right-20 sm:w-[28rem]" />
            
              <p className="relative font-display text-[0.68rem] uppercase tracking-[0.3em] text-gold-700">
                {featured.tagline}
              </p>
              <h3 className="relative mt-4 font-script text-5xl font-semibold italic text-maroon-600">
                {featured.name}
              </h3>
              <p className="relative mt-5 max-w-md text-base leading-relaxed text-maroon-800/80">
                {featured.description}
              </p>
              <dl className="relative mt-auto grid grid-cols-1 gap-4 pt-8 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <GraduationCapIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-700" aria-hidden="true" />
                  <div>
                    <dt className="font-display text-[0.68rem] uppercase tracking-[0.22em] text-gold-700">
                      Levels
                    </dt>
                    <dd className="mt-1 text-sm text-maroon-800/80">{featured.level}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-700" aria-hidden="true" />
                  <div>
                    <dt className="font-display text-[0.68rem] uppercase tracking-[0.22em] text-gold-700">
                      Schedule
                    </dt>
                    <dd className="mt-1 text-sm text-maroon-800/80">{featured.duration}</dd>
                  </div>
                </div>
              </dl>
            </article>
          }

          <ul className="divide-y divide-gold-600/25">
            {others.map((course) =>
            <li key={course.name} className="py-7 first:pt-0 last:pb-0">
                <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="h-32 w-full shrink-0 rounded-2xl object-cover sm:w-40"
                  />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <h3 className="font-display text-xl text-maroon-700">{course.name}</h3>
                      <p className="font-display text-[0.68rem] uppercase tracking-[0.22em] text-gold-700">
                        {course.duration}
                      </p>
                    </div>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-maroon-800/75">
                      {course.description}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-[0.18em] text-maroon-800/55">{course.level}</p>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>);

}