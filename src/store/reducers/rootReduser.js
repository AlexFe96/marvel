import { combineReducers } from 'redux'
import heroes from './heroes'
import searchHeroes from './searchHeroes'
import hero from './hero'
import stories from './mention/stories'
import events from './mention/events'
import series from './mention/series'
import comics from './mention/comics'

const rootReducer = combineReducers({
  heroes,
  searchHeroes,
  hero,
  stories,
  events,
  series,
  comics,
})

export default rootReducer
