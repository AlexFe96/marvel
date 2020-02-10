import React, { Component } from 'react'
import Loader from '../Loader'
import _ from 'lodash'

const GAP = 150

class InfiniteScroll extends Component {
  componentDidMount() {
    const { fetchHeroes, heroes } = this.props
    if (!heroes.length && fetchHeroes) {
      fetchHeroes()
    }
    window.addEventListener('scroll', _.debounce(this.handleScroll, 500), false)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', _.debounce(this.handleScroll, 500), false)
  }

  handleScroll = () => {
    if (!this.rootRef) return null
    const {
      isLoading,
      isLastPage,
      fetchHeroes,
      isSearching,
      fetchSearchHeroRequest,
      isLastPageSearchHeroes,
      isLoadingSearchHeroes
    } = this.props
    const { innerHeight, scrollY } = window
    const { offsetTop, scrollHeight } = this.rootRef
    const isAtBottom = innerHeight + scrollY > offsetTop + scrollHeight - GAP
    if (!isSearching && isAtBottom && !isLoading && !isLastPage) {
      fetchHeroes()
    }
    if (isSearching && isAtBottom && !isLoadingSearchHeroes && !isLastPageSearchHeroes) {
      fetchSearchHeroRequest()
    }
  }

  setRootRef = element => {
    this.rootRef = element
  }

  render() {
    const { children, isLoading, isLastPage, isLoadingSearchHeroes, isLastPageSearchHeroes } = this.props

    return (
      <div ref={this.setRootRef} className="container">
        {children}
        {(isLoading || isLoadingSearchHeroes) && <Loader />}
        {(isLastPage || isLastPageSearchHeroes) && <div className="no-more-items">No more items</div>}
      </div>
    )
  }
}

export default InfiniteScroll
