module.exports = function check(str, bracketsConfig) {

  if(str.length % 2 !== 0){
    return false;
    
} else {

    for(var i = str.length - 1; i >= 0; i--){
        for (var a = 0; a < bracketsConfig.length; a++) {
            if (str[i] === bracketsConfig[a][0]) {
                str = str.replace(bracketsConfig[a].join(''), '');
            }
        }
    }

    return str === '';
}
}
