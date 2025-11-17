import React, { useContext } from 'react'
import "./Home.css";
import movies from "../assets/movie.png"

const HomeLogin = () => {

    return (
        <div className="home-container">
            <div className="homemax-container">


                {/* Left Text Section */}
                <div className="text-section">
                    <h1>Welcome to <span>MovesFav</span></h1>
                    <p>
                        Hey! Here you can store all your favorite movies in one place.
                        Add, manage, and view your personal movie list anytime!
                    </p>
                </div>

                {/* Right Image Section */}
                <div className="img-section">
                    <img
                        src={movies}
                        alt="Movies"
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeLogin
