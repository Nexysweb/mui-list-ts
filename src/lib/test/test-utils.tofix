import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import '@testing-library/jest-dom';

const theme = createMuiTheme({});

interface Props {
  children: React.ReactNode | JSX.Element;
}

const customRender = (ui: React.ReactElement): any => {
  const Wrapper = ({ children }: Props): JSX.Element => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );

  const utils = render(ui, {
    wrapper: Wrapper as React.ComponentType
  });

  return utils;
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
