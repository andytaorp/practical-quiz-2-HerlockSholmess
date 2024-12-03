import React from "react";

export default function Movie({ movie, onDeleteMovie, onToggleWatched }) {
  const movieStyle = movie.watched ? { textDecoration: "line-through" } : {};

  return (
    <li style={movieStyle}>
      {movie.title}
      <input
        type="checkbox"
        checked={movie.watched}
        onChange={() => onToggleWatched(movie.id)}
      />
      <button onClick={() => onDeleteMovie(movie.id)}>❌</button>
    </li>
  );
}


/**
 * TODO: implement the Movie component
 * A single movie item in the movie list, with a checkbox to mark it
 * watched, a text span for the title, and a delete button.
 */

