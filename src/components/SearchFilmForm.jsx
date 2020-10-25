import React, { useEffect } from "react"
import { useForm } from "react-hook-form";

// Read docs on Pure Components in React
// TODO internationalization
function SearchFilmForm(props) {
    const { onTitleChange } = props
    const { register, watch } = useForm();
    const title = watch('title');

    useEffect(() => {
        onTitleChange({title : title})
    }, [title]);

    return (
        <form>
          <label htmlFor="title">Search</label>
            <input name="title" ref={register({ required: true })} />   
        </form>  
    )
}

export default SearchFilmForm