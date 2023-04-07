import React from "react";
import './About.css';
import img from '../../assets/profile.jpg'

export default function About (){
    return (
  
        <div className="about">
            <div className="container_about_title"> 
            <h1 className="title_about">Sobre mí</h1>
            </div>
            <div className="container_img_one">
            <div className="container_img">
            <img src={img}className="img_profile"/>
            </div>
            </div>
            <div className="container_text"> 
            <p className="text">
            Hace unos años descubrí este nuevo mundo tech, comencé adquiriendo conocimientos por cuenta  propia y me inscribí en el Bootcamp de Soy Henry, actualmente sigo adquiriendo conocimiento, ya que estoy muy entusiasmada por seguir construyendo mi carrera en Programación. 
            <br/>
            <br/>
             Me considero una persona perseverante y con empatía, planificadora y organizada.
            <br/>
            <br/>
            Además de ser Full Stack Developer dedico una parte de mi tiempo siendo voluntaria en un proyecto, ya que considero que lo mejor que podemos hacer es servir y ayudar a otros. 
 </p>
 </div>
        </div>

    )
}