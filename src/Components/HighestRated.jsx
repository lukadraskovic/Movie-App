import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../index.css';

const HighestRated = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovieData = async (title) => {
    const response = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=7e698aea`);
    const movieData = await response.json();
    return movieData;
  };

  const fetchMovies = async () => {
    const movieTitles = [
      "The Shawshank Redemption",
      "The Godfather",
      "The Dark Knight",
      "Pulp Fiction",
      "Fight Club",
      "Inception",
      "The Matrix",
      "Goodfellas",
      "The Lord of the Rings: The Fellowship of the Ring",
      "Forrest Gump"
    ];

    const movieDataPromises = movieTitles.map((title) => fetchMovieData(title));
    const movieData = await Promise.all(movieDataPromises);
    setMovies(movieData);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="container">
      <div className="row">
          <>
            <h2 className="text-light p-2 my-4">Highest Rated Movies:</h2>
            <p className="text-light">
              Highest rated movies are the cream of the crop in the world of cinema, representing the pinnacle of storytelling, acting, and filmmaking. These movies have captivated audiences and critics alike, standing the test of time and leaving an indelible mark on the film industry. With exceptional narratives, memorable characters, and masterful direction, highest rated movies have the power to transport viewers to different worlds, evoke a range of emotions, and provoke thought-provoking discussions. From timeless classics like "The Shawshank Redemption" and "The Godfather" to modern masterpieces like "The Dark Knight" and "Inception," these films have earned their acclaim through their exceptional craftsmanship, compelling narratives, and their ability to resonate with audiences across generations. Highest rated movies not only entertain but also inspire, challenge conventions, and leave a lasting impact on those fortunate enough to experience them.
            </p>
          </>
        

        {movies.map((movie) => (
          <div className="col-md-3" key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`} className="movie-link">
              <div className="card shadow-sm my-2 bg-transparent">
                <img className="bd-placeholder-img card-img-top" width="100%" height="225px" src={movie.Poster} alt={movie.Title} />
                <div className="card-body bg-transparent">
                  <p className="card-text text-white">
                    {movie.Title.length > 20 ? `${movie.Title.substring(0, 20)}...` : movie.Title}
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighestRated;
