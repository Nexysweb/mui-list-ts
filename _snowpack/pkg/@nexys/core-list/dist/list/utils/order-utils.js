import { c as createCommonjsModule } from '../../../../../common/_commonjsHelpers-37fa8da4.js';

var orderUtils = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSort = exports.order = exports.getAttribute = void 0;
exports.getAttribute = (attribute, a) => {
    const ac = String(a[attribute]);
    if (typeof ac === 'number' && typeof ac === 'boolean') {
        return ac;
    }
    return String(ac).toLocaleLowerCase();
};
const getCompareAttributes = (a, b, attributeOrFunc) => {
    if (typeof attributeOrFunc === 'function') {
        const ac = attributeOrFunc(a);
        const bc = attributeOrFunc(b);
        return { ac, bc };
    }
    const ac = exports.getAttribute(attributeOrFunc, a);
    const bc = exports.getAttribute(attributeOrFunc, b);
    return { ac, bc };
};
const compareFunc = (a, b, attributeOrFunc) => {
    const { ac, bc } = getCompareAttributes(a, b, attributeOrFunc);
    if (ac < bc) {
        return -1;
    }
    if (ac > bc) {
        return 1;
    }
    return 0;
};
exports.order = (data, sortAttribute, sortDescAsc) => {
    if (!sortAttribute) {
        return data;
    }
    const ordered = data.sort((a, b) => compareFunc(a, b, sortAttribute));
    if (sortDescAsc === false) {
        return ordered.reverse();
    }
    return ordered;
};
exports.getSort = (def, sortAttribute) => {
    const i = def.find(x => x.name === sortAttribute);
    if (!i || !i.sort) {
        throw Error('sort attribute could not be matched');
    }
    if (typeof i.sort === 'object' && 'getAttribute' in i.sort) {
        return i.sort.getAttribute;
    }
    return sortAttribute;
};
});

var getSort = orderUtils.getSort;
var order = orderUtils.order;
export { getSort, order };
