import React from 'react'

import './Button.css';

const STYLE = [
    'btn-primary',
    'btn-secondary'   
]

const Button = ({text, onClick, buttonStyle, type, width}) => {

    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];

    return (
        <div>
            <button className = {checkButtonStyle} type = {type} onClick = {onClick} style = {{width: width}}>{text}</button>
        </div>
    )
}

export default Button;
