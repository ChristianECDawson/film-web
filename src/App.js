import React, { useEffect, useState } from 'react';
import { createFilm, fetchFilms } from "./services/FilmApiService";
import HomePageLayout from './components/HomePageLayout';

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <HomePageLayout onSubmit={onSubmit} onTitleChange={handleTitleChange} films={films} />  
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