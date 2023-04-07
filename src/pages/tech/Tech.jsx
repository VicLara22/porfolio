import React from "react";
import './Tech.css';
import {TbBrandRedux, TbBrandCss3, TbBrandJavascript} from 'react-icons/tb';
import {SiExpress, SiPostgresql} from 'react-icons/si';
import {AiFillGithub, AiOutlineHtml5} from 'react-icons/ai';
import {FaNode, FaReact} from 'react-icons/fa';


export default function Tech () {

    return(
        <div className="tech">
            <div className="container_tech">
              <h1 className="title_tech">Skills</h1>
            </div>
            <div className="container_tech_img" >
                <div className='fila' >
            <TbBrandRedux className='columna' />
            <FaReact className='columna'/>
            <TbBrandCss3 className='columna' />
            </div>
            <div className='fila' >
            <SiExpress  className='columna'/>
            <AiFillGithub className='columna'/>
            <AiOutlineHtml5 className='columna'/>
            </div>
            <div className='fila' >
            <TbBrandJavascript className='columna'/>
            <FaNode className='columna'/>
            <SiPostgresql className='columna'/>
            </div>
            </div>
        </div>
    )
}