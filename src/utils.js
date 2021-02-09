export const countTotal = (list, type) => {
  return list.filter((item) => item.severity === type).length;
};
