const names = [
  "Andreas",
  "Aryani",
  "Daniel",
  "Expo",
  "Eugen",
  "Genti",
  "Hoang",
  "Isla",
  "Johann",
  "Maciej",
  "Michael",
  "Neda",
  "Niclas",
  "Stephan",
  "Sven"
];

function generateRandomName() {
  const drumSound = document.getElementById("drumSound");
  const resultElement = document.getElementById("randomName");

  drumSound.play();

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    resultElement.textContent = randomName;
    resultElement.style.display = "block";
  }, 1000);
}