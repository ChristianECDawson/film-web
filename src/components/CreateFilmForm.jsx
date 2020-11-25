import React, { useEffect }from "react"
import { useForm } from "react-hook-form";
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';

// Read docs on Pure Components in React
// TODO internationalization
function CreateFilmForm(props) {
    const { onSubmit } = props
    const { register, handleSubmit, errors } = useForm();

    return (
        <Create_Film_Form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">Title</label>
            <input name="title" ref={register({ required: true })} />            
            {errors.titleRequired && <span>This field is required</span>}
            <input type="submit" />
        </Create_Film_Form>
    )
}

const Create_Film_Form = styled.form`
    grid-area: sidebar;
    font-size: 50px;
`;

export default CreateFilmForm