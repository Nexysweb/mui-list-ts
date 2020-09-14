import React from 'react';

import { render, screen } from '../../test/test-utils';
import { DefinitionItem } from '../../types';
import ListSuper from '../index';

interface DummyData {
  id: number;
  name: string;
}

describe('List Super', () => {
  const def: DefinitionItem<DummyData>[] = [
    {
      name: 'id'
    },
    {
      name: 'name'
    }
  ];
  const data: DummyData[] = [
    {
      id: 1,
      name: 'John'
    },
    {
      id: 2,
      name: 'Jane'
    }
  ];

  describe('config.recordInfo is UNDEFINED', () => {
    it('should display the recordInfo', () => {
      render(<ListSuper def={def} data={data} />);

      expect(
        screen.queryByText('Showing 1 to 2 of 2 entries')
      ).toBeInTheDocument();
    });
  });

  describe('config.recordInfo is defined', () => {
    describe('config.recordInfo is TRUE', () => {
      it('should display the recordInfo', () => {
        render(
          <ListSuper def={def} data={data} config={{ recordInfo: true }} />
        );

        expect(
          screen.queryByText('Showing 1 to 2 of 2 entries')
        ).toBeInTheDocument();
      });
    });

    describe('config.recordInfo is FALSE', () => {
      it('should display the recordInfo', () => {
        render(
          <ListSuper def={def} data={data} config={{ recordInfo: false }} />
        );

        expect(
          screen.queryByText('Showing 1 to 2 of 2 entries')
        ).not.toBeInTheDocument();
      });
    });
  });
});
