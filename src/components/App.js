import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";


const initialTitles = [
  { id: 1, title: "Bee movie",  watched: false },
  { id: 2, title: "Shrek 2",  watched: false },
  { id: 3, title: "Morbius",  watched: true },
];


function App() {
  const [movies, setMovies] = useState(initialTitles); // Updated state name to match context

  const handleAddMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const handleToggleWatched = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  const handleDeleteMovie = (id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      <AddMovieForm onAddMovie={handleAddMovie} />
      <MovieList 
        movies={movies} // Pass correct prop name
        onToggleWatched={handleToggleWatched}
        onDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
}


export default App;
