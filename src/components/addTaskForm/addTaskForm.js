export default function AddTaskForm({}) {
  return (
    <form className="addTask-form">
      <input
        type="text"
        name="addTaskInput"
        aria-label="Task description"
        className="addTask-input"
        placeholder="Add a task"
      />
      <button type="submit" className="addTask-button">
        Add
      </button>
    </form>
  );
}

