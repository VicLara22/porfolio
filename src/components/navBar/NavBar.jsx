import React, { useEffect, useState } from "react";
import './NavBar.css';
import {Link} from 'react-scroll';
import DarkMode from "../DarkMode/DarkMode";


export default function NavBar (){

   const [isOpen, setIsOpen] = useState(false)
    return(
      <div className="header"> 
        <div className="navbar">
        <div className="nav_logo"><DarkMode/></div>
           <div className={`nav_items ${isOpen  && 'open'}`}> 
            <a> <Link to='about' spy={true} smooth={true} offset={-70} duration={500}>Sobre mí</Link></a>
            <a><Link to='tech' spy={true} smooth={true} offset={-50} duration={500}>Skills</Link></a>
            <a><Link to='proyects' spy={true} smooth={true} offset={-50} duration={500}>Proyectos</Link> </a>
            <a><Link to='contact' spy={true} smooth={true} offset={-30} duration={500}>Contacto</Link></a>
        </div>
      <div className={`nav_toggle ${isOpen  && 'open'}`} onClick={ () => setIsOpen(!isOpen )}>
                <span></span>
                <span></span>
                <span></span>
      </div>
      </div>
      </div>

    )
}