const url = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const inputEl = document.getElementById("search");
const listEl = document.getElementById("list-group");
let data = [];

const logJSONData = async () => {
  const response = await fetch(url);
  data = await response.json();
};

const renderList = (filteredData) => {
  const html = filteredData.map(({ city, population }) => `
    <li>
      <span class="name">${city}</span>
      <span class="population">${population}</span>
    </li>
  `).join("");
  listEl.innerHTML = html;
};

const searcher = (inputValue) => {
  const filteredData = data.filter(({ city, state }) =>
    city.toLowerCase().includes(inputValue) || state.toLowerCase().includes(inputValue)
  );
  renderList(filteredData);
};

inputEl.addEventListener("keyup", (event) => {
  const inputValue = event.target.value.toLowerCase();
  searcher(inputValue);
});

logJSONData();
