import React from "react";
import './Tech.css';
import { TbBrandRedux, TbBrandCss3, TbBrandJavascript } from 'react-icons/tb';
import { SiExpress, SiPostgresql } from 'react-icons/si';
import { AiFillGithub, AiOutlineHtml5 } from 'react-icons/ai';
import { FaNode, FaReact } from 'react-icons/fa';


export default function Tech() {

    return (
        <section id="tech">
            <div className="container-title">
                <h1>Skills</h1>
            </div>
            <div className="container-divs-t">
            <div className="container_tech_img" >
                <div className='fila' >
                    <TbBrandRedux className='columna' />
                    <FaReact className='columna' />
                    <TbBrandCss3 className='columna' />
                </div>
                <div className='fila' >
                    <SiExpress className='columna' />
                    <AiFillGithub className='columna' />
                    <AiOutlineHtml5 className='columna' />
                </div>
                <div className='fila' >
                    <TbBrandJavascript className='columna' />
                    <FaNode className='columna' />
                    <SiPostgresql className='columna' />
                </div>
                </div>
            </div>
        </section>
    )
}