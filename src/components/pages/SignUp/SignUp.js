import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './SignUp.css'
import { useHistory, useLocation } from 'react-router';

const SignUp = () => {
    // handling sign up data
    const { allContext } = useAuth();
    const { setUser, getName, getEmail, getPassword, singUp, signInUsingGoogle, setIsLoading, error } = allContext;
    const location = useLocation();
    const history = useHistory();

    // sign up redirects
    const redirect_url = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_url);
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <form onSubmit={singUp}>
            <h1 className="signup mt-5">SIGN UP</h1>
            <p className="text-danger text-center">{error}</p>
            <div class="formcontainer">
                <div class="container signup-container">
                    <label htmlFor="uname"><strong>Username</strong></label>
                    <input onBlur={getName} type="text" placeholder="Enter Username" name="uname" required />
                    <label htmlFor="mail"><strong>E-mail</strong></label>
                    <input onBlur={getEmail} type="text" placeholder="Enter E-mail" name="mail" required />
                    <label htmlFor="psw"><strong>Password</strong></label>
                    <input onBlur={getPassword} type="password" placeholder="Enter Password" name="psw" required />
                </div>
                <button type="submit" className="submit w-50"><strong>SIGN UP</strong></button>
                <br />
                {/* google sign in button */}
                <button className="btn btn-danger w-50 py-3 fw-bold mb-3" onClick={handleGoogleLogin}>Continue With Google</button>
                <br />
                <Link to="/login" className="text-decoration-none">Already Have An Account</Link>
            </div>
        </form>
    );
};

export default SignUp;