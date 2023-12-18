const imgContainer = document.createElement("div");

function create5Imgs() {
  for (let i = 0; i < 5; i++) {
    const img = document.createElement("img");
    const button = document.createElement("button");
    img.style.width = "200px";
    img.style.height = "200px";
    const imgArray = [
      "https://i.redd.it/6gf6bgpazhg21.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3JYZ9r_F0V8mJy6ihn9LGlznC2X0Y5DiWvA&usqp=CAU",
      "https://pbs.twimg.com/profile_images/1661020447083995141/JKXGRhBI_400x400.png",
      "https://www.the-sun.com/wp-content/uploads/sites/6/2023/10/www-instagram-com-monkeycatluna-hl-851711797.jpg",
      "https://i.kym-cdn.com/photos/images/newsfeed/002/299/255/29d.jpeg",
    ];
    img.setAttribute("src", `${imgArray[i]}`);
    imgContainer.append(img);
  }
}
create5Imgs();
document.body.append(imgContainer);

for (let i = 0; i < imgArray.length; i++) {
  const imgContainerDiv = document.createElement("div");
  imgContainerDiv.className = "img-container";
  const img = document.createElement("img");
  img.src = imgArray[i];
  const button = document.createElement("button");

  button.addEventListener("click", () => {});

  imgContainerDiv.append(img, button);
  imgContainer.append(imgContainerDiv);
}
