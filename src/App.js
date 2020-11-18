import React, { useEffect, useState } from 'react';
import {isEmpty} from "lodash";
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
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
    <div className = "App"/*css={main}*/>
      <header className = "App-header"/*css={main_header}*/>
        <h1>Badge component</h1>
        <PrimaryBadge>Value</PrimaryBadge>
        <Badge>Default</Badge>
        <Badge variantColor="green">Green</Badge>
        <Badge variantColor="red">Red</Badge>
        <Badge variantColor="yellow" color = "#444">Yellow</Badge>
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


/*
const main = css`
  text-align: center;
  display: felx;
  background-color: #282c34;
`;

const main_header = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
*/

const Badge = styled.span`
    background-color: ${props =>
       props.variantColor ? props.variantColor: 'grey' };
    color: ${props => props.color ? props.color : "#fff"};
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
  `;

const PrimaryBadge = styled(Badge)`
  background-color: #ddd;
  color: #444;
`;

/* Theming
- extract the two forms into separate components
- style each with emotion (suggest just add color for a start)
- create a theme
- use theme to apply color
- create a form for choosing theme
- update theme based on choice
*/