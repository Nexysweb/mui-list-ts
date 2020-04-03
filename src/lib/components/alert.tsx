import React from 'react';

import { Alert as MUIAlert } from '@material-ui/lab';

interface Props {
  children: React.ReactNode | JSX.Element;
  type?: 'error' | 'success' | 'info' | 'warning';
}

const Alert = (props: Props): JSX.Element => {
  const { type = 'success', children } = props;
  return <MUIAlert severity={type}>{children}</MUIAlert>;
};

export default Alert;
