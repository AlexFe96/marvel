import { all } from 'redux-saga/effects'
import { watchHeroes } from './heroesSagas'
import { watchHero } from './heroSagas'
import { watchMention } from './mentionSagas/mentionSagas'
import { watchPagination } from './paginationSagas'
import { watchSearchHeroes } from './searchHeroesSagas'

function* rootSaga () {
  yield all([
    watchHeroes(),
    watchHero(),
    ...watchMention(),
    watchPagination(),
    watchSearchHeroes(),
  ])
}

export default rootSaga
