import React from 'react'
import { Link } from 'react-router-dom';
import Counter04 from './counter04';

export const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <div className="inner=content">
          <div className="brand">
            <Link to="/">WatchList</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Watch List</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/add">Watch List</Link>
            </li>

            <li>
              <Link to="/add" className="btn">
                + Add
              </Link>
            </li>
            <li>
            <Counter04/>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
