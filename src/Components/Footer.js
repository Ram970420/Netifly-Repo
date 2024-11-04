
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => (
  <Box sx={{ py: 4, textAlign: 'center', backgroundColor: '#333', color: 'white' }}>
    <Typography variant="body2" gutterBottom>
      &copy; {new Date().getFullYear()} Netlify, Inc. All rights reserved.
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
      <Link href="#" color="inherit">
        Privacy
      </Link>
      <Link href="#" color="inherit">
        Terms
      </Link>
      <Link href="#" color="inherit">
        Contact
      </Link>
    </Box>
  </Box>
);

export default Footer;
