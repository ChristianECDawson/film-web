/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { isNil } from "lodash";

function Grid(props) {
    const {children} = props;

    return (
        <div style = {css`
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr
            grid-template-rows: auto;
            grid-template-areas:
                "header header nav nav"
                "main main . sidebar"
                "footer footer footer footer";
        `}>
        {children}    
        </div>  
    )
}

export default Grid;