const result = document.querySelector("#result");
const filter = document.querySelector("#filter");
const listItems = [];

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

getDataFromAPI();
