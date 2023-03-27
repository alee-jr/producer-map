import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Modal from "../index";
import { ThemeProvider } from "styled-components";
import theme from "@/theme";

describe("Modal component", () => {
  it("renders the modal when isOpen prop is true", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Modal
          isOpen={true}
          onClose={() => {}}
          handleExclude={() => {}}
          title="Test Title"
        />
      </ThemeProvider>
    );

    const modal = container.querySelector(".overlay");
    expect(modal).toBeInTheDocument();
  });

  it("does not render the modal when isOpen prop is false", () => {
    const { container } = render(
      <Modal
        isOpen={false}
        onClose={() => {}}
        handleExclude={() => {}}
        title="Test Title"
      />
    );

    const modal = container.querySelector(".overlay");
    expect(modal).not.toBeInTheDocument();
  });

  it("calls onClose prop when close button is clicked", () => {
    const onCloseMock = jest.fn();
    const { getByAltText } = render(
      <Modal
        isOpen={true}
        onClose={onCloseMock}
        handleExclude={() => {}}
        title="Test Title"
      />
    );

    const closeButton = getByAltText("Close");
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("calls handleExclude prop when exclude button is clicked", () => {
    const handleExcludeMock = jest.fn();
    const { getByText } = render(
      <Modal
        isOpen={true}
        onClose={() => {}}
        handleExclude={handleExcludeMock}
        title="Test Title"
      />
    );

    const excludeButton = getByText("EXCLUIR");
    fireEvent.click(excludeButton);

    expect(handleExcludeMock).toHaveBeenCalledTimes(1);
  });
});
