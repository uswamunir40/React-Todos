import React from "react";

const Task = ({ task, onDelete }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {task}
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={onDelete}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default Task;
