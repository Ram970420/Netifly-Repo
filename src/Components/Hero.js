
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero = () => (
  <Box
    sx={{
      textAlign: 'center',
      py: 8,
      px: 2,
      backgroundColor: '#f0f4f8',
    }}
  >
    <Typography variant="h2" gutterBottom>
      Build, Deploy, and Scale Modern Websites
    </Typography>
    <Typography variant="h6" color="textSecondary" paragraph>
      Unlock powerful workflows and create with ease. Join thousands of developers and designers using Netlify.
    </Typography>
    <Button variant="contained" color="primary" size="large">
      Get Started for Free
    </Button>
  </Box>
);

export default Hero;
