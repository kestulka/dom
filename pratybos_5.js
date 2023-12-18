import data from "./data.js";
console.log(data);

// ls array for items
const LsCheck = localStorage.getItem("items");
const itemsLs = LsCheck === null ? [] : JSON.parse(LsCheck);
console.log(itemsLs);

const findItemById = (id) => {
  return data.find((element) => element.id === id);
};
console.log(findItemById(1234567));

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

button.addEventListener("click", () => {
  const itemId = itemIdInput.value;
  const itemName = itemNameInput.value;
  const itemQuantity = itemQuantityInput.value;

  if (itemId && itemName && itemQuantity) {
    const newQuery = {
      id: itemId,
      name: itemName,
      quantity: itemQuantity,
    };

    itemsLs.push(newQuery);
    localStorage.setItem("items", JSON.stringify(itemsLs)); // issaugom updatinta array LS
    console.log(itemsLs);
    alert("item added to cart successfuly");

    // isvalyti input laukelius
    itemIdInput.value = "";
    itemNameInput.value = "";
    itemQuantityInput.value = "";
  } else {
    alert("Uzpildykite visus laukus");
  }
});



