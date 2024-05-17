export class Negociacao {
  // #data;                           // #data usa sintaxe javascript, a sintaxe Typescript é diferente.
  private _data;                      // Ao utilizar o typescript, usa-se o private na declaração da variável.
  private _quantidade;
  private _valor;

  constructor(data, quantidade, valor) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }

  get data() {
    return this._data;
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }

  get volume(){
    return this._quantidade * this._valor;
  }
}
