import React, { useState, useEffect } from 'react';
import './Header.css';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <a href="#hero">JS</a>
        </div>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            </li>
            <li className="nav-item">
              <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            </li>
            {/* <li className="nav-item">
              <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            </li> */}
            <li className="nav-item">
              <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            </li>
            <li className="nav-item">
              <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
            </li>
            <li className="nav-item">
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;