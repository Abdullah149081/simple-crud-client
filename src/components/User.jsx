/* eslint-disable no-underscore-dangle */
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const User = () => {
  const users = useLoaderData();
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Users Found : {users.length}</h1>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            <span>Name:</span> {user.name} : <span>Email:</span> {user.email}
          </p>
        ))}
      </div>
    </div>
  );
};

export default User;
