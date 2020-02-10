const ActionTypes = {
  FETCH_HERO_REQUEST: '@@hero/FETCH_HERO_REQUEST',
  FETCH_HERO_SUCCESS: '@@hero/FETCH_HERO_SUCCESS',
  FETCH_HERO_FAILURE: '@@hero/FETCH_HERO_FAILURE',
}

const fetchHeroRequest = id => ({
  type: ActionTypes.FETCH_HERO_REQUEST,
  payload: {
    id,
  }
})

const fetchHeroSuccess = data => ({
  type: ActionTypes.FETCH_HERO_SUCCESS,
  payload: {
    data,
  },
})

const fetchHeroFailure = error => ({
  type: ActionTypes.FETCH_HERO_FAILURE,
  payload: {
    error,
  },
})

export {
  ActionTypes,
  fetchHeroRequest,
  fetchHeroSuccess,
  fetchHeroFailure
}
