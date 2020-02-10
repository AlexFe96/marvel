import { takeEvery, put, call, select } from 'redux-saga/effects'
import _ from 'lodash'
import { ActionTypes, fetchComicsByHeroIdFailure, fetchComicsByHeroIdSuccess, initialComicsPagination } from '../../actions/mention/comics'
import { MarvelApiService } from '../../../services'

function* initialComicsSaga({ payload }) {
  try {
    const params = {
      limit: 20,
      nextOffset: 0
    }
    let resp = yield call(() => MarvelApiService.getComicsByHeroId(payload.id, params))
    yield put(initialComicsPagination(resp.data.data))
    yield put(fetchComicsByHeroIdSuccess(resp.data.data))
  } catch (err) {
    yield put(fetchComicsByHeroIdFailure(err))
  }
}

function* getComicsSaga({ payload }) {
  try {
    const params = yield select(state => _.pick(state.comics, ['nextOffset', 'limit']))
    let resp = yield call(() => MarvelApiService.getComicsByHeroId(payload.id, params))
    yield put(fetchComicsByHeroIdSuccess(resp.data.data))
  } catch (err) {
    yield put(fetchComicsByHeroIdFailure(err))
  }
}

function* watchComics() {
  yield takeEvery(ActionTypes.FETCH_COMICS_BY_HERO_ID, initialComicsSaga)
}


export {
  watchComics,
  getComicsSaga
}
