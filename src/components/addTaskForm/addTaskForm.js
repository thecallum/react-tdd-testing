import { useState } from "react";

export default function AddTaskForm({ addTask }) {
  const [taskDescription, setDescription] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();

    addTask(taskDescription);
    setDescription("");
  };

  return (
    <form className="addTask-form" onSubmit={handleAddTask}>
      <input
        type="text"
        name="addTaskInput"
        aria-label="Task description"
        className="addTask-input"
        placeholder="Add a task"
        data-test="add-task-input"
        onChange={(e) => setDescription(e.target.value)}
        value={taskDescription}
      />
      <button
        type="submit"
        className="addTask-button"
        data-test="add-task-button"
      >
        Add
      </button>
    </form>
  );
}

