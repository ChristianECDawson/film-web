/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useEffect } from "react"
import { useForm } from "react-hook-form";


// Read docs on Pure Components in React
// TODO internationalization
function SearchFilmForm(props) {
    const { onTitleChange } = props
    const { register, watch } = useForm();
    const title = watch('title');

    useEffect(() => {
        onTitleChange({title : title})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title]);

    return (
        <div style = {css`
            font-size: 50px
        `}>
            <label htmlFor="title">Search</label>
            <input name="title" ref={register({ required: true })} />   
        </div>  
    )
}

export default SearchFilmForm