import React from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSliders } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <article className='search'>
      <div className='search-center'>
        <input type='text' placeholder='Search...' />
        {/* <div className='action-btns'> */}
        <button type='submit' className='search-btn'>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button type='submit' className='filter-btn'>
          <FontAwesomeIcon icon={faSliders} />{' '}
        </button>{' '}
        {/* </div> */}
      </div>
    </article>
  );
};

export default Search;
