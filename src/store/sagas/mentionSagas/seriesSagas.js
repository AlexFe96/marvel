import { takeEvery, put, call, select } from 'redux-saga/effects'
import _ from 'lodash'
import { ActionTypes, fetchSeriesByHeroIdFailure, fetchSeriesByHeroIdSuccess, initialSeriesPagination } from '../../actions/mention/series'
import { MarvelApiService } from '../../../services'

function* initialSeriesSaga({ payload }) {
  try {
    const params = {
      limit: 20,
      nextOffset: 0
    }
    let resp = yield call(() => MarvelApiService.getSeriesByHeroId(payload.id, params))
    yield put(initialSeriesPagination(resp.data.data))
    yield put(fetchSeriesByHeroIdSuccess(resp.data.data))
  } catch (err) {
    yield put(fetchSeriesByHeroIdFailure(err))
  }
}

function* getSeriesSaga({ payload }) {
  try {
    const params = yield select(state => _.pick(state.series, ['nextOffset', 'limit']))
    let resp = yield call(() => MarvelApiService.getSeriesByHeroId(payload.id, params))
    yield put(fetchSeriesByHeroIdSuccess(resp.data.data))
  } catch (err) {
    yield put(fetchSeriesByHeroIdFailure(err))
  }
}


function* watchSeries() {
  yield takeEvery(ActionTypes.FETCH_SERIES_BY_HERO_ID, initialSeriesSaga)
}

export {
  watchSeries,
  getSeriesSaga
}
