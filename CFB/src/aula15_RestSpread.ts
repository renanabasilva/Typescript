function fsoma(...n: number[]): number {
  let s: number = 0;
  for (let el of n) {
    s += el;
  }
  // n.map((el) => {
  //   s += el
  // })
  return s;
}

console.log(fsoma(10, 20, 30, 40, 50, 60, 70));
console.log(fsoma(10, 20));
console.log(fsoma(30, 40, 50, 60, 70));
