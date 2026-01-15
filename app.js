console.log("Hello, Audio World!");

const audio = document.querySelector("audio");

audio.addEventListener("play", function (event) {
  console.log("Playing", event);
});

audio.addEventListener("pause", function (event) {
  console.log("Paused", event);
});

audio.addEventListener("ended", function (event) {
  console.log("Ended", event);
});   

let age =25
console.log("Age is", age);
age = 27
console.log (age)
