import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PLACES } from '../data/places';
import { Place } from '../types';
import { getCategoryById } from '../utils/helpers';
import { Search, X, MapPin, ArrowUpLeft } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  variant?: 'hero' | 'inline' | 'modal';
  onClose?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'جستجو در اصفهان (نام مکان، خیابان، کافه...)...',
  variant = 'inline',
  onClose,
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Place[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim().length > 0) {
      const q = query.toLowerCase().trim();
      const filtered = PLACES.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.nameEn.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.address.toLowerCase().includes(q) ||
          p.tags.some(t => t.toLowerCase().includes(q))
      );
      setResults(filtered.slice(0, 5));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (slug: string) => {
    setIsOpen(false);
    setQuery('');
    if (onClose) onClose();
    navigate(`/places/${slug}`);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsOpen(false);
      if (onClose) onClose();
      navigate(`/explore?q=${encodeURIComponent(query.trim())}`);
    }
  };

  if (variant === 'hero') {
    return (
      <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
        <form onSubmit={handleFormSubmit} className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full h-14 sm:h-16 pr-14 pl-16 rounded-full bg-white/95 text-zinc-900 placeholder-zinc-400 text-sm sm:text-base border border-zinc-200 shadow-2xl focus:outline-none focus:ring-4 focus:ring-teal-600/30 transition-all font-medium"
          />
          <div className="absolute right-5 top-1/2 -translate-y-1/2 text-teal-700">
            <Search className="w-6 h-6" />
          </div>

          {query ? (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute left-16 top-1/2 -translate-y-1/2 p-1 rounded-full text-zinc-400 hover:text-zinc-600"
            >
              <X className="w-5 h-5" />
            </button>
          ) : null}

          <button
            type="submit"
            className="absolute left-3 top-1/2 -translate-y-1/2 px-4 sm:px-5 py-2.5 rounded-full bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
          >
            جستجو
          </button>
        </form>

        {/* Dropdown Results */}
        {isOpen && results.length > 0 && (
          <div className="absolute top-full mt-3 right-0 left-0 bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden z-50 animate-fade-in divide-y divide-zinc-100">
            {results.map((place) => {
              const category = getCategoryById(place.category);
              return (
                <button
                  key={place.id}
                  onClick={() => handleSelect(place.slug)}
                  className="w-full p-3.5 flex items-center gap-4 hover:bg-teal-50/60 transition-colors text-right group"
                >
                  <img
                    src={place.images[0]}
                    alt={place.name}
                    className="w-12 h-12 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-zinc-900 group-hover:text-teal-800 transition-colors text-sm truncate">
                        {place.name}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400 truncate">
                        ({place.nameEn})
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 truncate mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-teal-700 shrink-0" />
                      <span>{category.name} • {place.address}</span>
                    </p>
                  </div>
                  <ArrowUpLeft className="w-4 h-4 text-zinc-400 group-hover:text-teal-700 group-hover:translate-x-[-2px] transition-all" />
                </button>
              );
            })}

            <button
              onClick={handleFormSubmit}
              className="w-full py-3 bg-zinc-50 hover:bg-zinc-100 text-center text-xs text-teal-800 font-semibold transition-colors flex items-center justify-center gap-1"
            >
              مشاهده تمام نتايج برای «{query}»
              <ArrowUpLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={searchRef} className="relative w-full">
      <form onSubmit={handleFormSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full h-11 pr-11 pl-10 rounded-xl bg-white text-zinc-900 placeholder-zinc-400 text-sm border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-teal-700/50 shadow-2xs"
        />
        <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </form>

      {/* Dropdown Results */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 right-0 left-0 bg-white rounded-xl shadow-xl border border-zinc-200 overflow-hidden z-50 divide-y divide-zinc-100">
          {results.map((place) => (
            <button
              key={place.id}
              onClick={() => handleSelect(place.slug)}
              className="w-full p-3 flex items-center gap-3 hover:bg-zinc-50 transition-colors text-right"
            >
              <img src={place.images[0]} alt={place.name} className="w-10 h-10 rounded-lg object-cover" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-zinc-900 truncate">{place.name}</p>
                <p className="text-xs text-zinc-500 truncate">{place.address}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
