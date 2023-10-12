import React, {useState} from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log()
    }

    return(
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="registerForm" onSubmit = {handleSubmit}>
            <label htmlFor="email">email</label>
            <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label htmlFor="password">password</label>
            <input value={pass} type="password" placeholder="********" id="password" name="passsword" />
            <button>Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Register here</button>
        </div>
    )
}