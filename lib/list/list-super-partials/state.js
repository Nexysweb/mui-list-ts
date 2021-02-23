const getInitialState = (def, data, sortAttribute, sortDescAsc, filters) => ({
  data: data ? data : [],
  filters: filters || {},
  loading: false,
  numberOfTotalRows: data && data.length ? data.length : 0,
  sortAttribute,
  sortDescAsc: sortDescAsc !== void 0 ? sortDescAsc : true,
  pageIdx: 1
});
export default getInitialState;
