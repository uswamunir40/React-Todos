import React from "react";
import { useState } from "react";

function Test() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleButtonClick = () => {
    setCount(count + 1);
    console.log("count is: " + count);
  };

  const handleButtonName = () => {
    setName("Uswa");
    console.log("name is: " + name);
  };
  return (
    <>
      {/* <h1>Helehbhbf</h1>; */}
      <br />
      <button onClick={handleButtonClick}>Count is {count}</button>
      <button onClick={handleButtonName}>Name is {name}</button>
    </>
  );
}

export default Test;
