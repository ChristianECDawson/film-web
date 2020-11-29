/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { isEmpty } from "lodash";

function FilmList(props) {
    const {films} = props; 

    function renderFilm(film, index) {
        return <li key={`film_${index}`}>{film.title}</li>
    }

    if (isEmpty(films)) {
        return null;
    }
    return (
        <ul id = "films" css = {css`
        line-height: 2;
        `}>
            {films.map(renderFilm)}
        </ul>
    )
}

export default FilmList;