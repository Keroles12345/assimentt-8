const btn = document.getElementById("btn");
const paragraph = document.getElementById("displayParagraph");

const paragraphs  = [
  "You miss 100% of the shots you don't takeWayne Gretzy",
  "Do not take life too seriously. You will not get out alive",
  "It's not what happens to you, but how you react to it that matters",
];

let currentIndex = 0;

btn.addEventListener("click", () => {
  for (let i = 0; i < paragraphs.length; i++) {
    if (i === currentIndex) {
      paragraph.textContent = paragraphs[i];
    }
  }
  currentIndex = (currentIndex + 1) % paragraphs.length;
});
