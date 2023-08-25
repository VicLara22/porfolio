import React from "react";
import './Proyects.css';
import Card from "./Card";
import pokemon from '../../assets/pokemon.png';
import goJob from '../../assets/GoJobLogo.png';
import portafolio from '../../assets/portafolio.png';
import { Link } from "react-router-dom";


export default function Proyects() {
  const data = [ 
    {
     "id":1,
     "title": "Pokémon App",
     "description": "SPA de pokémon en el cual se podra filtrar, ordenar y buscar por nombre, crear un pokémon a través de un formulario controlado y ver el detalle de cada uno de ellos.",
     "gitHub": "https://github.com/VicLara22/Pi-Pokemon-front",
     "web":"https://pi-pokemon-app.vercel.app/",
     "img" : pokemon,
    },
    {
     "id":2,
     "title": "GoJob",
     "description": "Plataforma digital que conecta a profesionales con usuarios que necesiten soluciones para sus problemas.",
     "gitHub": "https://github.com/VicLara22/goJob",
     "web":"https://go-job.vercel.app/",
     "img":goJob,
    },
    {
      "id":3,
      "title": "Portafolio",
      "description": "Muestro mis experiencias, lo que se hacer, mis conocimientos y las tecnologias que utilizo.",
      "gitHub": "https://github.com/VicLara22/porfolio",
      "web":"https://lara-moyano-portfolio.vercel.app/",
      "img":portafolio,
     }
 ]
  return (
    <section id="proyects">
      <div className="container-proyects-title">
        <h1>Mis Proyectos</h1>
      </div>
      <div className="container-divs-p">
          {data?.map((p) => ( 
          <Card
          key={p.id}
          title={p.title}
          description={p.description}
          gitHub={p.gitHub}
          web={p.web}
          img={p.img}
          />
         ))}
      </div>
      <div className="btn-div-mas">
      <Link to='https://github.com/VicLara22/'> 
        <button 
        className="btn-mas"
        >Ver más proyectos</button>
        </Link>
        </div>
    </section>
  )
}