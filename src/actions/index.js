import * as ActionTypes from '../actionTypes/actions';
import Axios from 'axios';
// The above import takes care of importing all action types.


export const setDetails = (data) => {
  return {
    type: ActionTypes.DETAILS,
    payload: data
  };
};

export function fetchDetails(url) {
  return (dispatch) => {
    return Axios.get(url)
      .then(response => {
        console.log('got it ', response)
        dispatch(setDetails(response.data))

      })
      .catch(error => {
        throw(error);
      });
  };
};

export const filterWorlds = (endpoint, data) => {
  return {
    type: ActionTypes.FILTER_WORLDS,
    payload: {endpoint, data}
  };
};

export const filterFilms = (endpoint, data) => {
  endpoint.map((endpoint)=>{
    return endpoint.key
  })
  return {
    type: ActionTypes.FILTER_FILMS,
    payload: {endpoints: endpoint, data}
  };
};

export const filterStarships = (endpoint, data) => {
  endpoint.map((endpoint)=>{
    return endpoint.key
  })
  return {
    type: ActionTypes.FILTER_STARSHIPS,
    payload: {endpoints: endpoint, data}
  };
};

export const stateToggle = (url) =>{
  return {
    type: ActionTypes.STATE_TOGGLE,
    payload: url,
  }
}


export const fetchSwapiPeople = (data) => {
  return {
    type: ActionTypes.FETCH_SWAPI_PEOPLE,
    payload: data
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
    payload: data
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
    payload: data
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
