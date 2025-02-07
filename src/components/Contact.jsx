import React from 'react'
import "./Contact.css"
const Contact = () => {
    return (

        <section id="contact" className="contact">
            <h2>Contact</h2>
            <p>📩 Email : <a href="contact@example.com">contact@example.com</a></p>
            <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </section>

    )
}

export default Contact
