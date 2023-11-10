function soma(n1:number = 0, n2:number = 0):number{
  return n1 + n2;
}

console.log(soma(5, 5));

function novoUser(user:string, pass:string, nome?:string):void {
  // Ao utilizar interrogação ? após o parâmetro da função, faz com que ele seja opcional.
  let dados = {user, pass, nome}
  // console.log(`User:${user}`);
  // console.log(`Pass:${pass}`);
  // if (nome) console.log(`Nome:${nome}`);
  console.log(dados);
}

novoUser('renaba', '1234')
