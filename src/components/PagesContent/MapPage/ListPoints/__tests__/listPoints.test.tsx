import React from "react";
import { render } from "@testing-library/react";
import ListPoints from "../index";
import theme from "@/theme";
import { ThemeProvider } from "styled-components";

describe("ListPoints", () => {
  it("renders without error", () => {
    render(
      <ThemeProvider theme={theme}>
        <ListPoints points={[]} handleClick={() => {}} />
      </ThemeProvider>
    );
  });
});
