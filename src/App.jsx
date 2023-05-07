import "./App.css";

function App() {
  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    form.reset();
  };

  return (
    <div>
      <h1>Simple CRUD Client</h1>
      <div className="form-style-5">
        <form onSubmit={handlerSubmit}>
          <legend>
            <span className="number">1</span> Candidate Info
          </legend>
          <input type="text" name="name" placeholder="Your Name *" />
          <input type="email" name="email" placeholder="Your Email *" />

          <input type="submit" value="Add User" />
        </form>
      </div>
    </div>
  );
}

export default App;
