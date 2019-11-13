const mycapitalize = (str) => {
    if(typeof str === String || str.length > 0 ){
        let result = str;
        return `${result[0].toUpperCase()}${result.slice(1,result.length)}`
    }else{
        throw 'No string given';   
    }
}

module.exports = mycapitalize;
