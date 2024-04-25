const bgImages = [
    "img1.png",
    "img2.png",
    "img3.png",
];

const imageLength = bgImages.length;
const chosenImage = bgImages[Math.floor(Math.random() * imageLength)];
const homeContainer = document.querySelector(".home");

const imageElement = document.createElement("img");

imageElement.src = chosenImage;

homeContainer.appendChild(imageElement);