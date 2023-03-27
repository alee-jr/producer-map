import React from "react";
import { render } from "@testing-library/react";
import PolygonComponent, { PolygonsProps } from "../index";
import geojson from "../../../data/geo.json";

describe("PolygonComponent", () => {
  const mockPolygonCoords: google.maps.LatLngLiteral[] = [
    { lat: 0, lng: 0 },
    { lat: 1, lng: 0 },
    { lat: 1, lng: 1 },
    { lat: 0, lng: 1 },
  ];

  const mockPolygonOptions = {
    strokeColor: geojson.features[0].properties.color,
    fillColor: geojson.features[0].properties.color,
  };

  const setup = (props?: Partial<PolygonsProps>) => {
    const defaultProps: PolygonsProps = {
      polygonCoords: mockPolygonCoords,
      polygonOptions: mockPolygonOptions,
    };
    const component = render(<PolygonComponent {...defaultProps} {...props} />);
    return component;
  };

  test("should render a Polygon component", () => {
    const { container } = setup();
    const polygonElement = container.querySelector("svg path");
    expect(polygonElement).toBeInTheDocument();
  });

  test("should pass polygonCoords and polygonOptions to Polygon component", () => {
    const { container } = setup();
    const polygonElement = container.querySelector("svg path");
    expect(polygonElement).toHaveAttribute("d", "M0 0 L1 0 L1 1 L0 1 z");
    expect(polygonElement).toHaveAttribute(
      "stroke",
      mockPolygonOptions.strokeColor
    );
    expect(polygonElement).toHaveAttribute(
      "fill",
      mockPolygonOptions.fillColor
    );
  });

  test("should override default polygonOptions with props", () => {
    const overrideOptions = { strokeColor: "#fff", fillColor: "#000" };
    const { container } = setup({ polygonOptions: overrideOptions });
    const polygonElement = container.querySelector("svg path");
    expect(polygonElement).toHaveAttribute(
      "stroke",
      overrideOptions.strokeColor
    );
    expect(polygonElement).toHaveAttribute("fill", overrideOptions.fillColor);
  });
});
