/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Button from "./Button";

function PrimaryButton(props) {
    const {children} = props;

    return (
        <Button textColor = 'black' backgroundColor = 'grey'>
        {children}    
        </Button>  
    )
}

export default PrimaryButton;