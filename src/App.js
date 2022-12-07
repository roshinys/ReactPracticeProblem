import React, { useState, Fragment } from "react";
import AddUser from "./Components/Users/AddUser";
import Users from "./Components/Users/Users";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <Users users={usersList} />
    </Fragment>
  );
}

export default App;
