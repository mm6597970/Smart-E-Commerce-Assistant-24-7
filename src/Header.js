import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from './logo.svg';

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to scroll to section
  const handleScrollTo = (id) => {
    setSidebarOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // If not on home, go home then scroll
  const handleNavAndScroll = (id) => {
    setSidebarOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => handleScrollTo(id), 350);
    } else {
      handleScrollTo(id);
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="logo" className="header-logo" />
          <span className="header-title">Smart E-Commerce Assistant</span>
        </div>
        <nav className="header-nav">
          <button
            className="header-menu"
            onClick={() => setSidebarOpen(true)}
            onMouseEnter={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <span className="header-menu-bar"></span>
            <span className="header-menu-bar"></span>
            <span className="header-menu-bar"></span>
          </button>
        </nav>
      </header>
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
          onMouseLeave={() => setSidebarOpen(false)}
        >
          <nav className="sidebar" onClick={e => e.stopPropagation()}>
            <button className="sidebar-close" onClick={() => setSidebarOpen(false)}>&times;</button>
            <ul className="sidebar-list">
              <li><Link to="/" onClick={() => setSidebarOpen(false)}>🏠 Home</Link></li>
              <li><button className="sidebar-link" onClick={() => handleNavAndScroll('platforms')}>🏬 Platforms</button></li>
              <li><button className="sidebar-link" onClick={() => handleNavAndScroll('features')}>🚀 Features</button></li>
              <li><Link to="/chat" onClick={() => setSidebarOpen(false)}>🤖 AI Assistant</Link></li>
              <li><Link to="/explore" onClick={() => setSidebarOpen(false)}>🔍 Explore Product</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </>   
  );
}

export default Header; 