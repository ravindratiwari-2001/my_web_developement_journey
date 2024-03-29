const slider = document.querySelector(".slider");
const images = [
  "../Images/JS1.jpeg", // Replace with your image paths
  "../Images/JS2.jpeg", // Replace with your image paths
  "../Images/JS3.jpeg", // Replace with your image paths
  "../Images/JS4.jpeg", // Replace with your image paths
  "../Images/JS5.jpeg", // Replace with your image paths
  "../Images/JS6.jpeg", // Replace with your image paths
  "../Images/JS7.jpeg", // Replace with your image paths
  "../Images/JS8.jpeg", // Replace with your image paths
];
let currentImage = 0;

function createImage(imageUrl) {
  const image = document.createElement("img");
  image.src = imageUrl;
  slider.appendChild(image);
}

function createNavigation() {
  const navigation = document.querySelector(".navigation");
  const nextButton = document.createElement("button");
  nextButton.innerText = "Next";
  nextButton.addEventListener("click", () => {
    currentImage++;
    if (currentImage >= images.length) {
      currentImage = 0;
    }
    slideImage();
  });

  const prevButton = document.createElement("button");
  prevButton.innerText = "Previous";
  prevButton.addEventListener("click", () => {
    currentImage--;
    if (currentImage < 0) {
      currentImage = images.length - 1;
    }
    slideImage();
  });

  navigation.appendChild(prevButton);
  navigation.appendChild(nextButton);
}

function slideImage() {
  slider.style.transform = `translateX(-${currentImage * 100}%)`;
}

images.forEach(createImage);
createNavigation();
slideImage(); // Set the initial slide
