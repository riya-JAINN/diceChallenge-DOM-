var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");
var content = document.querySelector("h1");
var random1 = Math.floor(Math.random() * 6) + 1;
var random2 = Math.floor(Math.random() * 6) + 1;
image1.setAttribute("src", `./images/dice${random1}.png`);
image2.setAttribute("src", `./images/dice${random2}.png`);
if (random1 > random2) content.textContent = "User 1 won";
else if (random1 < random2) {
  content.textContent = "User 2 won";
} else {
  content.textContent = "Draw";
}
