import React from "react";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1> Our Form </h1>
      <label htmlFor="fName">firstName: </label>
      <input
        type="text"
        name="fName"
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
        value={formData.firstName}
      />
      <br />
      <br />
      <label htmlFor="lName">lastName: </label>
      <input
        type="text"
        name="lName"
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        value={formData.lastName}
      />
      <br />
      <br />
      <label htmlFor="email">email: </label>
      <input
        type="email"
        name="email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        value={formData.email}
      />
      <br />
      <br />
      <label htmlFor="phone">phone: </label>
      <input
        type="text"
        name="phone"
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        value={formData.phone}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
