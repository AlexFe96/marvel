import { ActionTypes } from '../actions/heroes'
import _ from 'lodash'

const initialState = {
  isLoading: false,
  isFailure: false,
  isSearching: false,
  searchingPattern: '',
  ids: [],
  searchingHero: [],
  data: [],
  total: 0,
  limit: 20,
  count: 0,
  offset: 0,
  isLastPage: false,
  nextOffset: 0,
}

const heroes = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_HEROES_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case ActionTypes.FETCH_HEROES_SUCCESS:
      return {
        ...state,
        isFailure: false,
        isLoading: false,
        ids: _.keyBy([...state.data, ...action.payload.data.results], hero => hero.id),
        data: [...state.data, ...action.payload.data.results],
        total: action.payload.data.total,
        limit: action.payload.data.limit,
        count: action.payload.data.count,
        offset: action.payload.data.offset,
        isLastPage: action.payload.data.total <= action.payload.data.offset + action.payload.data.count,
        nextOffset: action.payload.data.offset + action.payload.data.count,
      }

    case ActionTypes.FETCH_HEROES_FAILURE:
      return {
        ...state,
        isFailure: true,
        isLoading: false,
      }

    case ActionTypes.START_SEARCH_HERO:
      return {
        ...state,
        isSearching: true
      }

    case ActionTypes.SEARCH_HERO:
      return {
        ...state,
        searchingPattern: action.payload.name,
        searchingHero: action.payload.data.results,
        isSearching: Boolean(action.payload.name)
      }

    default:
      return state
  }
}


export {
  heroes as default
}
