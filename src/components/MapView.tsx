import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Place, CategoryId } from '../types';
import { getCategoryById } from '../utils/helpers';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import { ArrowUpLeft, ExternalLink } from 'lucide-react';

interface MapViewProps {
  places: Place[];
  center?: [number, number];
  zoom?: number;
  height?: string;
  selectedCategory?: CategoryId | 'all';
  showCategoryFilter?: boolean;
}

// Custom Leaflet DivIcon generator
const createCustomMarkerIcon = (categoryColor: string) => {
  return L.divIcon({
    className: 'custom-map-pin',
    html: `
      <div style="
        background-color: ${categoryColor};
        width: 32px;
        height: 32px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid white;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      ">
        <div style="
          width: 10px;
          height: 10px;
          background-color: white;
          border-radius: 50%;
        "></div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

const categoryColors: Record<CategoryId, string> = {
  historical: '#d97706',
  cafes: '#0d9488',
  restaurants: '#be123c',
  nature: '#047857',
  cultural: '#6d28d9',
  photography: '#0284c7',
};

export const MapView: React.FC<MapViewProps> = ({
  places,
  center = [32.6500, 51.6670], // Isfahan City Center
  zoom = 13,
  height = '500px',
  selectedCategory = 'all',
  showCategoryFilter = false,
}) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<CategoryId | 'all'>(selectedCategory);

  const filteredPlaces = activeCategoryFilter === 'all'
    ? places
    : places.filter(p => p.category === activeCategoryFilter);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-zinc-200/80 shadow-md bg-zinc-100" style={{ height }}>
      
      {/* Optional Top Overlay Filter */}
      {showCategoryFilter && (
        <div className="absolute top-4 right-4 z-[400] bg-white/90 backdrop-blur-md p-2 rounded-2xl shadow-lg border border-zinc-200 flex flex-wrap gap-1.5 max-w-[90%]">
          <button
            onClick={() => setActiveCategoryFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
              activeCategoryFilter === 'all'
                ? 'bg-zinc-900 text-white'
                : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
            }`}
          >
            همه ({places.length})
          </button>
          {(['historical', 'cafes', 'restaurants', 'nature', 'cultural', 'photography'] as CategoryId[]).map((catId) => {
            const cat = getCategoryById(catId);
            const isSelected = activeCategoryFilter === catId;
            return (
              <button
                key={catId}
                onClick={() => setActiveCategoryFilter(catId)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                  isSelected
                    ? 'bg-teal-700 text-white'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      )}

      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        className="w-full h-full z-10"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {filteredPlaces.map((place) => {
          const cat = getCategoryById(place.category);
          const iconColor = categoryColors[place.category] || '#0f766e';
          const customIcon = createCustomMarkerIcon(iconColor);

          return (
            <Marker
              key={place.id}
              position={[place.latitude, place.longitude]}
              icon={customIcon}
            >
              <Popup className="custom-leaflet-popup">
                <div className="w-64 p-1 font-sans text-right" dir="rtl">
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-2 bg-zinc-100">
                    <img
                      src={place.images[0]}
                      alt={place.name}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-black/60 text-white text-[10px] backdrop-blur-xs font-semibold">
                      {cat.name}
                    </span>
                  </div>

                  <h4 className="font-bold text-zinc-900 text-base leading-tight">
                    {place.name}
                  </h4>
                  <p className="text-[11px] font-mono text-zinc-400 mb-1">
                    {place.nameEn}
                  </p>

                  <p className="text-xs text-zinc-600 line-clamp-2 mb-3 leading-relaxed">
                    {place.shortDescription}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-zinc-100 text-xs">
                    <Link
                      to={`/places/${place.slug}`}
                      className="inline-flex items-center gap-1 text-teal-800 font-bold hover:underline"
                    >
                      مشاهده مکان
                      <ArrowUpLeft className="w-3.5 h-3.5" />
                    </Link>

                    {place.googleMapsUrl && (
                      <a
                        href={place.googleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-400 hover:text-zinc-700 flex items-center gap-0.5 text-[11px]"
                      >
                        گوگل‌مپ
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};
