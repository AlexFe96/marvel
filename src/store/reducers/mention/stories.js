import { ActionTypes } from '../../actions/mention/stories'

const initialState = {
  total: 0,
  limit: 20,
  count: 0,
  offset: 0,
  isLastPage: false,
  isFirstPage: true,
  nextOffset: 0,
  data: [],
  isLoading: false,
  isFailure: false,
}

const stories = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_STORIES_BY_HERO_ID:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.FETCH_STORIES_BY_HERO_ID_FAILURE:
      return {
        ...state,
        isLoading: false,
        isFailure: true,
      }
    case ActionTypes.FETCH_STORIES_BY_HERO_ID_SUCCESS:
      return {
        ...state,
        data: action.payload.data.results,
        isLoading: false,
        isFailure: false,
      }
    case ActionTypes.INITIAL_STORIES_PAGINATION:
      return {
        ...state,
        total: action.payload.data.total,
        limit: action.payload.data.limit,
        count: action.payload.data.count,
        offset: action.payload.data.offset,
        isLastPage: action.payload.data.total <= action.payload.data.offset + action.payload.data.count,
      }
    case ActionTypes.FETCH_PREVIOUS_STORIES_BY_HERO_ID:
      return {
        ...state,
        total: action.payload.data.total,
        limit: action.payload.data.limit,
        count: action.payload.data.count,
        offset: action.payload.data.offset - action.payload.data.limit,
        isLastPage: action.payload.data.total <= action.payload.data.offset - action.payload.data.limit,
        isFirstPage: !(action.payload.data.offset - action.payload.data.limit),
        nextOffset: action.payload.data.offset - action.payload.data.limit,
        isLoading: true,
      }
    case ActionTypes.FETCH_NEXT_STORIES_BY_HERO_ID:
      return {
        ...state,
        total: action.payload.data.total,
        limit: action.payload.data.limit,
        count: action.payload.data.count,
        offset: action.payload.data.offset + action.payload.data.limit,
        isLastPage: action.payload.data.total <= action.payload.data.offset + action.payload.data.count,
        isFirstPage: !(action.payload.data.offset + action.payload.data.limit),
        nextOffset: action.payload.data.offset + action.payload.data.count,
        isLoading: true,
      }
    case ActionTypes.FETCH_STORIES_ON_CURRENT_PAGE:
      return {
        ...state,
        total: action.payload.data.total,
        limit: action.payload.data.limit,
        count: action.payload.data.count,
        offset: action.payload.data.offset,
        isLastPage: action.payload.data.total <= action.payload.data.offset + action.payload.data.count,
        isFirstPage: !action.payload.data.offset,
        nextOffset: action.payload.data.offset,
        isLoading: true,
      }
    default:
      return state
  }
}

export {
  stories as default
}
