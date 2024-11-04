
import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';

const features = [
  { title: 'Continuous Deployment', description: 'Automate deployments with Git.' },
  { title: 'Serverless Functions', description: 'Build full-stack functionality without servers.' },
  { title: 'Global Edge Network', description: 'Serve content from edge locations for faster performance.' },
];

const Features = () => (
  <Box sx={{ py: 6, px: 2, textAlign: 'center' }}>
    <Typography variant="h4" gutterBottom>
      Why Choose Netlify
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {features.map((feature) => (
        <Grid item xs={12} sm={6} md={4} key={feature.title}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">{feature.title}</Typography>
              <Typography color="textSecondary">{feature.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Features;
