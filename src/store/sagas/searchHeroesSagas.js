import { debounce, put, call, select, takeEvery } from 'redux-saga/effects'
import _ from 'lodash'
import { ActionTypes, searchHeroFailure, searchHero, searchHeroSuccess } from '../actions/searchHeroes'
import { MarvelApiService } from '../../services'

function* getSearchHeroesSaga() {
  try {
    const params = yield select(state => _.pick(state.searchHeroes, [ 'searchingPattern', 'nextOffset', 'limit']))
    let resp = yield call(() => MarvelApiService.getHeroesByName(params))
    yield put(searchHeroSuccess(resp.data.data))
  }
  catch (err) {
    yield put(searchHeroFailure(err))
  }
}

function* searchHeroesSaga(action) {
  try {
    if (action.payload.name) {
      const params = yield select(state => _.pick(state.searchHeroes, [ 'searchingPattern', 'nextOffset', 'limit']))
      let resp = yield call(() => MarvelApiService.getHeroesByName(params))
      yield put(searchHero(resp.data.data))
    }

  }
  catch (err) {
    yield put(searchHeroFailure(err))
  }
}

export function* watchSearchHeroes() {
  yield debounce(500, ActionTypes.START_SEARCH_HERO, searchHeroesSaga)
  yield takeEvery(ActionTypes.FETCH_SEARCH_HERO_REQUEST, getSearchHeroesSaga)
}
