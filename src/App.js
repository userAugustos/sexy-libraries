import React, { useState, useEffect } from "react";
import { http } from "./services/api";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    http.get("/users").then(({ data }) => setUsers(data.users));
    console.log(users);
  }, []);

  return (
    <div>
      <p>Iniciando projeto</p>
    </div>
  );
};

export default App;
