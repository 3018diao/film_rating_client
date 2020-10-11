import React, { useState } from 'react'
import axios from 'axios';

export const Add: React.FC = () => {

  const [query, setQuery] = useState<string>("");

  const onChange = (e: any) => {
    e.preventDefault();

    setQuery(e.target.value);
    console.log(process.env.REACT_APP_TMDB_KEY)
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=74ec648319cc77ab05dadb5bc63805f0&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
