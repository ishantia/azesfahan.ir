import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium py-3">
      <Link to="/" className="hover:text-teal-800 transition-colors flex items-center gap-1">
        <Home className="w-3.5 h-3.5" />
        <span>خانه</span>
      </Link>

      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronLeft className="w-3.5 h-3.5 text-zinc-400" />
          {item.path ? (
            <Link to={item.path} className="hover:text-teal-800 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-zinc-900 font-semibold truncate max-w-[200px]">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
