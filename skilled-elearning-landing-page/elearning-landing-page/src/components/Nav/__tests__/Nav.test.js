import React from "react";
import { render, cleanup } from "@testing-library/react";
// Jest creates a simluated DOM in a Node.js environment to approximate the DOM
// Cleanup function is to remove components from the DOM to prevent memory leaking
import "@testing-library/jest-dom/extend-expect";
import Nav from "../Nav";

afterEach(cleanup);

describe("About component", () => {
  // renders About component
  it("renders", () => {
    render(<Nav />);
  });

  it("Matches snapshot DOM node structure", () => {
    // render About
    // We'll use the asFragment function, which returns a snapshot of the About component
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });
});

// the goal should be to create tests that resemble user interaction
