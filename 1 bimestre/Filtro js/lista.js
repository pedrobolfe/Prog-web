const nameList = ["Felisberto", "Fernandão", "Nareba", "Yaguinho", "BaraBaraBara", "TI"]

const listE1 = document.getElementById("list");
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