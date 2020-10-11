import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  watchlist: [],
  watched: [],
  addMovieToWatchlist: (movie: any) => { }
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
  })

  // actions
  const addMovieToWatchlist = (movie: any) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  }

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};