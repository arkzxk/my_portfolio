const skills = ["Graphic Designer", "Photographer", "Programmer"];
let index = 0;

function changeWord() {
  index = (index + 1) % skills.length;
  document.getElementById("skills").textContent = skills[index];
}

setInterval(changeWord, 1500);