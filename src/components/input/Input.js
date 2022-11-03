import React, { useState } from 'react';
import "./input.css";

const Input = (props) => {

    const [isFocused, setIsFocused] = useState(false);

    const onFocus = () => {
        setIsFocused(true)
    }
    const onBlur = () => {
        setIsFocused(false)
    }
    return (
        <div className='Input'>
            <label className='MainLabel' htmlFor={props.label}>{props.title}</label>
            <input
                className={`MainInput ${isFocused ? 'class-focus' : ''}`}
                onFocus={onFocus}
                onBlur={onBlur}
                type={props.type}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default Input;