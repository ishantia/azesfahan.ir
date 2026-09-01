import { CATEGORIES } from '../data/categories';
import { PLACES } from '../data/places';
import { Place, CategoryId } from '../types';
import { Landmark, Coffee, Utensils, Trees, Palette, Camera, MapPin } from 'lucide-react';

export function getCategoryById(id: CategoryId) {
  return CATEGORIES.find(c => c.id === id) || CATEGORIES[0];
}

export function getCategoryIcon(iconName: string) {
  switch (iconName) {
    case 'Landmark': return Landmark;
    case 'Coffee': return Coffee;
    case 'Utensils': return Utensils;
    case 'Trees': return Trees;
    case 'Palette': return Palette;
    case 'Camera': return Camera;
    default: return MapPin;
  }
}

// Convert English numbers to Persian digits for display
export function toPersianDigits(num: number | string): string {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num.toString().replace(/\d/g, (digit) => persianDigits[parseInt(digit, 10)]);
}

// Calculate distance between two coordinates in km (Haversine formula)
export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

export function getNearbyPlaces(currentPlace: Place, limit = 3): Place[] {
  return PLACES
    .filter(p => p.id !== currentPlace.id)
    .map(p => ({
      place: p,
      distance: calculateDistance(currentPlace.latitude, currentPlace.longitude, p.latitude, p.longitude)
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit)
    .map(item => item.place);
}
