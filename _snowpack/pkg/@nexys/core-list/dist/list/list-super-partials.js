import { c as createCommonjsModule, a as commonjsGlobal } from '../../../../common/_commonjsHelpers-37fa8da4.js';

var type = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionType = void 0;
(function (ActionType) {
    ActionType["FETCH_DATA_REQUEST"] = "FETCH_DATA_REQUEST";
    ActionType["FETCH_DATA_SUCCESS"] = "FETCH_DATA_SUCCESS";
    ActionType["FILTER_CHANGE"] = "FILTER_CHANGE";
    ActionType["ORDER_CHANGE"] = "ORDER_CHANGE";
    ActionType["PAGE_CHANGE"] = "PAGE_CHANGE";
})(exports.ActionType || (exports.ActionType = {}));
});

var reducer = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

function listSuperReducer(state, action) {
    if (action.type === type.ActionType.FETCH_DATA_REQUEST) {
        return {
            ...state,
            loading: true
        };
    }
    if (action.type === type.ActionType.FETCH_DATA_SUCCESS) {
        const { data, numberOfTotalRows } = action.payload;
        return {
            ...state,
            loading: false,
            data,
            numberOfTotalRows
        };
    }
    if (action.type === type.ActionType.FILTER_CHANGE) {
        const { filters, pageIdx } = action.payload;
        return {
            ...state,
            filters,
            pageIdx
        };
    }
    if (action.type === type.ActionType.ORDER_CHANGE) {
        const { sortDescAsc, sortAttribute, pageIdx } = action.payload;
        return {
            ...state,
            sortDescAsc,
            sortAttribute,
            pageIdx
        };
    }
    if (action.type === type.ActionType.PAGE_CHANGE) {
        const { pageIdx } = action.payload;
        return {
            ...state,
            pageIdx
        };
    }
    return state;
}
exports.default = listSuperReducer;
});

var state = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
const getInitialState = (def, data, sortAttribute, sortDescAsc, filters) => ({
    data: data ? data : [],
    filters: filters || {},
    loading: false,
    numberOfTotalRows: data && data.length ? data.length : 0,
    sortAttribute,
    sortDescAsc: sortDescAsc !== undefined ? sortDescAsc : true,
    pageIdx: 1
});
exports.default = getInitialState;
});

var listSuperPartials = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInitialState = exports.listSuperReducer = void 0;
const reducer_1 = __importDefault(reducer);
exports.listSuperReducer = reducer_1.default;
const state_1 = __importDefault(state);
exports.getInitialState = state_1.default;
__exportStar(type, exports);
});

var ActionType = listSuperPartials.ActionType;
var getInitialState = listSuperPartials.getInitialState;
var listSuperReducer = listSuperPartials.listSuperReducer;
export { ActionType, getInitialState, listSuperReducer };
