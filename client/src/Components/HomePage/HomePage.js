import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../Cards/Cards';
import { getAll } from '../../actions/actions';
import { getByName } from '../../actions/actions';
import Pagination from '../../helper/pagination';
import './HomePage.css'



const HomePage = () => {

    let countries = useSelector(state => state.countries)

    var act = [];
    

    countries.map(data => data.Activities.length && data.Activities.map(activity => activity.name && act.push(activity.name)));
    // console.log(countries)
    var uniqs = act.filter(function(item, index, array) {
        return array.indexOf(item) === index;
      })
    //  console.log("Unicas Actividades", uniqs);

    let [filter, setFilter] = useState({ name: "", activity: "", region: "", sort: ""});

    const dispatch = useDispatch()


    const[pag,setpag]=useState({
        currentpage:1,
        countryPerPage:10,
    })

    const indexOfLastCountry = pag.currentpage * pag.countryPerPage;
    const indexOfFirstCountry = indexOfLastCountry - pag.countryPerPage;
    const currentCountry = countries.slice(indexOfFirstCountry, indexOfLastCountry);


    const paginate=(pageNumber) =>setpag({
        ...pag,
        currentpage:pageNumber
    })

    useEffect(() => {
        dispatch(getAll())
    }, []);


    useEffect(() => {
        dispatch(getByName(filter.name, filter.activity, filter.region, filter.sort))
    }, [dispatch, filter])

    return (
        <div className="HomePage">
            <div className="Display-Filters">
                        

                        {/* BUSQUEDA POR NOMBRE */}

                    <div className="Finder-By-Name">
                                        <input  
                                            placeholder="Find Country"
                                            onChange={(e) => setFilter({ ...filter, name: e.target.value })}
                                            value={filter.name}
                                            
                                        />
                            

                            </div>


                            {/* FILTRADO POR ACTIVIDAD */}


                            <div className="Order-By-Activity">
                         <select  onChange={(e) => setFilter({...filter, activity: e.target.value })}>
                                <option value="">All Activities</option>
                                {uniqs.map((item, i) => <option key={i} value={item}>{item}</option>)}
                         </select>  
                                </div> 


                          

                    


                            {/* ORDENADO POR REGIONES */}

                            <div className="Order-By-Region">

                        <select  onChange={(e) => setFilter({...filter, region: e.target.value})}>
                            <option value="">All Regions</option>
                            <option value="Europe">Europe</option>
                            <option value="Americas">Americas</option>
                            <option value="Asia">Asia</option>
                            <option value="Africa">Africa</option>
                            <option value="Oceania">Oceania</option>
                            <option value="Polar">Polar</option>
                         </select>
                            </div> 
                            
                     

                            {/* ORDERNADO POR NOMBRE O POBLACION */}

                                <div className="Order-By-Name">
                        <select  onChange={(e) => setFilter({...filter, sort: e.target.value})}>
                            <option value= ""> Order By</option>
                            <option value="AtoZ">A to Z</option>
                            <option value="ZtoA">Z to A</option>
                            <option value="pobAsc">Ascending Population</option>
                            <option value="pobDes">Descending Population</option>
                        </select>
                                </div>
                          

                </div>
            <Pagination countryPerPage={pag.countryPerPage}  allCountries={countries.length} Paginate={paginate}/>
            <Cards countries={currentCountry} />
            
            
    </div>
    )
}

export default HomePage;
