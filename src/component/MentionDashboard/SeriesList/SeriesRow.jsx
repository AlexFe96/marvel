import React from 'react'

const SeriesRow = ({ series }) => {
  console.log('SeriesRow')
  return (
    <div className="series-row">
      <span className="series-row series-row--pointer">{series.title}</span>
    </div>
  )
}


export default SeriesRow
