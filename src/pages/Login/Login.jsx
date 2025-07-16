import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import { signup, signin } from '../../firebase.js';
import spinner from '../../assets/spinner.mp4';

const Login = () => {
    const [signState, setsignState] = useState('Sign Up');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const userAuth = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (signState === 'Sign In') {
            await signin(email, password);
        } else {
            await signup(name, email, password);
        }
        setLoading(false);
    };

    return loading ? (
        <div className="loading">
            <video src={spinner} autoPlay loop muted></video>
        </div>
    ) : (
        <div className="login">
            <img src={logo} className="login-logo" alt="" />
            <div className="login-form">
                <h1>{signState}</h1>
                <form>
                    {signState === 'Sign Up' ? (
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    ) : (
                        <></>
                    )}
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={userAuth}>{signState}</button>
                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox" />
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <div className="form-switch">
                    {signState === 'Sign In' ? (
                        <p>
                            New to netflix?{' '}
                            <span onClick={() => setsignState('Sign Up')}>
                                Sign Up Now
                            </span>
                        </p>
                    ) : (
                        <p>
                            Already have an account?{' '}
                            <span onClick={() => setsignState('Sign In')}>
                                Sign In
                            </span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
