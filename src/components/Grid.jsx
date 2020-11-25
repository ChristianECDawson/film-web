/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { isNil } from "lodash";
import CreateFilmForm from "./CreateFilmForm";
import SearchFilmForm from "./SearchFilmForm";
import Button from "./Button";
import FilmList from './FilmList';
import Header from './Header';

function Grid(props) {
    const {children, Header, Button, FilmList, SearchFilmForm, CreateFilmForm} = props;

    return (
        <div style = {css`
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr
            grid-template-rows: auto;
            grid-template-areas:
                "${Header} ${Header} ${Button} ${Button}"
                "${FilmList} . ${SearchFilmForm} ${CreateFilmForm}"
                "footer footer footer footer";
        `}>
        {children}    
        </div>  
    )
}

export default Grid;