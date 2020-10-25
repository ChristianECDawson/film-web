import React, { useEffect, useState } from 'react';
import {isEmpty} from "lodash";
import logo from './logo.svg';
import './App.css';
import { createFilm, fetchFilms } from "./services/FilmApiService";
import CreateFilmForm from "./components/CreateFilmForm";
import SearchFilmForm from "./components/SearchFilmForm";

function App() {
  const [films, setFilms] = useState([]);
  const [title, setTitle] = useState(null);
  
  async function refreshFilms() {
    const _films = await fetchFilms({title: title});
    console.log("FILMS", _films);
    
    setFilms(_films);
  }

  useEffect(() => {
    refreshFilms();
  }, [title]); // run once, or whenever a dependency changes

  async function onSubmit({ title }) {
    try {
      await createFilm({ title: title });
      refreshFilms();
    } catch (err) {
      console.log(err);
    }
  };

  async function handleTitleChange({ title }){
    setTitle(title)
  }

  function renderFilm(film, index) {
    return <li key={`film_${index}`}>{film.title}</li>
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <CreateFilmForm onSubmit={onSubmit} />
          <SearchFilmForm onTitleChange = {handleTitleChange} />
          {!isEmpty(films) && (
          <ul id = "films">
            {films.map(renderFilm)}
          </ul>
          )}
      </header>
    </div>
  );
}

export default App;

/* Theming
- extract the two forms into separate components
- style each with emotion (suggest just add color for a start)
- create a theme
- use theme to apply color
- create a form for choosing theme
- update theme based on choice
*/