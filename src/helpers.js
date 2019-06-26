const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const snakeToCamel = (word) => word.replace(
    /(_\w)/g,
    (matches) => matches[1].toUpperCase()
);

const normalizeKeys = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map((item) => normalizeKeys(item));
  }

  if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce((result, key) => ({
      ...result,
      [snakeToCamel(key)]: normalizeKeys(obj[key])
    }), {});
  }

  return obj;
};

export const sortByOrder = (arr, value, order) => {
  switch (order) {
    case `ASC`: return arr.sort((a, b) => a[value] - b[value]);
    case `DESC`: return arr.sort((a, b) => b[value] - a[value]);
    default: return arr;
  }
};

export {
  getRandomNumber,
  normalizeKeys
};
