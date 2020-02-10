import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import InfiniteScroll from '../InfiniteScroll'
import UnidentifiedError from '../ErrorComponents/UnidentifiedError'
import HeroesList from '../HeroesList'
import HeroSearch from '../HeroSearch'
import { fetchHeroesRequest } from '../../store/actions/heroes'
import { startSearchHero, fetchSearchHeroRequest } from '../../store/actions/searchHeroes'


class Heroes extends Component {

  render() {
    const {
      isLastPage,
      isLoading,
      isLoadingSearchHeroes,
      isLastPageSearchHeroes,
      isSearching,
      isFailure,
      heroes,
      fetchHeroes,
      startSearchHero,
      searchingHero,
      searchingPattern,
      fetchSearchHeroRequest,
    } = this.props

    if (isFailure) {
      return <UnidentifiedError />
    }
    return (
      <Fragment>
        <InfiniteScroll
          heroes={heroes}
          isLastPage={isLastPage}
          isLoading={isLoading}
          isLoadingSearchHeroes={isLoadingSearchHeroes}
          isLastPageSearchHeroes={isLastPageSearchHeroes}
          isSearching={isSearching}
          fetchHeroes={fetchHeroes}
          fetchSearchHeroRequest={fetchSearchHeroRequest}
        >
          <HeroSearch startSearchHero={startSearchHero} searchingPattern={searchingPattern} />
          <HeroesList heroes={searchingPattern ? searchingHero : heroes} />
        </InfiniteScroll>
      </Fragment>
    )
  }
}


const mapStateToProps = ({ heroes, searchHeroes }) => ({
  heroes: heroes.data,
  isLoading: heroes.isLoading,
  isFailure: heroes.isFailure,
  isLastPage: heroes.isLastPage,
  isLoadingSearchHeroes: searchHeroes.isLoading,
  isLastPageSearchHeroes: searchHeroes.isLastPage,
  searchingHero: searchHeroes.searchingHero,
  isSearching: searchHeroes.isSearching,
  searchingPattern: searchHeroes.searchingPattern
})

const mapDispatchToProps = (dispatch) => ({
  fetchHeroes: () => dispatch(fetchHeroesRequest()),
  startSearchHero: (name) => dispatch(startSearchHero(name)),
  fetchSearchHeroRequest: () => dispatch(fetchSearchHeroRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(Heroes)
