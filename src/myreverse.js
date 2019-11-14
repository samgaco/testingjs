const myreverse = (str) => {
  const result = [];
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result.push(str[i]);
  }
  return result.join('');
};

module.exports = myreverse;
