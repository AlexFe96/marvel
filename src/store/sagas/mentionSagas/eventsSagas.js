import { takeEvery, put, call, select } from 'redux-saga/effects'
import _ from 'lodash'
import { ActionTypes, fetchEventsByHeroIdFailure, fetchEventsByHeroIdSuccess, initialEventsPagination } from '../../actions/mention/events'
import { MarvelApiService } from '../../../services'

function* initialPaginationSaga({ payload }) {
  try {
    const params = {
      limit: 20,
      nextOffset: 0
    }
    let resp = yield call(() => MarvelApiService.getEventsByHeroId(payload.id, params))
    yield put(initialEventsPagination(resp.data.data))
    yield put(fetchEventsByHeroIdSuccess(resp.data.data))
  } catch (err) {
    yield put(fetchEventsByHeroIdFailure(err))
  }
}

function* getEventsSaga({ payload }) {
  try {
    const params = yield select(state => _.pick(state.events, ['nextOffset', 'limit']))
    let resp = yield call(() => MarvelApiService.getEventsByHeroId(payload.id, params))
    yield put(fetchEventsByHeroIdSuccess(resp.data.data))
  } catch (err) {
    yield put(fetchEventsByHeroIdFailure(err))
  }
}

function* watchEvents() {
  yield takeEvery(ActionTypes.FETCH_EVENTS_BY_HERO_ID, initialPaginationSaga)
}

export {
  watchEvents,
  getEventsSaga
}
