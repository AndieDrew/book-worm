import './Book.css'
import React from 'react'

type BookProps = {
    title: string,
    author: string,
    rank: number,
    bookImage: string,
    handleClick: (title: string) => void
}

function Book({ title, author, rank, bookImage, handleClick }: BookProps) {
    return (
        <article className='bookCard'>
            <img className='img' src={bookImage} alt='Book Cover'/>
            <h2 className='title'>{title}</h2>
            <h3 className='author'>{author}</h3>
            <span>
              <p className='rank'>Rank: {rank}</p>
              <button onClick={ () => handleClick(title)}>Add to Favorites 🐛</button>
            </span>
        </article>
)
}

export default Book
