import React, { useState } from 'react';

import Utils from '@nexys/utils';

import {
  GlobalSearch,
  HeaderUnit,
  OrderController,
  Row,
  ColCell,
  RecordInfo,
  NoRow,
  ListWrapper,
  ListContainer,
  ListHeader,
  ListBody,
  FilterUnit
} from './ui';
import { InnerProps as PaginationProps } from './pagination';
import { Config, Definition, DefinitionItem, SortCompareOut } from '../types';
import { order, orderWithPagination } from './order-utils';
import { applyFilter, addRemoveToArray, toFilterArray } from './filter-utils';

//const LoaderDefault = (): JSX.Element => <p>Loading...</p>;

const getSort = <A,>(
  def: DefinitionItem<A>[],
  sortAttribute: keyof A
): (keyof A | ((input: A) => SortCompareOut)) | keyof A => {
  const i = def.find(x => x.name === sortAttribute);
  if (!i || !i.sort) {
    throw Error('sort attribute could not be matched');
  }

  if (typeof i.sort === 'object' && 'func' in i.sort) {
    return i.sort.func;
  }

  return sortAttribute;
};

interface State<A> {
  sortAttribute?: keyof A;
  sortDescAsc: boolean;
  filters: { [k in keyof A | 'globalSearch']?: any }; //TFilterUnit<A>[];
  pageIdx: number;
  data: A[];
}

const stateDefault = <A,>(): State<A> => ({
  sortDescAsc: true,
  filters: {},
  pageIdx: 1,
  data: []
});

export interface Props {
  HeaderUnit: typeof HeaderUnit;
  FilterUnit: typeof FilterUnit;
  OrderController: typeof OrderController;
  ColCell: typeof ColCell;
  GlobalSearch: typeof GlobalSearch;
  NoRow: typeof NoRow;
  Row: typeof Row;
  ListWrapper: typeof ListWrapper;
  ListContainer: typeof ListContainer;
  ListHeader: typeof ListHeader;
  ListBody: typeof ListBody;
  RecordInfo: typeof RecordInfo;
  Pagination: (props: PaginationProps) => JSX.Element | null;
}

export interface InnerProps<A> {
  def: Definition<A>;
  data?: A[];
  nPerPage?: number;
  config?: Config;
  asyncData?: () => Promise<any>;
}

const ListSuper = <A,>({
  HeaderUnit,
  FilterUnit,
  OrderController,
  ColCell,
  GlobalSearch,
  NoRow,
  Row,
  ListWrapper,
  ListContainer,
  ListHeader,
  ListBody,
  RecordInfo,
  Pagination
}: Props) =>
  function InnerListSuper(props: InnerProps<A>): JSX.Element {
    const [state, setState] = useState<State<A>>(stateDefault<A>());
    // todo async
    //const [ fpData, setPData ] = useState([]);
    //const [ loading, setLoading ] = useState(true);
    //const [ n, setN ] = useState(0);

    const { def, config = {}, asyncData } = props; // todo asyn , asyncData = false
    const { filters, pageIdx, sortAttribute, sortDescAsc, data } = state;
    const nPerPage = config.nPerPage || props.nPerPage || 25;
    if (props.nPerPage) {
      console.warn(
        'The use of nPerPage in props is deprecated. Add nPerPage to the config object prop.'
      );
    }

    // this manages both strings and categories
    const setFilter = (v: {
      name: keyof A | 'globalSearch';
      value: any;
      type?: string;
    }): void => {
      if (v.value === null || v.value === '') {
        delete filters[v.name];
      } else {
        // if object
        if (typeof v.value !== 'string') {
          if (v.type === 'category') {
            if (!filters[v.name]) {
              filters[v.name] = { value: [], func: v.value.func };
            }

            filters[v.name].value = addRemoveToArray(
              v.value.value,
              filters[v.name].value
            );

            if (filters[v.name].value.length === 0) {
              delete filters[v.name];
            }
          } else {
            if (!filters[v.name]) {
              filters[v.name] = { value: null, func: v.value.func };
            }

            filters[v.name].value = v.value === '' ? null : v.value;
          }
        } else {
          // if string
          filters[v.name] = v.value === '' ? null : v.value;
        }
      }

      // when a filter is applied, the page index is reset
      const pageIdx = 1;

      setState({ ...state, filters, pageIdx });
    };

    /**
     * defines order to apply
     * @param  {[type]} name    attribute/column
     * @param  {[type]} descAsc true/false - asc or desc. if null, will toggle
     * @return {[type]}         [description]
     * todo: allow custom ordering
     */
    const setOrder = (name: keyof A, descAsc: boolean | null = null): void => {
      if (descAsc === null) {
        descAsc = !sortDescAsc;
      }

      setState({
        ...state,
        pageIdx: 1,
        sortDescAsc: descAsc,
        sortAttribute: name
      });
    };

    const changePage = (pageIdx: number): void => {
      // todo block beyond max page
      if (pageIdx > 0) {
        setState({ ...state, pageIdx });
      }
    };

    const isSort = (h: DefinitionItem<A>): boolean => {
      return (
        (typeof h.sort === 'boolean' && h.sort === true) ||
        typeof h.sort === 'object'
      );
    };

    const renderHeaders = (): JSX.Element[] => {
      return def.map((h, i) => {
        const label = h.label === null ? null : h.label || h.name;

        const order = isSort(h) ? (
          <OrderController
            descAsc={sortDescAsc}
            onClick={(): void => setOrder(h.name)}
          />
        ) : null;

        const filter = (
          <FilterUnit
            key={i}
            filters={filters}
            name={h.name}
            filter={h.filter}
            onChange={setFilter}
          />
        );

        return (
          <HeaderUnit key={i}>
            {label} {order} {filter}
          </HeaderUnit>
        );
      });
    };

    const renderBody = (data: any): JSX.Element =>
      data.map((row: any, i: number) => (
        <tr key={i}>
          {def.map((h, j) => {
            return (
              <ColCell key={j}>
                {h.render
                  ? h.render(row)
                  : Utils.ds.get(h.name.toString(), row)}
              </ColCell>
            );
          })}
        </tr>
      ));

    /*
  // todo async
  if (asyncData && loading) {
    asyncData(state).then(p => {
      setPData(p);
      setN(p.length);
      setLoading(false);
    });

    return <Loader/>;
  }

  if(loading) {
    const fData = applyFilter(data, filters);
    setLoading(false);
    setN(fData.length);
    setPData(orderWithPagination(order(fData, sortAttribute, sortDescAsc), pageIdx, nPerPage));
  }*/
    if (data.length === 0) {
      if (asyncData)
        asyncData().then(res => {
          setState({ ...state, data: res });
        });
      else {
        if (props.data && props.data.length) {
          setState({ ...state, data: props.data });
        }
      }
    }
    const fData: A[] = applyFilter(data, toFilterArray<A>(filters));
    const n: number = fData.length;

    const fpData: A[] = sortAttribute
      ? orderWithPagination(
          order<A>(fData, getSort<A>(def, sortAttribute), sortDescAsc),
          pageIdx,
          nPerPage
        )
      : fData;

    const showPagination: boolean =
      typeof config.pagination !== 'undefined' ? config.pagination : true;

    return (
      <ListWrapper>
        <GlobalSearch config={config} onChange={setFilter} filters={filters} />
        <ListContainer>
          <ListHeader>
            <Row>{renderHeaders()}</Row>
          </ListHeader>

          <ListBody>{renderBody(fpData)}</ListBody>
        </ListContainer>

        <RecordInfo n={n} idx={pageIdx} nPerPage={nPerPage} />

        {showPagination && n > nPerPage && (
          <Pagination
            n={n}
            nPerPage={nPerPage}
            idx={pageIdx}
            onClick={changePage}
          />
        )}

        <NoRow n={n} />
      </ListWrapper>
    );
  };

export default ListSuper;
