// CustomsMarkers.jsx
import React from "react";
import CustomsMarker from "./CustomsMarker";
import  customs  from "./customsData";

const CustomsMarkers = () => {
  return (
    <>
      {customs.map((custom) => (
        <CustomsMarker key={custom.id} custom={custom} />
      ))}
    </>
  );
};

export default CustomsMarkers;
