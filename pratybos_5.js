// ls array for items
const LsCheck = localStorage.getItem("items");
const itemsLs = LsCheck === null ? [] : JSON.parse(LsCheck);
console.log(itemsLs);

const findItemById = (id) => {
  return itemsLs.find((element) => element.id === id);
};
console.log(findItemById(1));

// input

const divContainer = document.createElement("div");
const button = document.createElement("button");
button.innerText = "add item ";
const itemIdInput = document.createElement("input");
itemIdInput.placeholder = "item id";
const itemNameInput = document.createElement("input");
itemNameInput.placeholder = "item name";
const itemQuantityInput = document.createElement("input");
itemQuantityInput.placeholder = "item quantity";
divContainer.append(button, itemIdInput, itemNameInput, itemQuantityInput);
document.body.append(divContainer);


const tableContainer = document.getElementById("tableContainer")


button.addEventListener("click", () => {
  const itemId = itemIdInput.value;
  const itemName = itemNameInput.value;
  const itemQuantity = itemQuantityInput.value;
  
  if (itemId && itemName && itemQuantity) {
    const itemExists = findItemById(itemId)

    if(!itemExists){
    const newQuery = {
      id: itemId,
      name: itemName,
      quantity: itemQuantity,
    };

    itemsLs.push(newQuery);
    localStorage.setItem("items", JSON.stringify(itemsLs)); // issaugom updatinta array LS
    console.log(itemsLs);
    alert("item added to LS successfuly");

    // isvalyti input laukelius
    itemIdInput.value = "";
    itemNameInput.value = "";
    itemQuantityInput.value = "";


  } else {
    alert("item with same id exists!");
  }
} else {
    alert("fill in all fields")
}

itemsLs.forEach((el)=> {
  const tableCheck = document.querySelector("tr")
  if(tableCheck){
      tableCheck.remove()
  }
  const table = document.createElement("table")
  const tableBody = document.createElement("tbody")
  const eilSk = 1 // eilSk talpina ivesta value i langelius
  const stulpSk = 1 // stulpSk talpina ivesta value i langelius
  
  for (let i = 0; i<eilSk; i++){
      const row = document.createElement("tr") // kuria eilutes
  
  for (let j = 0; j<stulpSk; j++){
      const cell = document.createElement("td") // kuria stulpelius
      const cellText = document.createTextNode(`${el.id}, ${el.name}, ${el.quantity}`)
      cell.appendChild(cellText)
      row.appendChild(cell)
  }
  tableBody.appendChild(row)
  }
  table.appendChild(tableBody)
  document.body.appendChild(table)
  table.setAttribute("border", "2") // del vizualo
  })
})








