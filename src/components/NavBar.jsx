import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <Link to="/">LOGO HOLDER</Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/portfolio">Our Work</Link>
        <Link to="/contact" className="quote-button">
          Get a Quote
        </Link>
      </div>
    </nav>
  );
}

