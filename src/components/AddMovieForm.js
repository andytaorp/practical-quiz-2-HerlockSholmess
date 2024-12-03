import React, { useState } from "react";

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTitle= {
      id: Date.now(),
      movie: title.trim(),
      watched: false,
    };

    onAddMovie(newTitle);
    setTitle("");
    // TODO: write code to handle form submission
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you want to watch?</h3>
      <div>
        <input
          type="text"
          placeholder="Title.."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button type="submit">Add</button>



    </form>
    
  ); // TODO: add a form to add a new movie
  
}
