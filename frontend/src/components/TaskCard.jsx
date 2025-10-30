import styles from "../styles/TaskCard.module.css";

const TaskCard = ({ task, onEdit, onDelete }) => {
  // ---- Badge color helpers (unchanged) ----
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return styles.statusCompleted;
      case "in-progress":
        return styles.statusInProgress;
      default:
        return styles.statusPending;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return styles.priorityHigh;
      case "medium":
        return styles.priorityMedium;
      default:
        return styles.priorityLow;
    }
  };

  return (
    <div className={styles.card}>
      {/* Title */}
      <h3 className={styles.title}>{task.title}</h3>

      {/* Description */}
      <p className={styles.description}>
        {task.description || "No description"}
      </p>

      {/* Badges */}
      <div className={styles.badges}>
        <span className={`${styles.badge} ${getStatusColor(task.status)}`}>
          {task.status.replace("-", " ")}
        </span>
        <span className={`${styles.badge} ${getPriorityColor(task.priority)}`}>
          {task.priority}
        </span>
      </div>

      {/* Action Buttons */}
      <div className={styles.actions}>
        <button onClick={() => onEdit(task)} className={styles.editBtn}>
          Edit
        </button>
        <button onClick={() => onDelete(task._id)} className={styles.deleteBtn}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
