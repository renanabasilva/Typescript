// null - undefined - unknown

// null - Tipo nulo
// undefined - Indefinido
// unknow - Desconhecido

let anome: string | null;
anome = null;
console.log(anome);

let anome2: any;
console.log(anome2);

let anome3: unknown; // Unknown só pode ser atribuido em tipos unknow ou any
let anum: any = anome3;
console.log(anum);
