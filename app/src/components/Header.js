import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="blog-header">
      <NavLink exact to="/" activeClassName="active-link">
        LOGO
      </NavLink>
      <nav>
        <NavLink exact to="/" activeClassName="active-link">
          Home
        </NavLink>
        <NavLink to="/login" activeClassName="active-link">
          Login
        </NavLink>
        <NavLink to="/register" activeClassName="active-link">
          Register
        </NavLink>
        <NavLink to="/articles/new" activeClassName="active-link">
          New Article
        </NavLink>
      </nav>
    </header>
  );
}
