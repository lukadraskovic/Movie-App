import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";

const HighestRated = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);

  const fetchMovieData = async (title) => {
    const apiKey = "7e698aea";
    const response = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
    const movieData = await response.json();
    return movieData;
  };

  const handleShowMore = async (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
    const movieData = await fetchMovieData(movie.Title);
    setMovieDetails(movieData);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
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

    fetchMovies();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-light p-2">Highest Rated Movies:</h2>
        {movies.map((movie) => (
          <div className="col-md-3" key={movie.imdbID}>
            <div className="card shadow-sm my-2 bg-transparent">
              <img className="bd-placeholder-img card-img-top" width="100%" height="225px" src={movie.Poster} alt={movie.Title} />
              <div className="card-body bg-transparent">
                <p className="card-text text-white">
                  {movie.Title.length > 20 ? `${movie.Title.substring(0, 20)}...` : movie.Title}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">
                      {movie.Type === "movie" ? "Movie" : "TV"}
                    </button>
                    <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => handleShowMore(movie)}>
                      Show More
                    </button>
                  </div>
                  <small className="text-muted text-white">{movie.Year}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
        {selectedMovie && (
          <Modal show={showModal} onHide={handleCloseModal} className="modal-transparent">
            <Modal.Body>
              <Modal.Header closeButton>
                <Modal.Title>
                  {selectedMovie ? selectedMovie.Title : "Loading..."}
                </Modal.Title>
              </Modal.Header>
              {selectedMovie && (
                <div className="d-flex justify-content-between">
                  <img
                    src={selectedMovie.Poster}
                    alt="unavailable"
                    className="mr-4 modal-pic"
                  />
                  <div className="mx-5 h-100 pt-2">
                  <p className="border-bottom border-bottom-md-primary">
                      Year: {selectedMovie.Year}
                    </p>
                    <p className="border-bottom border-bottom-md-primary">
                      Rated: {selectedMovie.Rated}
                    </p>
                    <p className="border-bottom border-bottom-md-primary">
                      Released: {selectedMovie.Released}
                    </p>
                    <p className="border-bottom border-bottom-md-primary">
                      Runtime: {selectedMovie.Runtime}
                    </p>
                    <p className="border-bottom border-bottom-md-primary">
                      Genre: {selectedMovie.Genre}
                    </p>
                    <p className="border-bottom border-bottom-md-primary">
                      Director: {selectedMovie.Director}
                    </p>
                    <p className="border-bottom border-bottom-md-primary">
                      Writer: {selectedMovie.Writer}
                    </p>
                    <p className="border-bottom border-bottom-md-primary">
                      Actors: {selectedMovie.Actors}
                    </p>
                    <p className="border-bottom border-bottom-md-primary">
                      Plot: {selectedMovie.Plot}
                    </p>
                    <p className="border-bottom border-bottom-md-primary">
                      Rating: {selectedMovie.imdbRating}
                    </p>
                  </div>
                </div>
              )}
            </Modal.Body>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default HighestRated;
