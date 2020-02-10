import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const DEFAULT_DESCRIPTION = "No description for this hero"

class HeroCard extends Component {
  render() {
    const { isDetails, hero, mention } = this.props
    const { id, name, description, thumbnail: { path, extension } } = hero
    if (isDetails) {
      const { stories, comics, series, events } = mention
      return (
        <div className="hero-card hero-card--detail">
          <div className="hero-card__name">{name}</div>
          <img src={`${path}.${extension}`} className="hero-card__image hero-card__image--detail" alt={name}/>
          <div className="hero-card__description hero-card__description--detail">{description || DEFAULT_DESCRIPTION}</div>
          <div className="hero-card__mention">
            {Boolean(stories.total) &&
              <span className="hero-card__stories">
                {stories.total} stories
              </span>
            }
            {Boolean(comics.total) &&
              <span className="hero-card__comics">
                {comics.total} comics
              </span>
            }
            {Boolean(series.total) &&
              <span className="hero-card__series">
                {series.total} series
              </span>
            }
            {Boolean(events.total) &&
              <span className="hero-card__events">
                {events.total} events
              </span>
            }
          </div>
        </div>
      )
    }
    return (
      <div className="hero-card">
        <div className="hero-card__name">{name}</div>
        <Link to={`/characters/${id}`}>
          <img src={`${path}.${extension}`} className="hero-card__image" alt={name}/>
        </Link>
        <div className="hero-card__description">{description || DEFAULT_DESCRIPTION}</div>
        <Link to={`/characters/${id}`} className="hero-card__btn">
          Detail
        </Link>
      </div>
    )
  }
}

export default HeroCard
