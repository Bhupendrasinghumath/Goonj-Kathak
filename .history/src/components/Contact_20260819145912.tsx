import React from 'react';
import { ClockIcon, InstagramIcon, MapPinIcon, NavigationIcon, PhoneIcon } from 'lucide-react';
import { LotusDivider } from './LotusDivider';

export function Contact() {
  return (
    <section id="contact" className="border-t border-gold-600/20 bg-cream-50/70 py-10 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="font-script text-4xl font-semibold italic text-maroon-600 sm:text-5xl">
              Come and visit
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-maroon-800/80">
              Walk in during class hours to watch a session, or call to ask about the next beginner batch.
            </p>
            <LotusDivider className="mt-8 max-w-xs" />
            <p className="mt-8 font-deva text-lg text-gold-700">नृत्ये भक्तिः, नृत्ये शक्तिः।</p>
          </div>

          <dl className="grid gap-8 sm:grid-cols-2">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon-600 text-cream-100">
                <MapPinIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <dt className="font-display text-[0.68rem] uppercase tracking-[0.24em] text-gold-700">
                  Address
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-maroon-800/85">
                  25, New Nagin Nagar,
                  <br />
                  Airport Road, Indore
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon-600 text-cream-100">
                <PhoneIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <dt className="font-display text-[0.68rem] uppercase tracking-[0.24em] text-gold-700">
                  Phone
                </dt>
                <dd className="mt-2 text-sm text-maroon-800/85">
                  <a
                    href="tel:+917000609353"
                    className="transition-colors duration-150 ease-soft hover:text-gold-700">
                    
                    7000609353
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon-600 text-cream-100">
                <InstagramIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <dt className="font-display text-[0.68rem] uppercase tracking-[0.24em] text-gold-700">
                  Instagram
                </dt>
                <dd className="mt-2 text-sm text-maroon-800/85">
                  <a
                    href="https://instagram.com/goonj.kathak.academy"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-150 ease-soft hover:text-gold-700">
                    
                    goonj.kathak.academy
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon-600 text-cream-100">
                <ClockIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <dt className="font-display text-[0.68rem] uppercase tracking-[0.24em] text-gold-700">
                  Class hours
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-maroon-800/85">
                  Mon – Sat
                  <br />
                  10:00 am – 8:00 pm
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="mt-14">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h3 className="font-display text-sm uppercase tracking-[0.28em] text-gold-700">Find us</h3>
            <a
              href="https://maps.app.goo.gl/51vVmMbAkTTUthCVA"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-display text-sm text-maroon-700 underline decoration-gold-600/50 underline-offset-4 transition-colors duration-150 ease-soft hover:text-gold-700">
              
              <NavigationIcon className="h-4 w-4 text-gold-700" aria-hidden="true" />
              Get directions
            </a>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-gold-600/40 bg-cream-200 shadow-gold">
            <iframe
              title="Map of Goonj Kathak Dance Academy, 25 New Nagin Nagar, Airport Road, Indore"
              src="https://www.google.com/maps?q=22.7161455,75.8203186&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[10rem] w-full border-0 lg:h-[21rem]" />
            
          </div>
        </div>
      </div>
    </section>);

}