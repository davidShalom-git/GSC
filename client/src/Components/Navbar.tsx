import { useState, useEffect } from "react";
import fggs from '../assets/FGGS.png'

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Events', path: '/events' },
        { name: 'About', path: '/about' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-3 md:top-4 left-1/2 -translate-x-1/2 w-[96%] sm:w-[92%] md:w-[85%] lg:w-[80%] max-w-5xl flex items-center justify-between px-4 sm:px-5 md:px-6 lg:px-8 rounded-full transition-all duration-500 z-50 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg text-gray-700 py-2 md:py-2.5" : "bg-white/80 backdrop-blur-sm shadow-md text-gray-700 py-2.5 md:py-3"}`}>

            <div className="flex items-center gap-2">
                <img src={fggs} alt="FGGS Logo" className="h-6 sm:h-7 md:h-8" />
                <span className="font-bold text-sm sm:text-base md:text-lg text-gray-800">FGGS</span>
            </div>

            <div className="hidden md:flex items-center gap-4 lg:gap-6">
                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} className="group flex flex-col gap-0.5 text-sm lg:text-base font-medium text-gray-700 hover:text-orange-500 transition-colors">
                        {link.name}
                        <div className="bg-orange-500 h-0.5 w-0 group-hover:w-full transition-all duration-300" />
                    </a>
                ))}
            </div>

            <div className="flex items-center md:hidden">
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Toggle menu"
                >
                    <svg className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-8 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button 
                    className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors" 
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {navLinks.map((link, i) => (
                    <a 
                        key={i} 
                        href={link.path} 
                        onClick={() => setIsMenuOpen(false)}
                        className="text-2xl font-semibold hover:text-orange-500 transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;