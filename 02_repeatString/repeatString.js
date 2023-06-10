const repeatString = function(str, repeats) {
    if (repeats < 0) {
        return 'ERROR'
    }
    let res = '';
    for (i = 1; i <= repeats; i++) {
        res = res.concat(str)
    }
    return res
};

// Do not edit below this line
module.exports = repeatString;
