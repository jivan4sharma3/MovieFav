import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Column 1 */}
                <div className="footer-col">
                    <h2 className="footer-logo">MovieFav</h2>
                    <p className="footer-desc">
                        Hey! Here you can store all your favorite movies in one place.
                        Add, manage, and view your personal movie list anytime!
                    </p>
                </div>

                {/* Column 2 */}
                <div className="footer-col">
                    <h3 className="footer-title">Pages</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="footer-col">
                    <h3 className="footer-title">Support</h3>
                    <ul>
                        <li>FAQ</li>
                        <li>Help Center</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} MovieFav . All rights reserved.
            </div>

        </footer>
    )
}

export default Footer
