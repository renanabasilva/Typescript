"use strict";
function fsoma(...n) {
    let s = 0;
    for (let el of n) {
        s += el;
    }
    return s;
}
console.log(fsoma(10, 20, 30, 40, 50, 60, 70));
console.log(fsoma(10, 20));
console.log(fsoma(30, 40, 50, 60, 70));
