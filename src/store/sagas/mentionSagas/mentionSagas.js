import { all } from 'redux-saga/effects'
import { watchComics } from './comicsSagas'
import { watchEvents } from './eventsSagas'
import { watchSeries } from './seriesSagas'
import { watchStories } from './storiesSagas'


export function* watchMention () {
  yield all([
    watchComics(),
    watchEvents(),
    watchSeries(),
    watchStories()
  ])
}
