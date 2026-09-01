import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Heart, ArrowUpLeft } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-zinc-850">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold text-xl group-hover:scale-105 transition-transform">
                اص
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-tight">از اصفهان</span>
                <span className="text-xs text-teal-400 font-mono tracking-widest uppercase">AZ ESFAHAN</span>
              </div>
            </Link>
            
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
              پلتفرم مستقل و راهنمای تصویری اصفهان‌شناسی. روایتی نو از جاذبه‌های تاریخی، کافه‌ها، هنر معماری و زوایای پنهان نصف جهان.
            </p>
            
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <span className="text-xs text-zinc-300 font-mono bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-850">
                v1.0.0 Static Edition
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-semibold tracking-wider">بخش‌های سایت</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-teal-400 transition-colors flex items-center justify-between group">
                  <span>صفحه اصلی</span>
                  <ArrowUpLeft className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-teal-400" />
                </Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-teal-400 transition-colors flex items-center justify-between group">
                  <span>کاشف مکان‌ها</span>
                  <ArrowUpLeft className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-teal-400" />
                </Link>
              </li>
              <li>
                <Link to="/map" className="hover:text-teal-400 transition-colors flex items-center justify-between group">
                  <span>نقشه آنلاین اصفهان</span>
                  <ArrowUpLeft className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-teal-400" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-400 transition-colors flex items-center justify-between group">
                  <span>درباره پروژه</span>
                  <ArrowUpLeft className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-teal-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Quick List */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white text-sm font-semibold tracking-wider">دسته‌بندی‌های محبوب</h4>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link to="/explore?category=historical" className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-teal-700 hover:text-white transition-colors">
                🏛️ تاریخی
              </Link>
              <Link to="/explore?category=cafes" className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-teal-700 hover:text-white transition-colors">
                ☕ کافه‌ها
              </Link>
              <Link to="/explore?category=restaurants" className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-teal-700 hover:text-white transition-colors">
                🍽️ رستوران‌ها
              </Link>
              <Link to="/explore?category=nature" className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-teal-700 hover:text-white transition-colors">
                🌳 طبیعت
              </Link>
              <Link to="/explore?category=cultural" className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-teal-700 hover:text-white transition-colors">
                🎨 فرهنگی
              </Link>
              <Link to="/explore?category=photography" className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-teal-700 hover:text-white transition-colors">
                📸 عکاسی
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} از اصفهان (AZ ESFAHAN). کلیه حقوق محفوظ است.</p>
          <p className="flex items-center gap-1.5">
            ساخته شده با <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> و React برای نصف جهان
          </p>
        </div>
      </div>
    </footer>
  );
};
