import React, { useState, useEffect } from "react";
import heroIlustration from "../Images/hero-section-ilustration.png";

function Home({ handleClick }) {
  const subtitle = {
    maxWidth: 450,
    marginTop: 10,
  };
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          "https://www.omdbapi.com/?apikey=7e698aea&type=movie&s=oppenheimer&y=2023"
        );
        const data = await response.json();
        if (data && data.Search && data.Search.length > 0) {
          setMovieData(data.Search[0]); 
        }
      } catch (error) {
        console.log("Error fetching movie data", error);
      }
    };

    fetchMovieData();
  }, []);

  return (
    <div>
      <div className="container my-5 text-light fs-5 fw-bold">
        <div className="row">
          <div className="col-md-6 align-items-center">
            <div className="d-flex flex-column justify-content-center h-100">
              <span className="h1">Explore the Cinematic Universe</span>
              <p style={subtitle}>
                Search, rate, and discover movies from every genre and era. Get
                access to in-depth information and ratings, and find your next
                movie obsession.
              </p>
              <div className="d-flex">
                <div className="p-2">
                  <button
                    className="btn btn-primary explorebtn transition"
                    onClick={handleClick}
                  >
                    Explore the Platform
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <img src={heroIlustration} className="w-100" />
          </div>
        </div>

        <div className="container">
          <h2>About</h2>
          <p>
            Welcome to Silver Screenings, the ultimate destination for all movie
            enthusiasts. Whether you're a fan of classic Hollywood films or the
            latest indie hits, our carefully curated selection of movies will
            satisfy your every craving. From romantic comedies to spine-tingling
            horror flicks, we've got it all covered.
          </p>
          <p>
            Take a break from your daily routine, grab some popcorn, and immerse
            yourself in the magic of the silver screen. Our platform offers
            in-depth information and ratings for each movie, making it easy for
            you to find your next movie obsession. And with new titles added
            regularly, there's always something new to discover.
          </p>
          <p>
            At Silver Screenings, we believe that the journey is just as
            important as the destination. Let us take you on a journey through
            the cinematic universe, where you can explore different genres,
            eras, and cultures. And if you ever need help finding your new
            favorite film, our team of experts is always ready to assist you.
          </p>
          <p>
            Join our community of movie lovers today and experience the thrill
            of the silver screen like never before. At Silver Screenings, the
            show never ends!
          </p>
        </div>
        <h2 className="p-2">Highly Anticipated Movie:</h2>
        <div className="container-fluid my-2">
          {movieData && (
            <div class="card mb-3 my-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src={movieData.Poster}
                    class="img-fluid rounded-start"
                    alt="Oppenheimer poster"
                  />
                </div>
                <div class="col-sm-12 col-md-8">
                  <div class="card-body">
                    <h5 class="card-title text-dark">{movieData.Title}</h5>
                    <p class="card-text text-dark">
                      Get ready to be captivated by "Oppenheimer," the upcoming
                      film that unveils the extraordinary life of J. Robert
                      Oppenheimer, the mastermind behind the creation of the
                      atomic bomb. Brace yourself for a gripping tale of
                      scientific brilliance, moral dilemmas, and the weight of
                      unleashing unprecedented power on the world stage.
                    </p>
                    <div className="container">
                      <iframe
                        className="embed-responsive-item"
                        src="https://www.youtube.com/embed/uYPbbksJxIg"
                        title="Oppenheimer Trailer"
                        allowFullScreen
                        style={{ width: "100%", height: "350px" }}
                        ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
