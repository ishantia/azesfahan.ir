import React from 'react';
import { MapView } from '../components/MapView';
import { SEO } from '../components/SEO';
import { PLACES } from '../data/places';
import { MapPin } from 'lucide-react';

export const MapPage: React.FC = () => {
  return (
    <div className="pt-20 pb-10 min-h-screen bg-[#faf9f5]">
      <SEO
        title="نقشه آنلاین و تعاملی جاهای دیدنی اصفهان | از اصفهان"
        description="نقشه کامل و هوشمند اصفهان شامل موقعیت تمام جاذبه‌های تاریخی، کافه‌ها، رستوران‌ها و پاتوق‌های عکاسی."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 pb-4 pt-2">
          <div>
            <div className="flex items-center gap-2 text-teal-800 text-xs font-mono font-semibold tracking-widest uppercase">
              <MapPin className="w-4 h-4" />
              <span>نقشه تعاملی</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
              کاوش اصفهان روی نقشه
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-md">
            بر روی مارکرهای نقشه کلیک کنید تا پیش‌نمایش تصویر و جزئیات هر مکان دیدنی را ببینید.
          </p>
        </div>

        {/* Full Interactive Map Component */}
        <MapView
          places={PLACES}
          height="calc(85vh - 120px)"
          zoom={13}
          showCategoryFilter={true}
        />

      </div>
    </div>
  );
};
