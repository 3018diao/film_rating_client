import React, { createContext, useReducer, useEffect } from 'react';

// initial state
const initialState = {
  watchlist: [],
  watched: [],
};

// create context
export const GlobalContent = createContext(initialState);

// provider components
export const GlobalProvider = (props:any) => {
  const [state, dispatch] = useReducher(AppReducer, ini)
}