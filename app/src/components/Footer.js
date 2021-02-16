import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="blog-footer">
      Copyright information available at counter 86
      <nav>
        <Link exact to="/about" activeClassName="active-link">
          About Us
        </Link>
        <Link to="/contact" activeClassName="active-link">
          Contact Us
        </Link>
        <Link to="www.github.com" activeClassName="active-link">
          External
        </Link>
      </nav>
    </footer>
  );
}
