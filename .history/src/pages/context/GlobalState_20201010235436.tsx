import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  watchlist: [],
  watched: [],
};

// create context
export const GlobalContent = createContext(initialState);

// provider components
export const GlobalProvider = (props: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContent.Provider value={{ watchlist: state.watchlist, watched: state.watched }}>

    </GlobalContent.Provider>
  )
}