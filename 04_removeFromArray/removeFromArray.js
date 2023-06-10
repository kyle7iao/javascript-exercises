const removeFromArray = function(array, ...exclusions) {
    return array.filter(x => !exclusions.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
