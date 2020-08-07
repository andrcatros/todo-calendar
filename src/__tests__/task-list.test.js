import React from "react";
import { render } from "@testing-library/react";
import TaskList from "../components/task-list";

describe("renders with correct props", () => {
  const mockTasks = [
    {
      id: 1,
      description: "read a book",
      deadline: "2012-04-05T10:30:40Z",
      completed: false,
    },
    {
      id: 10,
      description: "write report",
      deadline: "2012-04-25T10:30:40Z",
      completed: true,
    },
    {
      id: 11,
      description: "renew insurance",
      deadline: "2012-04-12T10:30:40Z",
      completed: true,
    },
    {
      id: 12,
      description: "wish Jan happy birthday",
      deadline: "2012-05-05T10:35:40Z",
      completed: false,
    },
  ];

  // eslint-disable-next-line no-unused-expressions
  test("renders all task compoments with correct text content", () => {
    const { getByText } = render(<TaskList tasks={mockTasks} />);

    expect(getByText(/read a book/)).toBeTruthy();
    expect(getByText(/write report/)).toBeTruthy();
    expect(getByText(/renew insurance/)).toBeTruthy();
    expect(getByText(/wish Jan happy birthday/)).toBeTruthy();

    expect(getByText(/2012-04-05T10:30:40Z/)).toHaveClass("task-deadline");
    expect(getByText(/2012-05-05T10:35:40Z/)).toHaveClass("task-deadline");
  });

  xtest("renders elements in order", () => {});
});
