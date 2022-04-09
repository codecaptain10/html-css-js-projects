//DOM variables
const tagsElements = document.querySelector("#tags");
const textArea = document.querySelector("textarea");

//Functions
function createTags(input) {
  const tags = input
    .split(",")
    .filter(tag => tag.trim() !== "")
    .map(tag => tag.trim());
  console.log(tags);
}

//Events
textArea.focus();
textArea.addEventListener("keyup", event => {
  createTags(event.target.value);
});
