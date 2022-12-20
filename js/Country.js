const options = {
  method: "GET",
  url: "https://restcountries.com/v3.1/name/",
};
let NameCountries = {
  AFG: "Afghanistan",
  ALB: "Albania",
  DZA: "Algeria",
  ASM: "American Samo",
  AND: "Andorra",
  AGO: "Angola",
  AIA: "Anguilla",
  ATA: "Antarctica",
  ATG: "Antigua and Barbuda",
  ARG: "Argentina",
  ARM: "Armenia",
  ABW: "Aruba",
  AUS: "Australia",
  AUT: "Austria",
  AZE: "Azerbaijan",
  BHS: "Bahamas (the)",
  BHR: "Bahrain",
  BGD: "Bangladesh",
  BRB: "Barbados",
  BLR: "Belarus",
  BEL: "Belgium",
  BLZ: "Belize",
  BEN: "Benin",
  BMU: "Bermuda",
  BTN: "Bhutan",
  BOL: "Bolivia (Plurinational State of)",
  BES: "Bonaire, Sint Eustatius and Saba",
  BIH: "Bosnia and Herzegovina",
  BWA: "Botswana",
  BVT: "Bouvet Island",
  BRA: "Brazil",
  IOT: "British Indian Ocean Territory (the)",
  BRN: "Brunei Darussalam",
  BGR: "Bulgaria",
  BFA: "Burkina Faso",
  BDI: "Burundi",
  CPV: "Cabo Verde",
  KHM: "Cambodia",
  CMR: "Cameroon",
  CAN: "Canada",
  CYM: "Cayman Islands (the)",
  CAF: "Central African Republic (the)",
  TCD: "Chad",
  CHL: "Chile",
  CHN: "China",
  CXR: "Christmas Island",
  CCK: "Cocos (Keeling) Islands (the)",
  COL: "Colombia",
  COM: "Comoros (the)",
  COD: "Congo (the Democratic Republic of the)",
  COG: "Congo (the)",
  COK: "Cook Islands (the)",
  CRI: "Costa Rica",
  HRV: "Croatia",
  CUB: "Cuba",
  CUW: "Curaçao",
  CYP: "Cyprus",
  CZE: "Czechia",
  CIV: "Côte d'Ivoire",
  DNK: "Denmark",
  DJI: "Djibouti",
  DMA: "Dominica",
  DOM: "Dominican Republic (the)",
  ECU: "Ecuador",
  EGY: "Egypt",
  SLV: "El Salvador",
  GNQ: "Equatorial Guinea",
  ERI: "Eritrea",
  EST: "Estonia",
  SWZ: "Eswatini",
  ETH: "Ethiopia",
  FLK: "Falkland Islands (the) [Malvinas]",
  FRO: "Faroe Islands (the)",
  FJI: "Fiji",
  FIN: "Finland",
  FRA: "France",
  GUF: "French Guiana",
  PYF: "French Polynesia",
  ATF: "French Southern Territories (the)",
  GAB: "Gabon",
  GMB: "Gambia (the)",
  GEO: "Georgia",
  DEU: "Germany",
  GHA: "Ghana",
  GIB: "Gibraltar",
  GRC: "Greece",
  GRL: "Greenland",
  GRD: "Grenada",
  GLP: "Guadeloupe",
  GUM: "Guam",
  GTM: "Guatemala",
  GGY: "Guernsey",
  GIN: "Guinea",
  GNB: "Guinea-Bissau",
  GUY: "Guyana",
  HTI: "Haiti",
  HMD: "Heard Island and McDonald Islands",
  VAT: "Holy See (the)",
  HND: "Honduras",
  HKG: "Hong Kong",
  HUN: "Hungary",
  ISL: "Iceland",
  IND: "India",
  IDN: "Indonesia",
  IRN: "Iran (Islamic Republic of)",
  IRQ: "Iraq",
  IRL: "Ireland",
  IMN: "Isle of Man",
  ISR: "Israel",
  ITA: "Italy",
  JAM: "Jamaica",
  JPN: "Japan",
  JEY: "Jersey",
  JOR: "Jordan",
  KAZ: "Kazakhstan",
  KEN: "Kenya",
  KIR: "Kiribati",
  PRK: "Korea (the Democratic People's Republic of)",
  KOR: "Korea (the Republic of)",
  KWT: "Kuwait",
  KGZ: "Kyrgyzstan",
  LAO: "Lao People's Democratic Republic (the)",
  LVA: "Latvia",
  LBN: "Lebanon",
  LSO: "Lesotho",
  LBR: "Liberia",
  LBY: "Libya",
  LIE: "Liechtenstein",
  LTU: "Lithuania",
  LUX: "Luxembourg",
  MAC: "Macao",
  MDG: "Madagascar",
  MWI: "Malawi",
  MYS: "Malaysia",
  MDV: "Maldives",
  MLI: "Mali",
  MLT: "Malta",
  MHL: "Marshall Islands (the)",
  MTQ: "Martinique",
  MRT: "Mauritania",
  MUS: "Mauritius",
  MYT: "Mayotte",
  MEX: "Mexico",
  FSM: "Micronesia (Federated States of)",
  MDA: "Moldova (the Republic of)",
  MCO: "Monaco",
  MNG: "Mongolia",
  MNE: "Montenegro",
  MSR: "Montserrat",
  MAR: "Morocco",
  MOZ: "Mozambique",
  MMR: "Myanmar",
  NAM: "Namibia",
  NRU: "Nauru",
  NPL: "Nepal",
  NLD: "Netherlands (the)",
  NCL: "New Caledonia",
  NZL: "New Zealand",
  NIC: "Nicaragua",
  NER: "Niger (the)",
  NGA: "Nigeria",
  NIU: "Niue",
  NFK: "Norfolk Island",
  MNP: "Northern Mariana Islands (the)",
  NOR: "Norway",
  OMN: "Oman",
  PAK: "Pakistan",
  PLW: "Palau",
  PSE: "Palestine, State of",
  PAN: "Panama",
  PNG: "Papua New Guinea",
  PRY: "Paraguay",
  PER: "Peru",
  PHL: "Philippines (the)",
  PCN: "Pitcairn",
  POL: "Poland",
  PRT: "Portugal",
  PRI: "Puerto Rico",
  QAT: "Qatar",
  MKD: "Republic of North Macedonia",
  ROU: "Romania",
  RUS: "Russian Federation (the)",
  RWA: "Rwanda",
  REU: "Réunion",
  BLM: "Saint Barthélemy",
  SHN: "Saint Helena, Ascension and Tristan da Cunha",
  KNA: "Saint Kitts and Nevis",
  LCA: "Saint Lucia",
  MAF: "Saint Martin (French part)",
  SPM: "Saint Pierre and Miquelon",
  VCT: "Saint Vincent and the Grenadines",
  WSM: "Samoa",
  SMR: "San Marino",
  STP: "Sao Tome and Principe",
  SAU: "Saudi Arabia",
  SEN: "Senegal",
  SRB: "Serbia",
  SYC: "Seychelles",
  SLE: "Sierra Leone",
  SGP: "Singapore",
  SXM: "Sint Maarten (Dutch part)",
  SVK: "Slovakia",
  SVN: "Slovenia",
  SLB: "Solomon Islands",
  SOM: "Somalia",
  ZAF: "South Africa",
  SGS: "South Georgia and the South Sandwich Islands",
  SSD: "South Sudan",
  ESP: "Spain",
  LKA: "Sri Lanka",
  SDN: "Sudan (the)",
  SUR: "Suriname",
  SJM: "Svalbard and Jan Mayen",
  SWE: "Sweden",
  CHE: "Switzerland",
  SYR: "Syrian Arab Republic",
  TWN: "Taiwan (Province of China)",
  TJK: "Tajikistan",
  TZA: "Tanzania, United Republic of",
  THA: "Thailand",
  TLS: "Timor-Leste",
  TGO: "Togo",
  TKL: "Tokelau",
  TON: "Tonga",
  TTO: "Trinidad and Tobago",
  TUN: "Tunisia",
  TUR: "Turkey",
  TKM: "Turkmenistan",
  TCA: "Turks and Caicos Islands (the)",
  TUV: "Tuvalu",
  UGA: "Uganda",
  UKR: "Ukraine",
  ARE: "United Arab Emirates (the)",
  GBR: "United Kingdom of Great Britain and Northern Ireland (the)",
  UMI: "United States Minor Outlying Islands (the)",
  USA: "United States of America (the)",
  URY: "Uruguay",
  UZB: "Uzbekistan",
  VUT: "Vanuatu",
  VEN: "Venezuela (Bolivarian Republic of)",
  VNM: "Viet Nam",
  VGB: "Virgin Islands (British)",
  VIR: "Virgin Islands (U.S.)",
  WLF: "Wallis and Futuna",
  ESH: "Western Sahara",
  YEM: "Yemen",
  ZMB: "Zambia",
  ZWE: "Zimbabwe",
  ALA: "Åland Islands",
};

let img = document.getElementById("img");
let divData = document.getElementById("divData");
window.addEventListener("load", () => {
  let URLThisPage = location.href;
  let NameCountry = URLThisPage.substring(
    URLThisPage.indexOf("?") + 1,
    URLThisPage.length
  );
  options.url += NameCountry;
  FindCountry(options).then((Data) => {
    img.innerHTML = `<img src="${Data[0].flags.svg}" alt="${Data[0].name.common}" />`;
    let NativeName = Object.values(
      Object.values(Data[0].name.nativeName)[0]
    )[0];
    divData.innerHTML = `
        <h4>${Data[0].name.common}</h4>
        <div class="info">
            <ul>
                <li><span>native name: </span><span>${NativeName}</span></li>
                <li><span>population: </span><span>${String(
                  Data[0].population
                ).replace(/(.)(?=(\d{3})+$)/g, "$1,")}</span></li>
                <li><span>region: </span><span>${
                  Data[0].continents[0]
                }</span></li>
                <li><span>sub region: </span><span>${
                  Data[0].subregion
                }</span></li>
                <li><span>capital: </span><span>${
                  Data[0].capital[0]
                }</span></li>
            </ul>
            <ul>
                <li><span>top level domain: </span><span>${
                  Data[0].tld[0]
                }</span></li>
                <li><span>currencies: </span><span>${
                  Object.values(Data[0].currencies)[0].name
                }</span></li>
                <li id="languages"><span>languages: </span></li>
            </ul>
          </div>
          <div class="borderCountries">
          <span>border countries: </span>
          <div id="borderCountries"></div>
        </div>

    `;

    let languages = document.getElementById("languages");
    let borderCountries = document.getElementById("borderCountries");
    let AllLanguages = Object.values(Data[0].languages);
    let Countries = Data[0].borders;
    for (let i = 0; i < AllLanguages.length; i++) {
      languages.innerHTML += `<span class="languages">${AllLanguages[i]}</span>`;
    }
    for (let i = 0; i < Countries.length; i++) {
      borderCountries.innerHTML += `<span class="Conutries">${
        NameCountries[Countries[i]]
      }</span>`;
    }
  });
});
let BtnDarkMode = document.getElementById("BtnDarkMode");
var r = document.querySelector(":root");
let Toggle = false;
BtnDarkMode.addEventListener("click", () => {
  if (Toggle === false) {
    Toggle = true;
    r.style.setProperty("--Color", "#fff");
    r.style.setProperty("--BG", "#000");
    r.style.setProperty("--Box", `rgba(255, 255, 255, 0.3) 0px 3px 0px`);
  } else {
    Toggle = false;
    r.style.setProperty("--Color", "#000");
    r.style.setProperty("--BG", "#fff");
    r.style.setProperty("--Box", "rgba(0, 0, 0, 0.24) 0px 3px 8px");
  }
});

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
