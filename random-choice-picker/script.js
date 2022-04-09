//DOM variables
const tagsElements = document.querySelector("#tags");
const textArea = document.querySelector("textarea");

//Functions
function createTags(input) {
  const tags = input
    .split(",")
    .filter(tag => tag.trim() !== "")
    .map(tag => tag.trim());

  tagsElements.innerHTML = "";

  tags.forEach(tag => {
    const tagElement = document.createElement("span");
    tagsElements.classList.add("tag");
    tagsElements.innerText = tag;
    togsElements.appendChild(tagElement);
  });
}

//Events
textArea.focus();
textArea.addEventListener("keyup", event => {
  createTags(event.target.value);
});
