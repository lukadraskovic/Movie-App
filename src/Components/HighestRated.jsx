import React, { useEffect, useState } from "react";

const HighestRated = () => {
  const [highestRatedMovies, setHighestRatedMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = `https://www.omdbapi.com/?apikey=7e698aea&s=&y=&r=json&type=movie&v=1&sort=imdbRating&tomatoes=false&metacritic=false&imdbRating=9.0`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.Search) {
        setHighestRatedMovies(data.Search);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Highest Rated Movies</h2>
      {highestRatedMovies.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>Year: {movie.Year}</p>
          <p>Type: {movie.Type}</p>
          <p>IMDB Rating: {movie.imdbRating}</p>
        </div>
      ))}
    </div>
  );
};

export default HighestRated;

  
