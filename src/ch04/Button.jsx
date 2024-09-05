import React from "react";
import './Button.css';

function Button(props) {
    return (
        <button className={props.className}>
            <b>
                {props.children}
            </b>
        </button>
    )
}

export default Button;