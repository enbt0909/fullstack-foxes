const names = [
  "Andreas",
  "Aryani",
  "Daniel",
  "Expo",
  "Eugen",
  "Genti",
  "Horschi",
  "Hoanglong",
  "Isla",
  "Jacqueline",
  "Johann",
  "Maciej",
  "Thomas",
  "Michael",
  "Neda",
  "Niclas",
  "Stephan",
  "Sven"
];
function generateRandomName() {
  let drumSound = document.getElementById("drumSound");
  drumSound.volume = 0.4;
  consol.log(drumSound);
  drumSound.play();
  setTimeout(function () {
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    document.getElementById("randomName").textContent = randomName;
  }, 4500); // 4500 milliseconds delay before setting the random name
}
