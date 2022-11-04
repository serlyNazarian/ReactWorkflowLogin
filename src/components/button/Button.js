import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <div className='btn-container'>
            <button onClick={props.btnEvent} className='Main-btn'>{props.text}</button>
        </div>
    );
};

export default Button;