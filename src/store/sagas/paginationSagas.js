import { takeEvery } from 'redux-saga/effects'

import { getStoriesByHeroIdSaga } from './mentionSagas/storiesSagas'
import { getEventsSaga } from './mentionSagas/eventsSagas'
import { getSeriesSaga } from './mentionSagas/seriesSagas'
import { getComicsSaga } from './mentionSagas/comicsSagas'

import { ActionTypes as EventTypes } from '../actions/mention/events'
import { ActionTypes as StoryTypes } from '../actions/mention/stories'
import { ActionTypes as SeriesTypes } from '../actions/mention/series'
import { ActionTypes as ComicBookTypes } from '../actions/mention/comics'



function* watchPagination() {
  yield takeEvery(EventTypes.FETCH_PREVIOUS_EVENTS_BY_HERO_ID, getEventsSaga)
  yield takeEvery(EventTypes.FETCH_NEXT_EVENTS_BY_HERO_ID, getEventsSaga)
  yield takeEvery(EventTypes.FETCH_EVENTS_ON_CURRENT_PAGE, getEventsSaga)

  yield takeEvery(StoryTypes.FETCH_PREVIOUS_STORIES_BY_HERO_ID, getStoriesByHeroIdSaga)
  yield takeEvery(StoryTypes.FETCH_NEXT_STORIES_BY_HERO_ID, getStoriesByHeroIdSaga)
  yield takeEvery(StoryTypes.FETCH_STORIES_ON_CURRENT_PAGE, getStoriesByHeroIdSaga)

  yield takeEvery(SeriesTypes.FETCH_PREVIOUS_SERIES_BY_HERO_ID, getSeriesSaga)
  yield takeEvery(SeriesTypes.FETCH_NEXT_SERIES_BY_HERO_ID, getSeriesSaga)
  yield takeEvery(SeriesTypes.FETCH_SERIES_ON_CURRENT_PAGE, getSeriesSaga)

  yield takeEvery(ComicBookTypes.FETCH_PREVIOUS_COMICS_BY_HERO_ID, getComicsSaga)
  yield takeEvery(ComicBookTypes.FETCH_NEXT_COMICS_BY_HERO_ID, getComicsSaga)
  yield takeEvery(ComicBookTypes.FETCH_COMICS_ON_CURRENT_PAGE, getComicsSaga)
}

export {
  watchPagination
}
