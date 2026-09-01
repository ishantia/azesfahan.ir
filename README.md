# از اصفهان | AZ ESFAHAN

> **اصفهان را جور دیگری ببین**  
> *Discover Isfahan beyond the obvious.*

**از اصفهان (AZ ESFAHAN)** یک راهنمای دیجیتال و مجله تصویری هوشمند برای کشف جاهای دیدنی، بناهای تاریخی، کافه‌های دنج، پاتوق‌های عکاسی و طبیعت سرسبز اصفهان است.

این پروژه یک **سامانه کاملاً استاتیک (Frontend-Only Static Website)** بوده و نیازی به سرور، پایگاه‌داده، پنل مدیریت یا لایه‌های احراز هویت ندارد. کلیه اطلاعات به شکل تایپ‌شده در فایل‌های دیتای محلی قرار داشته و بر روی **GitHub Pages** قابل انتشار است.

---

## 🚀 تکنولوژی‌های استفاده‌شده (Tech Stack)

* **فریم‌ورک اصلی:** React 18 + TypeScript
* **ابزار ساخت (Bundler):** Vite 6
* **استایل‌دهی و طراحی UI:** Tailwind CSS v3
* **مسیریابی (Routing):** React Router DOM v6 (HashRouter برای سازگاری کامل با GitHub Pages)
* **آیکون‌ها:** Lucide React
* **نقشه تعاملی:** Leaflet + React Leaflet + OpenStreetMap

---

## 📁 ساختار پروژه

```text
D:\My Projects\Github Projects\Js\azesfahan.ir\
├── .github/
│   └── workflows/
│       └── deploy.yml          # گام‌های انتشار خودکار GitHub Actions
├── public/
│   ├── favicon.svg             # آیکون رسمی سایت
│   ├── CNAME                   # دامنه اختصاصی azesfahan.ir
│   └── 404.html                # هدایت‌گر تک‌صفحه‌ای GitHub Pages
├── src/
│   ├── components/             # کامپوننت‌های قابلی استفاده (Navbar, Footer, Cards, Map, Search)
│   ├── data/
│   │   ├── categories.ts       # دسته‌بندی‌های ۶ گانه (تاریخی، کافه‌ها، رستوران‌ها...)
│   │   ├── places.ts           # اطلاعات کامل و جامع جاذبه‌های اصفهان
│   │   └── stories.ts          # مقالات و روایات مجله اصفهان‌شناسی
│   ├── pages/                  # صفحات اصلی (Home, Explore, PlaceDetails, MapPage, About, NotFound)
│   ├── types/                  # تایپ‌های TypeScript
│   ├── utils/                  # توابع کمکی (تبدیل اعداد به فارسی، محاسبه فاصله...)
│   ├── App.tsx                 # پیکربندی روت‌ها
│   ├── main.tsx                # رندر نهایی React DOM
│   └── index.css               # استایل‌های Tailwind و فونت وزیرمتن
├── index.html                  # متا تگ‌های فارسی و SEO
├── vite.config.ts              # تنظمیات Vite و Base Path
└── README.md
```

---

## 💻 راهنمای اجرای پروژه در محیط توسعه (Local Development)

### پیش‌نیازها
* Node.js نسخه 18 یا بالاتر
* مدیریت پکیج npm

### گام‌های اجرا:

۱. دریافت وابستگی‌ها:
```bash
npm install
```

۲. اجرای سرور توسعه محلی:
```bash
npm run dev
```
سپس مرورگر را باز کرده و به آدرس `http://localhost:5173` بروید.

---

## 📦 ساخت نسخه نهایی (Production Build)

برای ساخت پروژه و تولید خروجی استاتیک در پوشه `dist`:

```bash
npm run build
```

پس از اجرای این دستور، پوشه `dist` آماده آپلود و انتشار بر روی تمامی هاست‌های استاتیک یا GitHub Pages است.

---

## ➕ راهنمای افزودن مکان جدید (How to Add a New Place)

ساختار داده‌ها کاملاً ماژولار است. برای افزودن یک مکان دیدنی جدید، فقط کافیست یک شیء جدید به آرایه `PLACES` در فایل `src/data/places.ts` اضافه کنید:

```typescript
{
  id: 'my-new-place',
  slug: 'my-new-place',
  name: 'نام مکان به فارسی',
  nameEn: 'Place Name in English',
  category: 'cafes', // historical | cafes | restaurants | nature | cultural | photography
  shortDescription: 'توضیح کوتاه ۱ خطی برای کارت‌ها',
  description: 'توضیحات کامل و جامع درباره تاریخچه و ویژگی‌ها',
  latitude: 32.6500,
  longitude: 51.6670,
  address: 'آدرس کامل مکان به فارسی',
  addressEn: 'Full address in English',
  images: [
    'https://images.unsplash.com/photo-...',
  ],
  tags: ['صفویه', 'کافه دنج', 'عکاسی'],
  featured: false,
  openingHours: '۱۰:۰۰ الی ۲۳:۰۰',
  bestTime: 'عصرها',
  ticketPrice: 'رایگان',
  googleMapsUrl: 'https://maps.google.com/?q=32.6500,51.6670'
}
```

---

## 🌐 راهنمای انتشار بر روی GitHub Pages (Deployment)

پروژه به همراه فایل GitHub Actions Workflow (`.github/workflows/deploy.yml`) ارائه‌شده است.

۱. ریپازیتوری جدیدی در گیتهاب ایجاد کنید.
۲. کدها را به شاخه `main` پوش کنید.
۳. در تنظیمات مخزن (Settings > Pages)، منبع انتشار (Source) را روی **GitHub Actions** قرار دهید.
۴. فرآیند ساخت و انتشار خودکار آغاز شده و سایت بر روی دامنه شما قرار خواهد گرفت.

---

## 🔗 اتصال دامنه اختصاصی azesfahan.ir

۱. فایل `public/CNAME` در پروژه قرار دارد و شامل عبارت `azesfahan.ir` است.
۲. در پنل مدیریت دامنه خود (DNS Provider)، رکوردهای زیر را تنظیم کنید:

* **رکوردهای A برای دامنه اصلی:**
  * `185.199.108.153`
  * `185.199.109.153`
  * `185.199.110.153`
  * `185.199.111.153`
* **رکورد CNAME برای www:**
  * `www` -> `<your-github-username>.github.io`

۳. در تنظیمات GitHub Pages، گزینه **Enforce HTTPS** را فعال نمایید.
