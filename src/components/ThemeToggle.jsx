import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = ({ className = '', isMobile = false }) => {
  const { theme, toggleTheme, isTransitioning } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex items-center justify-center
        ${isMobile ? 'w-10 h-10' : 'w-12 h-12'}
        rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 
        hover:from-primary/20 hover:to-primary/10
        border border-primary/20 hover:border-primary/30
        shadow-sm hover:shadow-md
        transition-all duration-300 ease-in-out
        transform hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2
        ${className}
      `}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Background circle for switch effect */}
      <div className={`
        absolute inset-1 rounded-lg bg-gradient-to-r
        transition-all duration-300 ease-in-out
        ${isDark 
          ? 'from-slate-700 to-slate-800 shadow-inner' 
          : 'from-yellow-100 to-orange-100 shadow-sm'
        }
      `} />
      
      {/* Sun Icon */}
      <Sun 
        className={`
          absolute transition-all duration-300 ease-in-out
          ${isMobile ? 'w-5 h-5' : 'w-6 h-6'}
          ${isDark 
            ? 'opacity-0 scale-75 rotate-90 text-yellow-400' 
            : 'opacity-100 scale-100 rotate-0 text-yellow-600'
          }
          ${isTransitioning ? 'animate-spin' : ''}
        `}
      />
      
      {/* Moon Icon */}
      <Moon 
        className={`
          absolute transition-all duration-300 ease-in-out
          ${isMobile ? 'w-5 h-5' : 'w-6 h-6'}
          ${isDark 
            ? 'opacity-100 scale-100 rotate-0 text-blue-300' 
            : 'opacity-0 scale-75 -rotate-90 text-slate-600'
          }
          ${isTransitioning ? 'animate-pulse' : ''}
        `}
      />
      
      {/* Glow effect for dark mode */}
      {isDark && (
        <div className="absolute inset-0 rounded-xl bg-blue-400/20 blur-sm animate-pulse" />
      )}
    </button>
  );
};

export default ThemeToggle;
