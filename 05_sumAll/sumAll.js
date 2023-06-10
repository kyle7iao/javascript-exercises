const sumAll = function(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number') {
        return 'ERROR'
    }

    if (start <= 0 || end <= 0) {
        return 'ERROR'
    }

    res = 0;
    
    larger = Math.max(start, end)
    smaller = Math.min(start, end)

    for (i = smaller; i<= larger; i++) {
        res = res + i
    }

    return res
};

// Do not edit below this line
module.exports = sumAll;
