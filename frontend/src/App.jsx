import React, { useContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import app components
import Home from './components/Home'
// import HomeLogin from './components/HomeLogin'
import Signup from './components/Signup'
import Login from './components/Login'
import Contact from './components/Contact'
import About from './components/About'

// import userContext 
import UserContext from './context/UserContext'
import Movies from './components/Movies'


const App = () => {

  const [id, setId] = useState("")

  return (
    <>
      <UserContext.Provider value={{ id: id, setId: setId }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/homelogin' element={<HomeLogin />} /> */}
            <Route path='/contact' element={<Contact/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/movies' element={<Movies/>} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App
