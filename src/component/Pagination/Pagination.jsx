import React, { Component } from 'react'
import PaginationList from './PagitationList'

class Pagination extends Component {
  render() {
    const { data, fetchNextData, fetchPrevData, fetchCurrentPageData, id, pagination } = this.props
    return (
      <div className="pagination">
        <button className="pagination__prev" disabled={data.isFirstPage} onClick={() => fetchPrevData(data, id)}>prev</button>
        <PaginationList fetchCurrentPageData={fetchCurrentPageData} pagination={pagination} data={data} id={id} />
        <button className="pagination__next" disabled={data.isLastPage} onClick={() => fetchNextData(data, id)}>next</button>
      </div>
    )
  }
}

export default Pagination
