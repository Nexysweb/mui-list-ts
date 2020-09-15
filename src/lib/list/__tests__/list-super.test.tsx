import React from 'react';

import { render, screen } from '../../test/test-utils';
import { DefinitionItem } from '../../types';
import ListSuper from '../index';

interface DummyData {
  id: number;
  name: string;
  age: number;
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
      name: 'John',
      age: 30
    },
    {
      id: 2,
      name: 'Jane',
      age: 27
    }
  ];

  describe('label is defined', () => {
    const def: DefinitionItem<DummyData>[] = [
      {
        name: 'id',
        label: 'ID'
      },
      {
        name: 'name',
        label: 'Name'
      },
      {
        name: 'age',
        label: 'Age'
      }
    ];

    it('should render header unit', () => {
      render(<ListSuper def={def} data={data} />);

      expect(screen.queryByText(/id/i)).toBeInTheDocument();
      expect(screen.queryByText(/name/i)).toBeInTheDocument();
      expect(screen.queryByText(/age/i)).toBeInTheDocument();
    });
  });

  describe('label is UNDEFINED, NULL or empty', () => {
    const def: DefinitionItem<DummyData>[] = [
      {
        name: 'id',
        label: ''
      },
      {
        name: 'name'
      },
      {
        name: 'age',
        label: null
      }
    ];

    it('should not render header unit for that column', () => {
      render(<ListSuper def={def} data={data} />);

      expect(screen.queryByText(/id/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/name/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/age/i)).not.toBeInTheDocument();
    });
  });

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
