import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Components/MyNavbar';
import Movie from './Components/Movie';
import SimilarMovies from './Components/SimilarMovies';
import './index.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import HighestRated from './Components/HighestRated';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [showText, setShowText] = useState(true);
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
    if (searchInput !== '') {
      setShowText(false);
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
      <MyNavbar searchInput={searchInput} setSearchInput={setSearchInput} getMovieData={getMovieData} />
      <Routes>
        <Route
          path="/"
          element={
            showResults ? (
              <>
                {movies.map((movie) => (
                  <div className="container" key={movie.imdbID}>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                      <div className="col">
                        <Movie movie={movie} getSimilarMovieData={getSimilarMovieData} getMovieDetails={getMovieDetails} />
                      </div>
                    </div>
                  </div>
                ))}
                {similarMovies.length > 0 && (
                  <SimilarMovies movies={similarMovies} getSimilarMovieData={getSimilarMovieData} getMovieDetails={getMovieDetails} />
                )}
              </>
            ) : (
              <Home showText={showText} setShowText={setShowText} />
              
            )
            
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
