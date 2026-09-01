import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { CategoryCard } from '../components/CategoryCard';
import { PlaceCard } from '../components/PlaceCard';
import { EditorialSection } from '../components/EditorialSection';
import { MapView } from '../components/MapView';
import { SEO } from '../components/SEO';
import { CATEGORIES } from '../data/categories';
import { PLACES } from '../data/places';
import { Compass, MapPin, Sparkles, ArrowLeft } from 'lucide-react';
import heroBg from '../assets/images/places/naqsh-e-jahan-1.webp';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const featuredPlaces = PLACES.filter(p => p.featured);

  return (
    <div className="space-y-20 pb-16">
      <SEO title="از اصفهان | راهنمای اختصاصی کشف اصفهان | AZ ESFAHAN" />

      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-zinc-950 text-white">
        
        {/* Background Photography with Motion Zoom */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Isfahan Naqsh-e Jahan"
            className="w-full h-full object-cover scale-105 animate-pulse-subtle opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f5] via-zinc-950/60 to-zinc-950/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16 space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-teal-300 text-xs font-mono tracking-widest uppercase animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" />
            <span>راهنمای اختصاصی کشف اصفهان</span>
          </div>

          {/* Main Title & Tagline */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white drop-shadow-md">
              از اصفهان
            </h1>
            <p className="text-xl sm:text-3xl font-extrabold text-teal-200 tracking-tight">
              اصفهان را جور دیگری ببین
            </p>
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed pt-2">
              روایتی نو و مدرن از بناهای صفوی، کافه‌های دنج محله جلفا، پاتوق‌های عکاسی و جاذبه‌های پنهان نصف جهان.
            </p>
          </div>

          {/* Search Bar */}
          <div className="pt-2">
            <SearchBar variant="hero" placeholder="جستجو در اصفهان (مثل: نقش جهان، کافه جلفا، بریانی...)" />
          </div>

          {/* CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
            <button
              onClick={() => navigate('/explore')}
              className="px-8 py-4 rounded-full bg-teal-700 hover:bg-teal-800 text-white shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Compass className="w-5 h-5" />
              <span>کشف اصفهان</span>
            </button>
            
            <Link
              to="/map"
              className="px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 transition-all flex items-center gap-2"
            >
              <MapPin className="w-5 h-5 text-teal-300" />
              <span>نقشه تعاملی</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 pb-6">
          <div>
            <span className="text-teal-800 text-xs font-mono font-semibold tracking-widest uppercase">دسته‌بندی‌ها</span>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 mt-1">
              مکان‌ها بر اساس تجربه شما
            </h2>
          </div>
          <Link
            to="/explore"
            className="text-teal-800 hover:text-teal-950 font-bold text-sm flex items-center gap-1 group"
          >
            <span>مشاهده همه دسته‌ها</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* Featured Places */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 pb-6">
          <div>
            <span className="text-teal-800 text-xs font-mono font-semibold tracking-widest uppercase">برگزیده‌ها</span>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 mt-1">
              جاهای دیدنی پیشنهادی اصفهان
            </h2>
          </div>
          <Link
            to="/explore"
            className="text-teal-800 hover:text-teal-950 font-bold text-sm flex items-center gap-1 group"
          >
            <span>مشاهده فهرست کامل</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredPlaces.map((place) => (
            <PlaceCard key={place.id} place={place} viewMode="grid" />
          ))}
        </div>
      </section>

      {/* Live Map Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200/80 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-teal-800 text-xs font-mono font-semibold tracking-widest uppercase">نقشه زنده</span>
              <h2 className="text-2xl sm:text-3xl font-black text-zinc-900">
                موقعیت مکان‌های دیدنی روی نقشه
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600">
                نمای کلی از پراکندگی جاذبه‌های تاریخی، کافه‌ها و طبیعت اصفهان.
              </p>
            </div>

            <Link
              to="/map"
              className="px-6 py-3 rounded-2xl bg-zinc-900 hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shrink-0 shadow-sm"
            >
              <MapPin className="w-4 h-4 text-teal-400" />
              <span>مشاهده کامل روی نقشه</span>
            </Link>
          </div>

          <MapView places={PLACES} height="420px" zoom={13} />
        </div>
      </section>

      {/* Discover Isfahan Editorial Section */}
      <EditorialSection />
    </div>
  );
};
