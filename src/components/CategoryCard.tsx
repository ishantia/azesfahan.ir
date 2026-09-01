import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';
import { getCategoryIcon, toPersianDigits } from '../utils/helpers';
import { PLACES } from '../data/places';
import { ArrowUpLeft } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const IconComponent = getCategoryIcon(category.iconName);
  const count = PLACES.filter(p => p.category === category.id).length;

  return (
    <Link
      to={`/explore?category=${category.id}`}
      className="group relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] flex flex-col justify-end p-6 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
    >
      {/* Background Image */}
      <img
        src={category.image}
        alt={category.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />

      {/* Dark Overlay Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`} />

      {/* Top Badge */}
      <div className="absolute top-4 right-4 flex items-center justify-between left-4 z-10">
        <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform">
          <IconComponent className="w-5 h-5" />
        </div>
        <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-mono border border-white/10">
          {toPersianDigits(count)} مکان
        </span>
      </div>

      {/* Card Content */}
      <div className="relative z-10 text-white space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-black tracking-tight">{category.name}</h3>
            <p className="text-xs text-white/70 font-mono font-light tracking-wide">{category.nameEn}</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-white text-zinc-900 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-[-4px] transition-all">
            <ArrowUpLeft className="w-4 h-4" />
          </div>
        </div>

        <p className="text-xs text-white/80 line-clamp-2 leading-relaxed font-light">
          {category.description}
        </p>
      </div>
    </Link>
  );
};
