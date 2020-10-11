import React from 'react'

interface IResultCardProps {
  movie: any
}

export const ResultCard: React.FC<IResultCardProps> = ({ movie }) => {

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
        <div className="info">
          <div className="header">
          <h3>{movie.tile}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
