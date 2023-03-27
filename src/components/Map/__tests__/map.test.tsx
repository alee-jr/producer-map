import React from "react";
import { render, screen } from "@testing-library/react";
import MapComponent, { MapProps } from "../index";

const defaultProps: MapProps = {
  center: {
    lat: 37.7749,
    lng: -122.4194,
  },
  children: <div data-testid="marker">Test Marker</div>,
};

describe("MapComponent", () => {
  it("renders map container with default style if mapContainerStyle prop is not provided", () => {
    render(<MapComponent {...defaultProps} />);
    const mapContainer = screen.getByRole("application");
    expect(mapContainer).toHaveStyle("width: 100%; height: 100vh;");
  });

  it("renders map container with provided mapContainerStyle prop", () => {
    const mapContainerStyle = { width: "500px", height: "500px" };
    render(
      <MapComponent {...defaultProps} mapContainerStyle={mapContainerStyle} />
    );
    const mapContainer = screen.getByRole("application");
    expect(mapContainer).toHaveStyle("width: 500px; height: 500px;");
  });

  it("renders GoogleMap with provided center and zoom props", () => {
    render(<MapComponent {...defaultProps} />);
    const map = screen.getByRole("presentation");
    expect(map).toBeInTheDocument();
    expect(map).toHaveAttribute("data-testid", "google-map");
    expect(map).toHaveAttribute("center", JSON.stringify(defaultProps.center));
    expect(map).toHaveAttribute("zoom", String(defaultProps.zoom));
  });

  it("renders children components", () => {
    render(<MapComponent {...defaultProps} />);
    const marker = screen.getByTestId("marker");
    expect(marker).toBeInTheDocument();
  });
});
