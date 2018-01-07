'use strict';

module.exports = function countSameElements(collection) {

    /* var collection = [
            'a', 'a', 'a',
            'e', 'e', 'e', 'e', 'e', 'e', 'e',
            'h', 'h', 'h', 'h', 'h', 'h', 'h[3]', 'h', 'h',
            't', 't-2', 't', 't', 't', 't', 't', 't', 't[10]',
            'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
            'c:8',
            'g', 'g', 'g', 'g', 'g', 'g', 'g',
            'b', 'b', 'b', 'b', 'b', 'b',
            'd-5'
        ];
*/

    let result = [];
    let n = 0;
    let app = [];

    for (let i = 0; i < collection.length; i++) {
        if (collection[i].length == 1) {
            if (i == collection.indexOf(collection[i])) { //判断前一个元素是否等于后面一个元素
                result[n] = { name: collection[i], summary: 1 };
                app.push(collection[i]);
                n++;
            } else {
                result[app.indexOf(collection[i])].summary++;
            }
        } //collection[i].length === 1 结束

        if (collection[i].length === 3) {
            if (app.indexOf(collection[i].charAt(0)) !== -1) {
                let p = app.indexOf(collection[i].charAt(0));
                let m = parseInt(collection[i].charAt(2)); // 't-2',形式
                result[p].summary = result[p].summary + m;
            } else {
                result[n] = { name: collection[i].charAt(0), summary: parseInt(collection[i].charAt(2)) };
                n++;
                app.push(collection[i].charAt(0));
            }
        } //collection[i].length === 3结束

        if (collection[i].length > 3) {
            let a = collection[i].charAt(1);
            if (a === ':' || a === '-') {
                if (app.indexOf(collection[i].charAt(0)) !== -1) {
                    let p = app.indexOf(collection[i].charAt(0));
                    let m = parseInt(collection[i].substring(2, collection[i].length)); // 't[10]',形式
                    result[p].summary = result[p].summary + m;
                } else {
                    result[n] = {
                        name: collection[i].charAt(0),
                        summary: parseInt(collection[i].substring(2, collection[i].length))
                    };
                    n++;
                    app.push(collection[i].charAt(0));
                }
            }
            if (a === '[') {
                if (app.indexOf(collection[i].charAt(0)) !== -1) {
                    let p = app.indexOf(collection[i].charAt(0));
                    let m = parseInt(collection[i].substring(2, collection[i].length - 1));
                    result[p].summary = result[p].summary + m;

                } else {
                    result[n] = {
                        name: collection[i].charAt(0),
                        summary: parseInt(collection[i].substring(2, collection[i].length - 1))
                    };
                    n++;
                    app.push(collection[i].charAt(0));
                }
            }
        } //collection[i].length === 4 结束


    }
    // console.log(result);
    return result;
}