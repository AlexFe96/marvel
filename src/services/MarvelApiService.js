import axios from 'axios'
import URI from 'urijs'
import marvelApi from '../config/config'
import getApiParams from '../ApiParamsHelper'


class MarvelApiService {
  static getHeroes ({ nextOffset, limit }) {
    const url = new URI(`${marvelApi.baseUrl}/characters`)
      .addQuery({ ...getApiParams(),  limit, offset: nextOffset })
    return axios.get(url)
  }
  static getHeroesByName ({ searchingPattern, nextOffset, limit }) {
    const url = new URI(`${marvelApi.baseUrl}/characters`)
      .addQuery({ ...getApiParams(), nameStartsWith: searchingPattern, orderBy: 'name',  limit, offset: nextOffset })
    return axios.get(url)
  }
  static getHero (id) {
    const url = new URI(`${marvelApi.baseUrl}/characters/${id}`)
      .addQuery({ ...getApiParams() })
    return  axios.get(url)
  }
  static getStoriesByHeroId (id, { limit, nextOffset }) {
    const url = new URI(`${marvelApi.baseUrl}/characters/${id}/stories`)
      .addQuery({ ...getApiParams(), limit, offset: nextOffset })
    return  axios.get(url)
  }
  static getEventsByHeroId (id, { limit, nextOffset }) {
    const url = new URI(`${marvelApi.baseUrl}/characters/${id}/events`)
      .addQuery({ ...getApiParams(), limit, offset: nextOffset })
    return  axios.get(url)
  }
  static getComicsByHeroId (id, { limit, nextOffset }) {
    const url = new URI(`${marvelApi.baseUrl}/characters/${id}/comics`)
      .addQuery({ ...getApiParams(), limit, offset: nextOffset })
    return  axios.get(url)
  }
  static getSeriesByHeroId (id, { limit, nextOffset }) {
    const url = new URI(`${marvelApi.baseUrl}/characters/${id}/series`)
      .addQuery({ ...getApiParams(), limit, offset: nextOffset })
    return  axios.get(url)
  }
}

export default MarvelApiService
