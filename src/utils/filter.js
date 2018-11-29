const join = (arr, key, separator) => {
    arr = arr || [];
    // 最多取前两个 tag
    return arr.slice(0, 2).map(function (i, index) {
        return i[key];
    }).join(separator);
}


module.exports = {
    join
}