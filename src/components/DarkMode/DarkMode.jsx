import React, { useEffect, useState } from "react";
import './DarkMode.css';
import {BsSun,BsFillMoonFill} from 'react-icons/bs'

export default function DarkMode (){
    const [mode, setMode] = useState('light');
    
    const handleMode = () => {
        if (mode === "dark") {
            setMode("light");
          } else {
            setMode("dark");
          }
    };

    useEffect(() =>{ 
        document.body.className = mode;
   }, [mode]);

    return(

        <button onClick={handleMode} className="btn_mode">
                {mode === 'light' ? ( 
                  <span><BsSun style={{ fontSize: 20 }} /></span>
                ) : (
                  <span ><BsFillMoonFill style={{ fontSize: 20 }} /></span>
                )}
            </button>
    )
                }