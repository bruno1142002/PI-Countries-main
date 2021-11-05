import React from 'react'
import './About.css'
import Express from './express.svg'
import Postgres from './postgres.svg'
import ReactSvg from './react.svg'
import Redux from './redux.svg'
import Sequelize from './sequelize.svg'
import Linkedin from './linkedin.svg'
import Gmail from './gmail.svg'
import Github from './github.svg'

const About = () => {
    return (
        <div className="About">
                    <div className="About-Background">
            <div className="About-Title">
                <h1 >Thanks for stopping by this page.</h1>
                <p>This page was created for an individual work, proposed to us by the Soy Henry Bootcamp.</p>
            </div>
                        
                        <h1 className="About-Text">Using the following technologies:</h1>
                        <div className="technologies-div">
                            <img  className="technologies" alt="ExpressImg" src={Express}></img>
                            <img  className="technologies" alt="PostgresImg" src={Postgres}></img>
                            <img  className="technologies" alt="ReactSvg" src={ReactSvg}></img>
                            <img  className="technologies" alt="ReduxImg" src={Redux}></img>
                            <img  className="technologies" alt="SequelizeImg" src={Sequelize}></img>
                        </div>

                        <div className="About-My">
                            <h1 className="About-Text">My social networks and where to contact me.</h1>
                            <a href="https://www.linkedin.com/in/alejo-totaro-a65448196/" target="_blank" rel="noreferrer"> <img className="links" alt="LinkedinImg" src={Linkedin}></img> </a>
                            <a href="mailto:alejocs1998@gmail.com" target="_blank" rel="noreferrer"> <img className="links" alt="GmailImg" src={Gmail}></img> </a>
                            <a href="https://github.com/Atotaro98" target="_blank" rel="noreferrer"> <img className="links" alt="Github" src={Github}></img> </a>
                        </div>
            </div>

                            <h3 className="Bottom-About">Made with <span  className="corazon">❤</span> by Alejo Totaro.</h3>
        </div>
    )
}

export default About
