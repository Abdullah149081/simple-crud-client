/* eslint-disable no-underscore-dangle */
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const User = () => {
  const users = useLoaderData();

  const handlerDelete = (id) => {
    // const userRemove = users.filter((userR) => userR._id !== id);

    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.error("Successfully Delete!");
        }
      });
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Users Found : {users.length}</h1>
      <Toaster />
      <div>
        {users.map((user) => (
          <p key={user._id}>
            <span>Name:</span> {user.name} : <span>Email:</span> {user.email}
            <button onClick={() => handlerDelete(user._id)} type="button">
              x
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default User;
