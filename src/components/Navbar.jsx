import React from 'react'
import "./Navbar.css"
const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>Mon portfolio</h1>
            <ul>

                <li><a href="#projects">Projets</a></li>
                <li><a href="#skills">Compétences</a></li>
                <li><a href="#experience">Expérience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
