/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import {isEmpty, isNil } from "lodash";

function FilmList(props) {
    const {films} = props; 

    function renderFilm(film, index) {
        return <li key={`film_${index}`}>{film.title}</li>
    }

    if (isEmpty(films)) {
        return null;
    }
    return (
        <ul id = "films" style = {css`
            grid-area: main;
        `}>
            {films.map(renderFilm)}
        </ul>
    )
}

export default FilmList;