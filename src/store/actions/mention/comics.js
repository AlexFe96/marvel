const ActionTypes = {
  FETCH_COMICS_BY_HERO_ID: '@@comics/FETCH_COMICS_BY_HERO_ID',
  FETCH_COMICS_BY_HERO_ID_SUCCESS: '@@comics/FETCH_HERO_FAILURE_SUCCESS',
  FETCH_COMICS_BY_HERO_ID_FAILURE: '@@comics/FETCH_HERO_FAILURE_FAILURE',
  FETCH_PREVIOUS_COMICS_BY_HERO_ID: '@@comics/FETCH_PREVIOUS_COMICS_BY_HERO_ID',
  FETCH_NEXT_COMICS_BY_HERO_ID: '@@comics/FETCH_NEXT_COMICS_BY_HERO_ID',
  INITIAL_COMICS_PAGINATION: '@@comics/INITIAL_COMICS_PAGINATION',
  FETCH_COMICS_ON_CURRENT_PAGE: '@@comics/FETCH_COMICS_ON_CURRENT_PAGE'
}

const fetchComicsByHeroId = id => ({
  type: ActionTypes.FETCH_COMICS_BY_HERO_ID,
  payload: {
    id
  }
})

const fetchComicsByHeroIdFailure = error => ({
  type: ActionTypes.FETCH_COMICS_BY_HERO_ID_FAILURE,
  payload: {
    error,
  }
})

const fetchComicsByHeroIdSuccess = data => ({
  type: ActionTypes.FETCH_COMICS_BY_HERO_ID_SUCCESS,
  payload: {
    data,
  }
})

const initialComicsPagination = data => ({
  type: ActionTypes.INITIAL_COMICS_PAGINATION,
  payload: {
    data,
  }
})

const fetchNextComicsByHeroId = (data, id) => ({
  type: ActionTypes.FETCH_NEXT_COMICS_BY_HERO_ID,
  payload: {
    data,
    id
  },
})

const fetchPrevComicsByHeroId = (data, id) => ({
  type: ActionTypes.FETCH_PREVIOUS_COMICS_BY_HERO_ID,
  payload: {
    data,
    id
  },
})

const fetchComicsOnCurrentPage = (data, id) => ({
  type: ActionTypes.FETCH_COMICS_ON_CURRENT_PAGE,
  payload: {
    data,
    id
  },
})

export {
  ActionTypes,
  fetchComicsByHeroId,
  fetchComicsByHeroIdFailure,
  fetchComicsByHeroIdSuccess,
  initialComicsPagination,
  fetchPrevComicsByHeroId,
  fetchNextComicsByHeroId,
  fetchComicsOnCurrentPage,
}
