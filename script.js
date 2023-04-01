// Define arrays of image URLs for each activity card
const safariImages = ["safari1.jpg", "safari2.jpg", "safari3.jpg"];
const foodImages = ["food1.jpg", "food2.jpg", "food3.jpg"];
const cultureImages = ["culture1.jpg", "culture2.jpg", "culture3.jpg"];

// Define variables to keep track of current image index for each card
let safariIndex = 0;
let foodIndex = 0;
let cultureIndex = 0;

// Get references to the activity card elements
const safariCard = document.getElementById("safariCard");
const foodCard = document.getElementById("foodCard");
const cultureCard = document.getElementById("cultureCard");

// Add click event listeners to each card element
safariCard.addEventListener("click", () => {
  // Update the image URL to the next one in the array
  safariIndex = (safariIndex + 1) % safariImages.length;
  const imageUrl = `images/${safariImages[safariIndex]}`;
  safariCard.querySelector(".activityImg").src = imageUrl;
});

foodCard.addEventListener("click", () => {
  // Update the image URL to the next one in the array
  foodIndex = (foodIndex + 1) % foodImages.length;
  const imageUrl = `images/${foodImages[foodIndex]}`;
  foodCard.querySelector(".activityImg").src = imageUrl;
});

cultureCard.addEventListener("click", () => {
  // Update the image URL to the next one in the array
  cultureIndex = (cultureIndex + 1) % cultureImages.length;
  const imageUrl = `images/${cultureImages[cultureIndex]}`;
  cultureCard.querySelector(".activityImg").src = imageUrl;
});
