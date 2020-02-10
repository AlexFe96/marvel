const ActionTypes = {
  FETCH_STORIES_BY_HERO_ID: '@@stories/FETCH_STORIES_BY_HERO_ID',
  FETCH_STORIES_BY_HERO_ID_SUCCESS: '@@stories/FETCH_STORIES_BY_HERO_ID_SUCCESS',
  FETCH_STORIES_BY_HERO_ID_FAILURE: '@@stories/FETCH_STORIES_BY_HERO_ID_FAILURE',
  FETCH_PREVIOUS_STORIES_BY_HERO_ID: '@@stories/FETCH_PREVIOUS_STORIES_BY_HERO_ID',
  FETCH_NEXT_STORIES_BY_HERO_ID: '@@stories/FETCH_NEXT_STORIES_BY_HERO_ID',
  INITIAL_STORIES_PAGINATION: '@@stories/INITIAL_STORIES_PAGINATION',
  FETCH_STORIES_ON_CURRENT_PAGE: '@@stories/FETCH_STORIES_ON_CURRENT_PAGE'
}

const fetchStoriesByHeroId = id => ({
  type: ActionTypes.FETCH_STORIES_BY_HERO_ID,
  payload: {
    id,
  }
})

const fetchStoriesByHeroIdFailure = error => ({
  type: ActionTypes.FETCH_STORIES_BY_HERO_ID_FAILURE,
  payload: {
    error,
  }
})

const fetchStoriesByHeroIdSuccess = data => ({
  type: ActionTypes.FETCH_STORIES_BY_HERO_ID_SUCCESS,
  payload: {
    data
  },
})

const initialStoriesPagination = data => ({
  type: ActionTypes.INITIAL_STORIES_PAGINATION,
  payload: {
    data,
  }
})

const fetchPrevStoriesByHeroId = (data, id) => ({
  type: ActionTypes.FETCH_PREVIOUS_STORIES_BY_HERO_ID,
  payload: {
    data,
    id
  },
})

const fetchNextStoriesByHeroId = (data, id) => ({
  type: ActionTypes.FETCH_NEXT_STORIES_BY_HERO_ID,
  payload: {
    data,
    id
  },
})

const fetchStoriesOnCurrentPage = (data, id) => ({
  type: ActionTypes.FETCH_STORIES_ON_CURRENT_PAGE,
  payload: {
    data,
    id
  },
})

export {
  ActionTypes,
  fetchStoriesByHeroId,
  fetchStoriesByHeroIdFailure,
  fetchStoriesByHeroIdSuccess,
  initialStoriesPagination,
  fetchNextStoriesByHeroId,
  fetchPrevStoriesByHeroId,
  fetchStoriesOnCurrentPage,
}
