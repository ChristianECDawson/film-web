import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import {isEmpty} from "lodash";
import logo from './logo.svg';
import './App.css';
import { createFilm, fetchFilms } from "./services/FilmApiService";

function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const [films, setFilms] = useState([]);
  
  async function refreshFilms() {
    const _films = await fetchFilms();
    console.log("FILMS", _films);
    
    setFilms(_films);
  }

  useEffect(() => {
    refreshFilms();
  }, []); // run once, or whenever a dependency changes

  async function onSubmit({ title }) {
    try {
      await createFilm({ title: title });
      refreshFilms();
    } catch (err) {
      console.log(err);
    }
  };

  function renderFilm(film, index) {
    return <li key={`film_${index}`}>{film.title}</li>
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">Title</label>
            <input name="title" ref={register({ required: true })} />            
            {errors.titleRequired && <span>This field is required</span>}
            
            <input type="submit" />
          </form>        
          {!isEmpty(films) && (
          <ul>
            {films.map(renderFilm)}
          </ul>
          )}
      </header>
    </div>
  );
}

export default App;
