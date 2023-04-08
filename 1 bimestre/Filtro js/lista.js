const nameList = ["Manoel Gomes", "Fernandão", "Nareba", "BaraBaraBara", "TI"]

const searchField = document.getElementById("searchField");     // barra de pesquisa
const listEl = document.getElementById("list");     // nomes filtrados

const btFiltrar = document.getElementById("btFiltrar");     // botao filtrar
const btAdicionar = document.getElementById("btAdicionar");     //  botao adicionar
const btRemover = document.getElementById("btRemover");    // botao remover
const saida = document.getElementById("saida");     // saida para mostra umas msg

this.fillList();

function fillList(list = nameList) {
    listEl.innerHTML = "";
    for(let i = 0; i < list.length; i++) {
        let listItems = document.createElement("li");
        listItems.innerHTML = list[i];
        listEl.appendChild(listItems);
    }
}

function inputHandler() {
    saida.innerHTML = ""
    const filteredList = nameList.filter(el => {
        const listItems = el.toLowerCase();
        const searchWord = searchField.value.toLowerCase();
        return listItems.includes(searchWord);
    })
    fillList(filteredList);
}

function adicionar_item(){
    item = searchField.value.toLowerCase();    //  'item' recebe o valor da barra de pesquisa e transforma em minusculo
    if (item != ''){    //  se a barra de pesquisa nao estiver vazia, o nome sera add na lista 
        if (nameList.indexOf(item) == -1){  // se o item nao estiver na lista, o item sera adicionado
            nameList.push(item);    //  adciona o nome na ultima posicao da lista
            saida.innerHTML = "Nome Adicionado";
        }
    }
}

function remover_item(){
    item = searchField.value.toLowerCase();     //  'nome' recebe o valor da barra de pesquisa e transforma em minusculo
    var verifica = nameList.indexOf(item);     // indexOf verifica se tem um item em uma lista, se for -1 e pq n esta na lista, se estiver ele retorna a posicao do item
    if (verifica != -1) {   // se for diferente de -1 e pq o item esta na lista
        nameList.splice(verifica, 1);   // splice remove o elemento na posicao retornada pelo indexOf
        saida.innerHTML = "Nome Removido";
    }
}

btFiltrar.addEventListener("click", inputHandler);  // chama a funcao quando o botao for clicado
btAdicionar.addEventListener("click", adicionar_item); //              || 
btRemover.addEventListener("click", remover_item);  //                 ||