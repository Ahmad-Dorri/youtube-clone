import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { SideBar, Videos } from './';
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
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}>
          New
          <span style={{ color: '#f31503' }}> videos</span>
        </Typography>
        <Videos videos={[]} />
      </Box>
    </Stack>
  );
};

export default Feed;
