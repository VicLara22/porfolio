import React from "react";
import './NavBar.css';
import {Link} from 'react-scroll';
import DarkMode from "../DarkMode/DarkMode";
import {RxCross1, RxHamburgerMenu} from 'react-icons/rx';

export default function NavBar (){
    return(
      <header> 
    <div className="dark-mode"><DarkMode/></div>
    <input type="checkbox" id='check'/>
    <label for="check" className="mostrar-menu"><RxHamburgerMenu/></label>
        <nav className="menu">
            <a><Link to='about' spy={true} smooth={true} offset={-90} duration={500}>Sobre mí</Link></a>
            <a><Link to='tech' spy={true} smooth={true} offset={-90} duration={500}>Skills</Link></a>
            <a><Link to='proyects' spy={true} smooth={true} offset={-90} duration={500}>Proyectos</Link> </a>
            <a><Link to='contact' spy={true} smooth={true} offset={-90} duration={500}>Contacto</Link></a>
        <label for="check" className="esconder-menu"><RxCross1/></label>
      </nav>
      </header>

    )
}