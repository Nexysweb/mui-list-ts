import React, { useReducer, Reducer } from 'react';

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
  FilterUnit,
  Loader
} from './ui';
import { InnerProps as PaginationProps } from './pagination';
import {
  Config,
  Definition,
  DefinitionItem,
  AsyncDataConfig,
  AsyncDataReturn
} from '../types';
import { order, getSort } from './utils/order-utils';
import {
  applyFilter,
  toFilterArray,
  updateFilters
} from './utils/filter-utils';
import { withPagination } from './utils/pagination-utils';
import {
  listSuperReducer,
  getInitialState,
  Action,
  ActionType,
  State,
  FiltersType
} from './list-super-partials';

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
  asyncData?: (config: AsyncDataConfig<A>) => Promise<AsyncDataReturn<A>>;
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
    const [state, dispatch] = useReducer<Reducer<State<A>, Action>>(
      listSuperReducer,
      getInitialState<A>(props.data)
    );
    const { def, config = {}, asyncData } = props;
    const {
      filters,
      pageIdx,
      sortAttribute,
      sortDescAsc,
      data,
      numberOfTotalRows,
      loading
    } = state;
    const nPerPage = config.nPerPage || props.nPerPage || 25;
    if (props.nPerPage) {
      console.warn(
        'The use of nPerPage in props is deprecated. Add nPerPage to the config object prop.'
      );
    }

    const fetchData = (config?: {
      pageIdx?: number;
      filters?: FiltersType<A>;
      sortAttribute?: keyof A;
      sortDescAsc?: boolean;
    }): void => {
      if (asyncData) {
        dispatch({ type: ActionType.FETCH_DATA_REQUEST });
        asyncData({
          nPerPage,
          pageIdx: config && config.pageIdx ? config.pageIdx : pageIdx,
          filters: config && config.filters ? config.filters : filters,
          sort: {
            attribute:
              config && config.sortAttribute
                ? config.sortAttribute
                : sortAttribute,
            descAsc:
              config && typeof config.sortDescAsc !== 'undefined'
                ? config.sortDescAsc
                : sortDescAsc
          }
        }).then(res => {
          dispatch({
            type: ActionType.FETCH_DATA_SUCCESS,
            payload: { data: res.data, numberOfTotalRows: res.meta.n }
          });
        });
      }
    };

    const handleFilterChange = (v: {
      name: keyof A | 'globalSearch';
      value: any;
      type?: string;
    }): void => {
      const newFilters = updateFilters<A>(filters, v);

      // when a filter is applied, the page index is reset
      const pageIdx = 1;

      const config = {
        filters: newFilters,
        pageIdx
      };

      dispatch({
        type: ActionType.FILTER_CHANGE,
        payload: config
      });

      if (asyncData) {
        fetchData(config);
      }
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

      const config = { sortDescAsc: descAsc, sortAttribute: name, pageIdx: 1 };

      dispatch({
        type: ActionType.ORDER_CHANGE,
        payload: config
      });

      if (asyncData) {
        fetchData(config);
      }
    };

    const changePage = (pageIdx: number): void => {
      // todo block beyond max page
      if (pageIdx > 0) {
        const config = { pageIdx };

        dispatch({ type: ActionType.PAGE_CHANGE, payload: config });

        if (asyncData) {
          fetchData(config);
        }
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
            onChange={handleFilterChange}
          />
        );

        return (
          <HeaderUnit key={i}>
            {label} {order} {filter}
          </HeaderUnit>
        );
      });
    };

    const renderBody = (data: A[]): JSX.Element => (
      <>
        {data.map((row, i: number) => (
          <tr key={i}>
            {def.map((h, j) => (
              <ColCell key={j}>
                {h.render
                  ? h.render(row)
                  : Utils.ds.get(h.name.toString(), row)}
              </ColCell>
            ))}
          </tr>
        ))}
      </>
    );

    const renderLoader = (): JSX.Element => (
      <tr>
        <ColCell colSpan={def.length}>
          <Loader />
        </ColCell>
      </tr>
    );

    if (data.length === 0 && asyncData && !loading) {
      fetchData();
    }
    let fData: A[] = [];
    let fpData: A[] = [];
    let n = 0;

    if (!asyncData) {
      fData = applyFilter(data, toFilterArray<A>(filters));
      n = fData.length;

      fpData = sortAttribute
        ? withPagination(
            order<A>(fData, getSort<A>(def, sortAttribute), sortDescAsc),
            pageIdx,
            nPerPage
          )
        : withPagination(fData, pageIdx, nPerPage);
    } else {
      n = numberOfTotalRows;
    }

    const showPagination: boolean =
      typeof config.pagination !== 'undefined' ? config.pagination : true;

    return (
      <ListWrapper>
        <GlobalSearch
          config={config}
          onChange={handleFilterChange}
          filters={filters}
        />
        <ListContainer>
          <ListHeader>
            <Row>{renderHeaders()}</Row>
          </ListHeader>

          <ListBody>
            {loading ? renderLoader() : renderBody(asyncData ? data : fpData)}
          </ListBody>
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

        {!loading && <NoRow n={n} />}
      </ListWrapper>
    );
  };

export default ListSuper;
