import { Marker } from "@react-google-maps/api";
import { useCallback, useState } from "react";
import { Point } from "../PagesContent/MapPage";

export interface MarkerProps {
  index: number;
  position: google.maps.LatLngLiteral;
  marker: Point;
  selected: (id: string) => void;
  draggable?: boolean;
  onDragEnd: (index: number, event: google.maps.MapMouseEvent) => void;
}

const MarkerComponent: React.FC<MarkerProps> = ({
  index,
  position,
  draggable = false,
  marker,
  selected,
  onDragEnd,
  ...props
}) => {
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);

  const handleDragEnd = useCallback(
    (event: google.maps.MapMouseEvent) => {
      if (onDragEnd) {
        onDragEnd(index, event);
      }
    },
    [index, onDragEnd]
  );

  const defaultIcon = {
    url: "assets/icons/marker.svg"
  }

  const selectedIcon = {
    url: "assets/icons/marker-move.svg"
  }

  const handleMarkerClick = (marker: Point) => {
    if (selectedMarker === marker.id) {
      setSelectedMarker(null);
      selected("");
    } else {
      selected(marker.id);
      setSelectedMarker(marker.id);
    }
  };

  return (
    <Marker
      position={position}
      draggable={draggable}
      onDragEnd={handleDragEnd}
      onClick={() => handleMarkerClick(marker)}
      icon={marker.id === selectedMarker ? selectedIcon : defaultIcon}
      {...props}
    />
  );
};

export default MarkerComponent;
