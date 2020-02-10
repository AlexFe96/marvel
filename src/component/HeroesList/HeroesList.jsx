import React, { Component } from 'react'
import HeroCard from './HeroCard'

class HeroesList extends Component {
  render() {
    const { heroes } = this.props
    return (
      <div className="heroes-list">
        {heroes.map((hero) => (
          <HeroCard hero={hero} key={hero.id} />
        ))}
      </div>
    )
  }
}

export default HeroesList
