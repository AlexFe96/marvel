import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import SeriesRow from './SeriesRow'
import Loader from '../../Loader'
import { fetchNextSeriesByHeroId, fetchPrevSeriesByHeroId, fetchSeriesOnCurrentPage } from '../../../store/actions/mention/series'
import withPagination from "../../../HOC/withPagination";


class SeriesList extends Component {
  render() {
    const { data: series, isLoading } = this.props
    return (
      <Fragment>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="series-list">
            {series.map((item, index) => <SeriesRow series={item} key={index} />)}
          </div>
        )
        }
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPrevData: (data, id) => dispatch(fetchPrevSeriesByHeroId(data, id)),
  fetchNextData: (data, id) => dispatch(fetchNextSeriesByHeroId(data, id)),
  fetchCurrentPageData: (data, id) => dispatch(fetchSeriesOnCurrentPage(data, id))
})


export default connect(null, mapDispatchToProps)(withPagination(SeriesList))
