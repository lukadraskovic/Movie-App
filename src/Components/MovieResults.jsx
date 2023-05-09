import React from "react";
import Movie from "./Movie";
import SimilarMovies from "./SimilarMovies";

function MovieResults({ movies, similarMovies, getSimilarMovieData, getMovieDetails }) {
  return (
    <>
      {movies.map((movie) => (
        <div className="container" key={movie.imdbID}>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <Movie
                movie={movie}
                getSimilarMovieData={getSimilarMovieData}
                getMovieDetails={getMovieDetails}
              />
            </div>
          </div>
        </div>
      ))}
      {similarMovies.length > 0 && (
        <SimilarMovies
          movies={similarMovies}
          getSimilarMovieData={getSimilarMovieData}
          getMovieDetails={getMovieDetails}
        />
      )}
    </>
  );
}

export default MovieResults;