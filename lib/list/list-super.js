import React, {useCallback, useEffect, useReducer} from "../../_snowpack/pkg/react.js";
import {
  Loader
} from "./ui/index.js";
import {order, getSort} from "./utils/order-utils.js";
import {
  applyFilter,
  updateFilters,
  transformFilterPropToStateFilter
} from "./utils/filter-utils.js";
import {withPagination} from "./utils/pagination-utils.js";
import {
  listSuperReducer,
  getInitialState,
  ActionType
} from "./list-super-partials/index.js";
const ListSuper = ({
  HeaderUnit: HeaderUnit2,
  FilterUnit: FilterUnit2,
  OrderController: OrderController2,
  ColCell: ColCell2,
  GlobalSearch: GlobalSearch2,
  NoRow: NoRow2,
  Row: Row2,
  ListWrapper: ListWrapper2,
  ListContainer: ListContainer2,
  ListHeader: ListHeader2,
  ListBody: ListBody2,
  RecordInfo: RecordInfo2,
  Pagination
}) => function InnerListSuper(props) {
  const {
    def,
    config = {},
    asyncData,
    CustomListContainer,
    CustomListItem
  } = props;
  const filtersFromProps = config.filters ? transformFilterPropToStateFilter(def, config.filters) : void 0;
  const [state, dispatch] = useReducer(listSuperReducer, getInitialState(def, props.data, config.sortAttribute, config.sortDescAsc, filtersFromProps));
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
    console.warn("The use of nPerPage in props is deprecated. Add nPerPage to the config object prop.");
  }
  const fetchData = useCallback((config2) => {
    if (asyncData) {
      dispatch({type: ActionType.FETCH_DATA_REQUEST});
      asyncData({
        nPerPage,
        pageIdx: config2 && config2.pageIdx ? config2.pageIdx : pageIdx,
        filters: config2 && config2.filters ? config2.filters : filters,
        sort: {
          attribute: config2 && config2.sortAttribute ? config2.sortAttribute : sortAttribute,
          descAsc: config2 && typeof config2.sortDescAsc !== "undefined" ? config2.sortDescAsc : sortDescAsc
        }
      }).then((res) => {
        dispatch({
          type: ActionType.FETCH_DATA_SUCCESS,
          payload: {data: res.data, numberOfTotalRows: res.meta.n}
        });
      });
    }
  }, [asyncData, filters, nPerPage, pageIdx, sortAttribute, sortDescAsc]);
  useEffect(() => {
    fetchData();
  }, [asyncData, fetchData]);
  const handleFilterChange = (v) => {
    const newFilters = updateFilters(filters, v);
    const pageIdx2 = 1;
    const config2 = {
      filters: newFilters,
      pageIdx: pageIdx2
    };
    dispatch({
      type: ActionType.FILTER_CHANGE,
      payload: config2
    });
    fetchData(config2);
  };
  const handleFilterReset = (name) => {
    const newFilters = Object.assign({}, filters);
    delete newFilters[name];
    const pageIdx2 = 1;
    const config2 = {
      filters: newFilters,
      pageIdx: pageIdx2
    };
    dispatch({type: ActionType.FILTER_CHANGE, payload: config2});
    fetchData(config2);
  };
  const setOrder = (name, descAsc = null) => {
    if (descAsc === null) {
      descAsc = !sortDescAsc;
    }
    const config2 = {sortDescAsc: descAsc, sortAttribute: name, pageIdx: 1};
    dispatch({
      type: ActionType.ORDER_CHANGE,
      payload: config2
    });
  };
  const changePage = (pageIdx2) => {
    if (pageIdx2 > 0) {
      const config2 = {pageIdx: pageIdx2};
      dispatch({type: ActionType.PAGE_CHANGE, payload: config2});
    }
  };
  const isSort = (h) => {
    return typeof h.sort === "boolean" && h.sort === true || typeof h.sort === "object";
  };
  const renderHeaders = () => {
    return def.map((h, i) => {
      const order2 = isSort(h) ? /* @__PURE__ */ React.createElement(OrderController2, {
        descAsc: sortAttribute === h.name ? sortDescAsc : null,
        onClick: () => setOrder(h.name)
      }) : null;
      const filter = /* @__PURE__ */ React.createElement(FilterUnit2, {
        key: i,
        filters,
        name: h.name,
        filter: h.filter,
        onChange: handleFilterChange,
        onReset: handleFilterReset,
        debounceWait: config.debounceWait
      });
      return /* @__PURE__ */ React.createElement(HeaderUnit2, {
        key: i
      }, h.label || "", " ", order2, " ", filter);
    });
  };
  const renderBody = (data2) => /* @__PURE__ */ React.createElement(React.Fragment, null, data2.map((row, i) => /* @__PURE__ */ React.createElement(React.Fragment, {
    key: i
  }, CustomListItem ? /* @__PURE__ */ React.createElement(React.Fragment, null, CustomListContainer ? CustomListItem(row) : /* @__PURE__ */ React.createElement(Row2, null, /* @__PURE__ */ React.createElement(ColCell2, {
    colSpan: def.length,
    style: {
      paddingLeft: 0,
      paddingRight: 0,
      borderBottom: 0
    }
  }, CustomListItem(row)))) : /* @__PURE__ */ React.createElement(Row2, null, def.map((h, j) => /* @__PURE__ */ React.createElement(ColCell2, {
    key: j
  }, h.render ? h.render(row) : row[h.name], " "))))));
  const renderLoader = () => /* @__PURE__ */ React.createElement(Row2, null, /* @__PURE__ */ React.createElement(ColCell2, {
    colSpan: def.length
  }, /* @__PURE__ */ React.createElement(Loader, null)));
  let fData = [];
  let fpData = [];
  let n = 0;
  if (!asyncData) {
    fData = applyFilter(data, filters);
    n = fData.length;
    fpData = sortAttribute ? withPagination(order(fData, getSort(def, sortAttribute), sortDescAsc), pageIdx, nPerPage) : withPagination(fData, pageIdx, nPerPage);
  } else {
    n = numberOfTotalRows;
  }
  const showPagination = typeof config.pagination !== "undefined" ? config.pagination : true;
  const showRecordInfo = typeof config.recordInfo !== "undefined" ? config.recordInfo : true;
  return /* @__PURE__ */ React.createElement(ListWrapper2, null, /* @__PURE__ */ React.createElement(GlobalSearch2, {
    search: config.search,
    onChange: handleFilterChange,
    filters,
    debounceWait: config.debounceWait
  }), CustomListContainer ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ListContainer2, null, /* @__PURE__ */ React.createElement(ListHeader2, null, /* @__PURE__ */ React.createElement(Row2, null, renderHeaders()))), CustomListContainer(renderBody(asyncData ? data : fpData))) : /* @__PURE__ */ React.createElement(ListContainer2, {
    maxHeight: config.maxHeight,
    stickyHeader: config.stickyHeader
  }, /* @__PURE__ */ React.createElement(ListHeader2, null, /* @__PURE__ */ React.createElement(Row2, null, renderHeaders())), /* @__PURE__ */ React.createElement(ListBody2, null, loading ? renderLoader() : renderBody(asyncData ? data : fpData))), showRecordInfo && /* @__PURE__ */ React.createElement(RecordInfo2, {
    n,
    idx: pageIdx,
    nPerPage
  }), showPagination && n > nPerPage && /* @__PURE__ */ React.createElement(Pagination, {
    n,
    nPerPage,
    idx: pageIdx,
    onClick: changePage
  }), !loading && /* @__PURE__ */ React.createElement(NoRow2, {
    n
  }));
};
export default ListSuper;
