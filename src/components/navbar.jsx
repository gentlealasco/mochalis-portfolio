import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Mocahlis Kitchen</div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#gallery" onClick={toggleMenu}>Gallery</a></li>
        <li><a href="#services" onClick={toggleMenu}>Services</a></li>
        <li><a href="#footer" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
