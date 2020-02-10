import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import withPagination from '../../../HOC/withPagination'
import ComicBookRow from './ComicBookRow'
import { fetchNextComicsByHeroId, fetchPrevComicsByHeroId, fetchComicsOnCurrentPage } from '../../../store/actions/mention/comics'
import Loader from '../../Loader'


class ComicsList extends Component {
  render() {
    const { data: comics, isLoading } = this.props
    return (
      <Fragment>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="comics-list">
            {comics.map((item, index) => <ComicBookRow comicBook={item} key={index} />)}
          </div>
        )
        }
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPrevData: (data, id) => dispatch(fetchPrevComicsByHeroId(data, id)),
  fetchNextData: (data, id) => dispatch(fetchNextComicsByHeroId(data, id)),
  fetchCurrentPageData: (data, id) => dispatch(fetchComicsOnCurrentPage(data, id))
})

export default connect(null, mapDispatchToProps)(withPagination(ComicsList))
