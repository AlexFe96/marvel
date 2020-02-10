const ActionTypes = {
  FETCH_EVENTS_BY_HERO_ID: '@@events/FETCH_EVENTS_BY_HERO_ID',
  FETCH_EVENTS_BY_HERO_ID_SUCCESS: '@@events/FETCH_EVENTS_BY_HERO_ID_SUCCESS',
  FETCH_EVENTS_BY_HERO_ID_FAILURE: '@@events/FETCH_EVENTS_BY_HERO_ID_FAILURE',
  FETCH_PREVIOUS_EVENTS_BY_HERO_ID: '@@events/FETCH_PREVIOUS_EVENTS_BY_HERO_ID',
  FETCH_NEXT_EVENTS_BY_HERO_ID: '@@events/FETCH_NEXT_EVENTS_BY_HERO_ID',
  INITIAL_EVENTS_PAGINATION: '@@events/INITIAL_EVENTS_PAGINATION',
  FETCH_EVENTS_ON_CURRENT_PAGE: '@@events/FETCH_EVENTS_ON_CURRENT_PAGE'
}

const fetchEventsByHeroId = id => ({
  type: ActionTypes.FETCH_EVENTS_BY_HERO_ID,
  payload: {
    id
  }
})

const fetchEventsByHeroIdFailure = error => ({
  type: ActionTypes.FETCH_EVENTS_BY_HERO_ID_FAILURE,
  payload: {
    error,
  }
})

const fetchEventsByHeroIdSuccess = data => ({
  type: ActionTypes.FETCH_EVENTS_BY_HERO_ID_SUCCESS,
  payload: {
    data,
  },
})

const initialEventsPagination = data => ({
  type: ActionTypes.INITIAL_EVENTS_PAGINATION,
  payload: {
    data,
  }
})

const fetchPrevEventsByHeroId = (data, id) => ({
  type: ActionTypes.FETCH_PREVIOUS_EVENTS_BY_HERO_ID,
  payload: {
    data,
    id
  },
})

const fetchNextEventsByHeroId = (data, id) => ({
  type: ActionTypes.FETCH_NEXT_EVENTS_BY_HERO_ID,
  payload: {
    data,
    id
  },
})

const fetchEventsOnCurrentPage = (data, id) => ({
  type: ActionTypes.FETCH_EVENTS_ON_CURRENT_PAGE,
  payload: {
    data,
    id
  },
})

export {
  ActionTypes,
  fetchEventsByHeroId,
  fetchEventsByHeroIdFailure,
  fetchEventsByHeroIdSuccess,
  initialEventsPagination,
  fetchNextEventsByHeroId,
  fetchPrevEventsByHeroId,
  fetchEventsOnCurrentPage,
}
