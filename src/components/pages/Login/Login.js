import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    // const { user, signInUsingGoogle } = useAuth();

    return (
        <form>
            <h1 className="login">LOGIN</h1>
            <div class="formcontainer">
                <div class="container login-container">
                    <label for="mail"><strong>E-mail</strong></label>
                    <input type="text" placeholder="Enter E-mail" name="mail" required />
                    <label for="psw"><strong>Password</strong></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                </div>
                <button className="btn btn-danger w-50 py-3 fw-bold">Continue With Google</button>
                <br />
                <button type="submit" className="submit"><strong>LOGIN</strong></button>
            </div>
        </form>
    );
};

export default Login;