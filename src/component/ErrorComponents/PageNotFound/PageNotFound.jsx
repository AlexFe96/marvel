import React from 'react'
import { Link } from 'react-router-dom'


const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <p>Page not found</p>
      <Link to="/">Go to home</Link>
    </div>
  )
}

export default PageNotFound
