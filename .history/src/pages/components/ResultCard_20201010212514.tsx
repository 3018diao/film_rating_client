import React from 'react';
import { Button } from 'antd';

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
            <h3 className="title">{movie.title}</h3>
            <h4 className="release-date">
              {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
            </h4>
          </div>
          <div className="controls">
            <Button style={{backgroundColor: "#2db7f5"}} >Add</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
