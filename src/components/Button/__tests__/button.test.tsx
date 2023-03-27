import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ButtonComponent, { ButtonProps } from "../index";
import theme from "@/theme";
import { ThemeProvider } from "styled-components";

const defaultProps: ButtonProps = {
  children: "Click me",
  variant: "primary",
  onClick: jest.fn(),
};

describe("ButtonComponent", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ButtonComponent {...defaultProps} />
      </ThemeProvider>
    );
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("fires onClick event when clicked", () => {
    const { getByText } = render(<ButtonComponent {...defaultProps} />);
    fireEvent.click(getByText("Click me"));
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it("changes variant when prop is changed", () => {
    const { getByText, rerender } = render(
      <ButtonComponent {...defaultProps} variant="danger" />
    );
    expect(getByText("Click me")).toHaveStyle("background-color: red");
    rerender(<ButtonComponent {...defaultProps} variant="primary" />);
    expect(getByText("Click me")).toHaveStyle("background-color: blue");
  });
});
