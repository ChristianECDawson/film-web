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

//  function filmFilter() {
//    const input = document.getElementById('filmSearch');
//    const filter = input.value.toUpperCase();
//    const ul = document.getElementById("films");
//    const li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
//    for (const i = 0; i < li.length; i++) {
//      const a = li[i].getElementsByTagName("a")[0];
//      const txtValue = a.textContent || a.innerText;
//      if (txtValue.toUpperCase().indexOf(filter) > -1) {
//        li[i].style.display = "";
//      } else {
//        li[i].style.display = "none";
//      }
//    }
//  }

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
          <input type="text" id="filmSearch" onKeyDown = "filmFilter" placeholder="Search for films.."></input>        
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
