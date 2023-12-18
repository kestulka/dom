
const imgArray = [
  "https://i.redd.it/6gf6bgpazhg21.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3JYZ9r_F0V8mJy6ihn9LGlznC2X0Y5DiWvA&usqp=CAU",
  "https://pbs.twimg.com/profile_images/1661020447083995141/JKXGRhBI_400x400.png",
  "https://www.the-sun.com/wp-content/uploads/sites/6/2023/10/www-instagram-com-monkeycatluna-hl-851711797.jpg",
  "https://i.kym-cdn.com/photos/images/newsfeed/002/299/255/29d.jpeg",
];

const imgContainer = document.createElement("div");
imgContainer.id = "imgContainer";
imgContainer.style.display = "flex";


function createImageGallery() {
  for (let i = 0; i < imgArray.length; i++) {
    const imgContainerDiv = document.createElement("div");
    imgContainerDiv.className = "img-container";
    imgContainerDiv.style.display = "inline-block"
    imgContainerDiv.style.position = "relative"
    
    const img = document.createElement("img");
    img.src = imgArray[i];
    img.style.width = "300px"
    img.style.height = "300px"
    img.style.position = "absolute"
    

    const heartContainer = document.createElement("div")
    heartContainer.className = "heart-container"

    const heartButton = document.createElement("button");
    heartButton.innerHTML = '<ion-icon name="heart-outline" style="font-size: 4em;"></ion-icon>';
    heartButton.addEventListener("click", () => toggleHeart(heartButton));

    imgContainerDiv.append(img);
    heartContainer.append(heartButton);
    imgContainerDiv.append(heartContainer);
    imgContainer.append(imgContainerDiv);
  }
}

function toggleHeart(button) {
  const heartIcon = button.querySelector('ion-icon');
  const isFilled = heartIcon.name === 'heart';
  heartIcon.name = isFilled ? 'heart-outline' : 'heart';
  heartIcon.style.color = isFilled ? '' : "red"
}

document.body.appendChild(imgContainer);
createImageGallery();




// tautvio

// /** @format */
// const doc = document;
 
// // ketvirtos skaidres
 
// // Div su nuotraukom
// const imgContainer = document.createElement("div");
 
// // Div su nuotrauku konteineriu
// const konteineris = document.createElement("div");
 
// // Div su nuotrauku konteineriu priskiriu i body
// konteineris.appendChild(imgContainer);
// doc.body.appendChild(konteineris);
 
// // Nuotrauku masyvas
// const masiova = [
//   "https://image.shutterstock.com/image-illustration/photorealistic-3d-illustration-futuristic-city-260nw-2000612981.jpg",
//   "https://image.shutterstock.com/image-photo/cyberpunk-style-image-beautiful-brunette-260nw-1886182798.jpg",
//   "https://image.shutterstock.com/image-illustration/3d-rendering-cyberpunk-girl-stylish-260nw-1360869662.jpg",
//   "https://image.shutterstock.com/image-illustration/science-fiction-cyborg-female-kneeling-260nw-1367287115.jpg",
//   "https://image.shutterstock.com/image-illustration/futuristic-samurai-standing-on-building-260nw-1798382134.jpg",
// ];
 
// // Sirduciu skaicius ant nuotrauku
// const iconsPerImage = 1;
 
// // Ciklas pro nuotrauku url
// for (let i = 0; i < masiova.length; i++) {
//   // kiekvienai nuotraukai sukuria div
//   const pElementas = document.createElement("div");
//   pElementas.style.height = "300px";
//   pElementas.style.width = "500px";
 
//   // paima random url is masyvo
//   const randomPic = random(masiova);
//   pElementas.style.backgroundImage = `url('${randomPic}')`;
//   pElementas.style.backgroundSize = "cover";
 
//   // priskiria img div i img konteineri
//   imgContainer.appendChild(pElementas);
 
//   // kekvienai img opriskiria po sirdele
//   for (let j = 0; j < iconsPerImage; j++) {
//     // sukuriam sirdele
//     const siorca2 = document.createElement("ion-icon");
//     siorca2.setAttribute("name", "heart");
//     siorca2.style.width = "50px";
//     siorca2.style.height = "30px";
//     siorca2.style.color = "white";
 
//     // patikrina ar sirdele nebuvo liked
//     const localStorageKey = `siorca2_${i}_${j}`;
//     const isLiked = localStorage.getItem(localStorageKey);
//     if (isLiked === "liked") {
//       siorca2.style.color = "red";
//       siorca2.classList.add("clicked");
//     }
 
//     // mouseover mouse out eventas
//     siorca2.addEventListener("mouseover", function () {
//       siorca2.style.color = "red";
//     });
 
//     siorca2.addEventListener("mouseout", function () {
//       if (!siorca2.classList.contains("clicked")) {
//         siorca2.style.color = "white";
//       }
//     });
 
//     siorca2.addEventListener("click", function () {
//       // leizdia paspaust sirdele
//       siorca2.classList.toggle("clicked");
//       if (siorca2.classList.contains("clicked")) {
//         localStorage.setItem(localStorageKey, "liked");
//       } else {
//         localStorage.removeItem(localStorageKey);
//       }
//     });
 
//     // priskiria sirdele kekvienam div
//     pElementas.appendChild(siorca2);
//   }
// }
 
// // random elemento funkcija
// function random(array) {
//   const randIndex = Math.floor(Math.random() * array.length);
//   return array[randIndex];
// }
 





