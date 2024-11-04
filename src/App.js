import React from 'react';
import { CssBaseline, Container, Typography, Button, AppBar, Toolbar, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Netlify Page
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to My Netlify Page!
        </Typography>
        <Typography variant="body1" paragraph>
          This is a simple example of a webpage built with React and Material-UI.
        </Typography>
        <Box textAlign="center" mt={4}>
          <Button variant="contained" color="primary">
            Learn More
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
