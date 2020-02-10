import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import StoriesList from './StoriesList'
import EventsList from './EventsList'
import ComicsList from './ComicsList'
import SeriesList from './SeriesList'
import Loader from '../Loader'
import { fetchEventsByHeroId } from '../../store/actions/mention/events'
import { fetchComicsByHeroId } from '../../store/actions/mention/comics'
import { fetchStoriesByHeroId } from '../../store/actions/mention/stories'
import { fetchSeriesByHeroId } from '../../store/actions/mention/series'


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
    const { stories, events, comics, series, id } = this.props
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
              {activeTab === TABS.STORIES && <StoriesList id={id} {...stories} />}
              {activeTab === TABS.SERIES && <SeriesList id={id} {...series} />}
              {activeTab === TABS.COMICS && <ComicsList id={id} {...comics} />}
              {activeTab === TABS.EVENTS && <EventsList id={id} {...events} />}
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
})

export default connect(mapStateToProps, mapDispatchToProps)(MentionDashboard)
