describe("todo", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("adds new task to list", () => {

    const taskDescription = "Task description";

    // 1. Type taskName in input field
    cy.get('[data-test="add-task-input"]').type(taskDescription);

    // 2. Click 'add' button
    cy.get('[data-test="add-task-button"]').click();

    // 3. Assert that the list contains a task with the new description
    cy.get('[data-test="task-value"]').first().contains(taskDescription);

    // 4. Assert that the input field is empty
    cy.get('[data-test="add-task-input"]').should("have.value", "");
  });

  it("displays an alert when the input is empty", () => {
    // 1. Click 'add' button
    cy.get('[data-test="add-task-button"]').click();

    // 2. Assert window.alert called
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`You cannot create a task with an empty description`)
    })
  });

  it("deletes a task from the list", () => {

    const taskDescription = "Task description";

    // 1. Type taskName in input field
    cy.get('[data-test="add-task-input"]').type(taskDescription);

    // 2. Click 'add' button
    cy.get('[data-test="add-task-button"]').click();

    // 3. Assert that the list contains a task with the new description
    cy.get('[data-test="task-value"]').first().contains(taskDescription);
  
    // 4. Find first task in list - click delete button
    cy.get('[data-test="delete-task-button"]').first().click()

    // 5. Mock window.confirm to return true
    cy.on("window:confirm", (txt) => {
      expect(txt).contains("Are you sure you want to delete this task?");

      // confirm message
      return true;
    });

    // 6. Assert that list is now empty
    cy.get('[data-test="taskList-no-tasks"]');
  });

  it("displays a message when no tasks are in the list", () => {
    // 1. Assert that 'no tasks' message exists
    cy.get('[data-test="taskList-no-tasks"]');
  });

  it("updates the checkbox field when clicked", () => {

    const taskDescription = "Task description";

    // 1. Type taskName in input field
    cy.get('[data-test="add-task-input"]').type(taskDescription);

    // 2. Click 'add' button
    cy.get('[data-test="add-task-button"]').click();

    // 3. Assert that the list contains a task with the new description
    cy.get('[data-test="task-value"]').first().contains(taskDescription);
  
    // 4. Find first task in list - toggle checkbox
    cy.get('[data-test="task-checkbox"]').first().click()

    // 5. Assert checkbox is checked
    cy.get('[data-test="task-checkbox"]').first().should("be.checked");
  });
});
