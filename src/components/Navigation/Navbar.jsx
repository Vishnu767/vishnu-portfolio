import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      const mobileNav = document.getElementById('mobileNav');
      const menuBtn = document.querySelector('.mobile-menu-btn');
      
      if (!mobileNav || !menuBtn) return;
      
      if (!mobileNav.contains(e.target) && !menuBtn.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { href: '#hero', text: 'Home' },
    { href: '#experience', text: 'Experience' },
    { href: '#skills', text: 'Skills' },
    { href: '#projects', text: 'Projects' },
    { href: '#education', text: 'Education' },
    { href: '#accomplishments', text: 'Accomplishments' },
    { href: '#contact', text: 'Contact' }
  ];

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="logo">PORTFOLIO.EXE</div>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
          <button 
            className="mobile-menu-btn" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`} id="mobileNav">
        <ul>
          {navLinks.map((link) => (
            <li key={`mobile-${link.href}`}>
              <a href={link.href} onClick={closeMobileMenu}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;