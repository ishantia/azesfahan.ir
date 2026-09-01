import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PLACES } from '../data/places';
import { CATEGORIES } from '../data/categories';
import { PlaceCard } from '../components/PlaceCard';
import { SEO } from '../components/SEO';
import { CategoryId, ViewMode, SortOption } from '../types';
import { getCategoryById, toPersianDigits } from '../utils/helpers';
import { Search, Grid, List, SlidersHorizontal, X, Compass, MapPin } from 'lucide-react';

export const Explore: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read initial query params
  const initialCategory = (searchParams.get('category') as CategoryId) || 'all';
  const initialQuery = searchParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortBy, setSortBy] = useState<SortOption>('popular');

  // Sync state with URL params
  useEffect(() => {
    const cat = (searchParams.get('category') as CategoryId) || 'all';
    const q = searchParams.get('q') || '';
    setSelectedCategory(cat);
    setSearchQuery(q);
  }, [searchParams]);

  const updateFilters = (newCat: CategoryId | 'all', newQ: string) => {
    setSelectedCategory(newCat);
    setSearchQuery(newQ);

    const params: Record<string, string> = {};
    if (newCat !== 'all') params.category = newCat;
    if (newQ.trim()) params.q = newQ.trim();
    setSearchParams(params);
  };

  const filteredAndSortedPlaces = useMemo(() => {
    let result = [...PLACES];

    // Filter by Category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by Keyword
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.nameEn.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.address.toLowerCase().includes(q) ||
          p.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    // Sort
    if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name, 'fa'));
    } else if (sortBy === 'category') {
      result.sort((a, b) => a.category.localeCompare(b.category));
    } else {
      // Default: featured first
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const currentCategoryObj = selectedCategory !== 'all' ? getCategoryById(selectedCategory) : null;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#faf9f5]">
      <SEO
        title={
          currentCategoryObj
            ? `جاهای دیدنی ${currentCategoryObj.name} اصفهان | از اصفهان`
            : 'کاشف جاذبه‌ها و مکان‌های اصفهان | از اصفهان'
        }
        description="جستجو و فیلتر کامل بناهای تاریخی، کافه‌ها، رستوران‌ها، طبیعت و لوکیشن‌های عکاسی اصفهان."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="space-y-3 border-b border-zinc-200 pb-6">
          <div className="flex items-center gap-2 text-teal-800 text-xs font-mono font-semibold tracking-widest uppercase">
            <Compass className="w-4 h-4" />
            <span>کاشف آنلاین</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight">
            کشف تمام مکان‌های اصفهان
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base max-w-2xl">
            دسته‌بندی‌ها را فیلتر کنید یا عبارت مورد نظر خود را برای یافتن پاتوق‌ها و دیدنی‌های نصف جهان جستجو نمایید.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-zinc-200/80 shadow-2xs space-y-4">
          
          {/* Top Row: Search Input & View Toggle */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search Field */}
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => updateFilters(selectedCategory, e.target.value)}
                placeholder="جستجوی نام مکان، خیابان یا برچسب..."
                className="w-full h-11 pr-11 pl-10 rounded-2xl bg-zinc-50 border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700/50"
              />
              <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              {searchQuery && (
                <button
                  onClick={() => updateFilters(selectedCategory, '')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Right Controls: Sort & Layout Toggle */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              {/* Sort Select */}
              <div className="flex items-center gap-2 text-xs text-zinc-600">
                <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-400" />
                <span>مرتب‌سازی:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-1.5 text-xs font-semibold focus:outline-none text-zinc-800"
                >
                  <option value="popular">محبوب‌ترین‌ها</option>
                  <option value="name-asc">نام (الف تا ی)</option>
                  <option value="category">دسته‌بندی</option>
                </select>
              </div>

              {/* View Mode Buttons */}
              <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-xl border border-zinc-200">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-white text-teal-800 shadow-2xs' : 'text-zinc-500 hover:text-zinc-800'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-white text-teal-800 shadow-2xs' : 'text-zinc-500 hover:text-zinc-800'
                  }`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 scrollbar-none">
            <button
              onClick={() => updateFilters('all', searchQuery)}
              className={`px-4 py-2 rounded-full text-xs font-semibold shrink-0 transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
              }`}
            >
              همه مکان‌ها ({toPersianDigits(PLACES.length)})
            </button>

            {CATEGORIES.map((cat) => {
              const count = PLACES.filter(p => p.category === cat.id).length;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => updateFilters(cat.id, searchQuery)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold shrink-0 transition-colors flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-teal-700 text-white shadow-xs'
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className="text-[10px] opacity-75 font-mono">({toPersianDigits(count)})</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter & Active Filter Badge */}
        <div className="flex items-center justify-between text-xs text-zinc-500">
          <span>
            نمایش <strong className="text-zinc-900 font-bold">{toPersianDigits(filteredAndSortedPlaces.length)}</strong> مکان
          </span>

          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => updateFilters('all', '')}
              className="text-teal-700 font-semibold hover:underline flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              پاک کردن فیلترها
            </button>
          )}
        </div>

        {/* Places Grid/List */}
        {filteredAndSortedPlaces.length > 0 ? (
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'
                : 'space-y-4'
            }
          >
            {filteredAndSortedPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} viewMode={viewMode} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-3xl p-12 text-center border border-zinc-200 shadow-2xs space-y-4 max-w-lg mx-auto my-12">
            <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center mx-auto">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900">هیچ مکانی یافت نشد!</h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              متأسفانه مکانی متناسب با «{searchQuery}» پیدا نکردیم. می‌توانید عبارت دیگری را جستجو کنید یا فیلتر دسته‌بندی را تغییر دهید.
            </p>
            <button
              onClick={() => updateFilters('all', '')}
              className="px-6 py-2.5 rounded-full bg-zinc-900 text-white text-xs font-semibold hover:bg-teal-800 transition-colors"
            >
              نمایش تمام مکان‌ها
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
