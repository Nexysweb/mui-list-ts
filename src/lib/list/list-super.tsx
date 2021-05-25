import React, { useCallback, useEffect, useReducer, Reducer } from 'react';

import {
  Config,
  Definition,
  DefinitionItem,
  AsyncDataConfig,
  AsyncDataReturn,
  FiltersType
} from '../types';
import { OuterProps } from './ui-type';

import { order, getSort } from './utils/order-utils';
import {
  applyFilter,
  updateFilters,
  transformFilterPropToStateFilter
} from './utils/filter-utils';
import { withPagination } from './utils/pagination-utils';
import {
  listSuperReducer,
  getInitialState,
  Action,
  ActionType,
  State
} from './list-super-partials';

export interface InnerProps<A> {
  def: Definition<A>;
  data?: A[];
  nPerPage?: number;
  config?: Config<A>;
  asyncData?: (config: AsyncDataConfig<A>) => Promise<AsyncDataReturn<A>>;
  CustomListContainer?: (children: React.ReactNode) => JSX.Element;
  CustomListItem?: (rowData: A) => JSX.Element;
}

const ListSuper =
  <A,>({
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
    Pagination,
    Loader
  }: OuterProps<A>) =>
  (props: InnerProps<A>): JSX.Element => {
    const {
      def,
      config = {},
      asyncData,
      CustomListContainer,
      CustomListItem
    } = props;

    const filtersFromProps = config.filters
      ? transformFilterPropToStateFilter(def, config.filters)
      : undefined;

    const [state, dispatch] = useReducer<Reducer<State<A>, Action>>(
      listSuperReducer,
      getInitialState<A>(
        def,
        props.data,
        config.sortAttribute,
        config.sortDescAsc,
        filtersFromProps
      )
    );
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

    const fetchData = useCallback(
      (config?: {
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
      },
      [asyncData, filters, nPerPage, pageIdx, sortAttribute, sortDescAsc]
    );

    useEffect(() => {
      fetchData();
    }, [asyncData, fetchData]);

    const handleFilterChange = (v: {
      name: keyof A | 'globalSearch' | 'id' | 'uuid';
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

      fetchData(config);
    };

    const handleFilterReset = (name: keyof A | 'id' | 'uuid'): void => {
      const newFilters = Object.assign({}, filters);
      delete newFilters[name as keyof A];

      // when a filter is applied, the page index is reset
      const pageIdx = 1;

      const config = {
        filters: newFilters,
        pageIdx
      };

      dispatch({ type: ActionType.FILTER_CHANGE, payload: config });

      fetchData(config);
    };

    /**
     * defines order to apply
     * @param  {[type]} name    attribute/column
     * @param  {[type]} descAsc true/false - asc or desc. if null, will toggle
     * @return {[type]}         [description]
     * todo: allow custom ordering
     */
    const setOrder = (
      name: keyof A | 'id' | 'uuid',
      descAsc: boolean | null = null
    ): void => {
      if (descAsc === null) {
        descAsc = !sortDescAsc;
      }

      const config = { sortDescAsc: descAsc, sortAttribute: name, pageIdx: 1 };

      dispatch({
        type: ActionType.ORDER_CHANGE,
        payload: config
      });
    };

    const changePage = (pageIdx: number): void => {
      // todo block beyond max page
      if (pageIdx > 0) {
        const config = { pageIdx };

        dispatch({ type: ActionType.PAGE_CHANGE, payload: config });
      }
    };

    const isSort = (h: DefinitionItem<A>): boolean => {
      return (
        (typeof h.sort === 'boolean' && h.sort === true) ||
        typeof h.sort === 'object'
      );
    };

    const renderHeaders = (): (JSX.Element | null)[] => {
      return def.map((h, i) => {
        const order = isSort(h) ? (
          <OrderController
            descAsc={sortAttribute === h.name ? sortDescAsc : null}
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
            onReset={handleFilterReset}
            debounceWait={config.debounceWait}
          />
        );

        return (
          <HeaderUnit key={i}>
            {h.label || ''} {order} {filter}
          </HeaderUnit>
        );
      });
    };

    const renderBody = (data: A[]): JSX.Element => (
      <>
        {data.map((row, i: number) => (
          <React.Fragment key={i}>
            {CustomListItem ? (
              <>
                {CustomListContainer ? (
                  CustomListItem(row)
                ) : (
                  <Row>
                    <ColCell
                      colSpan={def.length}
                      style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        borderBottom: 0
                      }}
                    >
                      {CustomListItem(row)}
                    </ColCell>
                  </Row>
                )}
              </>
            ) : (
              <Row>
                {def.map((h, j) => (
                  <ColCell key={j}>
                    {h.render ? h.render(row) : row[h.name as keyof A]}{' '}
                    {/* // Utils.ds.get(h.name.toString(), row) } */}
                  </ColCell>
                ))}
              </Row>
            )}
          </React.Fragment>
        ))}
      </>
    );

    const renderLoader = (): JSX.Element => (
      <Row>
        <ColCell colSpan={def.length}>
          <Loader />
        </ColCell>
      </Row>
    );

    let fData: A[] = [];
    let fpData: A[] = [];
    let n = 0;

    if (!asyncData) {
      fData = applyFilter(data, filters);
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

    const showRecordInfo: boolean =
      typeof config.recordInfo !== 'undefined' ? config.recordInfo : true;

    return (
      <ListWrapper>
        <GlobalSearch
          search={config.search}
          onChange={handleFilterChange}
          filters={filters}
          debounceWait={config.debounceWait}
        />

        {CustomListContainer ? (
          <>
            <ListContainer>
              <ListHeader>
                <Row>{renderHeaders()}</Row>
              </ListHeader>
            </ListContainer>

            {CustomListContainer(renderBody(asyncData ? data : fpData))}
          </>
        ) : (
          <ListContainer
            maxHeight={config.maxHeight}
            stickyHeader={config.stickyHeader}
          >
            <ListHeader>
              <Row>{renderHeaders()}</Row>
            </ListHeader>

            <ListBody>
              {loading ? renderLoader() : renderBody(asyncData ? data : fpData)}
            </ListBody>
          </ListContainer>
        )}

        {showRecordInfo && (
          <RecordInfo n={n} idx={pageIdx} nPerPage={nPerPage} />
        )}

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
