import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(data);
    setData("");
  };

  return (
    <div style={{ width: "50%" }}>
      <form onSubmit={handleSubmit}>
        <div className="input-group flex-nowrap">
          <input
            type="text"
            name="task"
            onChange={(e) => setData(e.target.value)}
            value={data}
            className="form-control"
            placeholder="Task"
            aria-label="Task"
            aria-describedby="addon-wrapping"
          />
          <button type="submit" className="btn btn-success mx-2">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
