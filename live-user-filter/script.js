//Variables
const result = document.querySelector("#result");
const filter = document.querySelector("#filter");
const listItems = [];

//Functions
async function getDataFromAPI() {
  const res = await fetch("https://randomuser.me/api?results=50");

  const { results } = await res.json();
  // console.log(results);

  //Clear results
  result.innerHTML = "";
  results.forEach(user => {
    const li = document.createElement("li");
    listItems.push(li);
    li.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}">
    <div class="user-info">
        <h4>${user.name.first}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
    </div>
      `;

    result.appendChild(li);
  });
}

function filterData(searchTerm) {
  listItems.forEach(item => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

//get data from API
getDataFromAPI();

//Event
filter.addEventListener("input", event => {
  filterData(event.target.value);
});
