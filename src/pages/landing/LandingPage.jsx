import React from "react";
import './LandingPage.css';
import {Link} from 'react-router-dom';
import img from '../../assets/landing.png'
export default function LandingPage () {
    return(
        <div className='fondo'>
            <div className='container'> 
            <h3>Hola, soy</h3>
            <h1>Lara Victoria Moyano</h1>
            <h2>Full Stack Developer</h2>
            <Link >
             <button className="btn" >Leer más</button>
            </Link>
            </div>
            <img src={img} alt='img not found' className="img"/>
        </div>
    )
}