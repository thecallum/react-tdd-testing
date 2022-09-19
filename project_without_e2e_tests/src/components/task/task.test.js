import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Task from './task'

// toggleCheckbox takes two arguments (taskIndex: number, completed: boolean)
// deleteTask takes one argument (taskIndex: number)

describe("Task", () => {

  it("Renders the component", () => {
    // Arrange
      const task = { description: "task description", completed: true };

      const { container } = render(
        <Task
          task={task}
        />
      );

    // Act

    // Assert

    expect(container.querySelector(
      '[data-test="task-value"]'
    ).innerHTML).toEqual(task.description)

    expect(container.querySelector(
      '[data-test="task-checkbox"]'
    ).checked).toBeTruthy();
  }
);

  it("Calls toggleCheckbox when checkbox clicked", () => {
      // Arrange
      const task = { description: "task description", completed: true };
      const index = 0;
      const toggleCheckbox = jest.fn();

      const { container } = render(
        <Task
          task={task}
          index={index}
          toggleCheckbox={toggleCheckbox}
        />
      );

      // Act
      const checkbox = container.querySelector(
        '[data-test="task-checkbox"]'
      );
      userEvent.click(checkbox);

      // Assert
      expect(toggleCheckbox).toHaveBeenCalledWith(index, !task.completed);
    }
  );

  it("Calls doesn't call delete task when not confirmed", () => {
    // Arrange
    const task = { description: "task description", completed: true };
    const index = 0;
    const toggleCheckbox = () => {};
    const deleteTask = jest.fn();

    const alertMock = jest
      .spyOn(window, "confirm")
      .mockImplementation(() => false);

    const { container } = render(
      <Task
        task={task}
        index={index}
        toggleCheckbox={toggleCheckbox}
        deleteTask={deleteTask}
      />
    );

    // Act
    const button = container.querySelector(
      '[data-test="delete-task-button"]'
    );
    userEvent.click(button);

    // Assert
    expect(alertMock).toHaveBeenCalledTimes(1);
    expect(deleteTask).toHaveBeenCalledTimes(0);
  });

  it("Calls deleteTask parameter when confirmed", () => {
    // Arrange
    const task = { description: "task description", completed: true };
    const index = 0;
    const toggleCheckbox = () => {};
    const deleteTask = jest.fn();

    const alertMock = jest
      .spyOn(window, "confirm")
      .mockImplementation(() => true);

    const { container } = render(
      <Task
        task={task}
        index={index}
        toggleCheckbox={toggleCheckbox}
        deleteTask={deleteTask}
      />
    );

    // Act
    const button = container.querySelector(
      "button.taskList-item-button"
    ) ;
    userEvent.click(button);

    // Assert
    expect(alertMock).toHaveBeenCalledTimes(1);
    expect(deleteTask).toHaveBeenCalledTimes(1);

    expect(deleteTask).toHaveBeenCalledWith(index);
  });
});

