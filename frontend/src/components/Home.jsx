import React, { use, useContext, useEffect } from 'react'
import UserContext from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import HomeLogin from './HomeLogin'
import NextNavbar from './NextNavbar'
import Footer from './Footer'

const Home = () => {

    const { id } = useContext(UserContext)

    const navigate = useNavigate()

    // useEffect(() => {
    //     if (id === '') {
    //         navigate("/login")
    //     }
    // }, [])

    return (
        <>
            {id === "" ? <Navbar /> : <NextNavbar />}
            <HomeLogin />
            <Footer/>
        </>
    )
}

export default Home
