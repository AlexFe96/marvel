import React, { PureComponent } from 'react'

class HeroSearch extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      value: props.searchingPattern
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const inputValue = e.target.value
    this.setState(() => ({ value: inputValue }))
    this.props.startSearchHero(inputValue)
  }

  render() {
    const { value } = this.state
    return (
      <div className="hero-search">
        <input
          className="hero-search__search-input"
          type="search"
          value={value}
          placeholder="search"
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default HeroSearch
