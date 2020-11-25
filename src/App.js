import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { createFilm, fetchFilms } from "./services/FilmApiService";
import CreateFilmForm from "./components/CreateFilmForm";
import SearchFilmForm from "./components/SearchFilmForm";
import Button from "./components/Button";
import Container from "./components/Container";
import PrimaryButton from './components/PrimaryButton';
import FilmList from './components/FilmList';
import Header from './components/Header';
import Grid from './components/Grid';

function App() {
    const [films, setFilms] = useState([]);
    const [title, setTitle] = useState(null);

    const [isReady, setIsReady] = useState(false);

    async function refreshFilms() {
        const _films = await fetchFilms({ title: title });
        console.log("FILMS", _films);

        setFilms(_films);
        setIsReady(true);
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

    async function handleTitleChange({ title }) {
        setTitle(title)
    }

    if (!isReady) {
        return null;
    }

    return ( 
        <Grid>
            <App_Main>

                <Header textColor = "hotpink"> Button component </Header>

                <Container row>
                    <Button as = "a" href = "https://www.linkedin.com/in/christian-dawson-674b841b6/"> Linked < a > In </a></Button >
                    <PrimaryButton > Value </PrimaryButton> 
                    <Button backgroundColor = "green" textColor = "white" > Green </Button> 
                    <Button backgroundColor = "red" textColor = "white" > Red </Button> 
                    <Button backgroundColor = "yellow" > Yellow </Button> 
                </Container>

                <Container row >
                    <CreateFilmForm onSubmit = { onSubmit }/> 
                    <SearchFilmForm onTitleChange = { handleTitleChange }/>
                </Container>

                <FilmList films = { films }/>

            </App_Main>
        </Grid>    
    );

}

export default App;

const App_Main = styled.div `
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

/* Theming
- extract the two forms into separate components
- style each with emotion (suggest just add color for a start)
- create a theme
- use theme to apply color
- create a form for choosing theme
- update theme based on choice
*/