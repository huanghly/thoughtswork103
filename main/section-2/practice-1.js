'use strict';

module.exports = function countSameElements(collection) {

    var count_a = 0;
    var count_e = 0;
    var count_h = 0;
    var count_t = 0;
    var count_f = 0;
    var count_c = 0;
    var count_g = 0;
    var count_b = 0;
    var count_d = 0;
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] == 'a') {
            count_a++;
        }
        if (collection[i] == 'e') {
            count_e++;
        }
        if (collection[i] == 'h') {
            count_h++;
        }
        if (collection[i] == 't') {
            count_t++;
        }
        if (collection[i] == 'f') {
            count_f++;
        }
        if (collection[i] == 'c') {
            count_c++;
        }
        if (collection[i] == 'g') {
            count_g++;
        }
        if (collection[i] == 'b') {
            count_b++;
        }
        if (collection[i] == 'd') {
            count_d++;
        }

        // a,e,h,t,f,c,g,b,d
    }
    var result = [];
    result[0] = { key: 'a', count: count_a };
    result[1] = { key: 'e', count: count_e };
    result[2] = { key: 'h', count: count_h };
    result[3] = { key: 't', count: count_t };
    result[4] = { key: 'f', count: count_f };
    result[5] = { key: 'c', count: count_c };
    result[6] = { key: 'g', count: count_g };
    result[7] = { key: 'b', count: count_b };
    result[8] = { key: 'd', count: count_d };

    //console.log(result);
    return result;


}