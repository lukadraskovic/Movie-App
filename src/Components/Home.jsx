import React, { useRef } from "react";
import heroIlustration from "../Images/hero-section-ilustration.png";

function Home({handleClick, inputRef}) {
  const subtitle = {
    maxWidth: 450,
    marginTop: 10,
  };
  

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
                  <button className="btn btn-primary" onClick={handleClick}>
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
      </div>
    </div>
  );
}

export default Home;
