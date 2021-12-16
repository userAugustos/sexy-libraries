import React, { useState, useEffect } from "react";
import { http } from "../../services/api";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    http.get("/users").then(({ data }) => setUsers(data.users));
  }, []);

  return (
    <div>
      {users.map(user => (
        <p key={user.id} data-testid='user'>
          {user.name}
        </p>
      ))}
    </div>
  );
};
