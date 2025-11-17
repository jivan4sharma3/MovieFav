import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './Signup.css'
import UserContext from '../context/UserContext';
import Navbar from './Navbar';
import Footer from './Footer';

const Signup = () => {

    // check the passwrod are match if match border is white if not border id red so we use useState to change state
    const [color, setColor] = useState(true)

    // usercontext to bring a userID to check user is login or not 
    const { id, setId } = useContext(UserContext)

    // useNavigate to navigate tho home page after sign up 
    const navigate = useNavigate()

    const userName = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const conpass = useRef(null)

    const handleSubmit = () => {
        if (
            userName.current.value === '' ||
            email.current.value === '' ||
            password.current.value === '' ||
            conpass.current.value === ''
        ) {
            alert("Fill all the details")
        } else {
            if (password.current.value === conpass.current.value) {
                // frontend data to store in backend
                axios.get(`http://localhost:5000/signup?name=${userName.current.value}&email=${email.current.value}&password=${password.current.value}`).then((res) => {
                    console.log(res.data)
                    setId(res.data)
                    console.log(id)
                    navigate('/')
                })

                setColor(true)
            } else {
                setColor(false)
            }
        }
    }

    return (
        <>
            <Navbar />

            <div className='container'>
                <div className="form-container">
                    <h1 className='header'>Sign In</h1>
                    <div className="username">
                        <label htmlFor="username">User Name </label>
                        <input type="text" id="username" ref={userName} placeholder='Enter username ' />
                    </div>

                    <div className="email">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" ref={email} placeholder='Enter email' />
                    </div>

                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" ref={password} placeholder='Enter password' />
                    </div>

                    <div className="conpassword">
                        <label htmlFor="con-password">Confirm Password</label>
                        <input
                            type="password"
                            id="con-password"
                            ref={conpass}
                            placeholder='Enter confirm password'
                            style={{
                                border: `2px solid ${color ? "white" : "red"}`,
                            }}
                        />
                    </div>

                    <div className="login">
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>

                    <div className="btn">
                        <button className='button' onClick={handleSubmit}>Sign In</button>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    );
};

export default Signup;

