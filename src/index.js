module.exports = function reverse (n) {
    let str = n.toString();
    let minus = str.slice(1).split('').reverse().join('');
    if(n < 0){
        return +minus
    } else{g
        return +(n.toString().split('').reverse().join(''))
    }
}
