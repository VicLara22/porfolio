import React, { useEffect } from "react";
import './NavBar.css';
import {Link} from 'react-scroll';
import DarkMode from "../DarkMode/DarkMode";
import {RxCross1, RxHamburgerMenu} from 'react-icons/rx';

export default function NavBar (){

  useEffect(() => {
    const check = document.getElementById('check'); // Obtener el checkbox

    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        check.checked = false;
      });
    });
  }, []); 

    return(
      <header> 
    <div className="dark-mode"><DarkMode/></div>
    <input type="checkbox" id='check'/>
    <label for="check" className="mostrar-menu"><RxHamburgerMenu/></label>
        <nav className="menu">
            <a>{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to='about' spy={true} smooth={true} offset={-90} duration={500}>Sobre mí</Link>
            </a>
            <a>{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to='tech' spy={true} smooth={true} offset={-90} duration={500}>Skills</Link>
            </a>
            <a>{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to='proyects' spy={true} smooth={true} offset={-90} duration={500}>Proyectos</Link>
              </a>
            <a> {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to='downloads' spy={true} smooth={true} offset={-90} duration={500}>CV</Link>
            </a>
            <a> {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to='contact' spy={true} smooth={true} offset={-90} duration={500}>Contacto</Link>
            </a>
        <label for="check" className="esconder-menu"><RxCross1/></label>
      </nav>
      </header>

    )
}