import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./Components/MyNavbar";
import MovieResults from "./Components/MovieResults";
import "./index.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import HighestRated from "./Components/HighestRated";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showResults, setShowResults] = useState(false);
    const getMovieData = async (searchInput) => {
    const url = `http://www.omdbapi.com/?apikey=7e698aea&s=${searchInput}`;
    const response = await fetch(url);
    const responseJSON = await response.json();

      
    if (responseJSON.Search) {
      setMovies(responseJSON.Search.slice(0, 1));
      setShowResults(true);
    }
  };

  const getSimilarMovieData = async (movie) => {
    const url = ` http://www.omdbapi.com/?apikey=7e698aea&s=${movie.Title}`;
    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setSimilarMovies(responseJSON.Search.slice(1, 9));
    }
  };

  const getMovieDetails = async (id) => {
    const url = `http://www.omdbapi.com/?apikey=7e698aea&i=${id}`;
    const response = await fetch(url);
    const responseJSON = await response.json();
    return responseJSON;
  };
  

  useEffect(() => {
    if (searchInput !== "") {
      getMovieData(searchInput);
    } else {
      setMovies([]);
    }
  }, [searchInput]);

  useEffect(() => {
    if (movies.length > 0) {
      getSimilarMovieData(movies[0]);
    }
  }, [movies]);

  return (
    <Router>
      <MyNavbar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        getMovieData={getMovieData}
      />
      <Routes>
        <Route
          path="/"
          element={
            showResults ? (
              <MovieResults
                movies={movies}
                similarMovies={similarMovies}
                getSimilarMovieData={getSimilarMovieData}
                getMovieDetails={getMovieDetails}
              />
            ) : (
              <Home/>
            )
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
