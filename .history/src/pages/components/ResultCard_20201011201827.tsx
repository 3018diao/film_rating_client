import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Button, Rate } from 'antd';

interface IResultCardProps {
  movie: any
}

export const ResultCard: React.FC<IResultCardProps> = ({ movie }) => {
  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o: any) => o.id === movie.id);

  const watchlistDisabled = storedMovie ? true : false;

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
            <Button
              style={{ backgroundColor: "#f5c518" }}
              disabled={watchlistDisabled}
              onClick={() => addMovieToWatchlist(movie)}
            >
              ADD TO WATCHLIST
            </Button>
            <Rate allowHalf disabled defaultValue={movie.vote_average / 2}>
              {movie.vote_average}
            </Rate>
          </div>
        </div>
      </div>
    </div>
  )
}
