let nvalor: number;
let svalor: string;
let uvalor: unknown;

uvalor = 10;
nvalor = 10;
svalor = "20";

// nvalor = Number.parseInt(svalor);
svalor = nvalor.toString();

// nvalor = <number>uvalor;
// nvalor não pode receber uvalor sem a afirmação de tipo (Type Assertion)
// svalor = <string>uvalor;
// nvalor = <number>(<unknown>svalor);

// console.log(typeof uvalor);
// console.log(uvalor);

// console.log(typeof nvalor);
// console.log(nvalor);

console.log(typeof svalor);
console.log(svalor);
