import React from "react";
import './Proyects.css';
import Card from "./Card";
import pokemon from '../../assets/pokemon.png';
import goJob from '../../assets/GoJobLogo.png';


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
    }
 ]
  return (
    <section id="proyects">
      <div className="container-proyects-title">
        <h1>Mis Proyectos</h1>
      </div>
      <div className="container-divs-p">
        <div >
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
      </div>
    </section>
  )
}