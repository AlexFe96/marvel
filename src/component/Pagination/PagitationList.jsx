import React, { Component } from 'react'
import _ from 'lodash'
import PaginationItem from './PaginationItem'

class PaginationList extends Component {
  render() {
    const { pagination, data, id, fetchCurrentPageData } = this.props
    return (
      <p className="pages">
        {pagination.map((item) => {
          if (item === '...') {
            return <span key={_.uniqueId(item)} className="empty-page">...</span>
          }

          const page = item + 1
          const params = Object.assign({}, data)
          params.offset = params.limit * item
          const active = params.offset === data.offset
          return (
            <PaginationItem
              key={page}
              fetchCurrentPageData={() => fetchCurrentPageData(params, id)}
              active={active}
              page={page}
            />
          )
        })}
      </p>
    )
  }
}

export default PaginationList
