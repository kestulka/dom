const imgContainer = document.createElement("div")

function create5Imgs(){
for (let i=0; i<5; i++){
    const img = document.createElement("img")
    const button = document.createElement("button")
    button
    img.style.width = "200px"
    img.style.height = "200px"
    const imgArray = ["https://i.redd.it/6gf6bgpazhg21.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3JYZ9r_F0V8mJy6ihn9LGlznC2X0Y5DiWvA&usqp=CAU", "https://pbs.twimg.com/profile_images/1661020447083995141/JKXGRhBI_400x400.png", "https://www.the-sun.com/wp-content/uploads/sites/6/2023/10/www-instagram-com-monkeycatluna-hl-851711797.jpg", "https://i.kym-cdn.com/photos/images/newsfeed/002/299/255/29d.jpeg"]
    img.setAttribute("src", `${imgArray[i]}`)
    imgContainer.append(img)
}
}
create5Imgs()

document.body.append(imgContainer)

// kolegos

const imgContainer = document.querySelector(".pratybos-2");
const masyvas = [
  "https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/master/pass/gettyimages-1146431497.jpg",
  "https://s7g10.scene7.com/is/image/tetrapak/nature-landscape?wid=600&hei=338&fmt=jpg&resMode=sharp2&qlt=85,0&op_usm=1.75,0.3,2,0",
  "https://s7g10.scene7.com/is/image/tetrapak/polymers-forest?wid=384&hei=216&fmt=jpg&resMode=sharp2&qlt=85,0&op_usm=1.75,0.3,2,0",
  "https://www.cnnphilippines.com/dam/jcr:713c0812-9e82-49a9-b2d9-1208b06dd352/PHOTO1.png",
  "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702512000&semt=ais",
  "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg",
];
 
const heartSk = masyvas.length
 
const random = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  console.log(randomIndex);
  return array[randomIndex];
};
 
for (let j = 1; j < masyvas.length; j++) {
  const imgEl = document.createElement("img");
  imgEl.style.height = "200px"
  imgEl.style.width = "300px"
  const randomImg = random(masyvas);
  imgEl.setAttribute("src", randomImg)
  imgEl.textContent = randomImg;
  imgContainer.append(imgEl);
 
}
 
// 2.
const like = document.createElement("ion-icon")
like.setAttribute("name", "heart-outline")
like.setAttribute('class', "heart")
like.style.width= "50px"
like.style.height= "50px"
imgContainer.append(like)
 
like.style.color = "red"