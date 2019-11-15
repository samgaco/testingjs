const mycapitalize = (str) => {
  if (typeof str === 'string' || str.length > 0) {
    const result = str;
    return `${result[0].toUpperCase()}${result.slice(1, result.length)}`;
  }
  throw Error('No string given');
};

module.exports = mycapitalize;
