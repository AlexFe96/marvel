import { takeEvery, put, call, select } from 'redux-saga/effects'
import _ from 'lodash'
import { ActionTypes, fetchHeroesFailure, fetchHeroesSuccess } from '../actions/heroes'
import { MarvelApiService } from '../../services'

function* getHeroesSaga() {
  try {
    const params = yield select(state => _.pick(state.heroes, ['nextOffset', 'limit']))
    let resp = yield call(() => MarvelApiService.getHeroes(params))
    yield put(fetchHeroesSuccess(resp.data.data))
  } catch (err) {
    yield put(fetchHeroesFailure())
  }
}


export function* watchHeroes() {
  yield takeEvery(ActionTypes.FETCH_HEROES_REQUEST, getHeroesSaga)
}
