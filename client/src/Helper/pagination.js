import React from 'react'
import './pagination.css'

function Pagination({countryPerPage,allCountries,Paginate}){
    const pageNumbers=[]
    for(let i=1; i<=Math.ceil(allCountries/countryPerPage); i++){
        pageNumbers.push(i)
    }

    return(

        <div className="Pagination">
            
                {pageNumbers.map(number=>(
                    <p key={number} className='pagNum'>
                        <button onClick={()=> Paginate(number)} className="pageLink">
                            {number}
                        </button>
                    </p>
                ))}
            
        </div>
    )
}

export default Pagination;