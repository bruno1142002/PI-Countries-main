import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div className="card">
            <div className="imgContainer">
                <img className="img" src={props.flag} alt="flag" />
            </div>
            <div className="container" >
                 <h4>{props.name}</h4>
                <h4>Region : <span className="Span-Card">{props.region}</span></h4>
            </div>
        </div>
    )
}

export default Card
