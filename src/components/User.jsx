/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const User = () => {
  const loadUsers = useLoaderData();
  const [users, setUsers] = useState(loadUsers);

  const handlerDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.error("Successfully Delete!", {
            duration: 1000,
          });
          const userRemove = users.filter((user) => user._id !== id);
          setUsers(userRemove);
        }
      });
  };
  return (
    <div>
      <Link to="/">Home</Link>

      <h1>Users Found : {users.length}</h1>
      <Toaster />
      <div className="card">
        {users.map((user) => (
          <div className="card-body" key={user._id}>
            <p>
              <span>Name:</span> {user.name} : <span>Email:</span> {user.email}
              <button onClick={() => handlerDelete(user._id)} type="button">
                x
              </button>
            </p>

            <Link to={`/update/${user._id}`}>
              <button type="button">User Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
