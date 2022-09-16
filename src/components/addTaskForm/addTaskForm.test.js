import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddTaskForm from "./addTaskForm";

describe("AddTaskForm", () => {
  it("can call the addTask method when the form is submitted", () => {
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

  it("can clear the input field when the form has been submitted", () => {
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

    // 7. Assert that the parameter 'AddTask' was called
    expect(addTaskMock).toHaveBeenCalled();

    // 8. Assert that the input field is empty
    expect(input.value).toEqual("");
  });

  it("displays an alert message when the form is submitted with an empty input", () => {
    // Arrange

        // 1. Setup mock variables
        const addTaskMock = jest.fn();

        // 2. Setup a jest spy to watch window.alert 
        const alertMock = jest.spyOn(window, "alert");
    
        // 3. Render the component
        const { container } = render(<AddTaskForm addTask={addTaskMock} />);

    // Act

        // 4. Find the add task button
        const submitButton = container.querySelector(
          '[data-test="add-task-button"]'
        );

        // 5. Click the button
        userEvent.click(submitButton);

    // Assert

        // 6. Assert that window.alert was called
        expect(alertMock).toHaveBeenCalled();

        // 7. Assert that the parameter 'AddTask' was not called
        expect(addTaskMock).toHaveBeenCalledTimes(0);

  });
});

