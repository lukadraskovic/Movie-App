import React, { useState, useEffect } from 'react';

function HighestRated() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const url = `http://www.omdbapi.com/?apikey=7e698aea&s=&type=movie&r=json&v=1&sort=votes`;
      const response = await fetch(url);
      const responseJSON = await response.json();

      if (responseJSON.Search) {
        setMovies(responseJSON.Search);
      }
    }
    fetchMovies();
  }, []);

  const sortedMovies = movies.sort((a, b) => b.imdbRating - a.imdbRating);

  return (
    <div className="container">
      {/* <div className="row">
        {sortedMovies.map((movie) => (
          <div className="col-md-4" key={movie.imdbID}>
            <div className="card">
              <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">Rating: {movie.imdbRating}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <p>12312312312</p>
    </div>
  );
}

export default HighestRated;
