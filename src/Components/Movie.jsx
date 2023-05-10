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
              {movie.Type === "movie" ? "Movie" : "TV"}
            </button>
          </div>
          <small className="text-muted text-white">{movie.Year}</small>
        </div>
      </div>
    </div>
  );
}

export default Movie;
