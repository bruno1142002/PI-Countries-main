import axios from 'axios';

let GET_BY_ID = 'GET_BY_ID';
let GET_ALL = 'GET_ALL'
let GET_BY_NAME = 'GET_BY_NAME'


export let getAll = () => {
    return async (dispatch) => {
        let response = await axios.get("http://localhost:3001/api/countries?page=all")
        dispatch({ type: GET_ALL, payload: response.data })
    }
}
export let getByName = (name, activity, region, sort) => {
    return async (dispatch) => {

        let response = await axios.get("http://localhost:3001/api/countries?page=all")
        if (name) {
            response = await axios.get("http://localhost:3001/api/countries?name=" + name)
        }


        if (sort){
            response = await axios.get("http://localhost:3001/api/countries?sort=" + sort)
        }

        
        if (region) {
            
            response.data = response.data.filter(e => e.region === region)
            
        }
        
        if (activity) {
            response.data = response.data.filter(data => data.Activities.filter(a => a.name === activity).length)
        }
        dispatch({ type: GET_BY_NAME, payload: response.data })
    }
}



export let getById = (id) => {
    return async (dispatch) => {
        let response = await axios.get("http://localhost:3001/api/countries/" + id)
        dispatch({ type: GET_BY_ID, payload: response.data })
    }

}

