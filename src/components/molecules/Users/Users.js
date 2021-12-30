import React, { useState, useEffect } from "react";
import { http } from "../../../services/api";
import { Card } from "../../atoms/Card";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    http.get("/users").then(({ data }) => setUsers(data.users));
  }, []);

  return (
    <div className=''>
      <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {users.map(user => (
          <li
            key={user.id}
            data-testid='user'
            className='col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200'
          >
            <Card user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};
