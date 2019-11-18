import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import axios from "axios";

import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import MovieCard from "./Movies/MovieCard";

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);

  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <Route path="/" render={props => <SavedList list={savedList} />} />
      <Route exact path="/" render={(props) => <MovieList movies={movies} />} />
      <Route path="/movies/:id" render={(props) => <MovieCard {...props} movies={movies} /> }/>
    </div>
  );
};

export default App;
