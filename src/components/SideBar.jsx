import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constanst';
const SideBar = () => {
  const selectedCategory = 'New';
  return (
    <Stack
      sx={{
        flexDirection: { xs: 'row', md: 'column' },
        height: { xs: 'auto', md: '95%' },
        overflowY: 'auto',
        p: 1,

      }}>
      {categories.map(category => (
        <button
          className="category-btn"
          key={category.name}
          style={{
            background: category.name === selectedCategory && '#fc1503',
            color: '#fff',
          }}>
          <span
            style={{
              color: category.name === selectedCategory ? 'white' : 'red',
              marginRight: '15px',
            }}>
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? '1' : '.8',
            }}>
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
