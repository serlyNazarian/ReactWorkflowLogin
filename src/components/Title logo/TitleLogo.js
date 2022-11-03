import React from 'react';
import "./TitleLogo.css";
import Logo from "./Logo.svg";

const TitleLogo = (props) => {
    return (
        <div className='TitleLogo'>
            <img src={Logo} alt="" />
            <h1 className='Title'>{props.title}</h1>
        </div>
    );
};

export default TitleLogo;