import React from 'react'
import { Link } from 'react-scroll';
import './LandingPage.css'
import Arrow from './arrow.svg'




const LandingPage = () => {
    return (
        <div  className="Box-LandingPage">
            <div className="LandingPage">
                <div className="Margin-LandingPage">
                <h1 className="Title-LandingPage">Welcome To Countries</h1>
                <p className="Info-LandingPage">Here you can Search any Country and Add Activities him.</p>
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