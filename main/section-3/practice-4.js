'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var result = [];
    var n = 0;
    var count = 1;

    for (var i = 0; i < collectionA.length; i++) {
        if (collectionA[i].length > 1) {
            result[n] = { key: collectionA[i].slice(0, 1), count: Number(collectionA[i].slice(-1)) };
            n++;
        } else { // collectionA[i].length = 1;
            while (collectionA[i] === collectionA[i + 1]) {
                count++;
                i++;
            }
            result[n] = { key: collectionA[i], count: count };
            n++;
        }
        count = 1;
    }
    for (var i = 0; i < objectB.value.length; i++) {
        for (var j = 0; j < result.length; j++) {
            if (result[j].key === objectB.value[i]) {
                var k = parseInt(result[j].count / 3);
                result[j].count = result[j].count - k;
            }
        }
    }
    // console.log(result);
    return result;
}