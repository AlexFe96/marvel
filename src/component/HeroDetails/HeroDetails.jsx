import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHeroRequest } from '../../store/actions/hero'
import HeroCard from '../HeroesList/HeroCard'
import MentionDashboard from '../MentionDashboard'
import Loader from '../Loader'


class HeroDetails extends Component {
  componentDidMount() {
    const { hero, fetchHero, id } = this.props
    if (!hero || (hero.id !== id)) {
      fetchHero(id)
    }
  }

  render() {
    const { hero, isLoading, id } = this.props
    if (isLoading) return <Loader />
    if (!hero) return <p>нет такого перса</p>
    const { mention } = this.props
    return (
      <div className="container hero-details">
        <HeroCard mention={mention} hero={hero} isDetails />
        <MentionDashboard id={id} />
      </div>
    )
  }
}

const mapStateToProps = ({ heroes, hero, stories, events, series, comics }, { match }) => {
  const id = Number(match.params.id)
  return {
    mention: {
      stories,
      events,
      series,
      comics,
    },
    hero: heroes.ids[id] || hero.data,
    id,
    isLoading: hero.isLoading,
    isFailure: hero.isFailure,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchHero: (id) => dispatch(fetchHeroRequest(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HeroDetails)
