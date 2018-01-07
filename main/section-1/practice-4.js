'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var collectionB = { value: ['a', 'd', 'e', 'f'] };
    var result = [];
    var n = 0;
    for (var i = 0; i < collectionA.length; i++) {
        for (var j = 0; j < collectionB.value.length; j++) {
            if (collectionA[i].key == collectionB.value[j]) {
                result[n] = collectionA[i].key; // 或者 result[n] = collectionB.value[j];
                n++;
            }

        }
    }
    return result;
}