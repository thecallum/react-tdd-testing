import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskList from "./taskList";

describe("TaskList", () => {
  it("Renders TaskList with many tasks", () => {
    // Arrange
    const tasks = [
      { description: "task description one", completed: false },
      { description: "task description two", completed: true },
    ];
    const toggleCheckbox = () => {};
    const deleteTask = () => {};

    // Act
    const { container } = render(
      <TaskList
        tasks={tasks}
        toggleCheckbox={toggleCheckbox}
        deleteTask={deleteTask}
      />
    );

    // Assert
    expect(container.querySelectorAll('[data-test="task"]')).toHaveLength(
      tasks.length
    );
  });

  it("Renders TaskList with empty list", () => {
    // Arrange
    const tasks = [];
    const toggleCheckbox = () => {};
    const deleteTask = () => {};

    // Act
    const { container } = render(
      <TaskList
        tasks={tasks}
        toggleCheckbox={toggleCheckbox}
        deleteTask={deleteTask}
      />
    );

    // Assert
    expect(container.querySelectorAll('[data-test="task"]')).toHaveLength(0);
    expect(
      container.querySelectorAll('[data-test="taskList-no-tasks"]')
    ).toBeTruthy();
  });
});

