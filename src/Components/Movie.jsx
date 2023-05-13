import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Movie({ movie }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    setShowDetails(true);
  };

  return (
    <div className="card shadow-sm my-2 bg-transparent" onClick={handleCardClick}>
      {showDetails ? (
        <Link to={`/movie/${movie.imdbID}`}>
          <img className="bd-placeholder-img card-img-top" width="100%" height="225px" src={movie.Poster} alt={movie.Title} />
        </Link>
      ) : (
        <img className="bd-placeholder-img card-img-top" width="100%" height="225px" src={movie.Poster} alt={movie.Title} />
      )}

      <div className="card-body bg-transparent">
        <p className="card-text text-white">
          {movie.Title.length > 20 ? movie.Title.substring(0, 20) + "..." : movie.Title}
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              {movie.Type === "movie" ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tv" viewBox="0 0 16 16">
  <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/>
</svg> : "TV"}
            </button>
          </div>
          <small className="text-muted text-white">{movie.Year}</small>
        </div>
      </div>
    </div>
  );
}

export default Movie;
