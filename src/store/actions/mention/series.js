const ActionTypes = {
  FETCH_SERIES_BY_HERO_ID: '@@series/FETCH_SERIES_BY_HERO_ID',
  FETCH_SERIES_BY_HERO_ID_SUCCESS: '@@series/FETCH_SERIES_BY_HERO_ID_SUCCESS',
  FETCH_SERIES_BY_HERO_ID_FAILURE: '@@series/FETCH_SERIES_BY_HERO_ID_FAILURE',
  FETCH_PREVIOUS_SERIES_BY_HERO_ID: '@@series/FETCH_PREVIOUS_SERIES_BY_HERO_ID',
  FETCH_NEXT_SERIES_BY_HERO_ID: '@@series/FETCH_NEXT_SERIES_BY_HERO_ID',
  INITIAL_SERIES_PAGINATION: '@@series/INITIAL_SERIES_PAGINATION',
  FETCH_SERIES_ON_CURRENT_PAGE: '@@series/FETCH_SERIES_ON_CURRENT_PAGE'
}
const fetchSeriesByHeroId = id => ({
  type: ActionTypes.FETCH_SERIES_BY_HERO_ID,
  payload: {
    id
  }
})

const fetchSeriesByHeroIdFailure = error => ({
  type: ActionTypes.FETCH_SERIES_BY_HERO_ID_FAILURE,
  payload: {
    error,
  }
})

const fetchSeriesByHeroIdSuccess = data => ({
  type: ActionTypes.FETCH_SERIES_BY_HERO_ID_SUCCESS,
  payload: {
    data,
  },
})

const initialSeriesPagination = data => ({
  type: ActionTypes.INITIAL_SERIES_PAGINATION,
  payload: {
    data,
  }
})

const fetchPrevSeriesByHeroId = (data, id) => ({
  type: ActionTypes.FETCH_PREVIOUS_SERIES_BY_HERO_ID,
  payload: {
    data,
    id
  },
})

const fetchNextSeriesByHeroId = (data, id) => ({
  type: ActionTypes.FETCH_NEXT_SERIES_BY_HERO_ID,
  payload: {
    data,
    id
  },
})

const fetchSeriesOnCurrentPage = (data, id) => ({
  type: ActionTypes.FETCH_SERIES_ON_CURRENT_PAGE,
  payload: {
    data,
    id
  },
})

export {
  ActionTypes,
  fetchSeriesByHeroIdFailure,
  fetchSeriesByHeroId,
  fetchSeriesByHeroIdSuccess,
  initialSeriesPagination,
  fetchNextSeriesByHeroId,
  fetchPrevSeriesByHeroId,
  fetchSeriesOnCurrentPage,
}
