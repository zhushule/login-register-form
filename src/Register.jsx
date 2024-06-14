import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { saveAs } from 'file-saver';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const handleDownload = () => {
        const file = new Blob([ name,'\t', email ], { type: 'text/plain;charset=utf-8' });
        saveAs(file, 'Register.txt');
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name <FaUser /></label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            
            <label htmlFor="email">Email <FaEnvelope /></label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />

            <label htmlFor="password">Password <FaLock /></label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit" onClick={handleDownload}>Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}