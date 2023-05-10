import React, { useEffect, useState } from "react";
import "../index.css";
import { Button, Modal } from "react-bootstrap";

const Popular = ({ getMovieDetails, movie }) => {
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=7e698aea&type=movie&s=wick`
        );
        const data = await response.json();
        if (data.Response === "True") {
          setMovies(data.Search);
          const slicedMovies = data.Search.slice(0, 4);
          setMovies(slicedMovies);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleShowModal = async (movie) => {
    const movieDetails = await getMovieDetails(movie.imdbID);
    setMovieDetails(movieDetails);
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <h2 className="text-light p-2">Popular this week:</h2>
      <p className="p-2 text-light">
        The release of "John Wick 4" has not only elevated the popularity of its
        predecessors but has also breathed new life into the earlier films. As
        fans eagerly awaited the latest installment, the buzz and excitement
        surrounding the franchise reached a fever pitch. With the release of
        "John Wick 4," audiences were reminded of the exhilarating action,
        masterful storytelling, and iconic performances that made the series a
        global sensation. Moviegoers who may have missed out on the earlier
        movies rushed to catch up on the thrilling adventures of John Wick,
        experiencing the pulse-pounding intensity and witnessing the evolution
        of the character. As "John Wick 4" hit the screens, it reignited
        discussions, sparked renewed interest, and propelled the entire
        franchise to even greater heights of popularity, cementing its status as
        a modern action phenomenon.
      </p>
      <div className="container">
        <div className="row">
          {movies.map((movie) => (
            <div className="col-md-3" key={movie.imdbID}>
              <div className="card shadow-sm my-2 bg-transparent">
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
                        {movie.Type === "movie" ? "Movie" : "TV"}
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => handleShowModal(movie)}
                      >
                        Show More
                      </button>
                    </div>
                    <small className="text-muted text-white">
                      {movie.Year}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} className="modal-transparent">
        <Modal.Body>
        <Modal.Header closeButton>
        <Modal.Title>
      {movieDetails ? movieDetails.Title : "Loading..."}
    </Modal.Title>
          </Modal.Header>
          {movieDetails && (
            <div className="d-flex justify-content-between">
            <img
              src={movieDetails.Poster}
              alt='unavailable'
              className="mr-4 modal-pic"
            />
            <div className="mx-5 h-100">
              <p className=" border-bottom border-bottom-md-primary">
                Year: {movieDetails.Year}
              </p>
              <p className=" border-bottom border-bottom-md-primary">
                Rated: {movieDetails.Rated}
              </p>
              <p className=" border-bottom border-bottom-md-primary">
                Released: {movieDetails.Released}
              </p>
              <p className=" border-bottom border-bottom-md-primary">
                Runtime: {movieDetails.Runtime}
              </p>
              <p className=" border-bottom border-bottom-md-primary">
                Genre: {movieDetails.Genre}
              </p>
              <p className=" border-bottom border-bottom-md-primary">
                Director: {movieDetails.Director}
              </p>
              <p className=" border-bottom border-bottom-md-primary">
                Writer: {movieDetails.Writer}
              </p>
              <p className=" border-bottom border-bottom-md-primary">
                Actors: {movieDetails.Actors}
              </p>
              <p className=" border-bottom border-bottom-md-primary">
                Plot: {movieDetails.Plot}
              </p>
              <p className=" border-bottom border-bottom-md-primary">
                Rating: {movieDetails.imdbRating}
              </p>
            </div>
          </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Popular;
