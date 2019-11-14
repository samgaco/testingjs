const caesar = (str, key) => {
  const result = [];
  for (let i = 0; i <= str.length - 1; i += 1) {
    if (str[i] === str[i].toUpperCase()) {
      result.push(String.fromCharCode(((str.charCodeAt(i) + key - 65) % 26) + 65));
    } else {
      result.push(String.fromCharCode(((str.charCodeAt(i) + key - 97) % 26) + 97));
    }
  }

  return result.join('');
};

module.exports = caesar;
