import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useEffect, useState } from "react";
import "./app.css";
import "./index.css";
import CustomsMarkers from "./CustomsMarkers";


// تنظیم محدوده نمایش فقط برای ایران
const iranBounds = L.latLngBounds(
  L.latLng(20, 40), // جنوب غربی
  L.latLng(45, 70)  // شمال شرقی
);

const MapComponent = () => {
  const [iranGeoJSON, setIranGeoJSON] = useState(null);

  // لود کردن فایل GeoJSON
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/countries.geojson")
      .then((res) => res.json())
      .then((data) => setIranGeoJSON(data))
      .catch((err) => console.error("خطا در دریافت GeoJSON:", err));
  }, []);
  
  
  
  
  return (
    <MapContainer
      center={[33, 62]}
      zoom={6}
      minZoom={6}
      maxBounds={iranBounds}
      maxBoundsViscosity={0.2}
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
