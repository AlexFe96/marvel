import React, { Component, Fragment } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import classNames from 'classnames'
import MentionList from './MentionList'
import Loader from '../Loader'
import {
  fetchEventsByHeroId,
  fetchEventsOnCurrentPage,
  fetchNextEventsByHeroId,
  fetchPrevEventsByHeroId
} from '../../store/actions/mention/events'
import {
  fetchComicsByHeroId,
  fetchComicsOnCurrentPage,
  fetchNextComicsByHeroId,
  fetchPrevComicsByHeroId
} from '../../store/actions/mention/comics'
import {
  fetchNextStoriesByHeroId,
  fetchPrevStoriesByHeroId,
  fetchStoriesByHeroId,
  fetchStoriesOnCurrentPage
} from '../../store/actions/mention/stories'
import {
  fetchNextSeriesByHeroId,
  fetchPrevSeriesByHeroId,
  fetchSeriesByHeroId,
  fetchSeriesOnCurrentPage
} from '../../store/actions/mention/series'


const TABS = {
  STORIES: 'STORIES',
  COMICS: 'COMICS',
  SERIES: 'SERIES',
  EVENTS: 'EVENTS'
}


class MentionDashboard extends Component {
  componentDidMount() {
    const { fetchStoriesByHeroId, fetchEventsByHeroId, fetchComicsByHeroId, fetchSeriesByHeroId, id} = this.props
    fetchStoriesByHeroId(id)
    fetchEventsByHeroId(id)
    fetchComicsByHeroId(id)
    fetchSeriesByHeroId(id)
  }

  constructor(props) {
    super(props)
    this.storiesHandler = this.storiesHandler.bind(this)
    this.comicsHandler = this.comicsHandler.bind(this)
    this.seriesHandler = this.seriesHandler.bind(this)
    this.eventsHandler = this.eventsHandler.bind(this)
    this.state = {
      activeTab: TABS.STORIES
    }
  }

  storiesHandler() {
    if (this.state.activeTab === TABS.STORIES) return null
    this.setState({ activeTab: TABS.STORIES })

    if(!this.props.stories.data.length) {
      const { fetchStoriesByHeroId, id} = this.props
      fetchStoriesByHeroId(id)
    }
  }

  comicsHandler() {
    if (this.state.activeTab === TABS.COMICS) return null
    this.setState({ activeTab: TABS.COMICS })

    if(!this.props.comics.data.length) {
      const { fetchComicsByHeroId, id} = this.props
      fetchComicsByHeroId(id)
    }
  }

  seriesHandler() {
    if (this.state.activeTab === TABS.SERIES) return null
    this.setState({ activeTab: TABS.SERIES })

    if(!this.props.series.data.length) {
      const { fetchSeriesByHeroId, id} = this.props
      fetchSeriesByHeroId(id)
    }
  }

  eventsHandler() {
    if (this.state.activeTab === TABS.EVENTS) return null
    this.setState({ activeTab: TABS.EVENTS })

    if(!this.props.events.data.length) {
      const { fetchEventsByHeroId, id} = this.props
      fetchEventsByHeroId(id)
    }
  }

  render() {
    const {
      id,
      stories,
      events,
      comics,
      series,
      fetchPrevComics,
      fetchNextComics,
      fetchCurrentPageComics,
      fetchPrevEvents,
      fetchNextEvents,
      fetchCurrentPageEvents,
      fetchPrevSeries,
      fetchNextSeries,
      fetchCurrentPageSeries,
      fetchPrevStories,
      fetchNextStories,
      fetchCurrentPageStories,
    } = this.props
    const { isLoading: isLoadingStories, count: countStories } = stories
    const { isLoading: isLoadingEvents, count: countEvents } = events
    const { isLoading: isLoadingComics, count: countComics} = comics
    const { isLoading: isLoadingSeries, count: countSeries } = series
    const isLoading = isLoadingStories || isLoadingComics || isLoadingEvents || isLoadingSeries
    const isTabsShown = Boolean(countStories || countEvents || countComics || countSeries)
    const { activeTab } = this.state
    return (
      <div className="mention-dashboard">
        {isLoading && <Loader />}
        {!isLoading && isTabsShown &&
          <Fragment>
            <div className="mention-dashboard__tabs">
              {Boolean(stories.total) &&
                <div className={classNames('mention-dashboard__tab', {active: activeTab === TABS.STORIES})}
                     onClick={this.storiesHandler}>
                  stories
                </div>
              }
              {Boolean(comics.total) &&
                <div className={classNames('mention-dashboard__tab', {active: activeTab === TABS.COMICS})}
                     onClick={this.comicsHandler}>
                  comics
                </div>
              }
              {Boolean(series.total) &&
                <div className={classNames('mention-dashboard__tab', {active: activeTab === TABS.SERIES})}
                     onClick={this.seriesHandler}>
                  series
                </div>
              }
              {Boolean(events.total) &&
                <div className={classNames('mention-dashboard__tab', {active: activeTab === TABS.EVENTS})}
                     onClick={this.eventsHandler}>
                  events
                </div>
              }
            </div>
            <div className="mention-dashboard__content">
              {activeTab === TABS.STORIES &&
                <MentionList
                  className="stories-list"
                  id={id}
                  data={stories.data}
                  fetchPrevData={fetchPrevStories}
                  fetchNextData={fetchNextStories}
                  fetchCurrentPageData={fetchCurrentPageStories}
                  {..._.omit(stories, ['data'])} />
              }
              {activeTab === TABS.SERIES &&
                <MentionList
                  className="series-list"
                  id={id}
                  data={series.data}
                  fetchPrevData={fetchPrevSeries}
                  fetchNextData={fetchNextSeries}
                  fetchCurrentPageData={fetchCurrentPageSeries}
                  {..._.omit(series, ['data'])}
                />
              }
              {activeTab === TABS.COMICS &&
                <MentionList
                  className="comics-list"
                  id={id}
                  data={comics.data}
                  fetchPrevData={fetchPrevComics}
                  fetchNextData={fetchNextComics}
                  fetchCurrentPageData={fetchCurrentPageComics}
                  {..._.omit(comics, ['data'])}
                />
              }
              {activeTab === TABS.EVENTS &&
                <MentionList
                  className="events-list"
                  id={id}
                  data={events.data}
                  fetchPrevData={fetchPrevEvents}
                  fetchNextData={fetchNextEvents}
                  fetchCurrentPageData={fetchCurrentPageEvents}
                  {..._.omit(events, ['data'])}
                />
              }
            </div>
          </Fragment>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ stories, events, comics, series }) => ({ stories, events, comics, series })

const mapDispatchToProps = (dispatch) => ({
  fetchStoriesByHeroId: (id) => dispatch(fetchStoriesByHeroId(id)),
  fetchEventsByHeroId: (id) => dispatch(fetchEventsByHeroId(id)),
  fetchSeriesByHeroId: (id) => dispatch(fetchSeriesByHeroId(id)),
  fetchComicsByHeroId: (id) => dispatch(fetchComicsByHeroId(id)),
  fetchPrevComics: (data, id) => dispatch(fetchPrevComicsByHeroId(data, id)),
  fetchNextComics: (data, id) => dispatch(fetchNextComicsByHeroId(data, id)),
  fetchCurrentPageComics: (data, id) => dispatch(fetchComicsOnCurrentPage(data, id)),
  fetchPrevEvents: (data, id) => dispatch(fetchPrevEventsByHeroId(data, id)),
  fetchNextEvents: (data, id) => dispatch(fetchNextEventsByHeroId(data, id)),
  fetchCurrentPageEvents: (data, id) => dispatch(fetchEventsOnCurrentPage(data, id)),
  fetchPrevSeries: (data, id) => dispatch(fetchPrevSeriesByHeroId(data, id)),
  fetchNextSeries: (data, id) => dispatch(fetchNextSeriesByHeroId(data, id)),
  fetchCurrentPageSeries: (data, id) => dispatch(fetchSeriesOnCurrentPage(data, id)),
  fetchNextStories: (data, id) => dispatch(fetchNextStoriesByHeroId(data, id)),
  fetchPrevStories: (data, id) => dispatch(fetchPrevStoriesByHeroId(data, id)),
  fetchCurrentPageStories: (data, id) => dispatch(fetchStoriesOnCurrentPage(data, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MentionDashboard)
