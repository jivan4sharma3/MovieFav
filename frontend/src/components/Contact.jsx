import React, { useContext } from 'react'
import './Contact.css'
import Navbar from './Navbar'
import Footer from './Footer'
import NextNavbar from './NextNavbar'
import UserContext from '../context/UserContext'


const Contact = () => {

    const { id } = useContext(UserContext)

    return (
        <>
            {id === "" ? <Navbar /> : <NextNavbar />}
            <div className="contact-wrapper">
                <div className="contact-container">

                    <h1 className="contact-title">Contact Us</h1>
                    <p className="contact-subtitle">
                        Have questions or want to work with us? Send us a message!
                    </p>

                    <form className="contact-form">
                        <div className="form-group">
                            <label>Your Name</label>
                            <input type="text" placeholder="Enter your full name" required />
                        </div>

                        <div className="form-group">
                            <label>Your Email</label>
                            <input type="email" placeholder="Enter your email" required />
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="5" placeholder="Write your message..." required></textarea>
                        </div>

                        <button type="submit" className="contact-btn">
                            Send Message
                        </button>
                    </form>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact
