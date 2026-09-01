import { Category } from '../types';

import naqshJahan1 from '../assets/images/places/naqsh-e-jahan-1.webp';
import hajMirza1 from '../assets/images/places/haj-mirza-1.webp';
import shahrzad1 from '../assets/images/places/shahrzad-1.webp';
import soffeh1 from '../assets/images/places/soffeh-1.webp';
import vank1 from '../assets/images/places/vank-cathedral-1.webp';
import khaju1 from '../assets/images/places/khaju-bridge-1.webp';

export const CATEGORIES: Category[] = [
  {
    id: 'historical',
    name: 'تاریخی',
    nameEn: 'Historical Sites',
    iconName: 'Landmark',
    description: 'شاهکارهای معماری صفوی، مساجد با عظمت و کاخ‌های تاریخی اصفهان',
    image: naqshJahan1,
    color: 'from-amber-600/90 to-amber-900/90',
  },
  {
    id: 'cafes',
    name: 'کافه‌ها',
    nameEn: 'Cafes & Tea Houses',
    iconName: 'Coffee',
    description: 'شربت‌خانه‌های سنتی و کافه‌های مدرن در دل کوچه‌های تاریخی',
    image: hajMirza1,
    color: 'from-teal-600/90 to-teal-950/90',
  },
  {
    id: 'restaurants',
    name: 'رستوران‌ها',
    nameEn: 'Restaurants',
    iconName: 'Utensils',
    description: 'تجربه طعم اصیل بریانی، خورشت ماست و غذای اصیل ایرانی',
    image: shahrzad1,
    color: 'from-rose-700/90 to-amber-950/90',
  },
  {
    id: 'nature',
    name: 'طبیعت و پارک‌ها',
    nameEn: 'Parks & Nature',
    iconName: 'Trees',
    description: 'حاشیه زاینده‌رود، پارک کوهستانی صفه و باغ‌های سرسبز اصفهان',
    image: soffeh1,
    color: 'from-emerald-700/90 to-emerald-950/90',
  },
  {
    id: 'cultural',
    name: 'فرهنگی و هنری',
    nameEn: 'Culture & Arts',
    iconName: 'Palette',
    description: 'موزه‌ها، نگارخانه‌ها و کارگاه‌های صنایع دستی استادکاران',
    image: vank1,
    color: 'from-violet-700/90 to-indigo-950/90',
  },
  {
    id: 'photography',
    name: 'لوکیشن‌های عکاسی',
    nameEn: 'Photography Spots',
    iconName: 'Camera',
    description: 'بهترین زاویه‌ها برای عکاسی معماری، نوری و خیابانی در اصفهان',
    image: khaju1,
    color: 'from-sky-700/90 to-slate-900/90',
  },
];
