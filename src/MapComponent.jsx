import { MapContainer, TileLayer, GeoJSON, Tooltip } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";
import "./app.css";
import "./index.css";
import CustomsMarkers from "./CustomsMarkers";

const iranBounds = L.latLngBounds(
  L.latLng(20, 40),
  L.latLng(45, 70)
);

const MapComponent = () => {
  const [iranGeoJSON, setIranGeoJSON] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "ir_states_boundaries_coordinates.geojson")
      .then((res) => res.json())
      .then((data) => {
        console.log("GeoJSON Data:", data); // برای بررسی ساختار
        setIranGeoJSON(data);
      })
      .catch((err) => console.error("خطا در دریافت GeoJSON:", err));
  }, []);

  return (
    <MapContainer
      center={[33, 54]}
      zoom={6}
      minZoom={6}
      maxBounds={iranBounds}
      maxBoundsViscosity={0.2}
      className="map-container"
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}{r}.png"
        attribution='&copy; OpenStreetMap contributors'
      />

      {/* نمایش استان‌های ایران */}
      {iranGeoJSON && (
        <GeoJSON
          data={iranGeoJSON}
          style={() => ({
            fillColor: "lightgreen",
            color: "green",
            weight: 1.5,
            fillOpacity: 0.4,
            dashArray: "3 3",
          })}
          onEachFeature={(feature, layer) => {
            const provinceName = feature.properties.name; // نام استان
            if (provinceName) {
              layer.bindTooltip(provinceName, {
                permanent: true,
                direction: "center",
                className: "province-label",
              });
            }
          }}
        />
      )}

      <CustomsMarkers />
    </MapContainer>
  );
};

export default MapComponent;
