let apiData = {};

const dataContainer = document.getElementById("data-container")

fetch("https://restcountries.com/v3.1/all").then(
  res => res.json().then((data) => {
    apiData = data
    for (let i = 0; i < data.length; i++) {
      const flagPng = data[i].flags.png;
      const countryName = data[i].name.common;

      const img = document.createElement("img");
      img.src = flagPng
      img.style.width = "64px";
      img.style.height = "48px;"

      const span = document.createElement("span");
      span.innerText = countryName

      const countryContainer = document.createElement("div");
      countryContainer.id = "country-container";
      countryContainer.appendChild(img);
      countryContainer.appendChild(span);
      countryContainer.style.display = "flex";

      dataContainer.appendChild(countryContainer)
    }
  })
).catch(err => console.log(err))