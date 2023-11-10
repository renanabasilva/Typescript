"use strict";
function teste1() {
    console.log("Teste");
}
function logar(user, pass) {
    console.log(`User: ${user}`);
    console.log(`Pass: ${pass}`);
}
logar("renan", "1234");
logar("teste", "4321");
function soma2(n1, n2) {
    let r = n1 + n2;
    return r;
}
let n_res = soma2(10, 5);
let s_res = soma2(3, 4).toString();
console.log(n_res);
console.log(s_res);
