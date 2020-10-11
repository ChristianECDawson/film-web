import React from 'react';
import { useForm } from "react-hook-form";
import logo from './logo.svg';
import './App.css';
import { createFilm } from "./services/FilmApiService";

function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  
  function onSubmit({ title }) {
    try {
      createFilm({ title: title });
    } catch (err) {
      console.log(err);
    }
  };

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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
