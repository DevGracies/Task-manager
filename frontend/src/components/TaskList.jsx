import TaskCard from "./TaskCard";
import "../styles/TaskManager.css";

const TaskList = ({ tasks, fetchTasks }) => {
  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskCard key={task._id} task={task} fetchTasks={fetchTasks} />
        ))
      ) : (
        <p className="no-tasks">No tasks available. Add a task!</p>
      )}
    </div>
  );
};

export default TaskList;
