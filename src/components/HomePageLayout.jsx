/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { isNil } from "lodash";
import CreateFilmForm from "./CreateFilmForm";
import SearchFilmForm from "./SearchFilmForm";
import Button from "./Button";
import FilmList from './FilmList';
import Header from './Header';

function HomePageLayout(props) {
    // const {children, Header, Button, FilmList, SearchFilmForm, CreateFilmForm} = props;
    const { onSubmit, onTitleChange, films } = props;

    return (
        <div style = {css`
            background-color: #282c34;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: calc(10px + 2vmin);
            color: white;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: auto;
            grid-template-areas:
                "header header header header"
                "film-list . search-film-form create-film-form"
                "footer footer footer footer";
         `}>
        
            <div style={css` grid-area: "header";`}>
                <Header textColor = "hotpink"> Button component </Header>
            </div>

            <Container row>
                <div style = {css` grid-area: "footer";`}>
                    <Button as = "a" href = "https://www.linkedin.com/in/christian-dawson-674b841b6/"> Linked < a > In </a></Button >
                    <PrimaryButton > Value </PrimaryButton> 
                    <Button backgroundColor = "green" textColor = "white" > Green </Button> 
                    <Button backgroundColor = "red" textColor = "white" > Red </Button> 
                    <Button backgroundColor = "yellow" > Yellow </Button> 
                </div>
            </Container>

            <Container row >
                <div style = {css` grid-area: "create-film-form";`}>
                    <CreateFilmForm onSubmit = { onSubmit }/> 
                </div>

                <div style = {css` grid-area: "search-film-form";`}>
                    <SearchFilmForm onTitleChange = { handleTitleChange }/>
                </div>
            </Container>

            <div stlye = {css` grid-area: "film-list";`}>
                <FilmList films = { films }/>
            </div>
                
        </div>
    );
}

export default HomePageLayout;

// MyLayout() {
//     const { renderTitle, renderFooter, renderContents } = props;

//     return (
//         <div>
//             <div style={
//                 width: 50%;
//                 background: green;
//                 height: 150px;
//             }>
//                 {renderTitle()}        
//             </div>
//             <div>
//                 {renderContents()}
//             </div>
//             <div style={
//                 heigth: 50;
//                 colr
//             }>
//                 {renderFooter()}
//             </div>
//         </div>
//     )
// }


// Page1() {

//     function renderFooterA() {
//         return (
//             <div>{user.name}</div>
//         )
//     }
//     function renderFooter() {
//         if (isUserLoggedIn) {
//             renderFooterA();
//         } else {
//             renderfooterB();
//         }
//     }

//     return (
//         <MyLayout
//             renderTitle={<Text>ABC</Text>}
//             renderFooter={renderFooter}
//         />
//     )
// }

// Page2() {

//     function renderFooter() {
//         return <Button title="close"></Button>
//     }

//     return (
//         <MyLayout
//             renderTitle={<Text>ABC</Text>}
//             renderFooter={renderFooter}
//         />
//     )
// }