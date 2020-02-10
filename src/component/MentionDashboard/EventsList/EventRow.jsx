import React from 'react'

const EventRow = ({ event }) => {
  return (
    <div className="event-row">
      <span className="event-row event-row--pointer" onClick={() => console.log(event.resourceURI)}>{event.title}</span>
    </div>
  )
}


export default EventRow
