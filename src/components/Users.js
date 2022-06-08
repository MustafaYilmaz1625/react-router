import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    // .get("https://jsonplaceholder.typicode.com/users")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((re) => re.json())
      .then((data) => setUser(data));
  }),
    [];

  {
    user.map((usr) => {
      return <div key={usr.id}>{usr.name}</div>;
    });
  }
}

export default Users;
