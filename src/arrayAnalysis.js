const arrayAnalysis = (arr) => {

  result = {
    average: arr.reduce((prev, cur) => prev + cur)/arr.length,
    min: Math.min.apply(Math, arr),
    max: Math.max.apply(Math, arr),
    len: arr.length
  }

  return result;
}

module.exports = arrayAnalysis;