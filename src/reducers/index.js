import {combineReducers} from 'redux';
import * as ActionTypes from '../actionTypes/actions';

const initialState = {
  loading: "Loading",
  people: [
    {
      "name": "Chupacabra",
      "height": "",
      "mass": "",
      "hair_color": "",
      "skin_color": "",
      "eye_color": "",
      "birth_year": "",
      "gender": "",
      "homeworld": "",
      "films": [],
      "species": [],
      "vehicles": [],
      "starships": [],
      "created": "",
      "edited": "",
      "url": "https://swapi.co/api/people/1/"
    }
  ],
  films: [
    {
      "title": "The Galaxy Explodeds",
      "episode_id": 1000,
      "opening_crawl": "",
      "director": "George Lucas",
      "producer": "Gary Kurtz, Rick McCallum",
      "release_date": "1977-05-25",
      "characters": [],
      "planets": [],
      "starships": [],
      "vehicles": [],
      "species": [],
      "created": "",
      "edited": "",
      "url": ""
    }
  ],
  starships:  [
    {
    "name": "Executor",
    "model": "Executor-class star dreadnought",
    "manufacturer": "Kuat Drive Yards, Fondor Shipyards",
    "cost_in_credits": "1143350000",
    "length": "19000",
    "max_atmosphering_speed": "n/a",
    "crew": "279144",
    "passengers": "38000",
    "cargo_capacity": "250000000",
    "consumables": "6 years",
    "hyperdrive_rating": "2.0",
    "MGLT": "40",
    "starship_class": "Star dreadnought",
    "pilots": [],
    "films": [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/3/"
    ],
    "created": "2014-12-15T12:31:42.547000Z",
    "edited": "2017-04-19T10:56:06.685592Z",
    "url": "https://swapi.co/api/starships/15/"
  },
  {
    "name": "Sentinel-class landing craft",
    "model": "Sentinel-class landing craft",
    "manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks",
    "cost_in_credits": "240000",
    "length": "38",
    "max_atmosphering_speed": "1000",
    "crew": "5",
    "passengers": "75",
    "cargo_capacity": "180000",
    "consumables": "1 month",
    "hyperdrive_rating": "1.0",
    "MGLT": "70",
    "starship_class": "landing craft",
    "pilots": [],
    "films": [],
    "created": "2014-12-10T15:48:00.586000Z",
    "edited": "2014-12-22T17:35:44.431407Z",
    "url": "https://swapi.co/api/starships/5/"
  }
  ]
}

export const fetchPeople = (state = initialState.people, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_SWAPI_PEOPLE:
      return action.payload.results

    case ActionTypes.FILTER_WORLDS:
      let data = action.payload.data;
      let endpoint = action.payload.endpoint;
      let match = data.filter((matchedWorld) => {
        return matchedWorld.homeworld === endpoint;
      })
      return match;

    case ActionTypes.FILTER_FILMS:
      let filmData = action.payload.data;
      let filmEndpoints = action.payload.endpoints;
      let filteredFilms = filmData.filter((item) => {
        let films = item.films;
        return films.filter((item) => {
          return item;
        }).length === filmEndpoints.length;
      });
      return filteredFilms;

    case ActionTypes.FILTER_STARSHIPS:
      let starshipsData = action.payload.data;
      let starshipsEndpoints = action.payload.endpoints;
      let filteredStarships = starshipsData.filter((item) => {
        let starships = item.starships;
        return starships.filter((item) => {
          return item;
        }).length === starshipsEndpoints.length;
      });
      return starshipsEndpoints.length === 0
        ? state
        : filteredStarships;

    default:
      return state;
  }
};

export const fetchFilms = (state = initialState.films, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_SWAPI_FILMS:
      return action.payload.results

    default:
      return state;
  }
};

export const fetchStarships = (state = initialState.starships, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_SWAPI_STARSHIPS:
      return action.payload.results

    default:
      return state;
  }
};

function details(state =  initialState.people, action) {
  switch (action.type) {
    case ActionTypes.DETAILS:
      return action.payload

    default:
      return state;
  }
}


const rootReducer = combineReducers({people: fetchPeople, films: fetchFilms, starships: fetchStarships, details: details, loading: initialState.loading});

export default rootReducer;
