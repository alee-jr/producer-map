import React from "react";
import { render } from "@testing-library/react";
import Layout, { LayoutProps } from "../index";
import * as S from "../styles";
import theme from "@/theme";
import { ThemeProvider } from "styled-components";

const defaultProps: LayoutProps = {
  title: "Test Layout",
  children: <p>Test content</p>,
};

describe("Layout", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Layout {...defaultProps} />
      </ThemeProvider>
    );
    expect(getByText("Test Layout")).toBeInTheDocument();
    expect(getByText("Test content")).toBeInTheDocument();
  });

  it("renders the title prop correctly", () => {
    const { getByText } = render(<Layout {...defaultProps} />);
    expect(getByText("Test Layout")).toBeInTheDocument();
  });

  it("renders the children prop correctly", () => {
    const { getByText } = render(<Layout {...defaultProps} />);
    expect(getByText("Test content")).toBeInTheDocument();
  });

  it("renders the sidebar component", () => {
    const { container } = render(<Layout {...defaultProps} />);
    const sidebar = container.querySelector(`.${S.SideBar}`);
    expect(sidebar).toBeInTheDocument();
  });
});
