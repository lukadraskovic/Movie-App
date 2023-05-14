import React, { useEffect, useState } from 'react';
import '../index.css';

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      const apiUrl1 = "https://www.omdbapi.com/?apikey=7e698aea&type=movie&s=dune&y=2023";
      const apiUrl2 = "https://www.omdbapi.com/?apikey=7e698aea&type=movie&s=indiana,jones&y=2023";
      const apiUrl3 = "https://www.omdbapi.com/?apikey=7e698aea&type=movie&s=spider-verse&y=2023";
      const apiUrl4 = "https://www.omdbapi.com/?apikey=7e698aea&type=movie&s=transformers,rise&y=2023";
    const fetchMovies = async () => {
      try {
        const response1 = await fetch(apiUrl1);
        const data1 = await response1.json();

        const response2 = await fetch(apiUrl2);
        const data2 = await response2.json();

        const response3 = await fetch(apiUrl3);
        const data3 = await response3.json();

        const response4 = await fetch(apiUrl4);
        const data4 = await response4.json();

        const moviesData = [
          ...(data1.Search || []),
          ...(data2.Search || []),
          ...(data3.Search || []),
          ...(data4.Search || [])
        ];

        setMovies(moviesData);
      } catch (error) {
        console.log("Greška prilikom dohvata podataka:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className='container'>
      <h2 className='py-2'>Upcoming Movies:</h2>
      <p className='pb-2'>Film enthusiasts can anticipate an exhilarating lineup of upcoming movies in the near future. One highly anticipated release is "Across the Spider-Verse," the much-awaited sequel to the critically acclaimed animated film "Spider-Man: Into the Spider-Verse." This sequel promises to expand the multiverse of Spider-Men and Spider-Women, delivering stunning animation, thrilling action, and a captivating storyline.

Another exciting film on the horizon is "Dune Part 2," the continuation of the epic science fiction saga based on Frank Herbert's novel. Building upon the mesmerizing world and intricate plot established in the first installment, this sequel will delve deeper into the political intrigue, rich mythology, and breathtaking visuals that have enthralled audiences.

Fans of the "Transformers" franchise will be thrilled with "Transformers: Rise of the Beasts." This latest installment takes the beloved Autobots and Decepticons in a new direction by introducing iconic characters from the "Beast Wars" era. Expect spectacular battles, awe-inspiring transformations, and a fresh twist on the beloved robotic universe.

Meanwhile, the adventures of the iconic archaeologist continue in "Indiana Jones: The Dial of Destiny." This new chapter in the beloved franchise promises thrilling escapades, ancient mysteries, and pulse-pounding action as Indiana Jones embarks on a quest to uncover the secrets of the enigmatic Dial of Destiny.

With a diverse range of genres and captivating storylines, these upcoming movies are set to enthrall audiences, transporting them to worlds filled with superheroes, intergalactic conflicts, ancient secrets, and timeless adventures. Get ready to be swept away by the magic of cinema as these films bring imagination to life on the silver screen.</p>
      <div className="row">
      {movies.map(movie => (
          <div className='col-md-3' key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title}  className='bd-placeholder-img card-img-top' height='225px'/>
          <h2 className='text-center py-1'>{movie.Title}</h2>
          <p className='text-center'>{movie.Year}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default UpcomingMovies;
