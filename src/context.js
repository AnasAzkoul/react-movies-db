import React, {useState, useContext, useEffect} from 'react';
import useFetch from './fetchMovies';
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [query, setQuery] = useState('batman'); 
  const {data:movies, isLoading, error} = useFetch(`&s=${query}`)
  
  const value = {
    isLoading, 
    error, 
    movies, 
    setQuery, 
    query, 
  }
  
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};


// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
