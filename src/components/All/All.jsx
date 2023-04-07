import React from "react";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import LandingPage from "../../pages/landing/LandingPage";
import Proyects from "../../pages/proyects/Proyects";
import Tech from "../../pages/tech/Tech";
import NavBar from "../navBar/NavBar";

export default function All () {
    return (
        <div>
            <NavBar/>
            <LandingPage/>
            <About/>
            <Tech/>
            <Proyects/>
            <Contact/>
        </div>
    )
}