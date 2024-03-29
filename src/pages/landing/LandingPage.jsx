import React from "react";
import './LandingPage.css';
import { Link } from 'react-scroll';

export default function LandingPage() {
  return (
    <section id='landing'>
      <div className="container-portada">
        <h3>Hola, soy</h3>
        <h1>Lara Victoria Moyano</h1>
        <h2>Full Stack Developer</h2>
        <Link to='about' spy={true} smooth={true} offset={-70} duration={500}>
          <button className="btn" >Saber más</button>
        </Link>
        <div className="container-img">
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_Tk824FHlNp.json"
            background="transparent"
            speed="1"
            loop autoplay
            className="img">
          </lottie-player>

        </div>
      </div>

    </section>

  )
}