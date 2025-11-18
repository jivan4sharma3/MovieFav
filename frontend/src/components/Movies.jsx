import React, { useContext, useEffect, useRef, useState } from 'react'
import './Movies.css'
import UserContext from '../context/UserContext'
import NextNavbar from './NextNavbar'
import Footer from './Footer'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import movies from "../assets/movie.png"
import axios from 'axios'

const Movies = () => {

    const { id } = useContext(UserContext)

    const [open, setOpen] = useState(false);

    // Creating ref for input fields
    const poster = useRef(null)
    const moviename = useRef(null)
    const release = useRef(null)

    const [moiveList, setMovieList] = useState()


    const addMovies = () => {
        if (poster.current.value === "" || moviename.current.value === '' || release.current.value === '') {
            alert("Add Movies Details")
        } else {
            let allMovies = moiveList
            allMovies.push([{
                poster: URL.createObjectURL(poster.current.files[0]),
                name: moviename.current.value,
                release: release.current.value,
            },])
            setMovieList([...allMovies])
            setOpen(false)
            axios.get(`http://localhost:5000/movies?userid=${id}&poster=${URL.createObjectURL(poster.current.files[0])}&name=${moviename.current.value}&release=${release.current.value}`).then((res) => {
                if (id === res.data.userid) {
                    let allMovies = moiveList
                    allMovies.push(res.data)
                    console.log(allMovies)
                    setMovieList([...allMovies])
                    console.log(moiveList)
                    // moiveList.push(res.data)
                    // setMovieList

                }
            })
        }
    }

    const navigate = useNavigate()

    useEffect(() => {
        if (id === '') {
            navigate("/")
        }
    }, [])

    return (
        <>
            {id === "" ? <Navbar /> : <NextNavbar />}
            <div className='movie-container'>

                {
                    moiveList.map((items, index) => {
                        return (
                            <div className="movieCard" key={index}>
                                <img src={items.poster} className="moviePoster" />

                                <div className="movieInfo">
                                    <h3>{items.name}</h3>
                                    <p>{items.release}</p>
                                </div>
                            </div>
                        )
                    })
                }
                {/* Button */}
                <div className="add-container">
                    <h2>Add Your Fav Movies</h2>
                    <button className="openBtn" onClick={() => setOpen(true)}>
                        Add Movie
                    </button>
                </div>



                {/* Popup Background */}
                {open && (
                    <div className="popupOverlay">
                        <div className="popupContainer">

                            {/* Close Button */}
                            <button className="closeBtn" onClick={() => setOpen(false)}>✖</button>

                            {/* Form */}
                            <h2>Movies Details</h2>
                            <div className="popupForm">
                                <label for="avatar">Choose a Moive Poster:</label>
                                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" ref={poster} />
                                <label htmlFor="">Movie name</label>
                                <input type="text" placeholder="movie name" ref={moviename} />
                                <label htmlFor="">Release Year</label>
                                <input type="email" placeholder="release year" ref={release} />
                                <button onClick={addMovies} className="submitBtn">Add</button>
                            </div>

                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}

export default Movies
