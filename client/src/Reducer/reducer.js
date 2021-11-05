let initialState = {
    countries: [],
    country: []
  };
  
  const Actions = (state = initialState, action) => {
  
    switch (action.type) {
      case "GET_BY_ID":
        return {
          ...state,
          country: action.payload
        }
      case "GET_BY_NAME":
        return {
          ...state,
          countries: action.payload
        }
  
        case "GET_ALL":
        return {
          ...state,
          countries: action.payload
        }
      
      default:
        return state;
    }
  }
  
  export default Actions;
  