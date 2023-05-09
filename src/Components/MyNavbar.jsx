import React, {useRef} from "react";
import { Link } from "react-router-dom";
import "../index.css";
function MyNavbar({searchInput, setSearchInput, inputRef}) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <nav className="navbar px-4 navbar-expand-lg navbar-dark shadow bg-custom-dark">
      <a className="navbar-brand p-2" href="/">
        SilverScreen
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <form onSubmit={handleSubmit} id="search-input-form">
        <input
          type="text"
          className="bg-white form-control rounded-lg w-100 p-2 px-3"
          placeholder="Search by title, character or genre"
          aria-label="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          ref={inputRef}
        />
      </form>
      <div class="collapse navbar-collapse justify-content-center">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item active">
            <a class="nav-link bold color-primary" href="/">
              Home
            </a>
          </li>
          <li class="nav-item">
            <Link to="/highest-rated" className="nav-link bold text-white">
              Highest Rated
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link bold text-white" href="/">
              New Releases
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MyNavbar;
