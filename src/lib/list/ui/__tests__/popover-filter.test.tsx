import React from 'react';

import { render, screen, fireEvent } from '../../../test/test-utils';
import PopoverFilter from '../popover-filter';

describe('PopoverFilter', () => {
  describe('isActive prop is true', () => {
    it('should render reset button', () => {
      render(
        <PopoverFilter onReset={() => {}} isActive={true}>
          <p>Test children</p>
        </PopoverFilter>
      );

      expect(screen.queryByTestId('reset-button')).toBeInTheDocument();
    });

    it('should call onReset prop on reset button click', () => {
      const onReset = jest.fn();
      render(
        <PopoverFilter onReset={onReset} isActive={true}>
          <p>Test children</p>
        </PopoverFilter>
      );

      const resetButton = screen.queryByTestId(
        'reset-button'
      ) as HTMLButtonElement;
      fireEvent.click(resetButton);

      expect(onReset).toBeCalledTimes(1);
    });
  });

  describe('isActive prop is undefined or false', () => {
    it('should NOT render reset button', () => {
      render(
        <PopoverFilter onReset={() => {}}>
          <p>Test children</p>
        </PopoverFilter>
      );

      expect(screen.queryByTestId('reset-button')).not.toBeInTheDocument();
    });
  });
});
