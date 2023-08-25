import React from "react";
import './About.css';
import img from '../../assets/profile.jpg'

export default function About() {
  return (

    <section id="about">
      <div className="container-title"> 
      <h1 >Sobre mí</h1>
      </div>
      <div className="container-divs">
        <div className="container-img-about">
          <img src={img} />
        </div>
        <div className="container-div-text"> 
        <div className="container-text">
          <p>
          Durante la pandemia, descubrí el mundo de la tecnología y me inscribí en el Bootcamp de Soy Henry, donde experimenté meses llenos de desafíos y victorias.
            <br />
            <br />
            Tengo experiencia en resolución de desafíos, aprendizaje autodidacta e investigación de nuevas 
tecnologías. Mi habilidad para trabajar en equipo y ser empática me permitió colaborar eficazmente.
            <br />
            <br />
            Además de ser Full Stack Developer dedico una parte de mi tiempo siendo voluntaria en un proyecto, ya que considero que lo mejor que podemos hacer es servir y ayudar a otros.
          </p>
        </div>
        </div>
      </div>
    </section>

  )
}