import React, { useContext, useRef } from 'react'
import UserContext from '../context/UserContext'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'


const Login = () => {

  // destruction to get id and setId from usercontext
  const { id, setId } = useContext(UserContext)

  // use navigate after login into home page
  const navigate = useNavigate()

  // create ref for input field
  const email = useRef(null)
  const password = useRef(null)

  // Function to Login 
  const handleLogin = () => {
    if (email.current.value === '' || password.current.value === '') {
      alert("Please fill the form")
    }
    else {
      axios.get(`http://localhost:5000/login?email=${email.current.value}&password=${password.current.value}`).then((res) => {
        if (res.data.login == false) {
          alert(res.data.alert)
        }
        else {
          setId(res.data.id)
          console.log(id)
          navigate('/')
        }
      })
    }
  }

  return (
    <>

      <Navbar />

      <div className='container'>
        <div className='form-container'>
          <h1 className='header'>Login</h1>
          <div className="email">
            <label htmlFor="email">E-mail </label>
            <input type="email" name="email" id="email" placeholder='Enter your email' ref={email} />
          </div>
          <div className="password">
            <label htmlFor="password">Password </label>
            <input type="password" name="password" id="password" placeholder='Enter your password' ref={password} />
          </div>
          <div className="login">
            <p>Don't have an account? <Link to="/signup">Sign In</Link></p>
          </div>
          <div className="btn">
            <button className='button' onClick={handleLogin} >Login</button>
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}

export default Login
