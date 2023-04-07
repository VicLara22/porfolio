import React from "react";
import './Proyects.css';
import pokemon from '../../assets/pokemon.png';
import gojob from '../../assets/GoJobLogo.png';
import {AiFillGithub} from 'react-icons/ai';
import {TbScreenShare}from 'react-icons/tb';
import {Link} from 'react-router-dom';


export default function Proyects () {
    return(
        <div className="proyects">
            <div className="container_proyects_title">
                <h1 className="title_proyects">Mis Proyectos</h1>
            </div>
            <div className="container_proyects">
            <div className="container_proyects_pokemon">
              <img src={pokemon} alt='img pokemon' className="img_pokemon"/>
            </div>
            <div className='container_proyects_pokemon_text'>
                <h1 className="title">Pokémon App</h1>
                <h2 className="text">SPA de pokémon en el cual se podra filtrar, ordenar y buscar por nombre, crear un pokémon a través de un formulario controlado y ver el detalle de cada uno de ellos.</h2>
                <Link  to='https://github.com/VicLara22/Pi-Pokemon-front'> 
                <button className="btn_github"><AiFillGithub/>GitHub</button>
                </Link>
                <Link to='https://pi-pokemon-app.vercel.app/'>
                <button className="btn_visitar"><TbScreenShare/>Visitar</button>
                </Link>
            </div>
            <div className="container_proyects_gojob">
            <img src={gojob} alt='img gojob' className="img_gojob"/>
            </div>
            <div className='container_proyects_gojob_text'>
            <h1 className="title">  GoJob</h1>
                <h2 className="text">Plataforma digital que conecta a trabajadores independientes con personas que necesiten soluciones para sus problemas. Los usuarios pueden publicar sus servicios como trabajadores y buscar profesionales calificados para satifacer sus necesidades.</h2>
                <Link to='https://github.com/VicLara22/goJob'>
                <button className="btn_github"><AiFillGithub />GitHub</button>
                </Link>
                <Link  to='https://go-job.vercel.app/'>
                <button className="btn_visitar"><TbScreenShare/>Visitar</button>
                </Link>
            </div>
           </div>
        </div>
    )
}