/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
ACTION TYPES IMPORT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import * as ActionTypes from '../actionTypes/actions';

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
AXIOS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import Axios from 'axios';
// The above import takes care of importing all action types.


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
SET DETAIL ACTION:
We use this action to view an item's details
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
export const setDetails = (data) => {
  return {
    type: ActionTypes.DETAILS,
    payload: data
  };
};

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FETCH ACTION
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

export function fetchDetails(url) {
  return (dispatch) => {
    return Axios.get(url)
      .then(response => {
        dispatch(setDetails(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchSwapiPeople = (data, loading) => {
  return {
    type: ActionTypes.FETCH_SWAPI_PEOPLE,
    payload: {data, loading: false}
  }
};

export function fetchPeople(url) {
  return (dispatch) => {
    return Axios.get(url)
      .then(response => {
        dispatch(fetchSwapiPeople(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchSwapiFilms = (data) => {
  return {
    type: ActionTypes.FETCH_SWAPI_FILMS,
    payload: {data, loading: false}
  }
};

export function fetchFilms(url) {
  return (dispatch) => {
    return Axios.get(url)
      .then(response => {
        dispatch(fetchSwapiFilms(response.data))

      })

      .catch(error => {
        throw(error);
      });
  };
};

export const fetchSwapiStarships = (data) => {
  return {
    type: ActionTypes.FETCH_SWAPI_STARSHIPS,
    payload: {data, loading: false}
  }
};

export function fetchStarships(url) {
  return (dispatch) => {

    return Axios.get(url)
      .then(response => {
        dispatch(fetchSwapiStarships(response.data))

      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchSwapiVehicles = (data) => {
  return {
    type: ActionTypes.FETCH_SWAPI_VEHICLES, loading: true,
    payload: {data, loading: false}
  }
};

export function fetchVehicles(url) {
  return (dispatch) => {

    return Axios.get(url)
      .then(response => {
        dispatch(fetchSwapiVehicles(response.data))

      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchSwapiSpecies = (data) => {
  return {
    type: ActionTypes.FETCH_SWAPI_SPECIES, loading: true,
    payload: {data, loading: false}
  }
};

export function fetchSpecies(url) {
  return (dispatch) => {

    return Axios.get(url)
      .then(response => {
        dispatch(fetchSwapiSpecies(response.data))

      })
      .catch(error => {
        throw(error);
      });
  };
};
/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FILTER ACTIONS:
We use this actions to filter state based on selection.
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
export const stateReset = (key) => {
  return {
    type: ActionTypes.RESET,
    payload: {key}
  };
};

export const filterWorlds = (endpoint, key) => {
  return {
    type: ActionTypes.FILTER_WORLDS,
    payload: {endpoint, key}
  };
};

export const filterFilms = (endpoint, key) => {
  endpoint.map((endpoint)=>{
    return endpoint.key
  })
  return {
    type: ActionTypes.FILTER_FILMS,
    payload: {endpoint, key}
  };
};

export const filterStarships = (endpoint, key) => {
  endpoint.map((endpoint)=>{
    return endpoint.key
  })
  return {
    type: ActionTypes.FILTER_STARSHIPS,
    payload: {endpoint, key}
  };
};

export const filterPilots = (endpoint, key) => {
  endpoint.map((endpoint)=>{
    return endpoint.key
  })
  return {
    type: ActionTypes.FILTER_PILOTS,
    payload: {endpoint, key}
  };
};

export const filterSpecies = (endpoint, key) => {
  endpoint.map((endpoint)=>{
    return endpoint.key
  })
  return {
    type: ActionTypes.FILTER_SPECIES,
    payload: {endpoint, key}
  };
};

export const filterVehicles = (endpoint, key) => {
  endpoint.map((endpoint)=>{
    return endpoint.key
  })
  return {
    type: ActionTypes.FILTER_VEHICLES,
    payload: {endpoint, key}
  };
};


export const reviews = (data) => {
  return {
    type: ActionTypes.REVIEWS,
    payload: data
  }
};

export function fetchReviews(title) {
  return (dispatch) => {
    return Axios.get('https://api.themoviedb.org/3/search/movie?api_key=a874671520b99e6171fd48b467ad6803&language=en-US&query='+ title+'&page=1&include_adult=false')
      .then(response => {
        dispatch(reviews(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const toggleColor = (color) => {
  return {
    type: ActionTypes.TOGGLE_COLOR,
    payload: color
  }
};
