import React, { Component, Fragment } from 'react'
import withPagination from '../../HOC/withPagination'
import MentionRow from './MentionRow'
import Loader from '../Loader'


class MentionList extends Component {
  render() {
    const { data, isLoading, className } = this.props
    return (
      <Fragment>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={className}>
            {data.map((item, index) => <MentionRow data={item} key={index} />)}
          </div>
        )
        }
      </Fragment>
    )
  }
}

export default withPagination(MentionList)
