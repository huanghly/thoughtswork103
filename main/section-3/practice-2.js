'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {

    for (var i = 0; i < collectionA.length; i++) {
        //console.log(collectionA[i].count);
        for (var j = 0; j < objectB.value.length; j++) {
            if (collectionA[i].key == objectB.value[j]) {
                if (collectionA[i].count < 3) {
                    //console.log(parseInt(collectionA[i].count));
                } else if (collectionA[i].count < 6) {
                    collectionA[i].count = parseInt(collectionA[i].count - 1);
                    //console.log(collectionA[i].count);
                } else if (collectionA[i].count < 9) {
                    collectionA[i].count = parseInt(collectionA[i].count - 2);
                    //console.log(collectionA[i].count);
                } else if (collectionA[i].count >= 9) {
                    collectionA[i].count = parseInt(collectionA[i].count - 3);
                    //console.log(collectionA[i].count);
                }
            }
        }
        //console.log(collectionA[i].count);
    }
    return collectionA;
}