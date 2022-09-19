import Task from "../task/task";

export default function TaskList({ tasks, deleteTask, toggleCheckbox }) {
  if (tasks.length === 0)
    return (
      <div className="taskList-empty" data-test="taskList-no-tasks">
        You have no tasks
      </div>
    );

  return (
    <ul className="taskList">
      {tasks.map((task, index) => (
        <Task
          task={task}
          index={index}
          key={index}
          deleteTask={deleteTask}
          toggleCheckbox={toggleCheckbox}
        />
      ))}
    </ul>
  );
}

