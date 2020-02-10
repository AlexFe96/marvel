import React from 'react'

const ComicBookRow = ({ comicBook }) => {
  return (
    <div className="comic-book-row">
      <span className="comic-book-row comic-book-row--pointer" onClick={() => console.log(comicBook.resourceURI)}>{comicBook.title}</span>
    </div>
  )
}


export default ComicBookRow
