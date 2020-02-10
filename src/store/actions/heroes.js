const ActionTypes = {
  FETCH_HEROES_REQUEST: '@@heroes/FETCH_HEROES_REQUEST',
  FETCH_HEROES_SUCCESS: '@@heroes/FETCH_HEROES_SUCCESS',
  FETCH_HEROES_FAILURE: '@@heroes/FETCH_HEROES_FAILURE',
  SEARCH_HERO: '@@heroes/SEARCH_HERO',
  START_SEARCH_HERO: '@@heroes/START_SEARCH_HERO'
}

const fetchHeroesRequest = () => ({
  type: ActionTypes.FETCH_HEROES_REQUEST,
})

const fetchHeroesSuccess = data => ({
  type: ActionTypes.FETCH_HEROES_SUCCESS,
  payload: {
    data,
  },
})

const fetchHeroesFailure = error => ({
  type: ActionTypes.FETCH_HEROES_FAILURE,
  payload: {
    error,
  },
})

const searchHero = (data, name )=> ({
  type: ActionTypes.SEARCH_HERO,
  payload: {
    data,
    name,
  },
})

const startSearchHero = name => ({
  type: ActionTypes.START_SEARCH_HERO,
  payload: {
    name,
  },
})

export {
  ActionTypes,
  fetchHeroesRequest,
  fetchHeroesSuccess,
  fetchHeroesFailure,
  startSearchHero,
  searchHero
}
