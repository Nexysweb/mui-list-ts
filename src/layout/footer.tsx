import React from 'react';
import { Box, Typography } from '@material-ui/core';

const Copyright = (): JSX.Element => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright &copy; Nexys {new Date().getFullYear()}
    </Typography>
  );
};

const Footer = (): JSX.Element => {
  return (
    <Box pt={4}>
      <Copyright />
    </Box>
  );
};

export default Footer;
