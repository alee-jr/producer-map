import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Modal from "../index";
import { ThemeProvider } from "styled-components";
import theme from "@/theme";

describe("Modal component", () => {

  it("does not render the modal when isOpen prop is false", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Modal
          isOpen={false}
          onClose={() => { }}
          handleExclude={() => { }}
          title="Test Title"
        />
      </ThemeProvider>
    );

    const modal = container.querySelector(".overlay");
    expect(modal).not.toBeInTheDocument();
  });

  it("calls handleExclude prop when exclude button is clicked", () => {
    const handleExcludeMock = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Modal
          isOpen={true}
          onClose={() => { }}
          handleExclude={handleExcludeMock}
          title="Test Title"
        />
      </ThemeProvider>
    );

    const excludeButton = getByText("EXCLUIR");
    fireEvent.click(excludeButton);

    expect(handleExcludeMock).toHaveBeenCalledTimes(1);
  });
});
