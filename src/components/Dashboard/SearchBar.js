import React from 'react';
import { Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <Box>
      <div className="search-bar">
        <input type="text" className="input" placeholder="&nbsp;" />
        <span className="label">Search here...</span>
        <span className="highlight"></span>
        <div className="search-btn">
          <SearchIcon />
          {/* <svg className="icon icon-18">
            <use xlink:href="#magnify"></use>
          </svg> */}
        </div>
      </div>
    </Box>
  );
};

export default SearchBar;
