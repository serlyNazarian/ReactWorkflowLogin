import React from 'react';
import "./TitleSpan.css";

const TitleSpan = (props) => {
    return (
        <div className='TitleSpan'>
            <span>{props.smallTitle}</span>
        </div>
    );
};

export default TitleSpan;