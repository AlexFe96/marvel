import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import EventRow from './EventRow'
import { fetchPrevEventsByHeroId, fetchNextEventsByHeroId, fetchEventsOnCurrentPage } from '../../../store/actions/mention/events'
import Loader from '../../Loader'
import withPagination from '../../../HOC/withPagination'


class EventsList extends Component {
  render() {
    const { data: events, isLoading } = this.props
    return (
      <Fragment>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="events-list">
            {events.map((item, index) => <EventRow event={item} key={index} />)}
          </div>
        )
        }
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPrevData: (data, id) => dispatch(fetchPrevEventsByHeroId(data, id)),
  fetchNextData: (data, id) => dispatch(fetchNextEventsByHeroId(data, id)),
  fetchCurrentPageData: (data, id) => dispatch(fetchEventsOnCurrentPage(data, id))
})

export default connect(null, mapDispatchToProps)(withPagination(EventsList))
