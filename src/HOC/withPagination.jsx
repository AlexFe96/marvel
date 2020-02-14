import React, { Component, Fragment } from 'react'
import _ from 'lodash'
import Pagination from '../component/Pagination'

function withPagination(WrappedComponent) {
  class WithPagination extends Component {
    constructor(props) {
      super(props)
      this.state = {
        currentPage: props.offset / 20 + 1
      }
    }

    render () {
      const { total, limit,  id, fetchPrevData, fetchNextData, fetchCurrentPageData } = this.props
      const { currentPage } = this.state
      const isNeedingPagination = Math.ceil(total / limit) > 1
      const data = {
        ..._.omit(this.props, ['data', 'isLoading', 'isFailure'])
      }
      const allPages = Array.apply(null, { length: Math.ceil(total / limit ) }).map(Number.call, Number)
      let pagination
      if (allPages.length <= 5) {
        pagination = allPages
      } else if (currentPage <= 3) {
        pagination = allPages.slice(0, 5).concat(['...', allPages[allPages.length - 1]])
      } else if (currentPage > 3 && currentPage + 2 < allPages.length) {
        pagination = [allPages[0], '...'].concat(allPages.slice(currentPage - 3, currentPage + 2)).concat(['...', allPages[allPages.length - 1]])
      } else {
        pagination = [allPages[0], '...'].concat(allPages.slice(allPages.length - 5))
      }

      return (
        <Fragment>
          <WrappedComponent {...this.props} />
          {isNeedingPagination &&
            <Pagination
              data={data}
              fetchPrevData={fetchPrevData}
              fetchNextData={fetchNextData}
              fetchCurrentPageData={fetchCurrentPageData}
              pagination={pagination}
              id={id}
            />
          }
        </Fragment>
      )
    }
  }
  WithPagination.displayName = `WithPagination(${getDisplayName(WrappedComponent)})`
  return WithPagination
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withPagination
