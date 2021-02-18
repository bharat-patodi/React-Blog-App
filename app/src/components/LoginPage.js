import React from "react";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {
        email: "",
        password: "",
      },
      currentUser: "",
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    let errors = { ...this.state.errors };

    switch (name) {
      case "email":
        let emailError =
          value.indexOf("@") === -1 ? "❌ Email does not contain @" : "";
        errors.email = emailError;
        break;

      case "password":
        let passwordError;
        if (value.length < 7) {
          passwordError =
            "❌ Password must be at least six characters in length";
        }
        let regex = /^(?=.*[A-Za-z])(?=.*?[0-9])[A-Za-z\d]/;
        if (!regex.test(value)) {
          passwordError = "❌ Password must contain a character and a number";
        }
        errors.password = passwordError;
        break;

      default:
        return errors;
    }

    this.setState({ [name]: value, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
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
              onChange={this.handleChange}
              value={this.state.email}
            />
          </label>
          <span className="errorMsg">{this.state.errors.email}</span>
          <br />
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={this.handleChange}
              value={this.state.password}
              // pattern=".*\d+[a-z]+.*"
              required
            />
          </label>
          <span className="errorMsg">{this.state.errors.password}</span>
          <br />
          <button
            className="standard-btn"
            type="submit"
            value="submit"
            disabled={this.state.errors.email || this.state.errors.password}
          >
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
