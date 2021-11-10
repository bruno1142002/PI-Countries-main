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
                <h1 >Gracias por visitar "Countries"</h1>
                <p>Esta pagina fue creada para un trabajo individual propuesto por el Bootcamp Soy Henry.</p>
            </div>
                        
                        <h1 className="About-Text">Usamos las siguientes tecnologias:</h1>
                        <div className="technologies-div">
                            <img  className="technologies" alt="ExpressImg" src={Express}></img>
                            <img  className="technologies" alt="PostgresImg" src={Postgres}></img>
                            <img  className="technologies" alt="ReactSvg" src={ReactSvg}></img>
                            <img  className="technologies" alt="ReduxImg" src={Redux}></img>
                            <img  className="technologies" alt="SequelizeImg" src={Sequelize}></img>
                        </div>

                        <div className="About-My">
                            <h1 className="About-Text">Aqui estan algunas de mis redes donde pueden contactarme.</h1>
                            <a href="https://www.linkedin.com/in/bruno-rocha-1a3604216/" target="_blank" rel="noreferrer"> <img className="links" alt="LinkedinImg" src={Linkedin}></img> </a>
                            <a href="mailto:brunosentinelli@gmail.com" target="_blank" rel="noreferrer"> <img className="links" alt="GmailImg" src={Gmail}></img> </a>
                            <a href="https://github.com/bruno1142002" target="_blank" rel="noreferrer"> <img className="links" alt="Github" src={Github}></img> </a>
                        </div>
            </div>

                        
        </div>
    )
}

export default About
