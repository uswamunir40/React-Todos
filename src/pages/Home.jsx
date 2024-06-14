import React, { useEffect, useState } from "react";
import AddTask from "../components/AddTask";
import TaskList from "../components/Tasklist";
import axios from "axios";

// getLocalItems function to fetch data from localStorage
const getLocalItems = () => {
  let list = localStorage.getItem("tasks");
  return list ? JSON.parse(list) : [];
};

const Home = () => {
  const [tasks, setTasks] = useState(getLocalItems());
  const [students, setStudents] = useState([]);

  async function getStudents() {
    try {
      const response = await axios.get("http://localhost:3000/students");

      setStudents(response.data.data);
      students.map((student) => console.log(student.firstName));
    } catch (error) {
      console.error(error);
    }
  }

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  // useEffect(() => {
  //   getStudents();
  // }, []);
  return (
    <>
      {students.length > 0 && (
        <div style={{ width: "50%", marginTop: "20px" }}>
          <h3>Students List</h3>
          <ul className="list-group">
            {students.map((student, index) => (
              <li key={index} className="list-group-item">
                {student.firstName}
              </li>
            ))}
          </ul>
        </div>
      )}
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
        <AddTask onAdd={addTask} />
        {tasks.length > 0 && <TaskList tasks={tasks} onDelete={deleteTask} />}
      </div>
    </>
  );
};

export default Home;
