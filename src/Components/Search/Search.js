import React from 'react';
import './Search.css';
import searchIcon from '../assets/media/Icon.png';
const Search = ({value, onChange}) => {
  return (
    <div className='search-container'>
        <input type='text' placeholder='Search' value={value} onChange={onChange}/>
        <img src={searchIcon}/>
    </div>
  )
}

export default Search