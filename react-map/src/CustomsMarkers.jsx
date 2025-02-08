import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

// آیکون سفارشی برای گمرک‌ها
const customIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
});

// لیست گمرک‌ها با اطلاعات اضافه شده
const customs = [
  // آذربایجان غربی
  { id: 1, province: "آذربایجان غربی", city: "بازرگان", name: "گمرک بازرگان", code: "30100", lat: 39.390911, lng: 44.389317 },
  { id: 2, province: "آذربایجان غربی", city: "ارومیه", name: "گمرک ارومیه", code: "30200", lat: 37.580094, lng: 45.062225 },
  { id: 3, province: "آذربایجان غربی", city: "خوی", name: "گمرک خوی", code: "30203", lat: 38.526797, lng: 44.958479 },
  { id: 4, province: "آذربایجان غربی", city: "پیرانشهر", name: "گمرک پیرانشهر", code: "30207", lat:36.665317, lng: 45.074300 },
  { id: 5, province: "آذربایجان غربی", city: "سرو", name: "گمرک سرو", code: "30300", lat: 37.717677, lng: 44.622428 },

  // آذربایجان شرقی
  { id: 6, province: "آذربایجان شرقی", city: "جلفا", name: "گمرک جلفا", code: "25300", lat: 38.941040, lng: 45.642707 },
  { id: 7, province: "آذربایجان شرقی", city: "تبریز", name: "گمرک تبریز", code: "25100", lat: 38.068954, lng: 46.233504 },

  // اردبیل
  { id: 8, province: "اردبیل", city: "اردبیل", name: "گمرک اردبیل", code: "25400", lat: 38.068954, lng: 46.233804 },
  { id: 9, province: "اردبیل", city: "بیله سوار", name: "گمرک بیله سوار", code: "25401", lat: 39.388162, lng: 48.359542 },

  // اصفهان
  { id: 10, province: "اصفهان", city: "اصفهان", name: "گمرک اصفهان", code: "15100", lat: 32.544439, lng: 51.692103 },
  { id: 11, province: "اصفهان", city: "فولاد مبارکه", name: "گمرک فولاد مبارکه اصفهان", code: "15102", lat: 32.285494, lng: 51.412455 },

  // ایلام
  { id: 12, province: "ایلام", city: "مهران", name: "گمرک مهران", code: "35104", lat: 33.122594, lng: 46.166517 },

  // بوشهر
  { id: 13, province: "بوشهر", city: "دیلم", name: "گمرک دیلم", code: "45201", lat: 30.056597, lng: 50.149840 },

  // چهارمحال و بختیاری
  { id: 14, province: "چهارمحال و بختیاری", city: "شهرکرد", name: "گمرک شهرکرد", code: "10800", lat: 32.328916, lng: 50.868233 },

  // خراسان رضوی
  { id: 15, province: "خراسان رضوی", city: "مشهد", name: "گمرک مشهد", code: "60100", lat: 36.2352, lng: 59.6411 },
  { id: 16, province: "خراسان رضوی", city: "سرخس", name: "گمرک سرخس", code: "60200", lat: 36.520340, lng: 61.165392 },
  { id: 17, province: "خراسان رضوی", city: "لطف آباد", name: "گمرک لطف آباد", code: "60400", lat: 37.528824, lng: 59.337047 },
  { id: 18, province: "خراسان رضوی", city: "دوغارون", name: "گمرک دوغارون", code: "60500", lat: 34.710271, lng: 61.000291 },

  // خوزستان
  { id: 19, province: "خوزستان", city: "اهواز", name: "گمرک اهواز", code: "40100", lat: 31.317373, lng: 48.668869 },
  { id: 20, province: "خوزستان", city: "خرمشهر", name: "گمرک خرمشهر", code: "40202", lat: 30.434383, lng: 48.156360 },
  { id: 21, province: "خوزستان", city: "آبادان", name: "گمرک آبادان", code: "40203", lat: 30.331582, lng: 48.280891 },

  // زنجان
  { id: 22, province: "زنجان", city: "زنجان", name: "گمرک زنجان", code: "80100", lat: 36.644115, lng: 48.565533 },

  // سمنان
  { id: 23, province: "سمنان", city: "سمنان", name: "گمرک سمنان", code: "15400", lat: 35.598603, lng: 53.449475 },

  // سیستان و بلوچستان
  { id: 24, province: "سیستان و بلوچستان", city: "زاهدان", name: "گمرک زاهدان", code: "55100", lat: 29.462024, lng: 60.889171 },
  { id: 25, province: "سیستان و بلوچستان", city: "میرجاوه", name: "گمرک میرجاوه", code: "55200", lat: 28.977197, lng: 61.548985 },

  // قم
  { id: 26, province: "قم", city: "قم", name: "گمرک قم", code: "90100", lat: 34.705776, lng: 50.848552 },

  // کردستان
  { id: 27, province: "کردستان", city: "سنندج", name: "گمرک سنندج", code: "35300", lat: 35.321744, lng: 46.991036 },
  { id: 28, province: "کردستان", city: "باشماق", name: "گمرک باشماق", code: "35306", lat: 35.613584, lng: 46.019100 },

  // کرمان
  { id: 29, province: "کرمان", city: "کرمان", name: "گمرک کرمان", code: "50600", lat: 30.275007, lng: 57.006583 },

  // کرمانشاه
  { id: 30, province: "کرمانشاه", city: "کرمانشاه", name: "گمرک کرمانشاه", code: "35100", lat: 34.320523, lng: 47.068673 },

  // گلستان
  { id: 31, province: "گلستان", city: "اینچه برون", name: "گمرک اینچه برون", code: "20500", lat: 37.429185, lng: 54.615362 },

  // گیلان
  { id: 32, province: "گیلان", city: "آستارا", name: "گمرک آستارا", code: "20200", lat: 38.4390, lng: 48.8720 },
  { id: 33, province: "گیلان", city: "منطقه آزاد انزلی", name: "گمرک منطقه آزاد تجاری انزلی", code: "20100", lat: 37.456169, lng: 49.638516 },

  // مازندران
  { id: 34, province: "مازندران", city: "ساری", name: "گمرک ساری", code: "20303", lat: 36.667907, lng: 53.075547 },

  // هرمزگان
  { id: 35, province: "هرمزگان", city: "قشم", name: "گمرک قشم", code: "50102", lat: 26.945953, lng: 56.281280 },
  { id: 36, province: "هرمزگان", city: "کیش", name: "گمرک کیش", code: "50108", lat: 26.563113, lng: 53.996740 },

  // یزد
  { id: 37, province: "یزد", city: "یزد", name: "گمرک یزد", code: "50603", lat: 31.917040, lng: 54.230601 },

  // استان تهران
  { id: 38, province: "تهران", city: "غرب تهران", name: "گمرک غرب تهران", code: "10200", lat: 0, lng: 0 },
  { id: 39, province: "تهران", city: "تهران", name: "گمرک تهران", code: "10300", lat: 0, lng: 0 },
  { id: 40, province: "تهران", city: "فرودگاه", name: "گمرک فرودگاه امام خمینی (ره)", code: "10103", lat: 0, lng: 0 },
  { id: 41, province: "تهران", city: "شهید باهنر", name: "گمرک شهید باهنر", code: "50200", lat: 0, lng: 0 },

  // گمرکات بنادر
  { id: 42, province: "بنادر", city: "شهر", name: "گمرک بندر شهید رجایی", code: "50100", lat: 0, lng: 0 },
  { id: 43, province: "بنادر", city: "فریدون کنار", name: "گمرک بندر فریدون کنار", code: "20302", lat: 0, lng: 0 },
  { id: 44, province: "بنادر", city: "فرودگاه", name: "گمرک بندر امام خمینی (ره)", code: "40400", lat: 0, lng: 0 },
  { id: 45, province: "بنادر", city: "لنگه", name: "گمرک بندر لنگه", code: "50300", lat: 0, lng: 0 },
  { id: 46, province: "بنادر", city: "گناوه", name: "گمرک بندر گناوه", code: "45200", lat: 0, lng: 0 },
  { id: 47, province: "بنادر", city: "چابهار", name: "گمرک بندر چابهار", code: "55108", lat: 0, lng: 0 },
  // توجه: در صورت نیاز می‌توانید موارد تکراری را حذف یا اصلاح کنید.
  { id: 48, province: "بنادر", city: "فریدون کنار", name: "گمرک بندر فریدون کنار", code: "20302", lat: 0, lng: 0 },

  // گمرکات مناطق ویژه
  { id: 49, province: "مناطق ویژه", city: "رفسنجان", name: "گمرک منطقه ویژه اقتصادی رفسنجان", code: "50601", lat: 0, lng: 0 },
  { id: 50, province: "مناطق ویژه", city: "ارگ بم", name: "گمرک منطقه ویژه اقتصادی ارگ بم", code: "50605", lat: 0, lng: 0 },
  { id: 51, province: "مناطق ویژه", city: "خلیج فارس", name: "گمرک منطقه ویژه صنایع معدنی و فلزی خلیج فارس", code: "50800", lat: 0, lng: 0 },
  { id: 52, province: "مناطق ویژه", city: "انرژی پارس", name: "گمرک منطقه ویژه اقتصادی انرژی پارس", code: "45400", lat: 0, lng: 0 },
  { id: 53, province: "مناطق ویژه", city: "بوشهر", name: "گمرک منطقه ویژه اقتصادی2 بوشهر", code: "45110", lat: 0, lng: 0 },
  { id: 54, province: "مناطق ویژه", city: "نوشهر", name: "گمرک منطقه ویژه اقتصادی نوشهر", code: "20306", lat: 0, lng: 0 },
  { id: 55, province: "مناطق ویژه", city: "شیراز", name: "گمرک منطقه ویژه اقتصادی شیراز", code: "45301", lat: 0, lng: 0 },
  { id: 56, province: "مناطق ویژه", city: "سیرجان", name: "گمرک منطقه ویژه اقتصادی سیرجان", code: "50602", lat: 0, lng: 0 },
  { id: 57, province: "مناطق ویژه", city: "یزد", name: "گمرک منطقه ویژه اقتصادی یزد", code: "50901", lat: 0, lng: 0 },
  { id: 58, province: "مناطق ویژه", city: "سلفچگان", name: "گمرک منطقه ویژه اقتصادی سلفچگان", code: "90101", lat: 0, lng: 0 },
  { id: 59, province: "مناطق ویژه", city: "سهلان", name: "گمرک منطقه ویژه اقتصادی سهلان", code: "25200", lat: 0, lng: 0 },
  { id: 60, province: "مناطق ویژه", city: "پیام", name: "گمرک منطقه ویژه اقتصادی پیام", code: "10102", lat: 0, lng: 0 },
  { id: 61, province: "مناطق ویژه", city: "بوشهر", name: "گمرک منطقه ویژه اقتصادی", code: "45100", lat: 0, lng: 0 },
  { id: 62, province: "مناطق ویژه", city: "امیرآباد", name: "گمرک منطقه ویژه اقتصادی امیرآباد", code: "20304", lat: 0, lng: 0 }
];

const CustomsMarkers = () => {
  return (
    <>
      {customs.map((custom) => (
        <Marker
          key={custom.id}
          position={[custom.lat, custom.lng]}
          icon={customIcon}
        >
          <Popup className="custom-popup">
            <div className="popup-content">
              <h4>🚛 {custom.name}</h4>
              <p>استان: {custom.province}</p>
              <p>شهرستان: {custom.city}</p>
              <p>کد گمرک: {custom.code}</p>
              <p>
                مختصات:{" "}
                {custom.lat !== 0 ? custom.lat.toFixed(4) : "نامشخص"},{" "}
                {custom.lng !== 0 ? custom.lng.toFixed(4) : "نامشخص"}
              </p>
              <button
                onClick={() =>
                  window.open(`https://www.google.com/maps?q=${custom.lat},${custom.lng}`)
                }
                className="popup-btn"
              >
                مشاهده در نقشه
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default CustomsMarkers;
