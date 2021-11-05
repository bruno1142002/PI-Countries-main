import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getById } from '../../actions/actions';
import  ReturnImg  from './return.svg'
import './CountryDetails.css'




const CountrDetails = () => {
    let { id:code } = useParams()
    let[id]=useState(code)
    const dispatch = useDispatch()
    const country= useSelector(state => state.country);
    let { flag, name, alpha3Code, region, capital, subregion, area, population, Activities } = country
    useEffect(() => { dispatch(getById(id)) }, [dispatch, id]);

    // function formatNumber(num) {
    //     return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    //   }
    return (
        
       <div className="Details-Content">
        <div className="card-Details">
            <div className="Return-Icon">
        <a href="javascript: history.go(-1)"><img src={ReturnImg}></img></a>
            </div>
            <div className="imgContainer-Details">
                <img className="img-Details" src={flag} alt="flag" />
            </div>
            <div className="container-Details">

                <h1>{name}</h1>
                <p>Country code: <span>{alpha3Code}</span> </p>
                <p>Capital: <span>{capital}</span></p>
                <p>Region: <span>{region}</span></p>
                <p>Sub Region: <span>{subregion}</span></p>
                <p>Area: <span>{area} Km2</span> </p>
                <p>Population: <span>{population}</span></p>
                {/* <p>Population: {formatNumber(population)}</p> */}
                
                <h2>Activities:</h2>
                <p>
                    {Activities&&Activities.length ?
                    Activities.map(a=>
                    <li> Name: <span>{a.name} </span>      
                        <p>Duration: <span>{a.duration}</span>  Days  </p>   
                        <p>Difficulty: <span>{a.difficulty}</span> </p>   
                        <p>Season: <span>{a.season}</span></p> 

                        <div className="Actividad-Linea"></div>
                        
                    </li>) 
                     : <span>No activities yet</span>}   
                </p>
            
            </div>
            </div>

           

        </div>

    )
}

export default CountrDetails;
