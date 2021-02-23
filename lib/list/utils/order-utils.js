export const getAttribute = (attribute, a) => {
  const ac = String(a[attribute]);
  if (typeof ac === "number" && typeof ac === "boolean") {
    return ac;
  }
  return String(ac).toLocaleLowerCase();
};
const getCompareAttributes = (a, b, attributeOrFunc) => {
  if (typeof attributeOrFunc === "function") {
    const ac2 = attributeOrFunc(a);
    const bc2 = attributeOrFunc(b);
    return {ac: ac2, bc: bc2};
  }
  const ac = getAttribute(attributeOrFunc, a);
  const bc = getAttribute(attributeOrFunc, b);
  return {ac, bc};
};
const compareFunc = (a, b, attributeOrFunc) => {
  const {ac, bc} = getCompareAttributes(a, b, attributeOrFunc);
  if (ac < bc) {
    return -1;
  }
  if (ac > bc) {
    return 1;
  }
  return 0;
};
export const order = (data, sortAttribute, sortDescAsc) => {
  if (!sortAttribute) {
    return data;
  }
  const ordered = data.sort((a, b) => compareFunc(a, b, sortAttribute));
  if (sortDescAsc === false) {
    return ordered.reverse();
  }
  return ordered;
};
export const getSort = (def, sortAttribute) => {
  const i = def.find((x) => x.name === sortAttribute);
  if (!i || !i.sort) {
    throw Error("sort attribute could not be matched");
  }
  if (typeof i.sort === "object" && "getAttribute" in i.sort) {
    return i.sort.getAttribute;
  }
  return sortAttribute;
};
