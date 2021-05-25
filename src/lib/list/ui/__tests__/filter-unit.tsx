import React from 'react';

import { render, fireEvent, screen } from '../../../test/test-utils';
import { Filter } from '@nexys/core-list/dist/types';
import FilterUnit from '../filter-unit';

interface DummyData {
  id: number;
  name: string;
}

describe('FilterUnit', () => {
  describe('filter.options is an object', () => {
    it('should render passed options on click', () => {
      const filter: Filter<DummyData> = {
        type: 'category',
        func: () => true,
        options: [
          { key: 1, value: 'First' },
          { key: 2, value: 'Second' }
        ]
      };
      const filters = {};
      const name: keyof DummyData = 'name';

      const { container } = render(
        <FilterUnit<DummyData>
          filters={filters}
          name={name}
          onChange={() => {}}
          onReset={() => {}}
          filter={filter}
        />
      );

      expect(screen.queryByText('First')).not.toBeInTheDocument();
      expect(screen.queryByText('Second')).not.toBeInTheDocument();

      const filterBtn = container.querySelector(
        '[type="button"]'
      ) as HTMLButtonElement;
      fireEvent.click(filterBtn);

      expect(screen.queryByText('First')).toBeInTheDocument();
      expect(screen.queryByText('Second')).toBeInTheDocument();
    });
  });

  describe('filter.options is a function', () => {
    it('should call the passed function with filters argument', () => {
      const optionsFunc = jest.fn();
      const filter: Filter<DummyData> = {
        type: 'category',
        func: () => true,
        options: optionsFunc
      };
      const filters = {
        id: 2
      };
      const name: keyof DummyData = 'name';

      render(
        <FilterUnit<DummyData>
          filters={filters}
          name={name}
          onChange={() => {}}
          onReset={() => {}}
          filter={filter}
        />
      );

      expect(optionsFunc).toBeCalledTimes(1);
      expect(optionsFunc).toBeCalledWith({ id: 2 });
    });

    it('should render correct options', () => {
      const filter: Filter<DummyData> = {
        type: 'category',
        func: () => true,
        options: [
          { key: 1, value: 'First' },
          { key: 2, value: 'Second' }
        ].filter(o => o.key === 1)
      };
      const filters = {};
      const name: keyof DummyData = 'name';

      const { container } = render(
        <FilterUnit<DummyData>
          filters={filters}
          name={name}
          onChange={() => {}}
          onReset={() => {}}
          filter={filter}
        />
      );

      expect(screen.queryByText('First')).not.toBeInTheDocument();
      expect(screen.queryByText('Second')).not.toBeInTheDocument();

      const filterBtn = container.querySelector(
        '[type="button"]'
      ) as HTMLButtonElement;
      fireEvent.click(filterBtn);

      expect(screen.queryByText('First')).toBeInTheDocument();
      expect(screen.queryByText('Second')).not.toBeInTheDocument();
    });
  });
});
