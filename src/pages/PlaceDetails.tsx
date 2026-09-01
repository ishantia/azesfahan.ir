import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PLACES } from '../data/places';
import { getCategoryById, getCategoryIcon, getNearbyPlaces } from '../utils/helpers';
import { MapView } from '../components/MapView';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEO } from '../components/SEO';
import {
  MapPin,
  Clock,
  Ticket,
  ExternalLink,
  Bookmark,
  Share2,
  Compass,
  Sparkles
} from 'lucide-react';

export const PlaceDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(() => {
    if (!slug) return false;
    const place = PLACES.find(p => p.slug === slug);
    return place ? localStorage.getItem(`bookmark_${place.id}`) === 'true' : false;
  });

  const place = PLACES.find(p => p.slug === slug);

  if (!place) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <SEO title="مکان یافت نشد | از اصفهان" />
        <h2 className="text-3xl font-black text-zinc-900">مکان مورد نظر پیدا نشد!</h2>
        <p className="text-zinc-600 text-sm">ممکن است آدرس متفاوتی را وارد کرده باشید.</p>
        <Link to="/explore" className="px-6 py-3 rounded-full bg-teal-700 text-white font-bold text-sm">
          بازگشت به کاوش مکان‌ها
        </Link>
      </div>
    );
  }

  const category = getCategoryById(place.category);
  const IconComponent = getCategoryIcon(category.iconName);
  const nearbyPlaces = getNearbyPlaces(place, 3);

  const toggleBookmark = () => {
    const nextState = !isBookmarked;
    setIsBookmarked(nextState);
    localStorage.setItem(`bookmark_${place.id}`, String(nextState));
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: place.name,
        text: place.shortDescription,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('لینک صفحه در حافظه کپی شد!');
    }
  };

  return (
    <div className="pt-20 pb-20 bg-[#faf9f5]">
      <SEO
        title={`${place.name} (${place.nameEn}) | از اصفهان`}
        description={place.shortDescription}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-b border-zinc-200 pb-2">
          <Breadcrumbs
            items={[
              { label: 'کاشف مکان‌ها', path: '/explore' },
              { label: category.name, path: `/explore?category=${category.id}` },
              { label: place.name },
            ]}
          />

          <div className="flex items-center gap-2">
            <button
              onClick={toggleBookmark}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                isBookmarked
                  ? 'bg-amber-500 text-white border-amber-500 shadow-2xs'
                  : 'bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-50'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-white' : ''}`} />
              <span>{isBookmarked ? 'ذخیره شده' : 'ذخیره'}</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-white text-zinc-700 border border-zinc-300 hover:bg-zinc-50 transition-all"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>اشتراک‌گذاری</span>
            </button>
          </div>
        </div>

        {/* Gallery / Hero Section */}
        <div className="space-y-4">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-xl bg-zinc-900">
            <img
              src={place.images[activeImageIndex]}
              alt={place.name}
              className="w-full h-full object-cover animate-fade-in"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Title overlay on image */}
            <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 left-6 text-white space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-700/90 backdrop-blur-md text-white">
                  <IconComponent className="w-3.5 h-3.5" />
                  {category.name}
                </span>

                {place.historicalEra && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/50 backdrop-blur-md border border-white/20">
                    {place.historicalEra}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight">{place.name}</h1>
              <p className="text-sm sm:text-base font-mono text-zinc-300 font-light">{place.nameEn}</p>
            </div>
          </div>

          {/* Thumbnails grid */}
          {place.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {place.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                    activeImageIndex === idx ? 'border-teal-700 scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content & Metadata Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Quick Specs Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {place.openingHours && (
                <div className="bg-white p-4 rounded-2xl border border-zinc-200/80 shadow-2xs flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 font-semibold block">ساعات بازدید</span>
                    <span className="text-xs font-bold text-zinc-800">{place.openingHours}</span>
                  </div>
                </div>
              )}

              {place.bestTime && (
                <div className="bg-white p-4 rounded-2xl border border-zinc-200/80 shadow-2xs flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 font-semibold block">بهترین زمان بازدید</span>
                    <span className="text-xs font-bold text-zinc-800">{place.bestTime}</span>
                  </div>
                </div>
              )}

              {place.ticketPrice && (
                <div className="bg-white p-4 rounded-2xl border border-zinc-200/80 shadow-2xs flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                    <Ticket className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 font-semibold block">ورودی / بلیط</span>
                    <span className="text-xs font-bold text-zinc-800">{place.ticketPrice}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Overview & Description */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-2xs space-y-4">
              <h2 className="text-2xl font-black text-zinc-900 border-r-4 border-teal-700 pr-3">
                درباره {place.name}
              </h2>

              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {place.description}
              </p>

              {/* Tags */}
              <div className="pt-4 flex flex-wrap gap-2">
                {place.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-medium border border-zinc-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Location Map Section */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-2xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-teal-700" />
                    موقعیت روی نقشه
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">{place.address}</p>
                </div>

                {place.googleMapsUrl && (
                  <a
                    href={place.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>مسیریابی در Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <MapView
                places={[place]}
                center={[place.latitude, place.longitude]}
                zoom={15}
                height="320px"
              />
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Fact Box */}
            <div className="bg-zinc-900 text-white p-6 rounded-3xl space-y-4 shadow-xl">
              <h3 className="text-lg font-black text-teal-300">شناسنامه مکان</h3>

              <div className="space-y-3 text-xs divide-y divide-zinc-800 text-zinc-300">
                <div className="pt-2 flex justify-between">
                  <span className="text-zinc-500">نام انگلیسی:</span>
                  <span className="font-mono text-white font-medium">{place.nameEn}</span>
                </div>

                <div className="pt-2 flex justify-between">
                  <span className="text-zinc-500">دسته‌بندی:</span>
                  <span className="text-teal-300 font-semibold">{category.name}</span>
                </div>

                {place.historicalEra && (
                  <div className="pt-2 flex justify-between">
                    <span className="text-zinc-500">دوره تاریخی:</span>
                    <span className="text-white">{place.historicalEra}</span>
                  </div>
                )}

                <div className="pt-2 flex justify-between">
                  <span className="text-zinc-500">مختصات جغرافیایی:</span>
                  <span className="font-mono text-zinc-400">{place.latitude.toFixed(4)}, {place.longitude.toFixed(4)}</span>
                </div>
              </div>
            </div>

            {/* Nearby Places Section */}
            <div className="bg-white p-6 rounded-3xl border border-zinc-200/80 shadow-2xs space-y-4">
              <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-teal-700" />
                جاذبه‌های نزدیک این مکان
              </h3>

              <div className="space-y-3">
                {nearbyPlaces.map((near) => (
                  <Link
                    key={near.id}
                    to={`/places/${near.slug}`}
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-teal-50/60 transition-colors group"
                  >
                    <img
                      src={near.images[0]}
                      alt={near.name}
                      className="w-14 h-14 rounded-lg object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-xs text-zinc-900 group-hover:text-teal-800 truncate">
                        {near.name}
                      </h4>
                      <p className="text-[11px] text-zinc-500 truncate mt-0.5">
                        {near.address}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
