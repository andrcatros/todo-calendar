import React from "react";
import { render } from "@testing-library/react";
import Task from "../components/task";

describe("renders with correct props", () => {
  const mockTask = {
    id: 1,
    description: "read a book",
    deadline: "2012-04-05T10:30:40Z",
    completed: false,
  };

  const { getByText } = render(<Task props={mockTask} />);
  // eslint-disable-next-line no-unused-expressions
  test("renders correct text content", () => {
    expect(getByText("read a book")).toBeTruthy();
    expect(getByText("read a book")).toHaveClass("task");
    expect(getByText("2012-04-05T10:30:40Z")).toHaveClass("task");
  });

  xtest("renders elements as input", () => {});
});
