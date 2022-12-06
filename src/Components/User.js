import React from "react";
import "./User.css";

function User(props) {
  return (
    <ul className="users">
      {props.users.map((user) => {
        return (
          <li key={user.id} id={user.id} className="users__one">
            {user.name} - {user.age}
          </li>
        );
      })}
    </ul>
  );
}

export default User;
