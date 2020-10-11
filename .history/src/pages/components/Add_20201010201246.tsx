import React, { useState } from 'react'
import axios from 'axios';

export const Add: React.FC = () => {

  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState([]);

  const onChange = (e: any) => {
    e.preventDefault();

    setQuery(e.target.value);
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=74ec648319cc77ab05dadb5bc63805f0&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
      .then((res: any) => {
        if (res.errors) {
          setResults(res.results);
        } else {
          setResults([])
        }
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

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie:any) => (
                <li>{movie.title}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
