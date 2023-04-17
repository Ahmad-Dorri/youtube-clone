import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputChangeHandler = (event) => {
    setSearchTerm(event.target.value)
  }
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{ borderRadius: 20, border: '1px solid #e3e3e3',pl: 2, mr: {sm: 5}, boxShadow: 'none' }}>
      <input placeholder='Search...' value={searchTerm} onChange={inputChangeHandler} className='search-bar'  />
      <IconButton type='submit' sx={{color: 'red', p: '10px'}}>
        <Search/>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
