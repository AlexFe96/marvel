import React from 'react'

const StoryRow = ({ story }) => (
    <div className="stories-row">
      <span className="stories-row stories-row--pointer">{story.title}</span>
    </div>
)

export default StoryRow
