export default function Task({ task, index, toggleCheckbox, deleteTask }) {

  const handleDeleteTask = () => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    deleteTask(index);
  };

  const handleToggleCheckbox = () => {
    toggleCheckbox(index, !task.completed);
  };

  return (
    <li className="taskList-item" data-test="task">
      <div className="taskList-item-left">
        <input
          className="taskList-item-input"
          type="checkbox"
          checked={task.completed}
          data-test="task-checkbox"
          onChange={handleToggleCheckbox}
        />
        <span className="taskList-item-value" data-test="task-value">{task.description}</span>
      </div>

      <button className="taskList-item-button" aria-label="Delete task" onClick={handleDeleteTask} data-test="delete-task-button" />
    </li>
  );
}

