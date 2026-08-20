import React from 'react';

type LotusDividerProps = {
  className?: string;
};

/** Gold hairline rule with a small lotus motif, taken from the academy's poster. */
export function LotusDivider({ className = '' }: LotusDividerProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-gold-600/30" />
      <svg
        viewBox="0 0 40 20"
        className="h-4 w-8 shrink-0 text-gold-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2">
        
        <path d="M20 17c-3.6 0-6.6-2.6-7.2-6 2.6.4 5.2 2 7.2 4.6 2-2.6 4.6-4.2 7.2-4.6-.6 3.4-3.6 6-7.2 6Z" />
        <path d="M20 15.6C18.6 12.4 18.4 8.6 20 5c1.6 3.6 1.4 7.4 0 10.6Z" />
        <path d="M12.8 11c-1.8-.4-3.4-1.6-4.6-3.2M27.2 11c1.8-.4 3.4-1.6 4.6-3.2" />
      </svg>
      <span className="h-px flex-1 bg-gold-600/30" />
    </div>);

}