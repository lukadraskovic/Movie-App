// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import '../index.css';
// const HighestRated = ({searchInput}) => {
//   const [movies, setMovies] = useState([]);

//   const fetchMovieData = async (title) => {
//     const apiKey = "7e698aea";
//     const response = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
//     const movieData = await response.json();
//     return movieData;
//   };

//   useEffect(() => {
//     const fetchMovies = async () => {
//       const movieTitles = [
//         "The Shawshank Redemption",
//         "The Godfather",
//         "The Dark Knight",
//         "Pulp Fiction",
//         "Fight Club",
//         "Inception",
//         "The Matrix",
//         "Goodfellas",
//         "The Lord of the Rings: The Fellowship of the Ring",
//         "Forrest Gump"
//       ];

//       const movieDataPromises = movieTitles.map((title) => fetchMovieData(title));
//       const movieData = await Promise.all(movieDataPromises);
//       setMovies(movieData);
//     };

//     fetchMovies();
//   }, []);

//   return (
//     <div className="container">
//       <div className="row">
//         <h2 className="text-light p-2 my-4">Highest Rated Movies:</h2>
//         <p className="text-light">
//           Highest rated movies are the cream of the crop in the world of cinema, representing the pinnacle of storytelling, acting, and filmmaking. These movies have captivated audiences and critics alike, standing the test of time and leaving an indelible mark on the film industry. With exceptional narratives, memorable characters, and masterful direction, highest rated movies have the power to transport viewers to different worlds, evoke a range of emotions, and provoke thought-provoking discussions. From timeless classics like "The Shawshank Redemption" and "The Godfather" to modern masterpieces like "The Dark Knight" and "Inception," these films have earned their acclaim through their exceptional craftsmanship, compelling narratives, and their ability to resonate with audiences across generations. Highest rated movies not only entertain but also inspire, challenge conventions, and leave a lasting impact on those fortunate enough to experience them.
//         </p>
//         {movies.map((movie) => (
//           <div className="col-md-3" key={movie.imdbID}>
//             <Link to={`/movie/${movie.imdbID}`} className="movie-link">
//               <div className="card shadow-sm my-2 bg-transparent">
//                 <img className="bd-placeholder-img card-img-top" width="100%" height="225px" src={movie.Poster} alt={movie.Title} />
//                 <div className="card-body bg-transparent">
//                   <p className="card-text text-white">
//                     {movie.Title.length > 20 ? `${movie.Title.substring(0, 20)}...` : movie.Title}
//                   </p>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <div className="btn-group">
//                       <button type="button" className="btn btn-sm btn-outline-secondary">
//                         {movie.Type === "movie" ? "Movie" : "TV"}
//                       </button>
//                     </div>
//                     <small className="text-muted text-white">{movie.Year}</small>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//      </div>
//     </div>
//   );
// };
// export default HighestRated;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../index.css';

const HighestRated = ({ searchInput }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovieData = async (title) => {
    const apiKey = "7e698aea";
    const response = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
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

  useEffect(() => {
    const searchMovies = async () => {
      if (searchInput === "") {
        fetchMovies();
      } else {
        const movieData = await fetchMovieData(searchInput);
        if (movieData.Response === "True") {
          setMovies([movieData]);
        } else {
          setMovies([]);
        }
      }
    };

    searchMovies();
  }, [searchInput]);

  return (
    <div className="container">
      <div className="row">
        {searchInput.length === 0 && (
          <>
            <h2 className="text-light p-2 my-4">Highest Rated Movies:</h2>
            <p className="text-light">
              Highest rated movies are the cream of the crop in the world of cinema, representing the pinnacle of storytelling, acting, and filmmaking. These movies have captivated audiences and critics alike, standing the test of time and leaving an indelible mark on the film industry. With exceptional narratives, memorable characters, and masterful direction, highest rated movies have the power to transport viewers to different worlds, evoke a range of emotions, and provoke thought-provoking discussions. From timeless classics like "The Shawshank Redemption" and "The Godfather" to modern masterpieces like "The Dark Knight" and "Inception," these films have earned their acclaim through their exceptional craftsmanship, compelling narratives, and their ability to resonate with audiences across generations. Highest rated movies not only entertain but also inspire, challenge conventions, and leave a lasting impact on those fortunate enough to experience them.
            </p>
          </>
        )}

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
                        {movie.Type === "movie" ? "Movie" : "TV"}
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

