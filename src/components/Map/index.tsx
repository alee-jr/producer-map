import React from "react";
import { GoogleMap, LoadScript, GoogleMapProps } from "@react-google-maps/api";

export interface MapProps {
  mapContainerStyle?: React.CSSProperties;
  center: google.maps.LatLngLiteral;
  zoom?: number;
  onMapClick?: (event: google.maps.MapMouseEvent) => void;
  children: React.ReactNode;
}

const MapComponent: React.FC<MapProps> = ({
  mapContainerStyle = { width: "100%", height: "100vh" },
  center,
  zoom = 16,
  onMapClick,
  children,
}) => {
  const options: GoogleMapProps["options"] = {
    mapTypeId: "satellite",
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControlOptions: {
      position: 3,
    },
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      libraries={["geometry"]}
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
        onClick={onMapClick}
        options={options}
      >
        {children}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
