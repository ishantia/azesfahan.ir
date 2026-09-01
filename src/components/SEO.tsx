import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'از اصفهان | راهنمای اختصاصی کشف اصفهان | AZ ESFAHAN',
  description = 'راهنمای مدرن و اختصاصی کشف جاهای دیدنی اصفهان؛ از بناهای تاریخی و کافه‌ها تا جاذبه‌های عکاسی و طبیعت.',
}) => {
  useEffect(() => {
    document.title = title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};
