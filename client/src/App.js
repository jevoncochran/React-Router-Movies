import React, { useState } from 'react';
import { Route } from "react-router-dom";

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <Route path="/" render={props=> <SavedList list={savedList} {...props} />} />
      <Route exact path="/" render={props => <MovieList />}/>
      <Route path="/movies/:id" render={props => <Movie {...props} />}/>
    </div>
  );
};

export default App;
