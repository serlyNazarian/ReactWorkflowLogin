import React from 'react';
import ForgotPassword from '../components/Forgot password/ForgotPassword';
import Input from '../components/input/Input';
import ShowHidePassword from '../components/Show hide pass/ShowHidePassword';
import TitleLogo from '../components/Title logo/TitleLogo';
import TitleSpan from '../components/Title span/TitleSpan';
import "./Login.css"

const Login = () => {
    return (
        <div className='Login'>
            <TitleLogo title="Workflow" />
            <TitleSpan smallTitle="Please enter your login information" />
            <Input title="Email Address" label="email" type="email" placeholder="johndoe@gmail.com" />
            <ShowHidePassword />
            <ForgotPassword />
        </div>
    );
};

export default Login;