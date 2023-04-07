import React from "react";
import './LandingPage.css';
import {Link} from 'react-scroll';
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai';

export default function LandingPage () {
    return(
        <div className='landing'>
           <h2 className='container_h3' >Hola, soy</h2>
            <h1 className='container_h1'>Lara Victoria Moyano</h1>
            <h2 className='container_h2'>Full Stack Developer</h2>
            <Link to='about' spy={true} smooth={true} offset={-70} duration={500}>
             <button className="btn" >Leer más</button>
            </Link>
            <div className="img" >
            <lottie-player 
            src="https://assets9.lottiefiles.com/packages/lf20_Tk824FHlNp.json"  
            background="transparent"  
            speed="1"  
            loop autoplay>
            </lottie-player>
            </div>
           
        <div className="redes">
            <ul className="item_menu">
                <li className="item">
                <a
		href="https://twitter.com/VicLara_22/"
		target="_blank"
		rel="noopener"
		>
        <AiFillTwitterCircle />
        </a>
                </li>
                <li className="item">
                <a
		href="https://github.com/VicLara22"
		target="_blank"
		rel="noopener"
		>
		<AiFillGithub />
        </a>
                </li>
                <li className="item">
                <a
		href="https://www.linkedin.com/in/laravictoriamoyano/"
		target="_blank"
		rel="noopener"
		>
		<AiFillLinkedin />
		</a>
                </li>
            </ul>
        
       
		
        </div>
        </div>
      
    )
}