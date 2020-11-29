/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useForm } from "react-hook-form";

// Read docs on Pure Components in React
// TODO internationalization
function CreateFilmForm(props) {
    const { onSubmit } = props
    const { register, handleSubmit, errors } = useForm();

    return (
        <div 
            style = {css`
                font-size: 50px
            `} 
            onSubmit={handleSubmit(onSubmit)}>

            <label htmlFor="title">Title</label>
            <input name="title" ref={register({ required: true })} />            
            {errors.titleRequired && <span>This field is required</span>}
            <input type="submit" />
        </div>
    )
}


export default CreateFilmForm