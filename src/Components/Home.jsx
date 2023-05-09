import React from 'react'
import heroIlustration from '../Images/hero-section-ilustration.png';

function Home(props) {
    const {showText, setShowText} = props;
    
  const subtitle = {
    maxWidth: 450,
    marginTop: 10,
  };
  return (
    <div>
      <div className="container my-5 text-light fs-5 fw-bold">
          <div className="row">

            <div className="col-md-6 align-items-center">
              <div className='d-flex flex-column justify-content-center h-100'>
                <span className='h1'>
                  Explore the Cinematic Universe
                </span>
                <p style={subtitle}>
                  Search, rate, and discover movies from every genre and era.
                  Get access to in-depth information and ratings,
                  and find your next movie obsession.
                </p>
                <div className='d-flex'>
                  <div className='p-2'>
                    <button className='btn btn-primary'>Create a FREE Profile</button>

                  </div>
                  <div className='p-2'>
                    <button className='btn btn-light'>Explore the platform</button>

                  </div>
                </div>
              </div>


            </div>

            <div className="col-md-6">
              <img src={heroIlustration} className='w-100' />

            </div>

          </div>


          <div className='container'>
            <h2>About</h2>
            <p>
              Welcome to Silver Screenings,
              the place where you can discover and explore the world of movies.
              From classic Hollywood films to modern indie hits, our carefully
              curated selection will satisfy any movie lover's appetite. Grab some popcorn, sit back,
              and immerse yourself in the magic of the silver screen. Let us take you on a journey through the cinematic universe and help you find your new favorite film. At Silver Screenings, the show never ends!

            </p>

            <h2>About</h2>
            <p>
              Welcome to Silver Screenings,
              the place where you can discover and explore the world of movies.
              From classic Hollywood films to modern indie hits, our carefully
              curated selection will satisfy any movie lover's appetite. Grab some popcorn, sit back,
              and immerse yourself in the magic of the silver screen. Let us take you on a journey through the cinematic universe and help you find your new favorite film. At Silver Screenings, the show never ends!

            </p>


            <h2>About</h2>
            <p>
              Welcome to Silver Screenings,
              the place where you can discover and explore the world of movies.
              From classic Hollywood films to modern indie hits, our carefully
              curated selection will satisfy any movie lover's appetite. Grab some popcorn, sit back,
              and immerse yourself in the magic of the silver screen. Let us take you on a journey through the cinematic universe and help you find your new favorite film. At Silver Screenings, the show never ends!

            </p>

          </div>

        </div>
    </div>
  )
}

export default Home
