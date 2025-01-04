import axios from "axios";
import "../styles/TaskCard.css";

const TaskCard = ({ task, fetchTasks }) => {
  const handleDelete = async () => {
    try {
      alert("Successfully deleted");
      await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
      fetchTasks(); // Refresh the task list after deletion
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  const toggleComplete = async () => {
    try {
      alert("Successfully added");
      await axios.put(`http://localhost:5000/api/tasks/${task._id}`, {
        isCompleted: !task.isCompleted,
      });
      fetchTasks(); // Refresh the task list
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  return (
    <div className={`task-card ${task.isCompleted ? "completed" : ""}`}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <div className="task-actions">
        <button className="btn-complete" onClick={toggleComplete}>
          {task.isCompleted ? "Mark Pending" : "Mark Complete"}
        </button>
        <button className="btn-delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
