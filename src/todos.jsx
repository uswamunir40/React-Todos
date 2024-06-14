import React, { useEffect, useState } from "react";

// getLocalItems
const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const Todos = () => {
  const [todos, setTodos] = useState(getLocalItems());
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, data]);
    setData("");
    console.log(data);
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    console.log("deleted", newTodos[index]);
    newTodos.splice(index, 1);

    setTodos(newTodos);
  };
  // adding data to local storage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(todos));
  }, [todos]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "10px",
      }}
    >
      <div style={{ width: "50%" }}>
        <form onSubmit={handleSubmit}>
          <div className="input-group flex-nowrap">
            <input
              type="text"
              name="username"
              onChange={(e) => setData(e.target.value)}
              value={data}
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
            <button type="submit" className="btn btn-success mx-2">
              Add
            </button>
          </div>
        </form>
      </div>

      {todos.length > 0 && (
        <div
          className="card mt-3  todo-item"
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ul className="list-group list-group-flush" style={{ width: "100%" }}>
            {todos.map((todo, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center "
              >
                {todo}
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Todos;
