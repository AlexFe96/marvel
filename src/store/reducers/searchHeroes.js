import { ActionTypes } from '../actions/searchHeroes'

const initialState = {
  isLoading: false,
  isFailure: false,
  isSearching: false,
  searchingPattern: '',
  searchingHero: [],
  total: 0,
  limit: 20,
  count: 0,
  offset: 0,
  isLastPage: false,
  nextOffset: 0,
}

const searchHeroes = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.START_SEARCH_HERO:
      console.log('START_SEARCH_HERO')
      return {
        ...state,
        searchingHero: [],
        searchingPattern: action.payload.name,
        total: 0,
        limit: 20,
        count: 0,
        offset: 0,
        isLastPage: false,
        nextOffset: 0,
        isSearching: Boolean(action.payload.name),
        isLoading: true,
      }
    case ActionTypes.FETCH_SEARCH_HERO_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSearching: true
      }
    case ActionTypes.SEARCH_HERO_FAILURE:
      return {
        ...state,
        isFailure: true,
        isLoading: false,
      }
    case ActionTypes.SEARCH_HERO_SUCCESS:
      return {
        ...state,
        searchingHero: [...state.searchingHero, ...action.payload.data.results],
        total: action.payload.data.total,
        limit: action.payload.data.limit,
        count: action.payload.data.count,
        offset: action.payload.data.offset,
        isLastPage: action.payload.data.total <= action.payload.data.offset + action.payload.data.count,
        nextOffset: action.payload.data.offset + action.payload.data.count,
        isLoading: false,
      }
    case ActionTypes.SEARCH_HERO:
      return {
        ...state,
        searchingHero: [...action.payload.data.results],
        total: action.payload.data.total,
        limit: action.payload.data.limit,
        count: action.payload.data.count,
        offset: action.payload.data.offset,
        isLastPage: action.payload.data.total <= action.payload.data.offset + action.payload.data.count,
        nextOffset: action.payload.data.offset + action.payload.data.count,
        isLoading: false,
      }

    default:
      return state
  }
}


export {
  searchHeroes as default
}
