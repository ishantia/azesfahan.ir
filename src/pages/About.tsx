import React from 'react';
import { SEO } from '../components/SEO';
import { Info, ShieldCheck, Zap, Code, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-[#faf9f5]">
      <SEO
        title="درباره پروژه از اصفهان | AZ ESFAHAN"
        description="پلتفرم مستقل و غیرانتفاعی معرفی جاذبه‌ها و فرهنگ اصفهان به سبک مجله‌های تصویری مدرن."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono font-semibold">
            <Info className="w-3.5 h-3.5" />
            <span>روایت پدیدآورندگان</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-zinc-900 tracking-tight">
            اصفهان را جور دیگری ببین
          </h1>

          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            «از اصفهان» پلتفرمی مستقل و مجله‌مانند برای کشف و معرفی گنجینه‌های معماری، پاتوق‌های فرهنگی، کافه‌های دنج و جاذبه‌های کمتر دیده‌شده اصفهان است.
          </p>
        </div>

        {/* Hero Visual */}
        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-xl bg-zinc-900 border border-zinc-200">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="Isfahan Khaju Bridge"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-6 right-6 text-white">
            <span className="text-2xl font-black">پل خواجو در امتداد زاینده‌رود</span>
            <p className="text-xs font-mono text-zinc-300">طنین نغمه‌های ماندگار در قلب اصفهان</p>
          </div>
        </div>

        {/* Story Content */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200/80 shadow-2xs space-y-8 text-zinc-800">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-zinc-900 border-r-4 border-teal-700 pr-3">
              چرا «از اصفهان»؟
            </h2>
            <p className="text-sm sm:text-base leading-loose text-zinc-600">
              بسیاری از راهنماهای گردشگری، اصفهان را صرفاً در چند کارت‌پستال کلیشه‌ای خلاصه می‌کنند. اما اصفهان شهری لایه‌لایه است؛ از حس و حال چای نوشیدن در قهوه‌خانه ۳۰۰ ساله چاه حاج میرزا تا قدم زدن بر سنگ‌فرش‌های باران‌خورده محله جلفا و شنیدن صدای آواز زیر دهانه‌های پل خواجو.
            </p>
            <p className="text-sm sm:text-base leading-loose text-zinc-600">
              هدف ما ایجاد یک راهنمای بصری، مینیمال و بسیار سریع بود که بدون نیاز به ثبت‌نام یا تبلیغات مزاحم، بهترین تجربه کشف شهر را در اختیار علاقه مندان قرار دهد.
            </p>
          </div>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-900 text-base">سرعت بی‌نظیر</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                طراحی شده به صورت Static Single-Page App با لود زیر ۱ ثانیه.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-900 text-base">داده‌های معتبر</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                اطلاعات مکانی، تاریخچه و مختصات کاملاً بررسی شده و واقعی.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-900 text-base">متن‌باز و مدرن</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                توسعه داده شده با React، TypeScript، Tailwind CSS و React Leaflet.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-teal-700" />
              <span>ساخته شده با افتخار برای اصفهان و ایران</span>
            </div>
            <div className="flex items-center gap-1 font-mono text-zinc-400">
              AZ ESFAHAN Platform • azesfahan.ir
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
