import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Compass, Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-[75vh] flex flex-col items-center justify-center text-center px-4 bg-[#faf9f5]">
      <SEO title="۴۰۴ - صفحه پیدا نشد | از اصفهان" />

      <div className="w-20 h-20 rounded-3xl bg-teal-50 text-teal-800 flex items-center justify-center mb-6 border border-teal-200">
        <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: '10s' }} />
      </div>

      <span className="text-sm font-mono font-bold text-teal-700 uppercase tracking-widest">خطای ۴۰۴</span>
      <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 mt-2 tracking-tight">
        راه را گم کرده‌اید؟
      </h1>

      <p className="text-zinc-600 text-sm sm:text-base max-w-md mt-3 leading-relaxed">
        صفحه‌ای که به دنبال آن بودید یافت نشد یا منتقل شده است.
      </p>

      <div className="mt-8 flex items-center gap-3 font-semibold text-sm">
        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-teal-700 hover:bg-teal-800 text-white shadow-md transition-colors flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>بازگشت به صفحه اصلی</span>
        </Link>
        <Link
          to="/explore"
          className="px-6 py-3 rounded-full bg-white hover:bg-zinc-100 text-zinc-800 border border-zinc-300 transition-colors"
        >
          کاشف مکان‌ها
        </Link>
      </div>
    </div>
  );
};
