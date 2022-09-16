export default function Task() {
  return (
    <li className="taskList-item">
      <div className="taskList-item-left">
        <input
          className="taskList-item-input"
          type="checkbox"
          checked={false}
        />
        <span className="taskList-item-value">Task Description</span>
      </div>

      <button className="taskList-item-button" aria-label="Delete task" />
    </li>
  );
}

