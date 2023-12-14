// 1. Sukurti elementa ir i ji ideti savo sugalvota teksta

// function addElement() {
//   const newDiv = document.createElement("div");
//   const newContent = document.createTextNode("mano sugalvoltas tekstas");
//   newDiv.appendChild(newContent);
//   const currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// }
// addElement();

// 2. Sukurti elementa ir i ji patalpinti kita elementa su tekstu

// nr.1
// const divas = document.createElement("div");
// console.log(divas);
// const pTekstas = document.createElement("p");
// console.log(pTekstas);
// divas.appendChild(pTekstas);

// nr.2
// const divas = document.querySelector("div");
// console.log(divas);
// const textDiv = document.createElement("p");
// divas.appendChild(textDiv);
// textDiv.innerText = "skibidi pop pop yes yes";

// 3. Pasizymeti elementa ir prideti jam atributa su reiksme: a) klase "myClass"; b) id "myId"; c) <a> ir <img> tagu atributus su reiksmemis

// basic budas:

// const anchoras = document.getElementById("anchor1");
// anchoras.setAttribute("class", "myClass");
// anchoras.setAttribute("id", "myId");
// anchoras.setAttribute("href", "https://www.google.com");
// anchoras.setAttribute("src", "cat.jpeg");
// console.log(anchoras);

// budas su funkcija:

// const anchoras = document.getElementById("anchor1");

// function setAttributes(element, attributes) {
//   for (let key in attributes) {
//     element.setAttribute(key, attributes[key]);
//   }
// }

// setAttributes(anchoras, {
//   class: "myClass",
//   id: "myId",
//   href: "https://www.google.com",
//   src: "cat.jpeg",
// });
// console.log(anchoras);

// 4. sukurti keleta "p" tagu div viduje, pasizymeti elementu masyva ir prideti jiems stiliu - kas antro elemento raudonas tekstas ir juodas background, likusiu tekstas baltas, background zalias


// const spalvotasDivas = document.querySelectorAll("p");
// console.log(spalvotasDivas);
// spalvotasDivas.forEach(function (element, index) {
//   if (index % 2 === 1) {
//     element.style.color = "red";
//     element.style.backgroundColor = "black";
//   } else {
//     element.style.color = "white";
//     element.style.backgroundColor = "green";
//   }
// });
// console.log(spalvotasDivas);

// const spalvotasDivas = document.getElementById("spalvuDiv");
// const list = spalvotasDivas.querySelectorAll("p");
// console.log(list);

// 5. Paimti reiksme is input ir ja atspausdinti konsoleje bei atvaizduoti puslapyje

// const forma = document.querySelector("form");
// const inputas = document.querySelector("input");
// const submitas = document.querySelector("form > button");

// const outputas = document.createElement("span");
// document.body.appendChild(outputas);
// // console.log(outputas);

// forma.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const inputValue = inputas.value;
//   outputas.textContent = inputValue;
//   console.log(inputValue);
// });

// 6. Sukurti du mygtukus: paspaudus pirmaji, sukuriamas elementas, paspaudus antraji - elementas pasalinimas. Mygtukus stilizuoti su JS.
// 7. sukurti click counter - kad kiekvienas mygtuko paspaudimas butu registruojas. Skaicius turi matytis salia mygtuko

const button1 = document.createElement("button");
button1.innerText = "create element";
const button2 = document.createElement("button");
button2.innerText = "delete element";

// kontikas button'am kad matytusi puslapyje
const divOfButtons = document.getElementById("divOfButtons");
divOfButtons.append(button1, button2);

// kintamieji
let elementas;
let button1DefaultColor = "white";
let button2DefaultColor = "white";
let skaitliukas = 0

const counter1 = document.createElement("text");
counter1.innerText = ` (times clicked: ${skaitliukas})`;
button1.appendChild(counter1);

const counter2 = document.createElement("text");
counter2.innerText = ` (times clicked: ${skaitliukas})`;
button2.appendChild(counter2);

// klausytojas + skaitliukas
button1.addEventListener("click", (event) => {
  event.preventDefault();
  skaitliukas++;

  elementas = document.createElement("p");
  elementas.innerText = "created new element";
  console.log("created new element");

  button1.style.backgroundColor = "green";
  setTimeout(() => {
    button1.style.backgroundColor = button2DefaultColor;
  }, 100);

  // updatintas skaitliukas (BUTINA)
  counter1.innerText = ` (times clicked: ${skaitliukas})`;
});

button2.addEventListener("click", (event) => {
  event.preventDefault();
  skaitliukas--;

  // tikrina ar egzistuoja elementas, jei egzistuoja istrina ir atspausdina
  if (elementas) {
    elementas.remove();
    console.log("element has been deleted");
    button2.style.backgroundColor = "red";
    setTimeout(() => {
      button2.style.backgroundColor = button2DefaultColor;
    }, 100);
  } else {
    console.log("you did not delete any elements. (no elements left)");
  }

  // updatintas skaitliukas (BUTINA)
  counter2.innerText = ` (times clicked: ${skaitliukas})`;
});
