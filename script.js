// const names = [
//   "Andreas",
//   "Aryani",
//   "Daniel",
//   "Expo",
//   "Eugen",
//   "Genti",
//   "Hoanglong",
//   "Isla",
//   "Jacqueline",
//   "Johann",
//   "Maciej",
//   "Thomas",
//   "Michael",
//   "Neda",
//   "Niclas",
//   "Stephan",
//   "Sven"
// ];
// function generateRandomName() {
//   let drumSound = document.getElementById("drumSound");
//   drumSound.volume = 0.1;
//   console.log(drumSound);
//   drumSound.play();
//   setTimeout(function () {
//     const randomIndex = Math.floor(Math.random() * names.length);
//     const randomName = names[randomIndex];
//     document.getElementById("randomName").textContent = randomName;
//   }, 4500);
// }
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
  "Sven",
];

function generateRandomName() {
  const drumSound = document.getElementById("drumSound");
  // drumSound.volume = 0.2; // Set volume to 20%
  drumSound.play();

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    document.getElementById("randomName").textContent = randomName;
  }, 2000); // 2000 milliseconds delay before setting the random name
}
