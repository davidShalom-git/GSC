import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Prayer', href: '/prayer' },
  { label: 'Events', href: '/events' },
  { label: 'Worship', href: '/services' },
  { label: 'About', href: '/about' },
];

interface NavbarProps {
  darkBg?: boolean; // deprecated, use theme instead
  theme?: 'solid-green' | 'glass-dark' | 'glass-light';
}

const Navbar = ({ darkBg = false, theme }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Compute active theme
  const currentTheme = theme || (darkBg ? 'glass-dark' : 'solid-green');

  const themeClasses = {
    'solid-green': {
      nav: 'bg-[#022c22] border border-[#d4af37]/30 text-white',
      logo: 'text-white',
      links: 'text-white/80 hover:text-white',
      contactBtn: 'bg-[#d4af37] text-[#022c22] shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]',
      toggleBtn: 'text-white'
    },
    'glass-dark': {
      nav: 'bg-white/10 backdrop-blur-md border border-white/20 text-white',
      logo: 'text-white',
      links: 'text-white/80 hover:text-white',
      contactBtn: 'bg-[#d4af37] text-[#022c22] shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]',
      toggleBtn: 'text-white'
    },
    'glass-light': {
      nav: 'bg-white/70 backdrop-blur-xl border border-black/10 text-[#022c22] shadow-[0_8px_30px_rgb(0,0,0,0.06)]',
      logo: 'text-[#022c22]',
      links: 'text-[#022c22]/70 hover:text-[#022c22]',
      contactBtn: 'bg-[#022c22] text-white shadow-[0_0_15px_rgba(2,44,34,0.1)] hover:bg-[#d4af37] hover:text-[#022c22] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]',
      toggleBtn: 'text-[#022c22]'
    }
  };

  const activeTheme = themeClasses[currentTheme];

  return (
    <div className="relative z-50 w-full pt-6 pb-4 px-4 sm:px-8">
      <nav className={`mx-auto flex max-w-[75rem] items-center justify-between rounded-full px-8 py-3 shadow-2xl transition-all duration-300 ${activeTheme.nav}`}>
        {/* Logo - Text Only */}
        <a
          href="/"
          className="flex items-center justify-center"
        >
          <span className={`font-serif text-2xl font-bold tracking-[0.2em] transition-colors duration-300 ${activeTheme.logo}`}>FGGS</span>
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`group relative text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${activeTheme.links}`}
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
          <a href="#contact">
            <button
                type="button"
                className={`ml-4 rounded-full px-8 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105 ${activeTheme.contactBtn}`}
            >
                CONTACT
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`p-2 transition-colors duration-300 lg:hidden ${activeTheme.toggleBtn}`}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Side Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-[70] flex w-72 transform flex-col border-r border-white/10 bg-[#111111]/95 px-8 py-8 shadow-2xl backdrop-blur-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header with Close Button */}
        <div className="mb-10 flex items-center justify-between">
          <span className="font-serif text-[13px] tracking-[0.25em] text-white">FGGS</span>
          <button
            type="button"
            className="p-2 text-white/80 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex items-center justify-between text-sm font-medium uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
              <span className="h-[1px] w-8 bg-[#d4af37] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
            <button
                type="button"
                className="mt-6 w-full rounded-full bg-[#d4af37] px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#022c22] shadow-lg transition-all active:scale-95"
            >
                CONTACT
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
