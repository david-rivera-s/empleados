import { Link } from "react-router-dom";
import "./Navbar.css"; // Código de importación

function Navbar() {
  return (
    <nav className="navbar-container">
      <span className="navbar-logo">GestorApp</span>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Empleados</Link>
        <Link to="/nuevo" className="navbar-link navbar-link-btn">Nuevo Empleado</Link>
      </div>
    </nav>
  );
}

export default Navbar;