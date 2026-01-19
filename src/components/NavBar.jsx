import { Link } from "react-router-dom";
import '../style/NavBar.css'
export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <Link to="/">LOGO HOLDER</Link>
      </div>

      <div className="nav-links">
        <Link to="/" className="link-text">Home</Link>
        <Link to="/about" className="link-text"> About us</Link>
        <Link to="/portfolio" className="link-text">Our Work</Link>
        <Link to="/contact" className="quote-button">
          Get a Quote
        </Link>
      </div>
    </nav>
  );
}

