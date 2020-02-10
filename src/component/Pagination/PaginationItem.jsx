import React, { Component } from 'react'
import classNames from 'classnames'

class PaginationItem extends Component {
  render() {
    const { page, active, fetchCurrentPageData } = this.props
    return (
      <span
        className={classNames('page', { 'active-page': active })}
        onClick={active ? null : fetchCurrentPageData}
      >
        {page}
      </span>
    )
  }
}

export default PaginationItem
