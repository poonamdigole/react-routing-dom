import { Link } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navStyle">
      <span className="brands"> Ganesha</span>
      <Link to="/" className="nav-content">Home</Link>
      <Link to="/about" className="nav-content">About</Link>
      <Link to="/contact" className="nav-content">Contact</Link>
    </div>
  )
}