import React, { useContext } from 'react'
import "./Home.css";
import movies from "../assets/movie.png"
import Navbar from './Navbar';
import UserContext from '../context/UserContext'
import Footer from './Footer';
import NextNavbar from './NextNavbar';


const About = () => {

    const { id } = useContext(UserContext)

    return (
        <>
            {id === "" ? <Navbar /> : <NextNavbar />}
            <div className="home-container">
                <div className="homemax-container">


                    {/* Left Text Section */}
                    <div className="img-section">
                        <img
                            src={movies}
                            alt="Movies"
                        />
                    </div>


                    {/* Right Image Section */}
                    <div className="text-section">
                        <h1>Welcome to <span>MovesFav</span></h1>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores perspiciatis libero natus, corrupti, placeat nihil eaque quod unde quasi nisi amet sint ea eum, commodi quaerat ab neque corporis. Laborum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore reiciendis tenetur exercitationem et. Aliquam quos atque eligendi, corrupti beatae mollitia et officiis magnam animi optio vitae tenetur vero itaque nostrum!
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
