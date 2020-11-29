/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import CreateFilmForm from "./CreateFilmForm";
import SearchFilmForm from "./SearchFilmForm";
import Button from "./Button";
import PrimaryButton from "./PrimaryButton";
import FilmList from './FilmList';
import Header from './Header';
import Container from './Container';

function HomePageLayout(props) {
    // const {children, Header, Button, FilmList, SearchFilmForm, CreateFilmForm} = props;
    const { onSubmit, onTitleChange, films } = props;

    return (
        <div css = {css`
            background-color: #282c34;
            min-height: 100vh;
            font-size: calc(10px + 2vmin);
            color: white;
            padding: 16px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: auto;
            grid-template-areas:
                ". header header ."
                "search-film-form  . .  create-film-form"
                ". . . film-list"
                ". footer footer ."
         `}>
        
            <div css = {css` grid-area: header`}>
                <Header textColor = "hotpink"> Button component </Header>
            </div>

            <div css = {css` grid-area: footer`}>
                <Container row>
                        <a href = "https://www.linkedin.com/in/christian-dawson-674b841b6/" target = "_blank"><img src="images/Linked.jpg" alt = "" width = "100" height = "100"/></a>
                        <PrimaryButton > Value </PrimaryButton> 
                        <Button backgroundColor = "green" textColor = "white" > Green </Button> 
                        <Button backgroundColor = "red" textColor = "white" > Red </Button> 
                        <Button backgroundColor = "yellow" > Yellow </Button> 
                </Container>
            </div>

            <div css = {css` grid-area: create-film-form`}>
                <Container row >
                    <CreateFilmForm onSubmit = { onSubmit }/> 
                </Container>
            </div>

            <div css = {css` grid-area: search-film-form`}>
                <Container row >
                    <SearchFilmForm onTitleChange = { onTitleChange }/>
                </Container>
            </div>

            <div css = {css` grid-area: film-list`}>
                <FilmList films = { films }/>
            </div>
                
        </div>
    );
}

export default HomePageLayout;
