describe("todo", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("adds new task to list", () => {
    // 1. Type taskName in input field
    // 2. Click 'add' button
    // 3. Assert that the list contains a task with the new description
    // 4. Assert that the input field is empty
  });

  it("displays an alert when the input is empty", () => {
    // 1. Click 'add' button
    // 2. Assert window.alert called
  });

  it("deletes a task from the list", () => {
    // 1. Type taskName in input field
    // 2. Click 'add' button
    // 3. Assert that the list contains a task with the new description
    // 4. Find first task in list - click delete button
    // 5. Mock window.confirm to return true
    // 6. Assert that list is now empty
  });

  it("displays a message when no tasks are in the list", () => {
    // 1. Assert that 'no tasks' message exists
  });

  it("updates the checkbox field when clicked", () => {
    // 1. Type taskName in input field
    // 2. Click 'add' button
    // 3. Assert that the list contains a task with the new description
    // 4. Find first task in list - toggle checkbox
    // 5. Assert checkbox is checked
  });
});
