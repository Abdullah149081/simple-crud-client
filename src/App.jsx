import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }; // important

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Successfully created!");
          form.reset();
        }
      });
  };

  return (
    <div>
      <Toaster />
      <h1>Simple CRUD Client</h1>
      <Link to="/user">users</Link>
      <div className="form-style-5">
        <form onSubmit={handlerSubmit}>
          <legend>
            <span className="number">1</span> Candidate Info
          </legend>
          <input type="text" name="name" placeholder="Your Name *" required />
          <input type="email" name="email" placeholder="Your Email *" required />

          <input type="submit" value="Add User" />
        </form>
      </div>
    </div>
  );
}

export default App;
