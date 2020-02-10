import { takeEvery, put, call } from 'redux-saga/effects'
import { ActionTypes, fetchHeroFailure, fetchHeroSuccess } from '../actions/hero'
import { MarvelApiService } from '../../services'

function* getHeroSaga({ payload }) {
  try {
    let resp = yield call(() => MarvelApiService.getHero(payload.id))
    yield put(fetchHeroSuccess(...resp.data.data.results))
  } catch (err) {
    yield put(fetchHeroFailure())
  }
}

export function* watchHero() {
  yield takeEvery(ActionTypes.FETCH_HERO_REQUEST, getHeroSaga)
}
