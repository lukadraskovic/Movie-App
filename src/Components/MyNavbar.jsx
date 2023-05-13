// import React, {useRef} from "react";
// import { Link } from "react-router-dom";
// import "../index.css";
// function MyNavbar({searchInput, setSearchInput, inputRef}) {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <nav className="navbar px-4 navbar-expand-lg navbar-dark shadow bg-custom-dark">
//       <a className="navbar-brand p-2" href="/">
//         SilverScreen
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <form onSubmit={handleSubmit} id="search-input-form">
//         <input
//           type="text"
//           className="bg-white form-control rounded-lg w-100 p-2 px-3"
//           placeholder="Search by title, character or genre"
//           aria-label="Search"
//           value={searchInput}
//           onChange={(e) => setSearchInput(e.target.value)}
//           ref={inputRef}
//         />
//       </form>
//       <div className="collapse navbar-collapse justify-content-center">
//         <ul className="navbar-nav ms-auto">
//           <li className="nav-item active">
//             <a className="nav-link bold color-primary" href="/">
//               Home
//             </a>
//           </li>
//           <li className="nav-item">
//             <Link to="/highest-rated" className="nav-link bold text-white">
//               Highest Rated
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/popular" className="nav-link bold text-white">
//               Popular this week
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default MyNavbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function MyNavbar({ searchInput, setSearchInput, inputRef }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar px-4 navbar-expand-lg navbar-dark shadow bg-custom-dark">
      <a className="navbar-brand p-2" href="/">
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
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="nav-link bold color-primary" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <Link to="/highest-rated" className="nav-link bold text-white">
              Highest Rated
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/featured" className="nav-link bold text-white">
               Featured
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MyNavbar;
