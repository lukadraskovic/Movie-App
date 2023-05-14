      import React, { useState, useEffect } from "react";
      import heroIlustration from "../Images/hero-section-ilustration.png";
      import { useLocation } from "react-router-dom";
      import UpcomingMovies from "./UpcomingMovies";

      function Home({ handleClick }) {
        const subtitle = {
          maxWidth: 450,
          marginTop: 10,
        };
        const [movieData, setMovieData] = useState(null);
        const location = useLocation();
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
                    <h2 className="h1">Explore the Cinematic Universe</h2>
                    <p style={subtitle}>
                      Search and discover movies from every genre and era. Get
                      access to in-depth information, and find your next
                      movie obsession.  
                    </p>
                    <div className="d-flex">
                      <div className="p-2">
                        <button
                          className="btn btn-primary explorebtn transition"
                          onClick={handleClick}
                        >
                          Discover Movies
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
              <h2 className="container">Must-Watch Movie of the Year:</h2>
              <p className="container">Experience the cinematic event of the year with our "Must-Watch Movie of the Year." This highly anticipated film is poised to captivate audiences with its compelling storyline, exceptional performances, and awe-inspiring visuals. From the first frame to the closing credits, immerse yourself in a world of gripping suspense, heartfelt emotions, and unforgettable moments. Be prepared to be transported into an extraordinary cinematic journey that will keep you on the edge of your seat and leave an indelible mark. Don't miss this remarkable movie that is destined to become a timeless classic. Grab your popcorn, find a comfortable seat, and embrace the magic of the silver screen with our must-watch movie of the year</p>
              <div className="container-fluid my-2">
                {movieData && (
                  <div className="card mb-3 my-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={movieData.Poster}
                          className="img-fluid rounded-start"
                          alt="Oppenheimer poster"
                        />
                      </div>
                      <div className="col-sm-12 col-md-8">
                        <div className="card-body">
                          <h5 className="card-title text-dark container">{movieData.Title}</h5>
                          <p className="card-text text-dark container">
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
              {location.pathname === '/' && <UpcomingMovies/>}
              <div className="container py-5">
                
          <h2 className="my-2">Frequently Asked Questions:</h2>
              <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <p className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            How often are new movies added to the website?
                      </button>
          </p>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">We strive to keep our movie collection up-to-date and diverse. New movies are added regularly to ensure that our users have access to the latest releases. Our team works diligently to curate and add new titles from various genres, including blockbusters, independent films, and international cinema. You can stay informed about new movie additions by subscribing to our newsletter or following our social media channels.</div>
          </div>
        </div>
        <div className="accordion-item">
          <p className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Can I watch movies directly on the website?
            </button>
          </p>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Our website is primarily a movie database and information platform. While we provide in-depth information about movies, we do not host or stream movies directly on our site.</div>
          </div>
        </div>
        <div className="accordion-item">
          <p className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            What type of movie data is available on the website?
            </button>
          </p>
          <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">The website provides a comprehensive database of movies, including details such as titles, genres, release dates, cast and crew information.</div>
          </div>
        </div>
              </div>
      </div> 
            </div>
          </div>
        );
      }

      export default Home;
