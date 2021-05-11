export const compareString = (main, searchString) => main.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
export const toFilterArray = (filters) => Object.entries(filters).map(([k, v]) => ({
  name: k,
  value: v
}));
export const compare = (main, search) => {
  const mainType = typeof main;
  const searchType = typeof search;
  if (searchType === "string") {
    switch (mainType) {
      case "string":
        return compareString(main, search);
      case "number":
        return main === Number(search);
      default:
        return false;
    }
  }
  return false;
};
export const searchInObject = (searchString, object) => JSON.stringify(object).toLowerCase().includes(searchString.toLowerCase());
export const searchInObjectLinear = (searchString, object) => Object.keys(object).map((o) => {
  const main = object[o];
  return compare(main, searchString);
}).reduce((a, b) => a || b);
export const applyFilter = (data, filters) => {
  const filterArray = toFilterArray(filters);
  if (filterArray.length === 0) {
    return data;
  }
  return data.filter((d) => {
    return filterArray.map((f) => {
      if (f.name === "globalSearch" && typeof f.value === "string") {
        return searchInObject(f.value, d);
      }
      if (f.name !== "globalSearch") {
        const key = f.name;
        if (typeof f.value === "object") {
          if (typeof f.value.func === "function" && f.value.value) {
            if (Array.isArray(f.value.value) && f.value.value.length > 0) {
              return f.value.func(d, f.value.value, filters);
            } else {
              return f.value.func(d, f.value.value.value, filters);
            }
          }
          return true;
        }
        return compare(d[key], f.value);
      }
      return true;
    }).reduce((a, b) => a && b);
  });
};
export const addRemoveToArray = (v, a = []) => {
  if (!a) {
    return [v];
  }
  if (a.includes(v)) {
    const idx = a.indexOf(v);
    a.splice(idx, 1);
    return a;
  }
  a.push(v);
  return a;
};
export const updateFilters = (filters, v) => {
  if (v.value === null || v.value === "") {
    delete filters[v.name];
  } else {
    if (typeof v.value !== "string") {
      if (v.type === "category") {
        if (!filters[v.name]) {
          filters[v.name] = {value: [], func: v.value.func};
        }
        filters[v.name].value = addRemoveToArray(v.value.value, filters[v.name].value);
        if (filters[v.name].value.length === 0) {
          delete filters[v.name];
        }
      } else {
        if (!filters[v.name]) {
          filters[v.name] = {value: null, func: v.value.func};
        }
        filters[v.name].value = v.value;
      }
    } else {
      filters[v.name] = v.value;
    }
  }
  return filters;
};
export const getFilterObj = (def, filterAttribute) => {
  const i = def.find((x) => x.name === filterAttribute);
  if (!i || !i.filter) {
    throw Error("filter attribute could not be matched");
  }
  if (typeof i.filter === "object" && "func" in i.filter) {
    return {
      type: i.filter.type,
      func: i.filter.func
    };
  }
  return filterAttribute;
};
export const transformFilterPropToStateFilter = (def, filters) => {
  return Object.entries(filters).map(([key, value]) => {
    const filterObj = getFilterObj(def, key);
    return {
      key,
      value,
      filterObj
    };
  }).reduce((acc, cur) => {
    const {key} = cur;
    let filter;
    if (typeof cur.filterObj.func === "function") {
      filter = {
        value: cur.filterObj.type === "select" ? {value: cur.value} : cur.value,
        func: cur.filterObj.func
      };
    } else {
      filter = cur.value;
    }
    acc[key] = filter;
    return acc;
  }, {});
};
export const debounce = (wait = 200) => {
  let timeout;
  return (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
};
