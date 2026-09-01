import { Place } from '../types';

// Local imported optimized WebP assets
import naqshJahan1 from '../assets/images/places/naqsh-e-jahan-1.webp';
import naqshJahan2 from '../assets/images/places/naqsh-e-jahan-2.webp';
import naqshJahan3 from '../assets/images/places/naqsh-e-jahan-3.webp';

import sioSePol1 from '../assets/images/places/si-o-se-pol-1.webp';
import sioSePol2 from '../assets/images/places/si-o-se-pol-2.webp';

import khaju1 from '../assets/images/places/khaju-bridge-1.webp';
import khaju2 from '../assets/images/places/khaju-bridge-2.webp';

import sheikhLotfollah1 from '../assets/images/places/sheikh-lotfollah-1.webp';
import sheikhLotfollah2 from '../assets/images/places/sheikh-lotfollah-2.webp';

import chehelSotoun1 from '../assets/images/places/chehel-sotoun-1.webp';
import chehelSotoun2 from '../assets/images/places/chehel-sotoun-2.webp';

import aliQapu1 from '../assets/images/places/ali-qapu-1.webp';
import aliQapu2 from '../assets/images/places/ali-qapu-2.webp';

import vank1 from '../assets/images/places/vank-cathedral-1.webp';
import vank2 from '../assets/images/places/vank-cathedral-2.webp';

import jolfa1 from '../assets/images/places/jolfa-quarter-1.webp';
import jolfa2 from '../assets/images/places/jolfa-quarter-2.webp';

import chaharbagh1 from '../assets/images/places/chaharbagh-1.webp';
import chaharbagh2 from '../assets/images/places/chaharbagh-2.webp';

import hajMirza1 from '../assets/images/places/haj-mirza-1.webp';
import hajMirza2 from '../assets/images/places/haj-mirza-2.webp';

import shahrzad1 from '../assets/images/places/shahrzad-1.webp';
import shahrzad2 from '../assets/images/places/shahrzad-2.webp';

import soffeh1 from '../assets/images/places/soffeh-1.webp';
import soffeh2 from '../assets/images/places/soffeh-2.webp';

import monarJonban1 from '../assets/images/places/monar-jonban-1.webp';
import monarJonban2 from '../assets/images/places/monar-jonban-2.webp';

import ghasrMonshi1 from '../assets/images/places/ghasr-monshi-1.webp';
import ghasrMonshi2 from '../assets/images/places/ghasr-monshi-2.webp';

import birdsGarden1 from '../assets/images/places/isfahan-birds-1.webp';
import birdsGarden2 from '../assets/images/places/isfahan-birds-2.webp';

export const PLACES: Place[] = [
  {
    id: 'naqsh-e-jahan-square',
    slug: 'naqsh-e-jahan-square',
    name: 'میدان نقش جهان',
    nameEn: 'Naqsh-e Jahan Square',
    category: 'historical',
    shortDescription: 'یکی از بزرگ‌ترین و زیباترین میدان‌های تاریخی جهان و نگین معماری صفوی.',
    description: 'میدان نقش جهان (میدان امام) به طول ۵۶۰ متر و عرض ۱۶۰ متر، دومین میدان بزرگ تاریخی جهان است. این مجموعه بی‌نظیر که در دوران شاه عباس اول صفوی بنا شد، شامل کاخ عالی‌قاپو، مسجد شیخ لطف‌الله، مسجد امام و بازار قیصریه است. میدان نقش جهان در فهرست میراث جهانی یونسکو ثبت شده و شکوه کالبدی و تقارن معماری ایرانی-اسلامی را به نمایش می‌گذارد.',
    latitude: 32.6575,
    longitude: 51.6775,
    address: 'اصفهان، مرکز شهر، خیابان سپه / استانداری',
    addressEn: 'Sepah St / Ostandari St, City Center, Isfahan',
    images: [naqshJahan1, naqshJahan2, naqshJahan3],
    tags: ['میراث یونسکو', 'صفویه', 'معماری', 'بازار', 'کالسکه‌سواری', 'عکاسی'],
    featured: true,
    openingHours: '۲۴ ساعته (بناهای داخلی: ۸:۰۰ الی ۱۹:۰۰)',
    bestTime: 'غروب آفتاب و شب (هنگام روشن شدن نورپردازی)',
    historicalEra: 'دوره صفویه (شاه عباس اول)',
    ticketPrice: 'ورود به میدان رایگان / بناهای داخلی دارای بلیط',
    googleMapsUrl: 'https://maps.google.com/?q=32.6575,51.6775'
  },
  {
    id: 'si-o-se-pol',
    slug: 'si-o-se-pol',
    name: 'سی‌وسه‌پل',
    nameEn: 'Si-o-se-pol Bridge',
    category: 'historical',
    shortDescription: 'پل تاریخی ۳۳ چشمه بر روی زاینده‌رود و نماد جاودانه شهر اصفهان.',
    description: 'سی‌وسه‌پل یا پل الله‌وردی‌خان با ۲۹۵ متر طول، شاهکار معماری و مهندسی عصر صفوی است. این پل که زیر نظر الله‌وردی‌خان اوندیلادزه ساخته شد، خیابان چهارباغ عباسی را به چهارباغ بالا و محله جلفا متصل می‌سازد. راه رفتن روی دهانه‌ها و شنیدن صدای زاینده‌رود یا آوازخوانی شبانه اصفهانی‌ها زیر تاق‌های آن، از به‌یادماندنی‌ترین تجربه‌هاست.',
    latitude: 32.6447,
    longitude: 51.6675,
    address: 'اصفهان، میدان انقلاب، ابتدای خیابان چهارباغ بالا',
    addressEn: 'Enghelab Sq, Chahar Bagh Bala St, Isfahan',
    images: [sioSePol1, sioSePol2],
    tags: ['زاینده رود', 'پل تاریخی', 'پیاده‌روی شبانه', 'صفویه', 'نماد اصفهان'],
    featured: true,
    openingHours: '۲۴ ساعته',
    bestTime: 'شب‌ها با نورپردازی ویژه و ابتدای بهار',
    historicalEra: 'دوره صفویه (۱۰۱۰ هجری قمری)',
    ticketPrice: 'رایگان',
    googleMapsUrl: 'https://maps.google.com/?q=32.6447,51.6675'
  },
  {
    id: 'khaju-bridge',
    slug: 'khaju-bridge',
    name: 'پل خواجو',
    nameEn: 'Khaju Bridge',
    category: 'photography',
    shortDescription: 'شاعرانه‌ترین پل اصفهان با کاشی‌کاری‌های خیره‌کننده و شاه‌نشین مرکزی.',
    description: 'پل خواجو ساخته شاه عباس دوم صفوی، بی‌گمان یکی از زیباترین پل‌های جهان از نظر تقارن و تزیینات کاشی‌کاری است. این پل علاوه بر نقش مواصلاتی، کاربری سد و شاه‌نشین برای اقامت خانواده سلطنتی داشته است. طنین آواز محلی و سنتی اصفهانی‌ها در دهانه‌های زیرین پل خواجو در شب، جادویی‌ترین آوای این شهر است.',
    latitude: 32.6373,
    longitude: 51.6834,
    address: 'اصفهان، خیابان خواجو، تقاطع با زاینده‌رود',
    addressEn: 'Khaju St, Zayandeh Rud, Isfahan',
    images: [khaju1, khaju2],
    tags: ['عکاسی شب', 'آوازخوانی', 'زاینده رود', 'کاشی‌کاری', 'صفویه'],
    featured: true,
    openingHours: '۲۴ ساعته',
    bestTime: 'شب‌ها از ساعت ۲۰ الی ۲۴',
    historicalEra: 'دوره صفویه (۱۰۶۰ هجری قمری)',
    ticketPrice: 'رایگان',
    googleMapsUrl: 'https://maps.google.com/?q=32.6373,51.6834'
  },
  {
    id: 'sheikh-lotfollah-mosque',
    slug: 'sheikh-lotfollah-mosque',
    name: 'مسجد شیخ لطف‌الله',
    nameEn: 'Sheikh Lotfollah Mosque',
    category: 'historical',
    shortDescription: 'مسجد بدون مناره و صحن، با گنبد کرم‌رنگ و دم طاووس نورانی بی‌نظیر.',
    description: 'مسجد شیخ لطف‌الله یکی از والاترین نمونه‌های کاشی‌کاری و معماری صفوی در ضلع شرقی میدان نقش جهان است. این مسجد اختصاصی برای خانواده سلطنتی ساخته شده بود و مناره و صحن ندارد. طراحی گنبد آن به گونه‌ای است که نور خورشید در ساعات مختلف روز، نقش طاووس پرپشت را روی سقف آن پدیدار می‌کند.',
    latitude: 32.6572,
    longitude: 51.6788,
    address: 'اصفهان، ضلع شرقی میدان نقش جهان',
    addressEn: 'East Side of Naqsh-e Jahan Sq, Isfahan',
    images: [sheikhLotfollah1, sheikhLotfollah2],
    tags: ['کاشی معرق', 'شاهکار معماری', 'گنبد طاووسی', 'صفویه', 'معماری اسلامی'],
    featured: true,
    openingHours: '۹:۰۰ الی ۱۲:۳۰ و ۱۴:۰۰ الی ۱۷:۰۰',
    bestTime: 'ظهر (برای مشاهده انوار طلایی گنبد)',
    historicalEra: 'دوره صفویه (۱۰۱۱ - ۱۰۲۸ هجری قمری)',
    ticketPrice: '۵۰,۰۰۰ تومان (گردشگر داخلی)',
    googleMapsUrl: 'https://maps.google.com/?q=32.6572,51.6788'
  },
  {
    id: 'chehel-sotoun-palace',
    slug: 'chehel-sotoun-palace',
    name: 'کاخ چهلستون',
    nameEn: 'Chehel Sotoun Palace',
    category: 'historical',
    shortDescription: 'باغ ایرانی سرسبز، استخر انعکاس ۲۰ ستون و دیوارنگاره‌های باشکوه صفوی.',
    description: 'کاخ چهلستون در میان باغی بزرگ قرار دارد. کاخ اصلی دارای ۲۰ ستون از جنس چوب چنار است که انعکاس آن‌ها در استخر روبه‌رو، تصویر ۲۰ ستون دیگر را می‌سازد و به این نام شهرت یافته است. تالار آینه و دیوارنگاره‌های باشکوه داخل کاخ، پذیرایی شاهان صفوی از فرستادگان خارجی را روایت می‌کنند.',
    latitude: 32.6572,
    longitude: 51.6719,
    address: 'اصفهان، خیابان استانداری، ضلع غربی میدان نقش جهان',
    addressEn: 'Ostandari St, West of Naqsh-e Jahan Sq, Isfahan',
    images: [chehelSotoun1, chehelSotoun2],
    tags: ['باغ ایرانی', 'دیوارنگاره', 'تالار آینه', 'میراث یونسکو', 'صفویه'],
    featured: true,
    openingHours: '۹:۰۰ الی ۱۷:۳۰',
    bestTime: 'صبح زود یا عصر روشن',
    historicalEra: 'دوره صفویه (شاه عباس دوم)',
    ticketPrice: '۵۰,۰۰۰ تومان (گردشگر داخلی)',
    googleMapsUrl: 'https://maps.google.com/?q=32.6572,51.6719'
  },
  {
    id: 'ali-qapu-palace',
    slug: 'ali-qapu-palace',
    name: 'کاخ عالی‌قاپو',
    nameEn: 'Ali Qapu Palace',
    category: 'historical',
    shortDescription: 'کاخ شش طبقه صفوی با ایوان ستون‌دار مشرف به میدان و تالار موسیقی آکوستیک.',
    description: 'عالی‌قاپو در ضلع غربی میدان نقش جهان، مقر دولت صفوی بوده است. برجسته‌ترین بخش این کاخ، تالار موسیقی در طبقه ششم است که با گچ‌بری‌های توخالی صوتی (تنگ‌بری) آکوستیکی طبیعی و بی‌نظیر برای طنین‌انداز شدن سازها ایجاد می‌کرد. ایوان کاخ بهترین چشم‌انداز سراسرنمای میدان نقش جهان را ارائه می‌دهد.',
    latitude: 32.6570,
    longitude: 51.6765,
    address: 'اصفهان، ضلع غربی میدان نقش جهان',
    addressEn: 'West Side of Naqsh-e Jahan Sq, Isfahan',
    images: [aliQapu1, aliQapu2],
    tags: ['عالی قاپو', 'تالار موسیقی', 'تنگ بری', 'چشم انداز پانوراما', 'صفویه'],
    featured: false,
    openingHours: '۹:۰۰ الی ۱۷:۰۰',
    bestTime: 'عصرها (برای دید به کل میدان نقش جهان)',
    historicalEra: 'دوره صفویه (شاه عباس اول تا شاه عباس دوم)',
    ticketPrice: '۵۰,۰۰۰ تومان',
    googleMapsUrl: 'https://maps.google.com/?q=32.6570,51.6765'
  },
  {
    id: 'vank-cathedral',
    slug: 'vank-cathedral',
    name: 'کلیسای وانک',
    nameEn: 'Vank Cathedral (Amenapergich)',
    category: 'cultural',
    shortDescription: 'مرکز ارامنه اصفهان در محله جلفا با نقاشی‌های دیواری باشکوه رنسانس و موزه ارزشمند.',
    description: 'کلیسای جامع وانک (آمناپرگیچ) شاهکار ترکیب معماری ایرانی صفوی و گنبدسازی با هنر نقاشی دیواری مسیحی و رنسانس اروپایی است. دیوارها و سقف داخلی کلیسا کاملاً با نقاشی‌های روغنی از انجیل آراسته شده‌اند. موزه کلیسا حاوی اولین ماشین چاپ ایران و کوچک‌ترین کتاب جهان است.',
    latitude: 32.6358,
    longitude: 51.6560,
    address: 'اصفهان، محله جلفا، خیابان نظر شرقی، کوچه کلیسا',
    addressEn: 'Nazar Sharqi St, Jolfa Quarter, Isfahan',
    images: [vank1, vank2],
    tags: ['ارامنه اصفهان', 'نقاشی دیواری', 'جلفا', 'موزه', 'تاریخ چاپ'],
    featured: true,
    openingHours: '۸:۳۰ الی ۱۸:۳۰',
    bestTime: 'صبح تا ظهر',
    historicalEra: 'دوره صفویه (شاه عباس دوم - ۱۶۶۴ میلادی)',
    ticketPrice: '۶۰,۰۰۰ تومان',
    googleMapsUrl: 'https://maps.google.com/?q=32.6358,51.6560'
  },
  {
    id: 'jolfa-quarter',
    slug: 'jolfa-quarter',
    name: 'محله تاریخی جلفا',
    nameEn: 'Jolfa Historic Quarter',
    category: 'photography',
    shortDescription: 'کوچه‌پس‌کوچه‌های سنگ‌فرش، کافه‌های دنج، سنگ‌تراشی‌های ارمنی و معماری صمیمی.',
    description: 'محله جلفا در جنوب زاینده‌رود، محله تاریخی ارامنه اصفهان است که با کوچه‌های سنگ‌فرش، کافه‌های مدرن و سنتی، میدانگاه‌های پرانرژی و کلیساهای کهن شناخته می‌شود. پیاده‌روی در میدان جلفا و نوشیدن قهوه در کافه‌های آن، حال و هوای متفاوتی از اصفهان را ارائه می‌دهد.',
    latitude: 32.6360,
    longitude: 51.6555,
    address: 'اصفهان، جنوب زاینده‌رود، خیابان حکیم نظامی، محله جلفا',
    addressEn: 'Hakim Nezami St, Jolfa Quarter, Isfahan',
    images: [jolfa1, jolfa2],
    tags: ['سنگ‌فرش', 'کافه گردی', 'پیاده‌روی', 'ارامنه', 'عکاسی شهری'],
    featured: true,
    openingHours: '۲۴ ساعته (کافه‌ها: ۱۰:۰۰ الی ۲۳:۳۰)',
    bestTime: 'عصر و شب',
    historicalEra: 'دوره صفویه (شاه عباس اول)',
    ticketPrice: 'رایگان',
    googleMapsUrl: 'https://maps.google.com/?q=32.6360,51.6555'
  },
  {
    id: 'chaharbagh-boulevard',
    slug: 'chaharbagh-boulevard',
    name: 'گذر پیاده‌راه چهارباغ عباسی',
    nameEn: 'Chahar Bagh Abbasi Boulevard',
    category: 'nature',
    shortDescription: 'محور سبز پیاده‌روی اصفهان، سایه چنارهای دیرین و زندگی پرنشاط شهری.',
    description: 'چهارباغ عباسی قدیمی‌ترین و مشهورترین خیابان اصفهان است که در سال ۱۰۰۰ هجری قمری احداث شد. امروزه این مسیر کاملاً به پیاده‌راه تبدیل شده و با جوی‌های آب سنتی، درختان چنار کهنسال، مجسمه‌ها، نوازندگان خیابانی و کافه‌های فضای باز، حیات اجتماعی اصفهان را منعکس می‌کند.',
    latitude: 32.6500,
    longitude: 51.6670,
    address: 'اصفهان، حدفاصل میدان امام حسین (دروازه دولت) تا میدان انقلاب',
    addressEn: 'From Imam Hossein Sq to Enghelab Sq, Isfahan',
    images: [chaharbagh1, chaharbagh2],
    tags: ['پیاده‌راه', 'درختان چنار', 'زندگی شهری', 'کافه خیابانی', 'موسیقی خیابانی'],
    featured: false,
    openingHours: '۲۴ ساعته',
    bestTime: 'عصرها و پاییز (برگ‌ریزان چنارها)',
    historicalEra: 'دوره صفویه (شاه عباس اول)',
    ticketPrice: 'رایگان',
    googleMapsUrl: 'https://maps.google.com/?q=32.6500,51.6670'
  },
  {
    id: 'haj-mirza-tea-house',
    slug: 'haj-mirza-tea-house',
    name: 'قهوه‌خانه چاه حاج میرزا (سرای آزادگان)',
    nameEn: 'Haj Mirza Tea House (Chah Haj Mirza)',
    category: 'cafes',
    shortDescription: 'قدیمی‌ترین چای‌خانه اصفهان با موزه عجیب‌وغریب از عتیقه‌جات و ابزارهای تعزیه.',
    description: 'چاه حاج میرزا که به سرای آزادگان نیز معروف است، یکی از عجیب‌ترین و اصیل‌ترین قهوه‌خانه‌های ایران است. در و دیوار و سقف این چای‌خانه با هزاران عتیقه، قلیان‌های قدیمی، ابزار تعزیه، نقاشی‌های قهوه‌خانه‌ای و ظروف برنجی پوشیده شده است. دوغ و گوش‌فیل یا چای دارچین آن بسیار مشهور است.',
    latitude: 32.6582,
    longitude: 51.6795,
    address: 'اصفهان، بازار آهنگرها، کوچه چاه حاج میرزا (نزدیک میدان نقش جهان)',
    addressEn: 'Ahangarha Market, Haj Mirza Alley, Near Naqsh-e Jahan, Isfahan',
    images: [hajMirza1, hajMirza2],
    tags: ['عتیقه‌جات', 'دوغ و گوش‌فیل', 'چای‌خانه سنتی', 'موزه زنده', 'بازار اصفهان'],
    featured: true,
    openingHours: '۸:۰۰ الی ۲۱:۰۰',
    bestTime: 'ظهر یا عصر برای میان‌وعده اصیل',
    historicalEra: 'دوره صفویه',
    ticketPrice: 'ورود رایگان (هزینه سفارش)',
    googleMapsUrl: 'https://maps.google.com/?q=32.6582,51.6795'
  },
  {
    id: 'shahrzad-restaurant',
    slug: 'shahrzad-restaurant',
    name: 'رستوران سنتی شهرزاد',
    nameEn: 'Shahrzad Classic Restaurant',
    category: 'restaurants',
    shortDescription: 'موزه-رستوران اصیل با شیشه‌های رنگی قاجاری، نقاشی‌های دیواری و بریانی اصیل.',
    description: 'رستوران شهرزاد از سال ۱۳۴۶ شمسی یکی از معتبرترین و ماندگارترین غذاخوری‌های اصفهان است. معماری داخلی آن با گچ‌بری‌های ظریف، آینه‌کاری، شیشه‌های رنگی معرق و نقاشی‌های مینیاتوری سبک قاجاری، حس خوردن غذا در یک موزه تاریخی را القا می‌کند. خورش ماست، کباب کوبیده و چلو ماهیچه آن شهرت کشوری دارند.',
    latitude: 32.6508,
    longitude: 51.6685,
    address: 'اصفهان، خیابان عباس‌آباد، ابتدای خیابان چهارباغ عباسی',
    addressEn: 'Abbas Abad St, Near Chahar Bagh Abbasi, Isfahan',
    images: [shahrzad1, shahrzad2],
    tags: ['خورشت ماست', 'غذای اصیل ایرانی', 'معماری قاجار', 'بریانی', 'موزه غذا'],
    featured: true,
    openingHours: '۱۱:۳۰ الی ۲۳:۰۰',
    bestTime: 'برای ناهار (ساعت ۱۳:۰۰)',
    historicalEra: 'تاسیس ۱۳۴۶ شمسی',
    ticketPrice: 'هزینه سفارش غذا',
    googleMapsUrl: 'https://maps.google.com/?q=32.6508,51.6685'
  },
  {
    id: 'soffeh-mountain-park',
    slug: 'soffeh-mountain-park',
    name: 'پارک کوهستانی و بام اصفهان (صفه)',
    nameEn: 'Soffeh Mountain Park',
    category: 'nature',
    shortDescription: 'بام اصفهان با تله‌کابین، مسیر کوه‌پیمایی و دید سراسری به کل پهنه شهری اصفهان.',
    description: 'کوه صفه در جنوب اصفهان، یکی از محبوب‌ترین تفرجگاه‌های طبیعی و ورزشی شهروندان اصفهانی است. این مجموعه دارای مسیرهای کوهنوردی پاکوب، تله‌کابین، قلعه تاریخی شاه‌دژ، پارک وحش، مسیر سنگ‌نوردی و رستوران‌های بام با چشم‌انداز ۳۶۰ درجه از اصفهان در شب است.',
    latitude: 32.5925,
    longitude: 51.6480,
    address: 'اصفهان، بزرگراه شهید دستجردی، ورودی کوه صفه',
    addressEn: 'Dastjerdi Expressway, Soffeh Mountain Park, Isfahan',
    images: [soffeh1, soffeh2],
    tags: ['کوهنوردی', 'بام اصفهان', 'تله کابین', 'عکاسی شب', 'طبیعت گردی'],
    featured: false,
    openingHours: '۲۴ ساعته (تله‌کابین: ۱۶:۰۰ الی ۲۲:۰۰)',
    bestTime: 'صبح زود برای کوه‌پیمایی یا شب برای تماشای شب اصفهان',
    historicalEra: 'قلعه شاه‌دژ (دوره ساسانی/اسماعیلیه)',
    ticketPrice: 'ورود رایگان / تله‌کابین دارای بلیط',
    googleMapsUrl: 'https://maps.google.com/?q=32.5925,51.6480'
  },
  {
    id: 'monar-jonban',
    slug: 'monar-jonban',
    name: 'منارجنبان اصفهان',
    nameEn: 'Monar Jonban (Shaking Minarets)',
    category: 'historical',
    shortDescription: 'بنای رازآلود با دو مناره که با تکان دادن یکی، مناره دیگر و کل بنا به لرزه می‌افتد.',
    description: 'منارجنبان بنایی تاریخی شامل مقبره عمو عبدالله کارلادانی است که در دوره ایلخانی ساخته شد و مناره‌های آن در دوره صفویه اضافه گردید. معماری این بنا به گونه‌ای است که با تکان دادن یکی از مناره‌ها، مناره دیگر و تمام کالبد بنا به طرز شگفت‌انگیزی می‌لرزد.',
    latitude: 32.6496,
    longitude: 51.5901,
    address: 'اصفهان، خیابان آتشگاه، کیلومتر ۶ غرب اصفهان',
    addressEn: 'Atashgah St, Km 6 West, Isfahan',
    images: [monarJonban1, monarJonban2],
    tags: ['معماری عجایب', 'ایلخانی', 'مناره نوسانی', 'فیزیک معماری'],
    featured: false,
    openingHours: '۹:۰۰ الی ۱۶:۳۰',
    bestTime: 'ساعات تکان دادن رسمی مناره‌ها (۱۰:۳۰، ۱۲:۰۰، ۱۳:۳۰، ۱۵:۰۰، ۱۶:۰۰)',
    historicalEra: 'دوره ایلخانی و صفوی (۷۱۶ هجری قمری)',
    ticketPrice: '۴۰,۰۰۰ تومان',
    googleMapsUrl: 'https://maps.google.com/?q=32.6496,51.5901'
  },
  {
    id: 'ghasr-monshi-cafe',
    slug: 'ghasr-monshi-cafe',
    name: 'کافه و هتل بوتیک قصر منشی',
    nameEn: 'Ghasr Monshi Heritage Cafe',
    category: 'cafes',
    shortDescription: 'خانه قاجاری مرمت‌شده با حوض‌خانه سنتی، شربت‌های گیاهی و حیاط باصفا.',
    description: 'قصر منشی یکی از مقر‌های وزیر فتحعلی‌شاه قاجار بوده که امروزه به یک هتل بوتیک و کافه سنتی بسیار نفیس تبدیل شده است. حیاط مرکزی با حوض فیروزه‌ای، پنجره‌های ارسی با شیشه‌های رنگین، شربت‌های اصیل ایرانی و کافه مدرن آن، فضایی آرامش‌بخش برای گپ‌وگفت فراهم کرده است.',
    latitude: 32.6531,
    longitude: 51.6842,
    address: 'اصفهان، خیابان نشاط، کوچه قصر منشی (کوچه ۲۱)',
    addressEn: 'Neshat St, Alley 21 (Ghasr Monshi Alley), Isfahan',
    images: [ghasrMonshi1, ghasrMonshi2],
    tags: ['هتل بوتیک', 'ارسی قاجار', 'شربت خانه', 'حیاط سنتی', 'کافه دنج'],
    featured: false,
    openingHours: '۸:۰۰ الی ۲۳:۰۰',
    bestTime: 'عصرها برای عصرانه و شربت سنتی',
    historicalEra: 'دوره اواخر قاجار',
    ticketPrice: 'ورود رایگان (هزینه منو)',
    googleMapsUrl: 'https://maps.google.com/?q=32.6531,51.6842'
  },
  {
    id: 'isfahan-birds-garden',
    slug: 'isfahan-birds-garden',
    name: 'باغ پرندگان اصفهان',
    nameEn: 'Isfahan Birds Garden',
    category: 'nature',
    shortDescription: 'پارک جنگلی ناژوان با تورهای عظیم مرتفع و زیستگاه بیش از ۱۳۰ گونه پرنده.',
    description: 'باغ پرندگان اصفهان واقع در مجموعه ناژوان، با مساحتی بالغ بر ۵۵ هزار متر مربع، یکی از کم‌نظیرترین زیستگاه‌های پرندگان در خاورمیانه است. تور سقف باغ با ارتفاع بالای ۲۲ متر امکان پرواز آزادانه به پرندگان مختلف را می‌دهد. فضای سبز انبوه و حوضچه‌های آب تماشایی آن، مکان فوق‌العاده‌ای برای خانواده‌هاست.',
    latitude: 32.6385,
    longitude: 51.6160,
    address: 'اصفهان، پل کلهر، خیابان الفت، مجموعه گردشگری ناژوان',
    addressEn: 'Nazhvan Park, Olfat St, Isfahan',
    images: [birdsGarden1, birdsGarden2],
    tags: ['ناژوان', 'پرندگان', 'طبیعت سرسبز', 'خانوادگی', 'عکاسی طبیعت'],
    featured: false,
    openingHours: '۸:۳۰ الی ۱۸:۰۰',
    bestTime: 'صبح تا بعد از ظهر',
    historicalEra: 'تاسیس ۱۳۷۵ شمسی',
    ticketPrice: '۵۰,۰۰۰ تومان',
    googleMapsUrl: 'https://maps.google.com/?q=32.6385,51.6160'
  }
];
