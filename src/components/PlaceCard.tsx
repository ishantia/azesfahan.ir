import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Place, ViewMode } from '../types';
import { getCategoryById, getCategoryIcon } from '../utils/helpers';
import { MapPin, Bookmark, ArrowUpLeft, Clock } from 'lucide-react';

interface PlaceCardProps {
  place: Place;
  viewMode?: ViewMode;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({ place, viewMode = 'grid' }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const category = getCategoryById(place.category);
  const IconComponent = getCategoryIcon(category.iconName);

  useEffect(() => {
    const saved = localStorage.getItem(`bookmark_${place.id}`);
    if (saved === 'true') {
      setIsBookmarked(true);
    }
  }, [place.id]);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nextState = !isBookmarked;
    setIsBookmarked(nextState);
    localStorage.setItem(`bookmark_${place.id}`, String(nextState));
  };

  if (viewMode === 'list') {
    return (
      <Link
        to={`/places/${place.slug}`}
        className="group bg-white rounded-2xl border border-zinc-200/80 overflow-hidden shadow-2xs hover:shadow-lg hover:border-teal-700/50 transition-all duration-300 flex flex-col sm:flex-row gap-4 p-3 sm:p-4"
      >
        {/* Thumbnail Image */}
        <div className="relative sm:w-56 h-48 sm:h-auto rounded-xl overflow-hidden shrink-0 bg-zinc-100">
          <img
            src={place.images[0]}
            alt={place.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <button
            onClick={toggleBookmark}
            className={`absolute top-3 left-3 p-2 rounded-full backdrop-blur-md transition-colors ${
              isBookmarked
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-black/40 text-white hover:bg-black/60'
            }`}
            aria-label="Bookmark place"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-white' : ''}`} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between py-1">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-800 border border-teal-200">
                <IconComponent className="w-3.5 h-3.5 text-teal-700" />
                {category.name}
              </span>
              {place.openingHours && (
                <span className="flex items-center gap-1 text-[11px] text-zinc-500">
                  <Clock className="w-3 h-3 text-zinc-400" />
                  {place.openingHours}
                </span>
              )}
            </div>

            <h3 className="text-lg font-bold text-zinc-900 group-hover:text-teal-800 transition-colors flex items-center gap-2">
              <span>{place.name}</span>
              <span className="text-xs font-normal font-mono text-zinc-400">({place.nameEn})</span>
            </h3>

            <p className="text-sm text-zinc-600 line-clamp-2 mt-1.5 leading-relaxed">
              {place.shortDescription}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
            <span className="flex items-center gap-1 truncate max-w-[240px]">
              <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
              {place.address}
            </span>
            <span className="text-teal-700 font-semibold flex items-center gap-0.5 group-hover:translate-x-[-2px] transition-transform shrink-0">
              جزئیات مکان
              <ArrowUpLeft className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/places/${place.slug}`}
      className="group bg-white rounded-2xl border border-zinc-200/80 overflow-hidden shadow-2xs hover:shadow-xl hover:border-teal-700/40 transition-all duration-300 flex flex-col h-full"
    >
      {/* Cover Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
        <img
          src={place.images[0]}
          alt={place.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />

        {/* Category Pill */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-zinc-900 backdrop-blur-md shadow-xs">
            <IconComponent className="w-3.5 h-3.5 text-teal-700" />
            {category.name}
          </span>
        </div>

        {/* Bookmark Button */}
        <button
          onClick={toggleBookmark}
          className={`absolute top-3 left-3 p-2 rounded-full backdrop-blur-md transition-all ${
            isBookmarked
              ? 'bg-amber-500 text-white shadow-xs scale-105'
              : 'bg-black/40 text-white hover:bg-black/60 hover:scale-105'
          }`}
          aria-label="Bookmark place"
        >
          <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-white' : ''}`} />
        </button>

        {/* Location Subtitle on Image */}
        <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-white text-xs">
          <span className="font-mono text-zinc-200 font-light truncate max-w-[70%]">
            {place.nameEn}
          </span>
          {place.historicalEra && (
            <span className="px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-sm text-[10px]">
              {place.historicalEra}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-extrabold text-zinc-900 group-hover:text-teal-800 transition-colors">
            {place.name}
          </h3>

          <p className="text-sm text-zinc-600 line-clamp-2 mt-2 leading-relaxed">
            {place.shortDescription}
          </p>
        </div>

        <div className="mt-5 pt-3.5 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
          <span className="flex items-center gap-1.5 truncate max-w-[200px]">
            <MapPin className="w-3.5 h-3.5 text-teal-700 shrink-0" />
            <span className="truncate">{place.address}</span>
          </span>

          <span className="text-teal-700 font-bold flex items-center gap-0.5 group-hover:translate-x-[-3px] transition-transform shrink-0">
            مشاهده
            <ArrowUpLeft className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};
