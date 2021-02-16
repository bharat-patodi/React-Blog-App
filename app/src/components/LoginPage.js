import React from "react";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
    };
  }

  handleSubmit = () => {
    // fetch("https://mighty-oasis-08080.herokuapp.com/api/users/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(this.state.currentUser),
    // })
    //   .then((res) => res.json())
    //   .then((user) => {
    //     console.log("User Exists", user);
    //   });
    console.log("Create the login mechanism");
  };

  render() {
    return (
      <div className="container login-page">
        <h1>Login</h1>
        <form action="POST" className="login-form" onSubmit={this.handleSubmit}>
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
              pattern=".*\d+[a-z]+.*"
              required
            />
          </label>
          <br />
          <button type="submit" value="submit">
            Submit
          </button>
          <br />
          <Link to="/register">Register</Link>
        </form>
      </div>
    );
  }
}

export default LoginPage;
