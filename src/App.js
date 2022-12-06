import React, { useState } from "react";
import AddUser from "./Components/AddUser.js";
import User from "./Components/User.js";
import Card from "./UI/Card.js";

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (user) => {
    setUsers((prevState) => {
      return [
        ...prevState,
        { id: prevState.length, name: user.name, age: user.age },
      ];
    });
  };
  return (
    <Card className="app">
      <AddUser onAddUser={addUserHandler} />
      <User users={users} />
    </Card>
  );
}

export default App;
