import React from "react";

function Task({ task, ondelete, ontoggle }) {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => ontoggle(task.id)}
    >
      <h3>
        {task.text}
        <button className="btn" onClick={() => ondelete(task.id)}>
          delete
        </button>
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
