import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Search, Menu, X, Compass, Info, Home } from 'lucide-react';

interface NavbarProps {
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'صفحه اصلی', icon: Home },
    { path: '/explore', label: 'کاشف مکان‌ها', icon: Compass },
    { path: '/map', label: 'نقشه اصفهان', icon: MapPin },
    { path: '/about', label: 'درباره ما', icon: Info },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#faf9f5]/90 backdrop-blur-md shadow-sm border-b border-zinc-200/80 py-3.5'
          : 'bg-gradient-to-b from-black/50 via-black/20 to-transparent text-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Wordmark */}
          <Link to="/" className="group flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-lg transition-transform group-hover:scale-105 ${
              scrolled ? 'bg-teal-700 text-white' : 'bg-white/90 text-teal-800 backdrop-blur-sm'
            }`}>
              اص
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-tight leading-none ${
                scrolled ? 'text-zinc-900' : 'text-white'
              }`}>
                از اصفهان
              </span>
              <span className={`text-[10px] tracking-widest uppercase font-semibold font-mono mt-0.5 ${
                scrolled ? 'text-teal-700' : 'text-teal-200'
              }`}>
                AZ ESFAHAN
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    scrolled
                      ? isActive
                        ? 'bg-zinc-900 text-white shadow-xs'
                        : 'text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100'
                      : isActive
                        ? 'bg-white/20 text-white backdrop-blur-sm'
                        : 'text-zinc-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions & Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            {/* Search Trigger Button */}
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium border transition-all ${
                  scrolled
                    ? 'border-zinc-300 text-zinc-700 bg-white hover:bg-zinc-50 shadow-2xs'
                    : 'border-white/30 text-white bg-black/20 hover:bg-white/20 backdrop-blur-sm'
                }`}
                aria-label="Search places"
              >
                <Search className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">جستجو...</span>
              </button>
            )}

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl transition-colors ${
                scrolled
                  ? 'text-zinc-800 hover:bg-zinc-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf9f5] border-b border-zinc-200 shadow-xl px-4 pt-3 pb-6 animate-fade-in text-zinc-900">
          <nav className="flex flex-col gap-2 mt-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-teal-700 text-white'
                      : 'text-zinc-800 hover:bg-zinc-100'
                  }`}
                >
                  <Icon className="w-5 h-5 opacity-90" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
