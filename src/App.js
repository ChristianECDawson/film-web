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
    <App_Main>

      <Button_Header>Button component</Button_Header>

      <Button_Container row>
        <Button as = "a" 
          href = "https://www.linkedin.com/in/christian-dawson-674b841b6/">
          Linked<a>In</a></Button>
        <Button primary>Value</Button>
        <Button color="green">Green</Button>
        <Button color="red">Red</Button>
        <Button primary color="yellow">Yellow</Button>
      </Button_Container>

      <Form_Container row>
        <CreateFilmForm css = {Create_Film_Form} onSubmit={onSubmit} />
        <SearchFilmForm css = {Search_Film_Form} onTitleChange = {handleTitleChange} />
      </Form_Container>

      {!isEmpty(films) && (
        <ul id = "films">
          {films.map(renderFilm)}
        </ul>
      )}

    </App_Main>
  );
  
}

export default App;

const App_Main = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Button_Header = styled.header`
  color : hotpink;
  font-size: 50px;
`;

const Button_Container = styled.div`(props => ({
  display: 'flex',
  flexDirection: props.row && 'row'
}))`;

const Button = styled.button`
  background-color: ${props =>
      props.color ? props.color: 'grey' };
  color: ${props =>
      props.primary ? 'black' : 'white'};
    & > a {
      color: 'hotpink';
    }  
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 50px;
`;

const Form_Container = styled.div`(props => ({
  display: 'flex',
  flexDirection: props.row && 'row'
}))`;

const Create_Film_Form = styled.form`
  font-size: 50px;
`;

const Search_Film_Form = styled.form`
  font-size: 50px;
`;


/* Theming
- extract the two forms into separate components
- style each with emotion (suggest just add color for a start)
- create a theme
- use theme to apply color
- create a form for choosing theme
- update theme based on choice
*/