import React, { useState } from 'react';
// import Input from '../input/Input';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./ShowHidePassword.css";

const ShowHidePassword = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown)
    }
    return (
        <div className='ShowHidePassword'>
            <div className='passwordContainer'>
                {/* <Input className="test" type={passwordShown ? "text" : "password"} /> */}
                <input className='test' type={passwordShown ? "text" : "password"} />
                <div className='icon-toggle' onClick={togglePassword}>{passwordShown ? <FaEye /> : <FaEyeSlash />}</div>
            </div>
        </div>
    );
};

export default ShowHidePassword;