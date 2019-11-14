const caesar = (str, key) => {
    let result = []
    for(let i = 0; i <= str.length-1; i++){   
        if(str[i] === str[i].toUpperCase()){
            result.push(String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65))
          }else{
            result.push(String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97));
          }
    }
    
    return result.join('')
}

module.exports = caesar;