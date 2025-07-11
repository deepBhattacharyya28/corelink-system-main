import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-3 left-4 right-4 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-primary/20 dark:border-primary/30 shadow-lg rounded-2xl transition-all duration-300">
      {/* Enhanced container with rounded design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Responsive sizing */}
          <div className="font-bold text-xl sm:text-2xl text-primary flex-shrink-0">
            CoreLink System
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
            >
              Services
            </button>
          </div>

          {/* Desktop Contact Button and Theme Toggle - Top Right */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-hero hover:shadow-glow transition-all duration-300 hover:scale-105 px-6 py-2 rounded-xl"
            >
              Contact Us
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Theme Toggle and Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle isMobile={true} />
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`
                  relative p-3 rounded-xl transition-all duration-300 ease-in-out
                  bg-gradient-to-r from-primary/10 to-primary/5
                  hover:from-primary/20 hover:to-primary/10
                  border border-primary/20 hover:border-primary/30
                  shadow-sm hover:shadow-md
                  transform hover:scale-105 active:scale-95
                  ${isMenuOpen ? 'bg-primary/20 border-primary/40' : ''}
                `}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
              {/* Animated hamburger/X icon */}
              <div className="relative w-7 h-7 flex items-center justify-center">
                <Menu
                  className={`
                    w-7 h-7 text-primary transition-all duration-300 ease-in-out absolute
                    ${isMenuOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'}
                  `}
                />
                <X
                  className={`
                    w-7 h-7 text-primary transition-all duration-300 ease-in-out absolute
                    ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'}
                  `}
                />
              </div>
            </button>

            {/* Enhanced Mobile Dropdown Menu with smooth animations */}
            <div
              className={`
                absolute top-full right-0 mt-3 w-64 sm:w-72 max-w-[calc(100vw-2rem)]
                bg-white/95 backdrop-blur-md border border-primary/20
                rounded-2xl shadow-lg overflow-hidden z-50
                transition-all duration-300 ease-in-out origin-top-right
                ${isMenuOpen
                  ? 'opacity-100 scale-100 translate-y-0 visible'
                  : 'opacity-0 scale-95 -translate-y-2 invisible'
                }
              `}
            >
              <div className="py-3">
                <button
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left px-6 py-4 text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium text-base border-b border-primary/5 last:border-b-0"
                >
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-primary/60 rounded-full mr-3 transition-all duration-200 group-hover:bg-primary"></span>
                    Home
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-6 py-4 text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium text-base border-b border-primary/5 last:border-b-0"
                >
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-primary/60 rounded-full mr-3 transition-all duration-200 group-hover:bg-primary"></span>
                    About Us
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left px-6 py-4 text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium text-base border-b border-primary/5 last:border-b-0"
                >
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-primary/60 rounded-full mr-3 transition-all duration-200 group-hover:bg-primary"></span>
                    Services
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-6 py-4 text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium text-base"
                >
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-primary/60 rounded-full mr-3 transition-all duration-200 group-hover:bg-primary"></span>
                    Contact Us
                  </span>
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
