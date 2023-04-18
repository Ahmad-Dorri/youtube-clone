import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { xs: 'auto', md: '92vh', borderRight: '1px solid #3d3d3d' },
        }}>
        <SideBar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ color: '#fff', mt: 1.5 }}>
          copyright to JSM media 2023
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
