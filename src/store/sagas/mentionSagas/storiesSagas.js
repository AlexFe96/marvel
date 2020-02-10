import { takeEvery, put, call, select } from 'redux-saga/effects'
import _ from 'lodash'
import { ActionTypes, fetchStoriesByHeroIdFailure, fetchStoriesByHeroIdSuccess, initialStoriesPagination } from '../../actions/mention/stories'
import { MarvelApiService } from '../../../services'

function* initialStoriesSaga({ payload }) {
  try {
    const params = {
      limit: 20,
      nextOffset: 0
    }
    let resp = yield call(() => MarvelApiService.getStoriesByHeroId(payload.id, params))
    yield put(initialStoriesPagination(resp.data.data))
    yield put(fetchStoriesByHeroIdSuccess(resp.data.data))
  } catch (err) {
    yield put(fetchStoriesByHeroIdFailure(err))
  }
}

function* getStoriesByHeroIdSaga({ payload }) {
  try {
    const params = yield select(state => _.pick(state.stories, ['nextOffset', 'limit']))
    let resp = yield call(() => MarvelApiService.getStoriesByHeroId(payload.id, params))
    yield put(fetchStoriesByHeroIdSuccess(resp.data.data))
  } catch (err) {
    yield put(fetchStoriesByHeroIdFailure())
  }
}

function* watchStories() {
  yield takeEvery(ActionTypes.FETCH_STORIES_BY_HERO_ID, initialStoriesSaga)
}

export {
  watchStories,
  getStoriesByHeroIdSaga
}
