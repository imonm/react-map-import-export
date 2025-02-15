// customsData.js
import L from "leaflet";

// آیکون سفارشی
export const customIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  iconSize: [20, 30],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
});

// لیست کامل گمرک‌ها بر اساس فایل اکسل
const customs = [
  // آذربایجان شرقی
  { id: 1, link: "https://ixport.ir/country-customs/%d8%ad%d9%88%d8%b2%d9%87-%d9%86%d8%b8%d8%a7%d8%b1%d8%aa-%da%af%d9%85%d8%b1%da%a9%d8%a7%d8%aa-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%d8%a2%d8%b0%d8%b1%d8%a8%d8%a7%db%8c%d8%ac%d8%a7%d9%86-%d8%b4%d8%b1%d9%82/", province: "آذربایجان شرقی", city: "تبریز", name: "حوزه نظارت گمرکات استان آذربایجان شرقی", code: "25100", lat: 38.068954, lng: 46.233504 },
  { id: 2, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d8%b1%d8%a7%d8%ba%d9%87/", province: "آذربایجان شرقی", city: "مراغه", name: "گمرک مراغه", code: "25201", lat: 37.390911, lng: 46.239317 },
  { id: 3, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d9%86%d8%b7%d9%82%d9%87-%d8%a2%d8%b2%d8%a7%d8%af-%d8%a7%d8%b1%d8%b3-%d8%ac%d9%84%d9%81%d8%a7/", province: "آذربایجان شرقی", city: "جلفا", name: "گمرک منطقه آزاد ارس-جلفا", code: "25300", lat: 38.941040, lng: 45.642707 },
  { id: 4, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d9%86%d8%b7%d9%82%d9%87-%d8%a2%d8%b2%d8%a7%d8%af-%d8%a7%d8%b1%d8%b3-%d8%ae%d8%af%d8%a7%d8%a2%d9%81%d8%b1%db%8c%d9%86/", province: "آذربایجان شرقی", city: "خداآفرین", name: "گمرک منطقه آزاد ارس-خداآفرین", code: "25301", lat: 39.198162, lng: 46.859542 },
  { id: 5, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d9%86%d8%b7%d9%82%d9%87-%d8%a2%d8%b2%d8%a7%d8%af-%d8%a7%d8%b1%d8%b3-%d9%86%d9%88%d8%b1%d8%af%d9%88%d8%b2/", province: "آذربایجان شرقی", city: "نوردوز", name: "گمرک منطقه آزاد ارس- نوردوز", code: "25302", lat: 38.526797, lng: 45.958479 },
  { id: 6, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d9%86%d8%b7%d9%82%d9%87-%d9%88%db%8c%da%98%d9%87-%d8%a7%d9%82%d8%aa%d8%b5%d8%a7%d8%af%db%8c-%d8%b3%d9%87%d9%84%d8%a7%d9%86/", province: "آذربایجان شرقی", city: "سهلان", name: "گمرک منطقه ویژه اقتصادی سهلان", code: "25200", lat: 37.665317, lng: 46.074300 },

  // آذربایجان غربی
  { id: 7, link: "https://ixport.ir/country-customs/%d8%ad%d9%88%d8%b2%d9%87-%d9%86%d8%b8%d8%a7%d8%b1%d8%aa-%da%af%d9%85%d8%b1%da%a9%d8%a7%d8%aa-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%d8%a2%d8%b0%d8%b1%d8%a8%d8%a7%db%8c%d8%ac%d8%a7%d9%86-%d8%ba%d8%b1%d8%a8/", province: "آذربایجان غربی", city: "ارومیه", name: "حوزه نظارت گمرکات استان آذربایجان غربی", code: "30100", lat: 37.580094, lng: 45.062225 },
  { id: 8, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d9%87%d8%a7%d8%a8%d8%a7%d8%af/", province: "آذربایجان غربی", city: "مهاباد", name: "گمرک مهاباد", code: "30200", lat: 36.717677, lng: 45.622428 },
  { id: 9, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%b1%d8%a7%d8%b2%db%8c/", province: "آذربایجان غربی", city: "رازی", name: "گمرک رازی", code: "30201", lat: 37.528824, lng: 44.337047 },
  { id: 10, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%ae%d9%88%db%8c/", province: "آذربایجان غربی", city: "خوی", name: "گمرک خوی", code: "30203", lat: 38.526797, lng: 44.958479 },
  { id: 11, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a8%d8%a7%d8%b2%d8%b1%da%af%d8%a7%d9%86/", province: "آذربایجان غربی", city: "بازرگان", name: "گمرک بازرگان", code: "30300", lat: 39.390911, lng: 44.389317 },
  { id: 12, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%be%d9%84%d8%af%d8%b4%d8%aa/", province: "آذربایجان غربی", city: "پلدشت", name: "گمرک پلدشت", code: "30301", lat: 39.348162, lng: 45.359542 },
  { id: 13, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%aa%d9%85%d8%b1%da%86%db%8c%d9%86/", province: "آذربایجان غربی", city: "تمرچین", name: "گمرک تمرچین", code: "30302", lat: 36.665317, lng: 45.074300 },
  { id: 14, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%da%a9%db%8c%d9%84%d9%87-%d8%b3%d8%b1%d8%af%d8%b4%d8%aa/", province: "آذربایجان غربی", city: "کیله سردشت", name: "گمرک کیله سردشت", code: "30303", lat: 36.320523, lng: 45.068673 },
  { id: 15, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%b3%d8%b1%d9%88/", province: "آذربایجان غربی", city: "سرو", name: "گمرک سرو", code: "30304", lat: 37.717677, lng: 44.622428 },

  // ایلام
  { id: 21, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%d8%a7%db%8c%d9%84%d8%a7%d9%85/", province: "ایلام", city: "ایلام", name: "گمرک استان ایلام", code: "35100", lat: 33.634008, lng: 46.423505 },

  // اردبیل
  { id: 16, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9%d8%a7%d8%aa-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%d8%a7%d8%b1%d8%af%d8%a8%db%8c%d9%84/", province: "اردبیل", city: "اردبیل", name: "حوزه نظارت گمرکات استان اردبیل", code: "77300", lat: 38.2492, lng: 48.2921 },
  { id: 17, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a8%db%8c%d9%84%d9%87-%d8%b3%d9%88%d8%a7%d8%b1/", province: "اردبیل", city: "بیله سوار", name: "گمرک بیله سوار", code: "77301", lat: 39.5013, lng: 48.3891 },

  // اصفهان
  { id: 18, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9%d8%a7%d8%aa-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%d8%a7%d8%b5%d9%81%d9%87%d8%a7%d9%86/", province: "اصفهان", city: "اصفهان", name: "گمرکات استان اصفهان", code: "77400", lat: 32.6637, lng: 51.6775 },
  { id: 19, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%da%a9%d8%a7%d8%b4%d8%a7%d9%86/", province: "اصفهان", city: "کاشان", name: "گمرک کاشان", code: "77401", lat: 33.9895, lng: 51.4383 },
  // { id: 20, link: "#", province: "اصفهان", city: "اصفهان", name: "فرودگاه اصفهان (مجاز به فعالیت در رویه واردات قطعی)", code: "77402", lat: 32.6934, lng: 51.8495 },

  // البرز
  { id: 21, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9%d8%a7%d8%aa-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%d8%a7%d9%84%d8%a8%d8%b1%d8%b2/", province: "البرز", city: "کرج", name: "گمرک استان البرز", code: "77500", lat: 35.8328, lng: 50.9916 },


  // بوشهر
  { id: 22, link: "https://ixport.ir/country-customs/%d8%ad%d9%88%d8%b2%d9%87-%d9%86%d8%b8%d8%a7%d8%b1%d8%aa-%da%af%d9%85%d8%b1%da%a9%d8%a7%d8%aa-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%d8%a8%d9%88%d8%b4%d9%87%d8%b1-%d9%88-%d9%85%d9%86%d8%b7%d9%82%d9%87-%d9%88/", province: "بوشهر", city: "بوشهر", name: "حوزه نظارت گمرکات استان بوشهر", code: "45100", lat: 28.968872, lng: 50.836594 },
  { id: 23, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d9%86%d8%b7%d9%82%d9%87-%d9%88%db%8c%da%98%d9%87-%d8%a7%d9%82%d8%aa%d8%b5%d8%a7%d8%af%db%8c-2-%d8%a8%d9%88%d8%b4%d9%87%d8%b1/", province: "بوشهر", city: "منطقه ویژه 2", name: "گمرک منطقه ویژه اقتصادی 2 بوشهر", code: "45101", lat: 28.912345, lng: 50.820987 },
  { id: 24, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%af%db%8c%d8%b1/", province: "بوشهر", city: "دیر", name: "گمرک دیر", code: "45102", lat: 29.430054, lng: 50.750856 },
  { id: 25, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%84%d8%a7%d9%88%d8%b1-%d8%b3%d8%a7%d8%ad%d9%84%db%8c/", province: "بوشهر", city: "لاور ساحلی", name: "گمرک لاور ساحلی", code: "45103", lat: 28.996017, lng: 50.529091 },
  { id: 26, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%da%a9%d9%86%da%af%d8%a7%d9%86/", province: "بوشهر", city: "کنگان", name: "گمرک کنگان", code: "45104", lat: 28.951549, lng: 50.412063 },
  { id: 27, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%af%d9%84%d9%88%d8%a7%d8%b1/", province: "بوشهر", city: "دلوار", name: "گمرک دلوار", code: "45105", lat: 28.649671, lng: 50.429446 },
  { id: 28, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a8%d9%88%d8%a7%d9%84%d8%ae%db%8c%d8%b1/", province: "بوشهر", city: "بوالخیر", name: "گمرک بوالخیر", code: "45106", lat: 29.296774, lng: 50.945739 },
  { id: 29, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%af%db%8c%d9%84%d9%85/", province: "بوشهر", city: "دیلم", name: "گمرک دیلم", code: "45107", lat: 29.430004, lng: 50.586647 },
  { id: 30, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%da%af%d9%86%d8%a7%d9%88%d9%87/", province: "بوشهر", city: "گناوه", name: "گمرک گناوه", code: "45108", lat: 29.568083, lng: 50.586226 },
  { id: 31, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%b1%db%8c%da%af/", province: "بوشهر", city: "ریگ", name: "گمرک ریگ", code: "45109", lat: 29.348057, lng: 50.529129 },
  { id: 32, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%ae%d8%a7%d8%b1%da%a9/", province: "بوشهر", city: "خارک", name: "گمرک خارک", code: "45110", lat: 29.251643, lng: 50.246400 },
  { id: 33, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d9%86%d8%b7%d9%82%d9%87-%d9%88%db%8c%da%98%d9%87-%d8%a7%d9%82%d8%aa%d8%b5%d8%a7%d8%af%db%8c-%d8%a7%d9%86%d8%b1%da%98%db%8c-%d9%be%d8%a7%d8%b1%d8%b3/", province: "بوشهر", city: "منطقه ویژه انرژی پارس", name: "گمرک منطقه ویژه اقتصادی انرژی پارس", code: "45111", lat: 29.954443, lng: 50.890430 },
  { id: 34, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%b9%d8%b3%d9%84%d9%88%db%8c%d9%87/", province: "بوشهر", city: "عسلویه", name: "گمرک عسلویه", code: "45112", lat: 28.932944, lng: 51.167136 },
  { id: 35, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%86%d8%ae%d9%84-%d8%aa%d9%82%db%8c/", province: "بوشهر", city: "نخل تقی", name: "گمرک نخل تقی", code: "45113", lat: 28.775710, lng: 51.084566 },

  // تهران
  { id: 36, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%aa%d9%87%d8%b1%d8%a7%d9%86/", province: "تهران", city: "تهران", name: "گمرک تهران", code: "10300", lat: 35.6892, lng: 51.3890 },
  { id: 37, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%ba%d8%b1%d8%a8-%d8%aa%d9%87%d8%b1%d8%a7%d9%86/", province: "تهران", city: "غرب تهران", name: "گمرک غرب تهران", code: "10301", lat: 35.7356, lng: 51.2553 },
  { id: 38, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%81%d8%b1%d9%88%d8%af%da%af%d8%a7%d9%87-%d8%a7%d9%85%d8%a7%d9%85-%d8%ae%d9%85%db%8c%d9%86%db%8c%d8%b1%d9%87/", province: "تهران", city: "فرودگاه امام", name: "گمرک فرودگاه امام خمینی(ره)", code: "10103", lat: 35.4161, lng: 51.1522 },

  // استان چهارمحال و بختیاری
  { id: 39, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%da%86%d9%87%d8%a7%d8%b1%d9%85%d8%ad%d8%a7%d9%84-%d9%88-%d8%a8%d8%ae%d8%aa%db%8c%d8%a7%d8%b1%db%8c/", province: "چهارمحال و بختیاری", city: "شهرکرد", name: "گمرک استان چهارمحال و بختیاری", code: "47100", lat: 32.3215, lng: 50.8145 },

  // خراسان جنوبی
  { id: 40, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9%d8%a7%d8%aa-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%d8%ae%d8%b1%d8%a7%d8%b3%d8%a7%d9%86-%d8%ac%d9%86%d9%88%d8%a8%db%8c/", province: "خراسان جنوبی", city: "بیرجند", name: "گمرکات استان خراسان جنوبی", code: "75100", lat: 32.8597, lng: 59.2205 },
  { id: 41, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d8%a7%d9%87%db%8c%d8%b1%d9%88%d8%af/", province: "خراسان جنوبی", city: "ماهیرود", name: "گمرک ماهیرود", code: "75101", lat: 31.3556, lng: 59.5542 },
  { id: 42, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%db%8c%d8%b2%d8%af%d8%a7%d9%86/", province: "خراسان جنوبی", city: "یزدان", name: "گمرک یزدان", code: "75102", lat: 32.7598, lng: 60.6700 },
  { id: 43, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a8%d8%a7%d8%b2%d8%a7%d8%b1%da%86%d9%87-%d9%85%d8%b1%d8%b2%db%8c-%d8%af%d9%88%da%a9%d9%88%d9%87%d8%a7%d9%86%d9%87/", province: "خراسان جنوبی", city: "دوکوهانه", name: "گمرک بازارچه مرزی دوکوهانه", code: "75103", lat: 32.4100, lng: 60.2900 },
  { id: 44, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a8%d8%a7%d8%b2%d8%a7%d8%b1%da%86%d9%87-%d9%85%d8%b1%d8%b2%db%8c-%da%af%d9%84%d9%88%d8%b1%d8%af%d9%87/", province: "خراسان جنوبی", city: "گلورده", name: "گمرک بازارچه مرزی گلورده", code: "75104", lat: 31.6951, lng: 59.4264 },

  
  // خراسان رضوی
{ id: 45, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a8%d8%a7%d8%ac%da%af%db%8c%d8%b1%d8%a7%d9%86/", province: "خراسان رضوی", city: "باجگیران", name: "گمرک باجگیران", code: "75200", lat: 37.4174, lng: 59.1192 },
{ id: 46, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%af%d9%88%d8%ba%d8%a7%d8%b1%d9%88%d9%86/", province: "خراسان رضوی", city: "دوغارون", name: "گمرک دوغارون", code: "75201", lat: 34.5500, lng: 60.7464 },
{ id: 47, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%b3%d8%b1%d8%ae%d8%b3/", province: "خراسان رضوی", city: "سرخس", name: "گمرک سرخس", code: "75202", lat: 36.5305, lng: 61.5394 },
{ id: 48, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%84%d8%b7%d9%81-%d8%a2%d8%a8%d8%a7%d8%af/", province: "خراسان رضوی", city: "لطف آباد", name: "گمرک لطف آباد", code: "75203", lat: 35.7850, lng: 60.2956 },
{ id: 49, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%b4%d9%85%d8%aa%db%8c%d8%ba-%d8%ae%d9%88%d8%a7%d9%81/", province: "خراسان رضوی", city: "شمتیغ خواف", name: "گمرک شمتیغ خواف", code: "75204", lat: 34.4212, lng: 60.8254 },

// خراسان شمالی
{ id: 50, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%d8%ae%d8%b1%d8%a7%d8%b3%d8%a7%d9%86-%d8%b4%d9%85%d8%a7%d9%84%db%8c/", province: "خراسان شمالی", city: "بجنورد", name: "گمرکات استان خراسان شمالی", code: "75300", lat: 37.4700, lng: 57.3224 },

// خوزستان
{ id: 51, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a2%d8%a8%d8%a7%d8%af%d8%a7%d9%86/", province: "خوزستان", city: "آبادان", name: "گمرک آبادان", code: "75400", lat: 30.3400, lng: 48.2900 },
{ id: 52, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a7%d8%b1%d9%88%d9%86%d8%af%da%a9%d9%86%d8%a7%d8%b1/", province: "خوزستان", city: "اروندکنار", name: "گمرک اروندکنار", code: "75401", lat: 30.0167, lng: 48.2236 },
{ id: 53, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%da%86%d9%88%d8%a6%db%8c%d8%a8%d8%af%d9%87/", province: "خوزستان", city: "چوئیبده", name: "گمرک چوئیبده", code: "75402", lat: 30.5861, lng: 48.4697 },
{ id: 54, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%ae%d8%b1%d9%85%d8%b4%d9%87%d8%b1/", province: "خوزستان", city: "خرمشهر", name: "گمرک خرمشهر", code: "75403", lat: 30.4300, lng: 48.1972 },
{ id: 55, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%b4%d9%84%d9%85%da%86%d9%87/", province: "خوزستان", city: "شلمچه", name: "گمرک شلمچه", code: "75404", lat: 30.4392, lng: 48.0600 },
{ id: 56, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d9%86%d8%b7%d9%82%d9%87-%d9%88%db%8c%da%98%d9%87-%d8%a7%d9%82%d8%aa%d8%b5%d8%a7%d8%af%db%8c-%d8%a8%d9%86%d8%af%d8%b1%d8%a7%d9%85%d8%a7%d9%85-%d8%ae%d9%85%db%8c%d9%86/", province: "خوزستان", city: "بندرامام خمینی(ره)", name: "گمرک منطقه ویژه اقتصادی بندرامام خمینی(ره)", code: "75405", lat: 30.5536, lng: 48.2706 },
{ id: 57, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%b3%d8%ac%d8%a7%d9%81%db%8c/", province: "خوزستان", city: "سجافی", name: "گمرک سجافی", code: "75406", lat: 30.3092, lng: 48.2261 },
{ id: 58, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%b4%d8%a7%d8%af%da%af%d8%a7%d9%86/", province: "خوزستان", city: "شادگان", name: "گمرک شادگان", code: "75407", lat: 30.6083, lng: 48.6606 },
{ id: 59, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d8%a7%d9%87%d8%b4%d9%87%d8%b1/", province: "خوزستان", city: "ماهشهر", name: "گمرک ماهشهر", code: "75408", lat: 30.5528, lng: 49.1811 },
{ id: 60, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d9%86%d8%b7%d9%82%d9%87-%d9%88%db%8c%da%98%d9%87-%d8%a7%d9%82%d8%aa%d8%b5%d8%a7%d8%af%db%8c-%d9%be%d8%aa%d8%b1%d9%88%d8%b4%db%8c%d9%85%db%8c/", province: "خوزستان", city: "پتروشیمی", name: "گمرک منطقه ویژه اقتصادی پتروشیمی", code: "75409", lat: 30.5878, lng: 49.3251 },
{ id: 61, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%da%86%d8%b0%d8%a7%d8%a8%d9%87/", province: "خوزستان", city: "چذابه", name: "گمرک چذابه", code: "75410", lat: 32.4195, lng: 48.7924 },

// زنجان
{ id: 62, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%d8%b2%d9%86%d8%ac%d8%a7%d9%86/", province: "زنجان", city: "زنجان", name: "گمرک استان زنجان", code: "75500", lat: 36.6690, lng: 48.4774 },

// سمنان
{ id: 63, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%d8%b3%d9%85%d9%86%d8%a7%d9%86/", province: "سمنان", city: "سمنان", name: "گمرک استان سمنان", code: "75600", lat: 35.5761, lng: 53.3942 },

// سیستان و بلوچستان
{ id: 64, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a7%db%8c%d8%b1%d8%a7%d9%86%d8%b4%d9%87%d8%b1/", province: "سیستان و بلوچستان", city: "ایرانشهر", name: "گمرک ایرانشهر", code: "75700", lat: 27.2200, lng: 60.6500 },
{ id: 65, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%b3%d8%b1%d8%a7%d9%88%d8%a7%d9%86/", province: "سیستان و بلوچستان", city: "سراوان", name: "گمرک سراوان", code: "75701", lat: 27.7000, lng: 61.1700 },
{ id: 66, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a8%d8%a7%d8%b2%d8%a7%d8%b1%da%86%d9%87-%d9%85%d8%b1%d8%b2%db%8c-%d8%ac%d8%a7%d9%84%d9%82/", province: "سیستان و بلوچستان", city: "جالق", name: "گمرک بازارچه مرزی جالق", code: "75702", lat: 28.0197, lng: 60.1000 },
{ id: 67, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a8%d8%a7%d8%b2%d8%a7%d8%b1%da%86%d9%87-%d9%85%d8%b1%d8%b2%db%8c-%da%a9%d9%88%d9%87%da%a9/", province: "سیستان و بلوچستان", city: "کوهک", name: "گمرک بازارچه مرزی کوهک", code: "75703", lat: 27.8419, lng: 60.0639 },
{ id: 68, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%da%86%d8%a7%d8%a8%d9%87%d8%a7%d8%b1/", province: "سیستان و بلوچستان", city: "چابهار", name: "گمرک چابهار", code: "75704", lat: 25.2914, lng: 60.6392 },
{ id: 69, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%b1%db%8c%d9%85%d8%af%d8%a7%d9%86/", province: "سیستان و بلوچستان", city: "ریمدان", name: "گمرک ریمدان", code: "75705", lat: 26.4390, lng: 61.2393 },
{ id: 70, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%be%db%8c%d8%b4%db%8c%d9%86/", province: "سیستان و بلوچستان", city: "پیشین", name: "گمرک پیشین", code: "75706", lat: 25.7381, lng: 60.6897 },
{ id: 71, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a8%d8%a7%d8%b2%d8%a7%d8%b1%da%86%d9%87-%d9%85%d8%b1%d8%b2%db%8c-%d9%be%d8%b3%d8%a7%d8%a8%d9%86%d8%af%d8%b1/", province: "سیستان و بلوچستان", city: "پسابندر", name: "گمرک بازارچه مرزی پسابندر", code: "75707", lat: 25.5378, lng: 60.8492 },
{ id: 72, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%da%a9%d9%86%d8%a7%d8%b1%da%a9/", province: "سیستان و بلوچستان", city: "کنارک", name: "گمرک کنارک", code: "75708", lat: 25.5431, lng: 60.3958 },
{ id: 73, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%db%8c%d8%b1%d8%ac%d8%a7%d9%88%d9%87/", province: "سیستان و بلوچستان", city: "میرجاوه", name: "گمرک میرجاوه", code: "75709", lat: 28.2050, lng: 60.5450 },
{ id: 74, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%db%8c%d9%84%da%a9/", province: "سیستان و بلوچستان", city: "میلک", name: "گمرک میلک", code: "75710", lat: 30.2322, lng: 60.4234 },

// فارس
{ id: 75, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%81%d8%b1%d9%88%d8%af%da%af%d8%a7%d9%87-%d9%84%d8%a7%d8%b1/", province: "فارس", city: "لار", name: "گمرک فرودگاه لار", code: "75800", lat: 27.6572, lng: 54.3500 },
{ id: 76, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d9%86%d8%b7%d9%82%d9%87-%d9%88%db%8c%da%98%d9%87-%d8%a7%d9%82%d8%aa%d8%b5%d8%a7%d8%af%db%8c-%d9%84%d8%a7%d9%85%d8%b1%d8%af/", province: "فارس", city: "لامرد", name: "گمرک منطقه ویژه اقتصادی لامرد", code: "75801", lat: 27.4550, lng: 53.2286 },

// قزوین
{ id: 77, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%d9%82%d8%b2%d9%88%db%8c%d9%86/", province: "قزوین", city: "قزوین", name: "گمرک استان قزوین", code: "75900", lat: 36.2750, lng: 50.0042 },

// قم
{ id: 78, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d9%86%d8%b7%d9%82%d9%87-%d9%88%db%8c%da%98%d9%87-%d8%a7%d9%82%d8%aa%d8%b5%d8%a7%d8%af%db%8c-%d8%b3%d9%84%d9%81%da%86%da%af%d8%a7%d9%86/", province: "قم", city: "سلفچگان", name: "گمرک منطقه ویژه اقتصادی سلفچگان", code: "76000", lat: 34.6233, lng: 50.1078 },

// کردستان
{ id: 79, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a8%d8%a7%d8%b4%d9%85%d8%a7%d9%82/", province: "کردستان", city: "باشماق", name: "گمرک باشماق", code: "76100", lat: 35.5311, lng: 46.2150 },
{ id: 80, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%b3%db%8c%d8%b1%d8%a7%d9%86%d8%a8%d9%86%d8%af-%d8%a8%d8%a7%d9%86%d9%87/", province: "کردستان", city: "بانه", name: "گمرک سیرانبند بانه", code: "76101", lat: 35.9750, lng: 45.8186 },

// کرمان
{ id: 81, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d9%86%d8%b7%d9%82%d9%87-%d9%88%db%8c%da%98%d9%87-%d8%a7%d9%82%d8%aa%d8%b5%d8%a7%d8%af%db%8c-%d8%a8%d9%85/", province: "کرمان", city: "بم", name: "گمرک منطقه ویژه اقتصادی بم", code: "76200", lat: 29.1028, lng: 58.3694 },
{ id: 82, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d9%86%d8%b7%d9%82%d9%87-%d9%88%db%8c%da%98%d9%87-%d8%a7%d9%82%d8%aa%d8%b5%d8%a7%d8%af%db%8c-%d8%b1%d9%81%d8%b3%d9%86%d8%ac%d8%a7%d9%86/", province: "کرمان", city: "رفسنجان", name: "گمرک منطقه ویژه اقتصادی رفسنجان", code: "76201", lat: 30.3492, lng: 55.9875 },
{ id: 83, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d9%86%d8%b7%d9%82%d9%87-%d9%88%db%8c%da%98%d9%87-%d8%a7%d9%82%d8%aa%d8%b5%d8%a7%d8%af%db%8c-%d8%b3%db%8c%d8%b1%d8%ac%d8%a7%d9%86/", province: "کرمان", city: "سیرجان", name: "گمرک منطقه ویژه اقتصادی سیرجان", code: "76202", lat: 29.4492, lng: 55.6756 },

// کرمانشاه
{ id: 84, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%b4%db%8c%d8%ae-%d8%b5%d9%84%d9%87/", province: "کرمانشاه", city: "شیخ صله", name: "گمرک شیخ صله", code: "76300", lat: 34.5600, lng: 46.3144 },
{ id: 85, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%b4%d9%88%d8%b4%d9%85%db%8c-%d9%be%d8%a7%d9%88%d9%87/", province: "کرمانشاه", city: "پاوه", name: "گمرک شوشمی پاوه", code: "76301", lat: 34.4700, lng: 46.5756 },
{ id: 86, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%be%d8%b1%d9%88%db%8c%d8%b2%d8%ae%d8%a7%d9%86/", province: "کرمانشاه", city: "پرویزخان", name: "گمرک پرویزخان", code: "76302", lat: 34.3200, lng: 46.5700 },
{ id: 87, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%ae%d8%b3%d8%b1%d9%88%db%8c/", province: "کرمانشاه", city: "خسروی", name: "گمرک خسروی", code: "76303", lat: 34.4178, lng: 45.9800 },
{ id: 88, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%b3%d9%88%d9%85%d8%a7%d8%b1/", province: "کرمانشاه", city: "سومار", name: "گمرک سومار", code: "76304", lat: 34.2700, lng: 46.2600 },

// کهگلویه و بویراحمد
{ id: 89, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%da%a9%d9%87%da%af%d9%84%d9%88%db%8c%d9%87-%d9%88-%d8%a8%d9%88%db%8c%d8%b1%d8%a7%d8%ad%d9%85%d8%af/", province: "کهگلویه و بویراحمد", city: "یاسوج", name: "گمرک استان کهگلویه و بویراحمد", code: "76400", lat: 30.6343, lng: 51.5894 },

// گلستان
{ id: 90, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a8%d9%86%d8%af%d8%b1%d8%aa%d8%b1%da%a9%d9%85%d9%86/", province: "گلستان", city: "بندرترکمن", name: "گمرک بندرترکمن", code: "76500", lat: 37.3667, lng: 54.4747 },

// گیلان
{ id: 91, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d9%86%d8%b7%d9%82%d9%87-%d8%a2%d8%b2%d8%a7%d8%af-%d8%a7%d9%86%d8%b2%d9%84%db%8c/", province: "گیلان", city: "انزلی", name: "گمرک منطقه آزاد انزلی", code: "76600", lat: 37.4561, lng: 49.4575 },
{ id: 92, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a2%d8%b3%d8%aa%d8%a7%d8%b1%d8%a7/", province: "گیلان", city: "آستارا", name: "گمرک آستارا", code: "76601", lat: 38.4325, lng: 48.8531 },
{ id: 93, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d9%86%d8%b7%d9%82%d9%87-%d9%88%db%8c%da%98%d9%87-%d8%a7%d9%82%d8%aa%d8%b5%d8%a7%d8%af%db%8c-%d8%a8%d9%86%d8%af%d8%b1-%d8%a2%d8%b3%d8%aa%d8%a7%d8%b1%d8%a7/", province: "گیلان", city: "بندر آستارا", name: "گمرک منطقه ویژه اقتصادی بندر آستارا", code: "76602", lat: 38.4283, lng: 48.8519 },
{ id: 94, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%b1%db%8c%d9%84%db%8c-%d8%a2%d8%b3%d8%aa%d8%a7%d8%b1%d8%a7/", province: "گیلان", city: "آستارا", name: "گمرک ریلی آستارا", code: "76603", lat: 38.4219, lng: 48.8494 },

// لرستان
{ id: 95, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d9%86%d8%b7%d9%82%d9%87-%d9%88%db%8c%da%98%d9%87-%d8%a7%d9%82%d8%aa%d8%b5%d8%a7%d8%af%db%8c-%d9%84%d8%b1%d8%b3%d8%aa%d8%a7%d9%86%d8%a7%d8%b2%d9%86%d8%a7/", province: "لرستان", city: "ازنا", name: "گمرک منطقه ویژه اقتصادی لرستان(ازنا)", code: "76700", lat: 33.4925, lng: 49.5114 },

// مازندران
{ id: 96, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d9%86%d8%b7%d9%82%d9%87-%d9%88%db%8c%da%98%d9%87-%d8%a7%d9%82%d8%aa%d8%b5%d8%a7%d8%af%db%8c-%d8%a8%d9%86%d8%af%d8%b1-%d8%a7%d9%85%db%8c%d8%b1%d8%a2%d8%a8%d8%a7%d8%af/", province: "مازندران", city: "بندر امیرآباد", name: "گمرک منطقه ویژه اقتصادی بندر امیرآباد", code: "76800", lat: 36.6719, lng: 53.6711 },
{ id: 97, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%b3%d8%a7%d8%b1%db%8c/", province: "مازندران", city: "ساری", name: "گمرک ساری", code: "76801", lat: 36.6516, lng: 53.0678 },
{ id: 98, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%81%d8%b1%db%8c%d8%af%d9%88%d9%86%da%a9%d9%86%d8%a7%d8%b1/", province: "مازندران", city: "فریدونکنار", name: "گمرک فریدونکنار", code: "76802", lat: 36.6583, lng: 52.3200 },
{ id: 99, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a2%d9%85%d9%84/", province: "مازندران", city: "آمل", name: "گمرک آمل", code: "76803", lat: 36.5300, lng: 52.3472 },

// مرکزی
{ id: 100, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d9%86%d8%b7%d9%82%d9%87-%d9%88%db%8c%da%98%d9%87-%d8%a7%d9%82%d8%aa%d8%b5%d8%a7%d8%af%db%8c-%da%a9%d8%a7%d9%88%d9%87/", province: "مرکزی", city: "اراک", name: "گمرک منطقه ویژه اقتصادی کاوه", code: "76900", lat: 34.0950, lng: 49.6906 },
{ id: 101, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d9%86%d8%b7%d9%82%d9%87-%d9%88%db%8c%da%98%d9%87-%d8%a7%d9%82%d8%aa%d8%b5%d8%a7%d8%af%db%8c-%d8%b2%d8%b1%d9%86%d8%af%db%8c%d9%87/", province: "مرکزی", city: "زرندیه", name: "گمرک منطقه ویژه اقتصادی زرندیه", code: "76901", lat: 34.9758, lng: 50.3708 },
{ id: 102, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a7%d8%ae%d8%aa%d8%b5%d8%a7%d8%b5%db%8c-%d9%86%d9%81%d8%aa/", province: "مرکزی", city: "شازند", name: "گمرک اختصاصی نفت", code: "76902", lat: 33.9478, lng: 50.3467 },

// هرمزگان
{ id: 103, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%b4%d9%87%db%8c%d8%af-%d8%a8%d8%a7%d9%87%d9%86%d8%b1-%d8%a8%d9%86%d8%af%d8%b1%d8%b9%d8%a8%d8%a7%d8%b3/", province: "هرمزگان", city: "بندرعباس", name: "گمرک شهید باهنر بندرعباس", code: "77000", lat: 27.1862, lng: 56.2676 },
{ id: 104, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%ac%d8%a7%d8%b3%da%a9/", province: "هرمزگان", city: "جاسک", name: "گمرک جاسک", code: "77001", lat: 25.9519, lng: 57.7839 },
{ id: 105, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d9%86%d8%b7%d9%82%d9%87-%d9%88%db%8c%da%98%d9%87-%d8%a7%d9%82%d8%aa%d8%b5%d8%a7%d8%af%db%8c-%da%a9%d8%b4%d8%aa%db%8c-%d8%b3%d8%a7%d8%b2%db%8c-%d8%ae%d9%84%db%8c%d8%ac/", province: "هرمزگان", city: "خلیج فارس", name: "گمرک منطقه ویژه اقتصادی کشتی سازی خلیج فارس", code: "77002", lat: 27.0197, lng: 56.1083 },

// همدان
{ id: 106, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%d9%87%d9%85%d8%af%d8%a7%d9%86/", province: "همدان", city: "همدان", name: "گمرک استان همدان", code: "77100", lat: 34.8019, lng: 48.5147 },

// یزد
{ id: 107, link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%db%8c%d8%b2%d8%af/", province: "یزد", city: "یزد", name: "گمرک استان یزد", code: "77200", lat: 31.8944, lng: 54.3666 },



{
  id: 108,
  link: "https://ixport.ir/country-customs/%d8%ad%d9%88%d8%b2%d9%87-%d9%86%d8%b8%d8%a7%d8%b1%d8%aa-%da%af%d9%85%d8%b1%da%a9%d8%a7%d8%aa-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%d8%ae%d8%b1%d8%a7%d8%b3%d8%a7%d9%86-%d8%b1%d8%b6%d9%88%db%8c/",
  province: "خراسان رضوی",
  city: "مشهد",
  name: "حوزه نظارت گمرکات استان خراسان رضوی",
  code: "",
  lat: 0,
  lng: 0
},
{
  id: 109,
  link: "https://ixport.ir/country-customs/%d8%ad%d9%88%d8%b2%d9%87-%d9%86%d8%b8%d8%a7%d8%b1%d8%aa-%da%af%d9%85%d8%b1%da%a9%d8%a7%d8%aa-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%d8%ae%d9%88%d8%b2%d8%b3%d8%aa%d8%a7%d9%86/",
  province: "خوزستان",
  city: "آبادان",
  name: "حوزه نظارت گمرکات استان خوزستان",
  code: "",
  lat: 0,
  lng: 0
},
{
  id: 110,
  link: "https://ixport.ir/country-customs/%d8%ad%d9%88%d8%b2%d9%87-%d9%86%d8%b8%d8%a7%d8%b1%d8%aa-%da%af%d9%85%d8%b1%da%a9%d8%a7%d8%aa-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%d8%b3%db%8c%d8%b3%d8%aa%d8%a7%d9%86-%d9%88-%d8%a8%d9%84%d9%88%da%86%d8%b3/",
  province: "سیستان و بلوچستان",
  city: "ایرانشهر",
  name: "حوزه نظارت گمرکات استان سیستان و بلوچستان",
  code: "",
  lat: 0,
  lng: 0
},
{
  id: 111,
  link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9%d8%a7%d8%aa-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%d9%81%d8%a7%d8%b1%d8%b3/",
  province: "فارس",
  city: "لار",
  name: "گمرکات استان فارس",
  code: "",
  lat: 0,
  lng: 0
},
{
  id: 112,
  link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9%d8%a7%d8%aa-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%d9%82%d9%85/",
  province: "قم",
  city: "قم",
  name: "گمرکات استان قم",
  code: "",
  lat: 0,
  lng: 0
},
{
  id: 113,
  link: "https://ixport.ir/country-customs/%d8%ad%d9%88%d8%b2%d9%87-%d9%86%d8%b8%d8%a7%d8%b1%d8%aa-%da%af%d9%85%d8%b1%da%a9%d8%a7%d8%aa-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%da%a9%d8%b1%d8%af%d8%b3%d8%aa%d8%a7%d9%86/",
  province: "کردستان",
  city: "سنندج",
  name: "حوزه نظارت گمرکات استان کردستان",
  code: "",
  lat: 0,
  lng: 0
},
{
  id: 114,
  link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9%d8%a7%d8%aa-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%da%a9%d8%b1%d9%85%d8%a7%d9%86/",
  province: "کرمان",
  city: "کرمان",
  name: "گمرکات استان کرمان",
  code: "",
  lat: 0,
  lng: 0
},
{
  id: 115,
  link: "https://ixport.ir/country-customs/%d8%ad%d9%88%d8%b2%d9%87-%d9%86%d8%b8%d8%a7%d8%b1%d8%aa-%da%af%d9%85%d8%b1%da%a9%d8%a7%d8%aa-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%da%a9%d8%b1%d9%85%d8%a7%d9%86%d8%b4%d8%a7%d9%87/",
  province: "کرمانشاه",
  city: "کرمانشاه",
  name: "حوزه نظارت گمرکات استان کرمانشاه",
  code: "",
  lat: 0,
  lng: 0
},
{
  id: 116,
  link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9%d8%a7%d8%aa-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%da%af%d9%84%d8%b3%d8%aa%d8%a7%d9%86/",
  province: "گلستان",
  city: "گرگان",
  name: "گمرکات استان گلستان",
  code: "",
  lat: 0,
  lng: 0
},
{
  id: 117,
  link: "https://ixport.ir/country-customs/%d8%ad%d9%88%d8%b2%d9%87-%d9%86%d8%b8%d8%a7%d8%b1%d8%aa-%da%af%d9%85%d8%b1%da%a9%d8%a7%d8%aa-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%da%af%db%8c%d9%84%d8%a7%d9%86/",
  province: "گیلان",
  city: "رشت",
  name: "حوزه نظارت گمرکات استان گیلان",
  code: "",
  lat: 0,
  lng: 0
},
{
  id: 118,
  link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d9%86%d8%b7%d9%82%d9%87-%d9%88%db%8c%da%98%d9%87-%d8%a7%d9%82%d8%aa%d8%b5%d8%a7%d8%af%db%8c-%d9%84%d8%b1%d8%b3%d8%aa%d8%a7%d9%86%d8%a7%d8%b2%d9%86%d8%a7/",
  province: "لرستان",
  city: "ازنا",
  name: "گمرکات استان لرستان",
  code: "",
  lat: 0,
  lng: 0
},
{
  id: 119,
  link: "https://ixport.ir/country-customs/%d8%ad%d9%88%d8%b2%d9%87-%d9%86%d8%b8%d8%a7%d8%b1%d8%aa-%da%af%d9%85%d8%b1%da%a9%d8%a7%d8%aa-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%d9%85%d8%a7%d8%b2%d9%86%d8%af%d8%b1%d8%a7%d9%86/",
  province: "مازندران",
  city: "ساری",
  name: "حوزه نظارت گمرکات استان مازندران",
  code: "",
  lat: 0,
  lng: 0
},
{
  id: 120,
  link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9%d8%a7%d8%aa-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%d9%85%d8%b1%da%a9%d8%b2%db%8c/",
  province: "مرکزی",
  city: "اراک",
  name: "گمرکات استان مرکزی",
  code: "",
  lat: 0,
  lng: 0
},
{
  id: 121,
  link: "https://ixport.ir/country-customs/%d8%ad%d9%88%d8%b2%d9%87-%d9%86%d8%b8%d8%a7%d8%b1%d8%aa-%da%af%d9%85%d8%b1%da%a9%d8%a7%d8%aa-%d8%a7%d8%b3%d8%aa%d8%a7%d9%86-%d9%87%d8%b1%d9%85%d8%b2%da%af%d8%a7%d9%86-%d9%88-%da%af%d9%85%d8%b1%da%a9/",
  province: "هرمزگان",
  city: "بندرعباس",
  name: "حوزه نظارت گمرکات استان هرمزگان و گمرک شهیدرجایی",
  code: "",
  lat: 0,
  lng: 0
},

{
  id: 122,
  link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%85%d9%86%d8%b7%d9%82%d9%87-%d9%88%db%8c%da%98%d9%87-%d8%a7%d9%82%d8%aa%d8%b5%d8%a7%d8%af%db%8c-%d9%85%d8%b9%d8%a7%d8%af%d9%86-%d9%88-%d9%81%d9%84%d8%b2%d8%a7%d8%aa/",
  province: "هرمزگان",
  city: "",
  name: "گمرک منطقه ویژه اقتصادی معادن و فلزات",
  code: "",
  lat: 27.156872,
  lng: 56.105145
},
{
  id: 123,
  link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%aa%db%8c%d8%a7%d8%a8/",
  province: "هرمزگان",
  city: "",
  name: "گمرک تیاب",
  code: "",
  lat: 27.114200,
  lng: 56.865517
},
{
  id: 124,
  link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%b3%db%8c%d8%b1%db%8c%da%a9/",
  province: "هرمزگان",
  city: "",
  name: "گمرک سیریک***",
  code: "",
  lat: 26.516996,
  lng: 57.099651
},
{
  id: 125,
  link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%da%a9%d8%b1%da%af%d8%a7%d9%86/",
  province: "هرمزگان",
  city: "",
  name: "گمرک کرگان",
  code: "",
  lat: 26.960011,
  lng: 56.944182
},
{
  id: 126,
  link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%ae%d9%85%db%8c%d8%b1/",
  province: "هرمزگان",
  city: "",
  name: "گمرک خمیر",
  code: "",
  lat: 26.939827,
  lng: 55.589604
},
{
  id: 127,
  link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a7%d8%a8%d9%88%d9%85%d9%88%d8%b3%db%8c/",
  province: "هرمزگان",
  city: "",
  name: "گمرک ابوموسی",
  code: "",
  lat: 26.550986,
  lng: 54.887425
},
{
  id: 128,
  link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%a8%d9%86%d8%af%d8%b1%d9%84%d9%86%da%af%d9%87/",
  province: "هرمزگان",
  city: "",
  name: "گمرک بندرلنگه",
  code: "",
  lat: 26.550986,
  lng: 54.887425
},
{
  id: 129,
  link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%da%86%d8%a7%d8%b1%da%a9/",
  province: "هرمزگان",
  city: "",
  name: "گمرک چارک",
  code: "",
  lat: 26.727594,
  lng: 54.282109
},
{
  id: 130,
  link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%b3%db%8c%d8%b1%db%8c/",
  province: "هرمزگان",
  city: "",
  name: "گمرک سیری",
  code: "",
  lat: 27.116092,
  lng: 56.046922
},
{
  id: 131,
  link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%84%d8%a7%d9%88%d8%a7%d9%86/",
  province: "هرمزگان",
  city: "",
  name: "گمرک لاوان",
  code: "",
  lat: 26.795153,
  lng: 53.382230
},
{
  id: 132,
  link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%b4%db%8c%d9%88/",
  province: "هرمزگان",
  city: "",
  name: "گمرک شیو",
  code: "",
  lat: 27.080156,
  lng: 53.142677
},
{
  id: 133,
  link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%da%a9%d9%86%da%af/",
  province: "هرمزگان",
  city: "",
  name: "گمرک کنگ",
  code: "",
  lat: 26.551510,
  lng: 54.888048
},
{
  id: 134,
  link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%82%d8%b4%d9%85/",
  province: "هرمزگان",
  city: "",
  name: "گمرک قشم",
  code: "",
  lat: 26.945931,
  lng: 56.281353
},
{
  id: 135,
  link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%be%d9%87%d9%84/",
  province: "هرمزگان",
  city: "",
  name: "گمرک پهل",
  code: "",
  lat: 26.976214,
  lng: 55.749600
},
{
  id: 136,
  link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d8%af%d8%b1%da%af%d9%87%d8%a7%d9%86/",
  province: "هرمزگان",
  city: "",
  name: "گمرک درگهان",
  code: "",
  lat: 26.963362,
  lng: 56.067413
},
{
  id: 137,
  link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%84%d8%a7%d9%81%d8%aa/",
  province: "هرمزگان",
  city: "",
  name: "گمرک لافت",
  code: "",
  lat: 26.950949,
  lng: 55.751310
},
{
  id: 138,
  link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%d9%87%d8%b1%d9%85%d8%b2/",
  province: "هرمزگان",
  city: "",
  name: "گمرک هرمز",
  code: "",
  lat: 27.117298,
  lng: 56.062177
},
{
  id: 139,
  link: "https://ixport.ir/country-customs/%da%af%d9%85%d8%b1%da%a9-%da%a9%db%8c%d8%b4/",
  province: "هرمزگان",
  city: "",
  name: "گمرک کیش",
  code: "",
  lat: 26.563085,
  lng: 53.996780
}



];

export default customs;
