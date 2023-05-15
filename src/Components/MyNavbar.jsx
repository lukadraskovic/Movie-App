import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";

function MyNavbar({ searchInput, setSearchInput, inputRef }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar px-4 navbar-expand-lg navbar-dark shadow bg-custom-dark">
      <a className="navbar-brand p-2 color-primary" href="/">
        SilverScreen
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
        id="navbarNav"
      >
        <form onSubmit={handleSubmit} id="search-input-form" className='w-100'>
          <input
            type="text"
            className="bg-white form-control rounded-lg p-2 px-3"
            placeholder="Search..."
            aria-label="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            ref={inputRef}
          />
        </form>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link bold text-white ${isActiveLink("/") ? "active-link" : ""}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/highest-rated"
              className={`nav-link bold text-white ${isActiveLink("/highest-rated") ? "active-link" : ""}`}
            >
              Highest Rated
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/featured"
              className={`nav-link bold text-white ${isActiveLink("/featured") ? "active-link" : ""}`}
            >
              Featured
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MyNavbar;
