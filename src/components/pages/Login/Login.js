import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    // handling login data
    const { allContext } = useAuth();
    const { setUser, getEmail, getPassword, signInUsingGoogle, signInWithEmail, setIsLoading } = allContext;
    const location = useLocation();
    const history = useHistory();

    // handling redirects
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
        <form onSubmit={signInWithEmail}>
            <h1 className="login fw-bold mt-3">LOGIN</h1>
            <div className="formcontainer">
                <div className="container login-container">
                    <label htmlFor="mail"><strong>E-mail</strong></label>
                    <input onBlur={getEmail} type="text" placeholder="Enter E-mail" name="mail" required />
                    <label htmlFor="psw"><strong>Password</strong></label>
                    <input onBlur={getPassword} type="password" placeholder="Enter Password" name="psw" required />
                </div>
                <button type="submit" className="submit w-50"><strong>LOGIN</strong></button>
                <br />

                {/* google sign in button */}
                <button className="btn btn-danger w-50 py-3 fw-bold mb-3"
                    onClick={handleGoogleLogin}
                >Continue With Google</button>
                <br />
                <Link to="/signup" className="text-decoration-none">Create New Account</Link>
            </div>
        </form>
    );
};

export default Login;