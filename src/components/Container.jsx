/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { isNil } from "lodash";

function Container(props) {
    const {row, children} = props;

    return (
        <div style = {css`
          display: flex;
          flex-direction: ${isNil(row) ? "column" : "row"}
        `}>
        {children}    
        </div>  
    )
}

export default Container;