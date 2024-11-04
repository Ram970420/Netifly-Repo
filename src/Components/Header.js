
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => (
  <AppBar position="static" color="transparent" elevation={0}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Netlify
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button color="inherit">Features</Button>
        <Button color="inherit">Solutions</Button>
        <Button color="inherit">Resources</Button>
        <Button color="inherit">Pricing</Button>
        <Button variant="contained" color="primary">
          Sign Up
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
