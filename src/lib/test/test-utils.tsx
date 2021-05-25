import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

interface Props {
  children: React.ReactNode | JSX.Element;
}

const customRender = (ui: React.ReactElement): any => {
  const Wrapper = ({ children }: Props): JSX.Element => <>{children}</>;

  const utils = render(ui, {
    wrapper: Wrapper as React.ComponentType
  });

  return utils;
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
