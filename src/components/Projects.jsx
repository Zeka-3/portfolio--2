import React from 'react'
import "./Projects.css"
const Projects = () => {
    return (

        <section id="projects" className="projects">
            <h2>Mes projets</h2>
            <div className='project'>
                <h3>Print it</h3>
                <p>J’ai dynamisé le site web de l’imprimerie Print it en développant un carrousel interactif et intuitif. J’ai intégré des flèches de navigation et des bullet points dynamiques pour améliorer l’expérience utilisateur. Grâce à JavaScript, j’ai implémenté la gestion des clics pour faire défiler les images et les textes associés, tout en assurant une transition fluide avec un défilement infini. Ce projet met en avant mes compétences en HTML, CSS et JavaScript pour l’optimisation d’interfaces web.</p>
                <p>Techologies:html, scc, javascript</p>
                <a href="https://github.com/Zeka-3/print-it">Voir le code</a>

            </div>
            <div className='project'>
                <h3>Argantbank</h3>
                <p>
                    J’ai participé au développement du tableau de bord utilisateur pour Argent Bank, une banque en ligne émergente. Mon rôle a consisté à implémenter l’authentification sécurisée des utilisateurs, en intégrant React, Redux Toolkit et React Router pour une gestion efficace du state et de la navigation. J’ai développé une interface responsive, optimisée selon les bonnes pratiques du Green Code, et mis en place un système permettant aux utilisateurs de modifier leur pseudo en temps réel.
                </p>
                <p>Techologies:React</p>

                <a href="https://github.com/Zeka-3/Argentbank-Frontend">voir le code</a>

            </div>
        </section>

    )
}

export default Projects
