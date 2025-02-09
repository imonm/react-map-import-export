// CustomsMarker.jsx
import React, { useRef } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { customIcon } from "./customsData";

const CustomsMarker = ({ custom }) => {
  const markerRef = useRef(null);
  const map = useMap();

  const handleClick = () => {
    // اگر نیاز بود به صورت دستی پاپ آپ را باز کنید:
    if (markerRef.current) {
      markerRef.current.openPopup();
    }
  };

  return (
    <Marker
      ref={markerRef}
      position={[custom.lat, custom.lng]}
      icon={customIcon}
      eventHandlers={{
        click: handleClick
      }}
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
          <a
      href={custom.link}
      target="_blank"
      rel="noopener noreferrer"
      className="popup-btn as"
    >
      مشاهده اطلاعات گمرک
    </a>
        </div>
      </Popup>
    </Marker>
  );
};

export default CustomsMarker;
