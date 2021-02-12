import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Header className="blog-header">
      <NavLink exact to="/" activeClassName="active-link">
        LOGO
      </NavLink>
      <NavLink exact to="/" activeClassName="active-link">
        Home
      </NavLink>
      <NavLink to="/login" activeClassName="active-link">
        Login
      </NavLink>
      <NavLink to="/register" activeClassName="active-link">
        Register
      </NavLink>
    </Header>
  );
}
