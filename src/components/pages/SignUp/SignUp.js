import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    return (
        <form>
            <h1 className="signup mt-5">SIGN UP</h1>
            <div class="formcontainer">
                <div class="container signup-container">
                    <label for="uname"><strong>Username</strong></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />
                    <label for="mail"><strong>E-mail</strong></label>
                    <input type="text" placeholder="Enter E-mail" name="mail" required />
                    <label for="psw"><strong>Password</strong></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                </div>
                <button className="btn btn-danger w-50 py-3 fw-bold">Continue With Google</button>
                <br />
                <button type="submit" className="submit"><strong>SIGN UP</strong></button>
            </div>
        </form>
    );
};

export default SignUp;