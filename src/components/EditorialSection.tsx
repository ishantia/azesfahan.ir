import React, { useState } from 'react';
import { STORIES } from '../data/stories';
import { BookOpen, Clock, ArrowUpLeft, X } from 'lucide-react';
import { EditorialStory } from '../types';

export const EditorialSection: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<EditorialStory | null>(null);

  return (
    <section className="py-20 bg-[#faf9f5] border-t border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-teal-800 text-xs font-mono tracking-widest uppercase font-semibold">
              <BookOpen className="w-4 h-4" />
              <span>مجله اصفهان‌شناسی</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
              کشف اصفهان در روایات
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base max-w-xl leading-relaxed">
              قصه‌های ناگفته از معماری فیروزه‌ای، آواهای زیر تاق‌های خواجو و نبض حیات شهری اصفهان.
            </p>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STORIES.map((story) => (
            <article
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-zinc-200/80 shadow-2xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Cover Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                  <img
                    src={story.coverImage}
                    alt={story.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity" />
                  
                  <div className="absolute top-4 right-4 flex gap-1.5 flex-wrap">
                    {story.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-zinc-900 text-[10px] font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{story.readTime}</span>
                    <span>•</span>
                    <span>{story.author}</span>
                  </div>

                  <h3 className="text-xl font-black text-zinc-900 group-hover:text-teal-800 transition-colors leading-snug">
                    {story.title}
                  </h3>

                  <p className="text-xs font-medium text-teal-800/90 leading-relaxed">
                    {story.subtitle}
                  </p>

                  <p className="text-xs text-zinc-600 line-clamp-3 leading-relaxed">
                    {story.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs font-semibold text-teal-800">
                <span>خواندن داستان</span>
                <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white transition-all">
                  <ArrowUpLeft className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Story Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-y-auto border border-zinc-200 text-zinc-900">
            <button
              onClick={() => setSelectedStory(null)}
              className="sticky top-4 right-4 float-left z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-md transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 sm:h-80 w-full overflow-hidden">
              <img
                src={selectedStory.coverImage}
                alt={selectedStory.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              <div className="absolute bottom-6 right-6 left-6 text-white space-y-2">
                <div className="flex items-center gap-2 text-xs text-teal-300 font-mono">
                  <span>{selectedStory.author}</span>
                  <span>•</span>
                  <span>{selectedStory.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black">{selectedStory.title}</h2>
              </div>
            </div>

            <div className="p-6 sm:p-10 space-y-6">
              <p className="text-base font-semibold text-teal-900 leading-relaxed border-r-4 border-teal-700 pr-4 bg-teal-50/50 py-2 rounded-l-xl">
                {selectedStory.subtitle}
              </p>

              <div className="text-sm sm:text-base text-zinc-700 leading-loose whitespace-pre-line space-y-4">
                {selectedStory.content}
              </div>

              <div className="pt-6 border-t border-zinc-200 flex flex-wrap gap-2">
                {selectedStory.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
