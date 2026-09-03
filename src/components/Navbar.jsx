import React from 'react';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="logo">
          <div className="logo-icon">&gt;_</div>
          <span>Caret Club</span>
        </a>

        <nav>
          <ul className="nav-links">
            <li><a href="#about" className="nav-link active">About</a></li>
            <li><a href="#features" className="nav-link">Features</a></li>
            <li><a href="#membership" className="nav-link">Membership</a></li>
            <li><a href="#resources" className="nav-link">Resources</a></li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a href="#membership" className="btn btn-outline">Sign In</a>
          <a href="#membership" className="btn btn-primary">Join Club</a>
        </div>
      </div>
    </header>
  );
}
