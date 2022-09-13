import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddTaskForm from "./addTaskForm";

describe("AddTaskForm", () => {
  it("can call the addTask method when the add task button is clicked", () => {
    // Arrange

    // 1. Setup mock variables
    const addTaskMock = jest.fn();

    const inputText = "some task name";

    // 2. Render the component
    const { container } = render(<AddTaskForm addTask={addTaskMock} />);

    // Act

    // 3. Find the input field
    const input = container.querySelector('[data-test="add-task-input"]');

    // 4. Enter text into the input field
    userEvent.click(input);
    userEvent.keyboard(inputText);

    // 5. Find the add task button
    const submitButton = container.querySelector(
      '[data-test="add-task-button"]'
    );

    // 6. Click the button
    userEvent.click(submitButton);

    // Assert

    // 7. Assert that the parameter 'AddTask' was called with the description of the task
    expect(addTaskMock).toHaveBeenCalledWith(inputText);

  });

  it("can call the addTask method when the form is submitted", () => {
    // Arrange
    // Act
    // Assert
  });

  it("can clear the input field when the form has been submitted", () => {
    // Arrange
    // Act
    // Assert
  });

  it("displays an alert message when the form is submitted with an empty input", () => {
    // Arrange
    // Act
    // Assert
  });
});

