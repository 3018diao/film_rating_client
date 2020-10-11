import React from 'react'

export const ResultCard: React.FC = ({ movie:any }) => {
  return (
    <div>
      <div className="result-card">
        <div className="poster-wrapper">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
          ) : (
              <div className="filter-poster"></div>
            )}
        </div>
      </div>
    </div>
  )
}
