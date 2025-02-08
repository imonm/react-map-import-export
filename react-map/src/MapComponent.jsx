import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useEffect, useState } from "react";
import "./app.css";
import "./index.css";
import CustomsMarkers from "./CustomsMarkers";


// تنظیم محدوده نمایش فقط برای ایران
const iranBounds = L.latLngBounds(
  L.latLng(25, 44), // جنوب غربی
  L.latLng(40, 63)  // شمال شرقی
);

const MapComponent = () => {
  const [iranGeoJSON, setIranGeoJSON] = useState(null);

  // لود کردن فایل GeoJSON
  useEffect(() => {
    fetch("/countries.geojson")
      .then((res) => res.json())
      .then((data) => {
        console.log("GeoJSON Data:", data);
        
        // پیدا کردن تمام featureهایی که شامل 'Iran' هستند
        const possibleIran = data.features.filter(feature =>
          JSON.stringify(feature.properties).includes("Iran")
        );
        console.log("Features with 'Iran':", possibleIran);
        
        // در صورتی که حداقل یک ویژگی پیدا شد، state را به روز کنید
        if (possibleIran.length > 0) {
          setIranGeoJSON(possibleIran[0]); // یا بسته به نیاز، ممکن است کل FeatureCollection را بسازید
        }
      })
      .catch((err) => console.error("خطا در دریافت فایل GeoJSON:", err));
  }, []);
  
  
  
  return (
    <MapContainer
      center={[32, 54]} // مرکز نقشه روی ایران
      zoom={5}
      minZoom={5}
      maxBounds={iranBounds}
      maxBoundsViscosity={0.8}
      className="map-container"
    >
      {/* لایه‌ی سفارشی برای نمایش ساده‌تر */}
      <TileLayer
  url="https://{s}.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}{r}.png"
  attribution='&copy; OpenStreetMap contributors'
/>
      {/* نمایش مرزهای ایران با GeoJSON */}
      {iranGeoJSON && (
  <GeoJSON
    data={iranGeoJSON}
    style={() => ({
      fillColor: "#FFA500",
      color: "red",
      weight:1.5, 
      fillOpacity:0.3, 
      dashArray: "5 5",
    })}
  />
)}


      {/* نمایش گمرک‌ها */}
      <CustomsMarkers />
    </MapContainer>
  );
};

export default MapComponent;
