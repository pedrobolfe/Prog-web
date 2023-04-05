const nameList = ["Felisberto", "Fernandão", "Nareba", "Yaguinho", "BaraBaraBara", "TI"]

const listE1 = document.getElementById("list");


const btRemover = document.getElementById("btRemover");
btRemover.addEventListener(remover_item);

//const btAdicionar = document.getElementById("btAdicionar");
//btAdicionar.addEventListener(adicionar_item);

const btSelecionar = document.getElementById("btSelecionar");
btRemover.addEventListener(remover_item);

const searchField = document.getElementById("searchField");
searchField.addEventListener("input", inputHandler);

this.fillList();

function fillList(list = nameList){
    listE1.innerHTML = "";
    for(let i = 0; i < list.length; i++){
        let listItems = document.createElement("li");
        listItems.innerHTML = list[i];
        listE1.appendChild(listItems);
    }
}

function inputHandler(){
    const filteredList = nameList.filter(el => {
        const listItems = el.toLowerCase();
        const searchWord =searchField.value.toLowerCase();
        return listItems.includes(searchWord)
    });
    fillList(filteredList);
}

function remover_item(){
    nameList.pop(searchField);
}

function adicionar_item(){
    nameList.push(searchField);
}
