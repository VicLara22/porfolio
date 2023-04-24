import React from "react";
import downloadsCV from '../downloads/downloads/CV_LARA_MOYANO_FULL_STACK_DEVELOPER.pdf';
import './Downloads.css'

export default function Downloads (){
    return(
        <section id="downloads">
            <h1>Descargar Curriculum Vitae</h1>
            <div className="container-divs-d">
            <div className="container-downloads-p">
            <p>Si quieres saber más sobre mí dejo a disposición mi CV, dandole click al siguiente botón se abrirá una nueva pestaña donde podrás ver el PDF</p>
            </div>
            <div className="container-btn-d"></div>
            <a href={downloadsCV} target='_blacnk' className="btn-d">Descargar CV</a>
            </div>
        </section>
    )
}