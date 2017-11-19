'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    /*
     const collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
     const collectionB = { value: ['a', 'd', 'e', 'f'] };
    */
    var result = [];
    var n = 0;
    for (var i = 0; i < collectionA.length; i++) {

        for (var j = 0; j < objectB.value.length; j++) {
            if (objectB.value[j] == collectionA[i]) {
                result[n] = objectB.value[j];
                n++;
            }
        }
    }
    return result;
    // charAt() 方法可返回指定位置的字符。
}