let countries = document.getElementById("countries");
let select = document.getElementById("continent");
let Search = document.getElementById("Search");
// options For Axios To Get Data
const options = {
  method: "GET",
  url: "https://restcountries.com/v3.1/region/asia",
};
const searchOptions = {
  method: "GET",
  url: "https://restcountries.com/v3.1/name/",
};
// When Page Load This code is run
window.addEventListener("load", () => {
  GetCountries(options).then((Data) => {
    FullData(Data, countries);
  });
});
// this is for get all Countries on Change
select.addEventListener("change", () => {
  options.url = select.value;
  countries.innerHTML = `
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  `;
  GetCountries(options).then((Data) => {
    FullData(Data, countries);
  });
});
// This is Search
Search.addEventListener("keyup", () => {
  if (Search.value.replaceAll(" ", "").length !== 0) {
    searchOptions.url = `https://restcountries.com/v3.1/name/${Search.value}`;
    FindCountry(searchOptions).then((Data) => {
      if (Data === "Error") {
        let Errors = [
          `<div class="alert alert-dark w-100" role="alert">
            You Search this ${Search.value} isn't find
          </div>`,
        ];
        FullData(Errors, countries, (type = "error"));
      } else {
        FullData(Data, countries);
      }
    });
  } else if (Search.value.replaceAll(" ", "").length === 0) {
    GetCountries(options).then((Data) => {
      FullData(Data, countries);
    });
  }
});

// this is function to get data by options
function GetCountries(options) {
  return axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
}

function FullData(Data, countries, type = "Normal") {
  if (type === "Normal") {
    let Allcountries = Data;
    countries.innerHTML = "";
    for (let i = 0; i < Allcountries.length; i++) {
      countries.innerHTML += `
          <div class="country" onclick="GoToCountry('${
            Allcountries[i].name.common
          }')">
            <img
            src="${Allcountries[i].flags.svg}"
            alt="${Allcountries[i].name.common}"
            />
            <div class="body">
              <h5>${Allcountries[i].name.common}</h5>
              <p class="mb-0"><strong>population: </strong>${String(
                Allcountries[i].population
              ).replace(/(.)(?=(\d{3})+$)/g, "$1,")}</p>
              <p class="mb-0"><strong>region: </strong>${
                Allcountries[i].continents[0]
              }</p>
              <p class="mb-0"><strong>capital: </strong>${
                Allcountries[i].capital[0]
              }</p>
            </div>
          </div>
      `;
    }
  } else if (type === "error") {
    countries.innerHTML = "";
    for (let i = 0; i < Data.length; i++) {
      countries.innerHTML += `${Data[i]}`;
    }
  }
}
function FindCountry(options) {
  return axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return "Error";
    });
}

function GoToCountry(Name) {
  location.href = `Country.html?${Name}`;
}

let BtnDarkMode = document.getElementById("BtnDarkMode");
var r = document.querySelector(":root");
let Toggle = false;
BtnDarkMode.addEventListener("click", () => {
  if (Toggle === false) {
    Toggle = true;
    r.style.setProperty("--Color", "#fff");
    r.style.setProperty("--BG", "#000");
    r.style.setProperty("--Box", `rgba(255, 255, 255, 0.3) 0px 3px 5px`);
  } else {
    Toggle = false;
    r.style.setProperty("--Color", "#000");
    r.style.setProperty("--BG", "#fff");
    r.style.setProperty("--Box", "rgba(0, 0, 0, 0.24) 0px 3px 8px");
  }
});
