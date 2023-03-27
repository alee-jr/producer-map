import React from "react";
import { Polygon, PolygonProps } from "@react-google-maps/api";
import geojson from "../../data/geo.json";

export interface PolygonsProps {
  polygonOptions?: PolygonProps["options"];
  polygonCoords: google.maps.LatLngLiteral[];
}

const PolygonComponent: React.FC<PolygonsProps> = ({
  polygonOptions = {
    strokeColor: geojson.features[0].properties.color,
    fillColor: geojson.features[0].properties.color,
  },
  polygonCoords,
}) => {
  return <Polygon path={polygonCoords} options={polygonOptions} />;
};

export default PolygonComponent;
