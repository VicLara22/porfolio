import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import './Footer.css'
export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a
            href="https://twitter.com/VicLara_22/"
            target="_blank"
            rel="noopener"
          >
            <AiFillTwitterCircle />
          </a>
        </li>
        <li >
          <a
            href="https://github.com/VicLara22"
            target="_blank"
            rel="noopener"
          >
            <AiFillGithub />
          </a>
        </li>
        <li >
          <a
            href="https://www.linkedin.com/in/laravictoriamoyano/"
            target="_blank"
            rel="noopener"
          >
            <AiFillLinkedin />
          </a>
        </li>
        <li >
          <a
            href="https://www.linkedin.com/in/laravictoriamoyano/"
            target="_blank"
            rel="noopener"
          >
            <AiFillLinkedin />
          </a>
        </li>
      </ul>
      <p>&copy;2023 Lara Moyano</p>
    </footer>
  )
}