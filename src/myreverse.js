const myreverse = (str) => {
    
    result = []
    for(let i = str.length-1; i >= 0; i--){
        result.push(str[i])
    }
    return result.join('');
}

module.exports = myreverse;
