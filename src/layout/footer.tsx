import React from 'react';
import { Box, Typography } from '@material-ui/core';

const sha = import.meta.env.SNOWPACK_PUBLIC_GIT_SHA || 'git_sha';
const shaUrl = `https://github.com/Nexysweb/mui-list-ts/commit/${sha}`;

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
      <p>
        <small>
          <a href={shaUrl}>{sha}</a>
        </small>
      </p>
    </Box>
  );
};

export default Footer;
