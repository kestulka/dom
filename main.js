// const divas1 = document.querySelector("div");
// const divas2 = document.getElementById("divSuId");
// const divas3 = document.getElementsByClassName("divSuClass");
// const visi = document.querySelectorAll("div");
// console.log(divas1);
// console.log(divas2);
// console.log(divas3);
// console.log(visi);

// const child1 = divas2.querySelector("p");
// console.log(child1);
// const child2 = document.querySelector("div").childNodes;
// console.log(child2);
// const child3 = document.querySelectorAll("div > p");
// console.log(child3);
// const firstChild = document.querySelector("divSuId > p");
// console.log(firstChild, child3[0]);
// child3[0].setAttribute("mano", "kaciukas");
// child3[1].setAttribute("class", "kaciukas");
// child3[0].removeAttribute("mano");
// const attr = child3[1].getAttribute("class");
// console.log(attr);

// child3[0].classList.add("myClassInCss");
// child3[0].classList.remove("myClassInCss");
// child3[0].classList.replace("antrasP", "myClassInCss");
// child3[0].classList.toggle("myClassInCss");
// child3[1].style.backgroundColor = "purple";

// const myButton = document.createElement("button");
// child3[0].appendChild(myButton);

// divas1.innerHTML = "<span> as nesaugus </span>";

// myButton.innerText = "klik me";

// const span = document.querySelector("span");
// // span.remove()

// myButton.addEventListener("click", () => {
//   if ((myButton.style.backgroundColor = "pink")) {
//     myButton.style.backgroundColor = "blue";
//   } else {
//     myButton.style.backgroundColor = "pink";
//   }
// });

// const buttons = document.getElementsByClassName("buttonClass");
// for (const button of buttons) {
//   button.addEventListener("click", () => console.log("clicked!"));
// }

// const myButton2 = document.createElement("button");
// myButton2.innerText = "miau";
// const myButton3 = document.createElement("button");
// myButton3.innerText = "miau";

// divas2.append(myButton2, myButton3);

// const buttonsGroup = document.querySelectorAll("button");
// console.log(buttonsGroup);

// buttonsGroup.forEach((el, index) =>
//   el.addEventListener("click", () => {
//     console.log(`you clicked button "${el.innerText}"`);
//   }),
// );

// const forma = document.querySelector("form");
// const inputas = document.querySelector("input");
// const submitas = document.querySelector("form > button");
// console.log(forma, inputas, submitas);

// const arrej = [];
// let counter = 0;

// submitas.addEventListener("click", () => {
//   event.preventDefault();
//   counter++;

//   const inputValue = inputas.value;
//   console.log(inputValue);
//   const person = {
//     id: counter,
//     name: inputValue,
//   };
//   arrej.push(person);
//   console.log(arrej);
//   localStorage.setItem("zmones", JSON.stringify(arrej));
// });
// submitas.addEventListener("click", (a) => {
//   a.preventDefault();
//   console.log(a.target);
// });

// const editInput = document.querySelector("#input");
// const editas = document.querySelector("#editButton");
// console.log(editInput, editas);

// editas.addEventListener("click", (e) => {
//   e.preventDefault();
//   const editable = parseInt(editInput.value);
//   console.log(editable);

//   const fromLS = JSON.parse(localStorage.getItem("zmones"));
//   console.log(fromLS);
//   const founded = fromLS.find((el) => el.id === editable);
//   console.log(founded);

//   inputas.value = fromLS[founded].name;
// });

// // ---------------------------------------------------- MOKYTOJOS POV

// const forma = document.querySelector("form");
// const inputas = document.querySelector(".input");
// const submitas = document.querySelector("form > button");
// console.log(forma, inputas, submitas);

// const array = [];
// let counter = 0;

// submitas.addEventListener("click", (event) => {
//   event.preventDefault();
//   counter++;

//   const inputoValue = inputas.value;
//   console.log(inputoValue);

//   const person = {
//     id: counter,
//     name: inputoValue,
//   };

//   array.push(person);
//   console.log(array);
//   localStorage.setItem("zmones", JSON.stringify(array));

//   // inputas.value=""
//   forma.reset();
// });

// submitas.addEventListener("click", (a) => {
//   a.preventDefault();
//   console.log(a.target);
// });

// const editInput = document.querySelector("#edit");
// const editas = document.querySelector("#editbutton");
// console.log(editInput, editas);

// editas.addEventListener("click", (e) => {
//   e.preventDefault();

//   const editable = parseInt(editInput.value);
//   console.log(editable);

//   const fromLS = JSON.parse(localStorage.getItem("zmones"));
//   console.log(fromLS);

//   const founded = fromLS.findIndex((el) => el.id === editable);
//   console.log(founded);

//   inputas.value = fromLS[founded].name;
// });
