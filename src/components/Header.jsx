/** @jsx jsx */
import { css, jsx } from '@emotion/react';

function Header(props) {
    const {textColor, backgroundColor, children} = props;

    return (
        <header css = {css`
            grid-area: header;
            background-color: ${backgroundColor};
            color: ${textColor};
            font-size: 50px;
        `}>
        {children}    
        </header>  
    )
}

export default Header;