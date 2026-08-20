const HEADER_OFFSET = 88;

/**
 * The page may be rendered inside a scrollable wrapper (e.g. a preview frame)
 * rather than scrolling the window, so find whichever element actually scrolls.
 */
export function getScrollParent(el: HTMLElement): HTMLElement | null {
  let node: HTMLElement | null = el.parentElement;
  while (node && node !== document.body && node !== document.documentElement) {
    const { overflowY } = window.getComputedStyle(node);
    const scrolls = overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'overlay';
    if (scrolls && node.scrollHeight > node.clientHeight + 1) return node;
    node = node.parentElement;
  }
  return null;
}

/** Scrolls a section into view without touching the URL hash (which can reset the page to the top). */
export function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const container = getScrollParent(target);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const behavior: ScrollBehavior = reduceMotion ? 'auto' : 'smooth';

  if (container) {
    const top =
    target.getBoundingClientRect().top -
    container.getBoundingClientRect().top +
    container.scrollTop -
    HEADER_OFFSET;
    container.scrollTo({ top: Math.max(top, 0), behavior });
    return;
  }

  const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: Math.max(top, 0), behavior });
}

/** Subscribes to scroll on whichever element scrolls the page. */
export function onPageScroll(handler: (scrollTop: number) => void): () => void {
  const root = document.getElementById('home');
  const container = root ? getScrollParent(root) : null;
  const source: HTMLElement | Window = container ?? window;

  const listener = () => {
    handler(container ? container.scrollTop : window.scrollY);
  };

  listener();
  source.addEventListener('scroll', listener, { passive: true });
  return () => source.removeEventListener('scroll', listener);
}