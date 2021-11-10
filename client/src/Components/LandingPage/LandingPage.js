import React from 'react'
import { Link } from 'react-scroll';
import './LandingPage.css'
import Arrow from './arrow.svg'




const LandingPage = () => {
    return (
        <div  className="Box-LandingPage">
            <div className="LandingPage">
                <div className="Margin-LandingPage">
                <h1 className="Title-LandingPage">Bienvenido a Countries</h1>
                <p className="Info-LandingPage">En esta pagina podras encontrar tus paises favoritos y añadirles Actividades a los mismos.</p>
                <Link to="NavBar" spy={true} smooth={true}><img className="animation" alt="arrow" src={Arrow}></img></Link>
                {/* <Link to="/home">
                
                <img className="bounce" src={Arrow}></img>
                    
                
                </Link> */}
                </div>
           
            </div>
        </div>
    )
}

export default LandingPage