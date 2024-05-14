interface Item {
  id: string;
  nome: string;
}

const formularioItem = document.getElementById("formularioItem") as HTMLFormElement;
const listaItens = document.getElementById("listaItens") as HTMLUListElement;
const inputItem = document.getElementById("item") as HTMLInputElement;

const carregarItens = (): Item[] => {
  const itens = localStorage.getItem("itens");
  return itens ? JSON.parse(itens) : [];
};

const salvarItens = (itens: Item[]): void => {
  localStorage.setItem("itens", JSON.stringify(itens));
};

const adicionarItem = (nome:string) => {
  const itens = carregarItens();
  const novoItem: Item = {
    id: new Date().toISOString(),
    nome
  };
  itens.push(novoItem)
  salvarItens(itens);
};

const removerItem = (id: string) => {
  const itens = carregarItens();
  const itensAtualizados = itens.filter(item => item.id !== id);
  salvarItens(itensAtualizados);
  renderizarItens();
};

const editarItem = (id: string, novoNome: string) => {
  const itens = carregarItens();
  const itemAlterado = itens.find(item => item.id === id);
  if (itemAlterado) {
    itemAlterado.nome = novoNome;
    salvarItens(itens);
  }
};

const renderizarItens = () => {
  const itens = carregarItens();
  listaItens.innerHTML = '';
  itens.forEach(item => {
    const remover = document.createElement('img');
    remover.setAttribute('src', "./icone_lixeira.png")
    remover.setAttribute('class', "btn_lixeira")
    const editar = document.createElement('img');
    editar.setAttribute('src', "./icone_editar.png")
    editar.setAttribute('class', "btn_editar")
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-around'
    const itemName = document.createElement('span');
    itemName.className = 'flex-grow-1'
    itemName.textContent = item.nome;    
    listItem.appendChild(itemName)
    listItem.appendChild(editar)
    listItem.appendChild(remover)
    listaItens.appendChild(listItem);

    // Evento para editar e remover o item

    // listItem.addEventListener('dblclick', () =>{
    //   const novoNome = prompt("Editar item:", item.nome);
    //   if (novoNome !== null) editarItem(item.id, novoNome);
    //   if (novoNome === '') removerItem(item.id)
    //   renderizarItens();
    // });

    editar.addEventListener('click', () =>{
      const novoNome = prompt("Editar item:", item.nome);
      if (novoNome !== null) editarItem(item.id, novoNome);
      if (novoNome === '') removerItem(item.id)
      renderizarItens();
    });

    remover.addEventListener('click', () => {
      removerItem(item.id);
    });
  });
};

formularioItem.addEventListener('submit', (evt) =>{
  evt.preventDefault();
  const nome = inputItem.value.trim();
  if (nome) {
    adicionarItem(nome);
    inputItem.value = '';
    renderizarItens();
  }
});

renderizarItens();
