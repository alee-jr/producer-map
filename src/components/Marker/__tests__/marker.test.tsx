import { render, screen } from "@testing-library/react";
import MarkerComponent, { MarkerProps } from "../index";

const position: google.maps.LatLngLiteral = { lat: 0, lng: 0 };
const mockOnDragEnd = jest.fn();

const defaultProps: MarkerProps = {
  index: 0,
  position: position,
  draggable: true,
  onDragEnd: mockOnDragEnd,
};

describe("MarkerComponent", () => {
  it("should render the marker", () => {
    render(<MarkerComponent {...defaultProps} />);
    const marker = screen.getByTitle("Marker");
    expect(marker).toBeInTheDocument();
  });

  it("should have the correct position", () => {
    render(<MarkerComponent {...defaultProps} />);
    const marker = screen.getByTitle("Marker");
    expect(marker.getAttribute("lat")).toBe(position.lat.toString());
    expect(marker.getAttribute("lng")).toBe(position.lng.toString());
  });

  it("should be draggable", () => {
    render(<MarkerComponent {...defaultProps} />);
    const marker = screen.getByTitle("Marker");
    expect(marker.getAttribute("draggable")).toBe("true");
  });

  it("should call onDragEnd when the marker is dragged", () => {
    render(<MarkerComponent {...defaultProps} />);
    const marker = screen.getByTitle("Marker");
    marker.dispatchEvent(new MouseEvent("mousedown"));
    marker.dispatchEvent(new MouseEvent("mousemove"));
    marker.dispatchEvent(new MouseEvent("mouseup"));
    expect(mockOnDragEnd).toHaveBeenCalled();
    expect(mockOnDragEnd.mock.calls[0][0]).toBe(defaultProps.index);
  });
});
