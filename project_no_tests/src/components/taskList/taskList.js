import Task from "../task/task";

export default function TaskList({}) {
  if (tasks.length === 0)
    return <div className="taskList-empty">You have no tasks</div>;

  return <ul className="taskList"></ul>;
}

