import React, { useEffect, useState } from 'react';
import { MenuIcon, PhoneIcon, XIcon } from 'lucide-react';
import { onPageScroll, scrollToSection } from '../utils/scroll';

const navLinks = [
{ label: 'Home', href: '#home' },
{ label: 'Courses', href: '#courses' },
{ label: 'Gallery', href: '#gallery' },
{ label: 'Contact', href: '#contact' }];


export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => onPageScroll((scrollTop) => setScrolled(scrollTop > 12)), []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setOpen(false);
    scrollToSection(href.replace('#', ''));
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ease-soft ${
      scrolled ?
      'border-gold-600/25 bg-cream-100/95 backdrop-blur' :
      'border-transparent bg-cream-100/70 backdrop-blur-sm'}`
      }>
      
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 lg:px-8">
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, '#home')}
          className="flex items-center gap-2.5"
          aria-label="Goonj Kathak Dance Academy — home">
          
          <img src="/logo.png" alt="Goonj logo" className="h-12 w-12 object-contain" />
          <div>
            <span className="font-script text-3xl font-semibold italic leading-none text-maroon-600">Goonj</span>
            <span className="font-display text-[0.68rem] uppercase tracking-[0.34em] text-gold-700 block">Kathak</span>
          </div>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            onClick={(event) => handleNavClick(event, link.href)}
            className="font-display text-sm tracking-wide text-maroon-700/85 transition-colors duration-150 ease-soft hover:text-gold-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-600">
            
              {link.label}
            </a>
          )}
          <a
            href="tel:+917000609353"
            className="inline-flex items-center gap-2 rounded-full bg-maroon-600 px-5 py-2.5 font-display text-sm text-cream-100 shadow-gold transition-colors duration-150 ease-soft hover:bg-maroon-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon-600">
            
            <PhoneIcon className="h-4 w-4" aria-hidden="true" />
            7000609353
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="rounded-full border border-gold-600/40 p-2 text-maroon-600 transition-colors duration-150 ease-soft hover:bg-cream-200 md:hidden">
          
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open &&
      <nav
        id="mobile-nav"
        aria-label="Main mobile"
        className="border-t border-gold-600/25 bg-cream-100 px-5 pb-5 pt-2 md:hidden">
        
          <ul className="divide-y divide-gold-600/15">
            {navLinks.map((link) =>
          <li key={link.href}>
                <a
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              className="block py-3.5 font-display text-base text-maroon-700">
              
                  {link.label}
                </a>
              </li>
          )}
          </ul>
          <a
          href="tel:+917000609353"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-maroon-600 px-5 py-3 font-display text-sm text-cream-100">
          
            <PhoneIcon className="h-4 w-4" aria-hidden="true" />
            Call 7000609353
          </a>
        </nav>
      }
    </header>);

}