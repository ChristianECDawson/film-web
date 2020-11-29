/** @jsx jsx */
import { css, jsx } from '@emotion/react';

function Button(props) {
    const {textColor, backgroundColor, children} = props;

    return (
        <button css = {css`
            background-color: ${backgroundColor};
            color: ${textColor};
            padding: 10px;
            border-radius: 3px;
            margin: 10px;
            font-size: 50px;
        `}>
        {children}    
        </button>  
    )
}

export default Button;