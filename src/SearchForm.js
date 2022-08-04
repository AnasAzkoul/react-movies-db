import React from 'react';
import { useGlobalContext } from './context';
const SearchForm = () => {
  const {query, setQuery, error} = useGlobalContext()
  
  const handleOnSubmit = (e) => {
    e.preventDefault(); 
  }
  
  
  return (
    <form className='search-form'>
      <h2>Search Movies</h2>
      <input
        type="text"
        className='form-input'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && <div className='error'>{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
