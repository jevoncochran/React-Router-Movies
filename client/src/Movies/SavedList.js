import React from 'react';
import { Link } from "react-router-dom";

const SavedList = props => {
  const goToHome = () => {props.history.push("/")}
  return (
    <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div onClick={goToHome} className="home-button">Home</div>
  </div>
  )
};

export default SavedList;
