import React from "react";
import { AiFillGithub } from 'react-icons/ai';
import { TbScreenShare } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ img, title, description, gitHub, web, id }) {
  return (
    <div className="container-proyects">
      <div key={id} className="container-divs ">
        <div className="container-img-p">
          <img src={img} alt='img' />
        </div>
        <div className='container-proyects-text'>
          <h1>{title}</h1>
          <h2 >{description}</h2>
        </div>
      </div>
      <div className="btn-div">
        <Link to={gitHub}>
          <button className="btn-github"><AiFillGithub />GitHub</button>
        </Link>
        <Link to={web}>
          <button className="btn-visitar"><TbScreenShare />Visitar</button>
        </Link>

      </div>
    </div>
  )
}