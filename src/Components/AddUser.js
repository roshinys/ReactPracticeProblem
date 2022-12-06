import React, { useState } from "react";
import "./AddUser.css";

function AddUser(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const userHandler = (e) => {
    e.preventDefault();
    if (name.trim().length === 0) {
      alert("username required");
      return;
    }
    if (+age <= 0) {
      alert("age should be greater than 0");
      return;
    }
    props.onAddUser({ name: name, age: age });
    setName("");
    setAge("");
  };

  return (
    <form onSubmit={userHandler} className="adduser">
      <input
        type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={nameHandler}
        className="adduser__input"
      />
      <input
        type="number"
        name="age"
        placeholder="age"
        value={age}
        onChange={ageHandler}
        className="adduser__input"
      />
      <button className="adduser__button">newUser</button>
    </form>
  );
}

export default AddUser;
