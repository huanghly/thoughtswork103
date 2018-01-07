'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    /* var result = [];
    var n = 0;

    for (var i = 0; i < collectionA.length; i++) {
        if (i === collectionA.indexOf(collectionA[i])) {
            result[n] = { key: i, count: n }; //找出collectionA数组中的首位元素
            n++;
        }
        console.log(result);
        for (var j = 0; j < objectB.value.length; j++) {
            for (var k = 0; k < result.length; k++) {
                if (result[k] == objectB.value[j]) {
                    if (result[k].count < 3) {
                        result[k].count = result[k].count;
                    } else if (result[k].count < 6) {
                        result[k].count = result[k].count - 1;
                    } else if (result[k].count < 9) {
                        result[k].count = result[k].count - 2;
                    } else if (result[k].count >= 9) {
                        result[k].count = result[k].count - 3;
                    }
                } else {
                    result[k-1].count++;
                }
            }
        }

    }





    return result;
}
*/


    var count = 1;
    let object = {}; // {} 表示对象
    let result = [];

    for (var i = 1; i < collectionA.length; i++) {
        while (collectionA[i] === collectionA[i - 1]) { //当前面一位与后一位元素相同时，
            count++;
            i++;
        }
        object.key = collectionA[i - 1]; // 获得collectionA数组中的元素及个数，以[key:a,count:3]形式显示
        object.count = count;
        // console.log(object);
        result.push(object);
        count = 1;
        object = {};

    }
    for (var j = 0; j < objectB.value.length; j++) {
        for (var k = 0; k < result.length; k++) {
            if (result[k].key === objectB.value[j]) {
                var n = parseInt(result[k].count / 3);
                result[k].count = result[k].count - n;
            }
        }
    }
    // console.log(result);
    return result;

}