import React, {useState} from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log()
    }
    return(
        <div className="auth-form-container">
            <h2>Login</h2>
        <form className="loginForm" onSubmit = {handleSubmit}>
            <label htmlFor="name"> Full name</label>
            <input value={name} type="text" name="name" id="name" placeholder="full name" />
            <label htmlFor="email">email</label>
            <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label htmlFor="password">password</label>
            <input value={pass} type="password" placeholder="********" id="password" name="passsword" />
            <button>Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Login here</button>
        </div>
    )
}