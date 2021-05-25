import { c as createCommonjsModule } from '../../../../../common/_commonjsHelpers-37fa8da4.js';

var filterUtils = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = exports.transformFilterPropToStateFilter = exports.getFilterObj = exports.updateFilters = exports.addRemoveToArray = exports.applyFilter = exports.searchInObjectLinear = exports.searchInObject = exports.compare = exports.toFilterArray = exports.compareString = void 0;
exports.compareString = (main, searchString) => main.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
exports.toFilterArray = (filters) => Object.entries(filters).map(([k, v]) => ({
    name: k,
    value: v
}));
// above is generalization of
// const filterArray:FilterUnit<Animal>[] = Object.entries(filters).map(([k, v]) => ({name: k as keyof Animal, value: v as FilterSearchValue}))
exports.compare = (main, search //| Search,
) => {
    const mainType = typeof main;
    const searchType = typeof search;
    if (searchType === 'string') {
        // here casting the `main` so that it can match with the search even if not of the same type
        switch (mainType) {
            case 'string':
                return exports.compareString(main, search);
            case 'number':
                return main === Number(search);
            default:
                return false;
        }
    }
    return false;
};
// this is a hack that will work for nested objects... leaving like this until better option
exports.searchInObject = (searchString, object) => JSON.stringify(object).toLowerCase().includes(searchString.toLowerCase());
// same as above but only works with linear object, the rsult will be more precise though
exports.searchInObjectLinear = (searchString, object) => Object.keys(object)
    .map(o => {
    const main = object[o];
    return exports.compare(main, searchString);
})
    .reduce((a, b) => a || b);
// todo here unfortunately `k` cant be typed as keyof A, typescript bug/limitation?
exports.applyFilter = (data, filters) => {
    const filterArray = exports.toFilterArray(filters);
    if (filterArray.length === 0) {
        return data;
    }
    return data.filter((d) => {
        return filterArray
            .map(f => {
            if (f.name === 'globalSearch' && typeof f.value === 'string') {
                return exports.searchInObject(f.value, d);
            }
            if (f.name !== 'globalSearch') {
                const key = f.name;
                if (typeof f.value === 'object') {
                    if (typeof f.value.func === 'function' && f.value.value) {
                        if (Array.isArray(f.value.value) && f.value.value.length > 0) {
                            return f.value.func(d, f.value.value, filters);
                        }
                        else {
                            return f.value.func(d, f.value.value.value, filters);
                        }
                    }
                    return true;
                }
                return exports.compare(d[key], f.value);
            }
            return true;
        })
            .reduce((a, b) => a && b);
    });
};
exports.addRemoveToArray = (v, a = []) => {
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
exports.updateFilters = (filters, v) => {
    if (v.value === null || v.value === '') {
        delete filters[v.name];
    }
    else {
        // if object
        if (typeof v.value !== 'string') {
            if (v.type === 'category') {
                if (!filters[v.name]) {
                    filters[v.name] = { value: [], func: v.value.func };
                }
                filters[v.name].value = exports.addRemoveToArray(v.value.value, filters[v.name].value);
                if (filters[v.name].value.length === 0) {
                    delete filters[v.name];
                }
            }
            else {
                if (!filters[v.name]) {
                    filters[v.name] = { value: null, func: v.value.func };
                }
                filters[v.name].value = v.value;
            }
        }
        else {
            // if string
            filters[v.name] = v.value;
        }
    }
    // setState({ ...state, filters, pageIdx });
    return filters;
};
exports.getFilterObj = (def, filterAttribute) => {
    const i = def.find(x => x.name === filterAttribute);
    if (!i || !i.filter) {
        throw Error('filter attribute could not be matched');
    }
    if (typeof i.filter === 'object' && 'func' in i.filter) {
        return {
            type: i.filter.type,
            func: i.filter.func
        };
    }
    return filterAttribute;
};
exports.transformFilterPropToStateFilter = (def, filters) => {
    return Object.entries(filters)
        .map(([key, value]) => {
        const filterObj = exports.getFilterObj(def, key);
        return {
            key,
            value,
            filterObj
        };
    })
        .reduce((acc, cur) => {
        const { key } = cur;
        let filter;
        if (typeof cur.filterObj.func === 'function') {
            filter = {
                value: cur.filterObj.type === 'select'
                    ? { value: cur.value }
                    : cur.value,
                func: cur.filterObj.func
            };
        }
        else {
            filter = cur.value;
        }
        acc[key] = filter;
        return acc;
    }, {});
};
exports.debounce = (wait = 200) => {
    let timeout; //NodeJS.Timeout
    return (func) => {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    };
};
});

var applyFilter = filterUtils.applyFilter;
var debounce = filterUtils.debounce;
var toFilterArray = filterUtils.toFilterArray;
var transformFilterPropToStateFilter = filterUtils.transformFilterPropToStateFilter;
var updateFilters = filterUtils.updateFilters;
export { applyFilter, debounce, toFilterArray, transformFilterPropToStateFilter, updateFilters };
