import { Marker } from "@react-google-maps/api";
import { useCallback } from "react";
import marker from "../../../public/assets/icons/marker.svg";

interface MarkerProps {
  index: number;
  position: google.maps.LatLngLiteral;
  draggable?: boolean;
  onDragEnd: (index: number, event: google.maps.MapMouseEvent) => void;
}

const MarkerComponent: React.FC<MarkerProps> = ({
  index,
  position,
  draggable = false,
  onDragEnd,
  ...props
}) => {
  const handleDragEnd = useCallback(
    (event: google.maps.MapMouseEvent) => {
      if (onDragEnd) {
        onDragEnd(index, event);
      }
    },
    [index, onDragEnd]
  );

  return (
    <Marker
      position={position}
      draggable={draggable}
      onDragEnd={handleDragEnd}
      {...props}
    />
  );
};

export default MarkerComponent;
