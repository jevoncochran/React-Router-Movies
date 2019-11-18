import React, { useState } from 'react';
import { Route } from "react-router-dom";

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

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
      <Route path="/" render={props=> <SavedList list={savedList} {...props} />} />
      <Route exact path="/" render={props => <MovieList />}/>
      <Route path="/movies/:id" render={props => <Movie {...props} />}/>
    </div>
  );
};

export default App;
