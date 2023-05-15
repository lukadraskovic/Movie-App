import React, { useEffect, useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Featured = ({ getMovieDetails }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=7e698aea&type=movie&s=wick`
        );
        const data = await response.json();
        if (data.Response === "True") {
          const slicedMovies = data.Search.slice(0, 4);
          setMovies(slicedMovies);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleSelectMovie = async (movie) => {
    const movieDetails = await getMovieDetails(movie.imdbID);
    setSelectedMovie(movieDetails);
  };

  return (
    <div className="container">
        <>
          <h2 className="text-light p-2 my-4">Featured Selection: Dive into the Intense John Wick Movie Saga</h2>
          <p className="p-2 text-light">
          The release of "John Wick 4" has not only elevated the popularity of its predecessors but has also breathed new life into the earlier films. As fans eagerly awaited the latest installment, the buzz and excitement surrounding the franchise reached a fever pitch. With the release of "John Wick 4," audiences were reminded of the exhilarating action, masterful storytelling, and iconic performances that made the series a global sensation. Moviegoers who may have missed out on the earlier movies rushed to catch up on the thrilling adventures of John Wick, experiencing the pulse-pounding intensity and witnessing the evolution of the character. As "John Wick 4" hit the screens, it reignited discussions, sparked renewed interest, and propelled the entire franchise to even greater heights of popularity cementing its status as a modern action phenomenon.
                      </p>
        </>
      
      <div className="container">
        <div className="row">
          {movies.map((movie) => (
            <div className="col-md-3" key={movie.imdbID}>
              <Link
                to={`/movie/${movie.imdbID}`}
                className="card shadow-sm my-2 bg-transparent movie-link"
                onClick={() => handleSelectMovie(movie)}
                >
                <img
                  className="bd-placeholder-img card-img-top"
                  height="225px"
                  src={movie.Poster}
                  alt={movie.Title}
                />

                <div className="card-body bg-transparent">
                  <p className="card-text text-white">
                    {movie.Title.length > 20
                      ? movie.Title.substring(0, 20) + "..."
                      : movie.Title}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        >
                        {movie.Type === "movie" ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tv" viewBox="0 0 16 16">
  <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/>
</svg> : "TV"}
                      </button>
                    </div>
                    <small className="text-muted text-white">
                      {movie.Year}
                    </small>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;

