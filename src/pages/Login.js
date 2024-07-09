import React from 'react';
import './Login.css';

function Login() {
    return (
        <div>
            <div className='login-background'>
                <div className="box Login-action">
                    <form action="">
                        <img
                            className="logo-main"
                            src="./images/svr-logo.jpg"
                            alt="logo"
                        />
                        <h2>LOGIN</h2>
                        <div className="inputBox">
                            <input type="text" required />
                            <span>E-Mail/Mobile Number</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input type="password" required />
                            <span>Password</span>
                            <i></i>
                        </div>
                        <div className='box-con'>
                            <input className='box-more' type="checkbox" />
                            <span className='Remember'>Remember Me</span>
                        </div>

                        <input type="submit" value="Login" />

                        <div className="links">
                            <a href="">Forget Password?</a>
                            <a href="/register">Register</a>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Login