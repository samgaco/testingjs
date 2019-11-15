const arrayAnalysis = (arr) => {
  const result = {
    average: arr.reduce((prev, cur) => prev + cur) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    len: arr.length,
  };

  return result;
};

module.exports = arrayAnalysis;
