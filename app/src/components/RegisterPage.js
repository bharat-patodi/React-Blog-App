import React from "react";
import { Link } from "react-router-dom";

class RegisterPage extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  createUser = () => {
    fetch("https://mighty-oasis-08080.herokuapp.com/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: "Mgoan",
          email: "Mgoan@goa.com",
          password: "Mgoan123",
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  render() {
    return (
      <div className="container register-page">
        <h1>Register</h1>
        <form action="" className="register-form">
          <label htmlFor="email">
            Email Id
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              required
            />
          </label>
          <br />
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              minLength={6}
              pattern="^(?=.*[a-z])(?=.*[0-9]).{6,}$"
              required
            />
          </label>
          <br />
          <label htmlFor="username">
            Username
            <input
              type="username"
              name="username"
              id="username"
              placeholder="username"
              minLength={6}
              required
            />
          </label>
          <br />
          <button type="submit" value="submit" onClick={this.createUser}>
            Sign Up
          </button>
          <br />
          <Link to="/login">Login</Link>
        </form>
      </div>
    );
  }
}

export default RegisterPage;
