const ActionTypes = {
  SEARCH_HERO_FAILURE: '@@search/SEARCH_HERO_FAILURE',
  FETCH_SEARCH_HERO_REQUEST: '@@search/FETCH_SEARCH_HERO_REQUEST',
  SEARCH_HERO_SUCCESS: '@@search/SEARCH_HERO_SUCCESS',
  SEARCH_HERO: '@@search/SEARCH_HERO',
  START_SEARCH_HERO: '@@search/START_SEARCH_HERO'
}

const fetchSearchHeroRequest = () => ({
  type: ActionTypes.FETCH_SEARCH_HERO_REQUEST
})

const searchHeroFailure = error => ({
  type: ActionTypes.SEARCH_HERO_FAILURE,
  payload: {
    error,
  },
})

const searchHeroSuccess = data => ({
  type: ActionTypes.SEARCH_HERO_SUCCESS,
  payload: {
    data,
  },
})

const searchHero = (data)=> ({
  type: ActionTypes.SEARCH_HERO,
  payload: {
    data,
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
  fetchSearchHeroRequest,
  searchHeroFailure,
  searchHeroSuccess,
  startSearchHero,
  searchHero
}
