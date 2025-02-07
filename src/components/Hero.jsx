import React from 'react'
import "./Hero.css"
const Hero = () => {
    return (
        <section className='hero'>
            <h2>Bonjour c'est</h2>
            <h1>Sabaredzovic Zejnepa</h1>
            <p>
                <strong>Etudiont en devlopment web</strong>
                <span className="highlight">Chez openclassroums</span>
            </p>
            <div className='buttons'>
                <a className="btn" href="">Mes projets</a>
                <a className="btn" href="">Mes contacter</a>
            </div>
        </section>
    )
}

export default Hero
