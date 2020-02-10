import { ActionTypes } from "../actions/hero";

const initialState = {
  data: null,
  isLoading: false,
  isFailure: false,
}

const hero = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_HERO_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case ActionTypes.FETCH_HERO_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        isFailure: false,
        isLoading: false,
      }
    case ActionTypes.FETCH_HERO_FAILURE:
      return {
        ...state,
        isFailure: true,
        isLoading: false,
      }
    default:
      return state
  }
}

export {
  hero as default
}
