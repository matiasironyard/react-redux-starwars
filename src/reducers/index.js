import {combineReducers} from 'redux';
import update from 'immutability-helper';
import * as ActionTypes from '../actionTypes/actions';
import peopledata from '../data/Peopledata';
import starshipsdata from '../data/Starshipsdata';
import filmsdata from '../data/Filmsdata';

const initialState = {
  filter: {},
  reviews: {},
  FilmsData: filmsdata(),
  StarshipsData: starshipsdata(),
  PeopleData: peopledata(),
  loading: true
}

export const Data = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_SWAPI_PEOPLE:
      return update(state, {
        PeopleData: {
          $set: action.payload.data.results.sort(function (a, b) {
        return a.url - b.url})
        },
        next: {
          $set: action.payload.data.next
        },
        previous: {
          $set: action.payload.data.previous
        },
        loading: {
          $set: action.payload.loading
        }
      });

    case ActionTypes.FILTER_WORLDS:
      return update(state, {
        filter: {
          $set: action.payload
        }
      })

    case ActionTypes.FILTER_FILMS:
      return update(state, {
        filter: {
          $set: action.payload
        }
      });

    case ActionTypes.FILTER_STARSHIPS:
      return update(state, {
        filter: {
          $set: action.payload
        }
      });

    case ActionTypes.FILTER_PILOTS:
      return update(state, {
        filter: {
          $set: action.payload
        }
      });

    case ActionTypes.FILTER_SPECIES:
      return update(state, {
        filter: {
          $set: action.payload
        }
      });

    case ActionTypes.FILTER_VEHICLES:
      return update(state, {
        filter: {
          $set: action.payload
        }
      });

    case ActionTypes.RESET:
      return update(state, {
        filter: {
          $set: action.payload
        }
      });

    case ActionTypes.FETCH_SWAPI_FILMS:

      return update(state, {
        FilmsData: {
          $set: action.payload.data.results.sort(function (a, b) {
        return a.episode_id - b.episode_id})
        },
        next: {
          $set: action.payload.data.next
        },
        previous: {
          $set: action.payload.data.previous
        },
        loading: {
          $set: action.payload.loading
        }
      });

    case ActionTypes.FETCH_SWAPI_STARSHIPS:
      return update(state, {
        StarshipsData: {
          $set: action.payload.data.results.sort(function (a, b) {
        return a.url - b.url})
        },
        next: {
          $set: action.payload.data.next
        },
        previous: {
          $set: action.payload.data.previous
        },
        loading: {
          $set: action.payload.loading
        }
      });

      case ActionTypes.FETCH_SWAPI_VEHICLES:
        return update(state, {
          VehiclesData: {
            $set: action.payload.data.results.sort(function (a, b) {
          return a.url - b.url})
          },
          next: {
            $set: action.payload.data.next
          },
          previous: {
            $set: action.payload.data.previous
          },
          loading: {
            $set: action.payload.loading
          }
        });

        case ActionTypes.FETCH_SWAPI_SPECIES:
          return update(state, {
            SpecesData: {
              $set: action.payload.data.results.sort(function (a, b) {
            return a.url - b.url})
            },
            next: {
              $set: action.payload.data.next
            },
            previous: {
              $set: action.payload.data.previous
            },
            loading: {
              $set: action.payload.loading
            }
          });

    default:
      return state;
  }
};

function details(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.DETAILS:
      return update(state, {$set: action.payload});

    default:
      return state;
  }
}

export const fetchReviewsData = (state = initialState.reviews, action) => {
  switch (action.type) {
    case ActionTypes.REVIEWS:
      return update(state, {
        reviews: {
          $set: action.payload
        }
      });

    default:
      return state;
  }
};

const rootReducer = combineReducers({data: Data, details: details, reviews: fetchReviewsData});

export default rootReducer;
