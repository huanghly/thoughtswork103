'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    for (var i = 0; i < collectionA.length; i++) {
        //console.log(collectionA[i].key);
        for (var j = 0; j < objectB.value.length; j++) {
            //console.log(objectB.value[j]);
            if (collectionA[i].key == objectB.value[j]) {
                // result_like[n] = collectionA[i].key;
                //n++; //获得数组result_like = [a,e,f,d]
                collectionA[i].count = collectionA[i].count - 1; //有相同元素后count-1
                // console.log('collectionA[i].count的值为：' + collectionA[i].count);

            }

        }


    }

    return collectionA;
}