import React from 'react';
import './Register.css'

function Register() {
    return (
        <div>
            <div className='register-backgeound'>
                <div className="box Register-action">
                    <form action="">
                        <img
                            className="logo-main"
                            src="./images/svr-logo.jpg"
                            alt="logo"
                        />
                        <h2>REGISTER</h2>
                        <div className="inputBox">
                            <input type="text" required />
                            <span>Name</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input type="text" required />
                            <span>Email</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input type="number" required />
                            <span>Mobile Number</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            {/* <span>Course</span> */}
                            <select name="cars" id="cars">
                                <option value="volvo">Select Course</option>
                                <option value="saab">APPSC GROUP 2 MAINS</option>
                                <option value="opel">AP HISTORY</option>
                                <option value="audi">SCIENCE AND TECH</option>
                                <option value="saab">INDIAN POLITY</option>
                                <option value="opel">APPSC GROUP 2</option>
                                <option value="audi">APPSC GROUP 1</option>
                                <option value="audi">GENERAL STUDIES(GS) & MENTAL ABILITY</option>
                            </select>

                            <i></i>
                        </div>

                        <div className="inputBox">
                            <input type="password" required />
                            <span>Password</span>
                            <i></i>
                        </div>
             
                        <input type="submit" value="Register" />

                        <div className="links">
                            <a href="./login">Login</a>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Register