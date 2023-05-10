import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);

  const fetchMovieDetails = async () => {
    const apiKey = "7e698aea";
    const response = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`);
    const movieData = await response.json();
    setMovie(movieData);
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-light d-flex">
        <img src={movie.Poster} alt={movie.Title} className="px-2 m-3" />
        <div className="d-flex flex-column">
      <h2 className="px-2 my-2">{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <p>Genre: {movie.Genre}</p>
      <p>Director: {movie.Director}</p>
      <p>Plot : {movie.Plot}</p>
      <p>Actors : {movie.Actors}</p>
        <p>Runtime : {movie.Runtime}</p>
        <p>IMDB : {movie.imdbRating}</p>
        </div>
    </div>
  );
};

export default MovieDetails;
