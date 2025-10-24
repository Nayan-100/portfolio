const typewriterText = "Frontend Developer";
const typewriterElement = document.getElementById("profession");
let index = 0;
typewriterElement.style.color="blue"
function typeWriter() {
  if (index < typewriterText.length) {
    typewriterElement.innerHTML += typewriterText[index];
    index++;
    setTimeout(typeWriter, 100); // Adjust the speed here
  } else {
    // Optional: restart the typing effect
    // index = 0;
    // typewriterElement.innerHTML = "";
    // typeWriter();
  }
}

typeWriter();

