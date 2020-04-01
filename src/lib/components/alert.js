import React from 'react';

import { Alert as MUIAlert } from '@material-ui/lab';

export default props => {
  const { type = 'success', children } = props;
  return <MUIAlert severity={type}>{children}</MUIAlert>
}