/* eslint-disable no-underscore-dangle */
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const Update = () => {
  const userDetails = useLoaderData();
  const handlerUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    fetch(`http://localhost:5000/users/${userDetails?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully created!", {
            duration: 1000,
          });
        }
      });
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/user">users</Link>
      <Toaster />
      <h2>Update information</h2>
      <form className="form-style-5" onSubmit={handlerUpdate}>
        <legend>
          <span className="number">1</span> Update Info
        </legend>
        <input type="text" name="name" defaultValue={userDetails?.name} placeholder="Your Name *" required />
        <input type="email" name="email" defaultValue={userDetails?.email} placeholder="Your Email *" required />

        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
