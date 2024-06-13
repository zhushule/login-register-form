import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { saveAs } from 'file-saver';


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }


    const handleDownload = () => {
          const file = new Blob([ email ], { type: 'text/plain;charset=utf-8' });
          saveAs(file, 'LoginInfo.txt');
    }

    

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email <FaEnvelope /></label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                
                <label htmlFor="password">Password <FaLock /></label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                
                <button type="submit" onClick={handleDownload}>Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}