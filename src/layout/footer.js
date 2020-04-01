import React from 'react';
import {Box, Typography } from '@material-ui/core';

const Copyright = () => {
  return <Typography variant="body2" color="textSecondary" align="center">
    Copyright &copy; Nexys {new Date().getFullYear()}
  </Typography>;
}

export default () => {
  return <Box pt={4}>
    <Copyright />
  </Box>
}