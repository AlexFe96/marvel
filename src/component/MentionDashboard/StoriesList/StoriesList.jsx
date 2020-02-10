import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import StoryRow from './StoryRow'
import { fetchNextStoriesByHeroId, fetchPrevStoriesByHeroId, fetchStoriesOnCurrentPage } from '../../../store/actions/mention/stories'
import Loader from '../../Loader'
import withPagination from '../../../HOC/withPagination'


class StoriesList extends Component {
  render() {
    const { data: stories, isLoading } = this.props
    return (
      <Fragment>
        {isLoading ? <Loader /> : (
          <div className="stories-list">
            {stories.map((item, index) => <StoryRow story={item} key={index} />)}
          </div>
          )
        }
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchNextData: (data, id) => dispatch(fetchNextStoriesByHeroId(data, id)),
  fetchPrevData: (data, id) => dispatch(fetchPrevStoriesByHeroId(data, id)),
  fetchCurrentPageData: (data, id) => dispatch(fetchStoriesOnCurrentPage(data, id))
})

export default connect(null, mapDispatchToProps)(withPagination(StoriesList))

