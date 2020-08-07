import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

it("renders placeholder text", () => {
  const { getByText } = render(<App />);
  const placeholder = getByText("this is placeholder text");
  expect(placeholder).toBeInTheDocument();
});
