import React, { useEffect } from "react"
import { useForm } from "react-hook-form";
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';

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
        <Search_Film_Form>
          <label htmlFor="title">Search</label>
            <input name="title" ref={register({ required: true })} />   
        </Search_Film_Form>  
    )
}

const Search_Film_Form = styled.form`
  font-size: 50px;
`;

export default SearchFilmForm