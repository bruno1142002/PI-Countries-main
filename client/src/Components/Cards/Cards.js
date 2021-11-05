import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import './Cards.css';
const Cards = ({countries}) => {
    

    return (
        <div className="cards">
        {countries &&
          countries.map((c) => (
            <div>
              
              <Link style={{textDecoration: 'none' }} to={`/country/${c.alpha3Code}`} key={c.alpha3Code}>
                    <Card
                        key={c.alpha3Code}
                        name={c.name}
                        flag={c.flag}
                        region={c.region}
                        
                    />
                </Link>
                
            </div>
            
          ))}
      </div>
    )
}

export default Cards
