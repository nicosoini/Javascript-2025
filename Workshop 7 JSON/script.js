var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
var obj = JSON.parse(text);

function showNames () {
  var jsondata = "";
  for (var i = 0; i < obj.employees.length; i++) {
    jsondata += obj.employees[i].firstName + " " + obj.employees[i].lastName + "<br>";
  }
  document.getElementById("jsondata").innerHTML = jsondata;
}

// Funktio, joka näyttää kaikki tiedot
function showAll () {
  var jsondata = "";
  for (var i = 0; i < obj.employees.length; i++) {
    var henkilo = obj.employees[i];
    jsondata += 
      "Etunimi: " + henkilo.firstName + "<br>" +
      "Sukunimi: " + henkilo.lastName + "<br>" ;
  }
  document.getElementById("jsondata").innerHTML = jsondata;
}

function loadRawData(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            document.getElementById("rawdata").textContent = xhr.responseText;
        }}
}
function loadAndParseData(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const movies = data.Search;
            if (!movies) {
                rawdata.innerHTML = "No movies found.";
                return;
        }
            let tableHTML = "<h3> Parsittu taulukko </h3>";
            tableHTML += `
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Poster</th>
                    </tr>
            `;
            movies.forEach(movie => {
                tableHTML += `
                    <tr>
                        <td>${movie.Title}</td>
                        <td>${movie.Year}</td>
                        <td><img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/100x150?text=No+Image'}" alt="Poster" width="100"/></td>
                    </tr>
                `;
            });
            tableHTML += "</table>";
            rawdata.innerHTML = tableHTML;
        }
    };
}

// ====== Asetukset ======
const API_KEY = "c235f259d10f9f5c7999561763ff1946";
const BASE = "https://api.openweathermap.org/data/2.5/weather";

// Apuri: rakenna URL kaupungin nimellä
function buildUrl(city) {
  const params = new URLSearchParams({
    q: city.trim(),
    units: "metric",
    lang: "fi",
    appid: API_KEY
  });
  return `${BASE}?${params.toString()}`;
}

// Tulostusalue
const outEl = document.getElementById("weatherdata");

// ====== Esimerkkisi mukaiset funktiot (muokattu säälle) ======
function loadRawData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      // Näytetään raakadata JSON-muodossa <pre>-lohkon sisällä
      outEl.innerHTML = `<h3>Raaka JSON</h3><pre style="white-space:pre-wrap;overflow:auto;border:1px solid #ddd;padding:8px;border-radius:8px;">${xhr.responseText}</pre>`;
    }
  };
}

function loadAndParseData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status !== 200) {
        outEl.innerHTML = `<p style="color:#c00;">Haku epäonnistui: ${xhr.status} ${xhr.statusText || ""}</p>`;
        return;
      }
      const data = JSON.parse(xhr.responseText);

      // Parsitaan olennaiset kentät
      const name = (data.name || "").toString();
      const country = (data.sys && data.sys.country) ? data.sys.country : "";
      const temp = data.main && Number.isFinite(data.main.temp) ? Math.round(data.main.temp) : "–";
      const clouds = data.clouds && Number.isFinite(data.clouds.all) ? data.clouds.all : "–";
      const humidity = data.main && Number.isFinite(data.main.humidity) ? data.main.humidity : "–";
      const wind = data.wind && Number.isFinite(data.wind.speed) ? data.wind.speed : "–";
      const desc = (data.weather && data.weather[0] && data.weather[0].description) ? data.weather[0].description : "–";

      // Taulukkoesitys
      let tableHTML = `
        <h3>Parsittu taulukko</h3>
        <table style="border-collapse:collapse;width:100%;max-width:640px;">
          <tr>
            <th style="text-align:left;border-bottom:1px solid #ddd;padding:6px;">Kaupunki</th>
            <th style="text-align:left;border-bottom:1px solid #ddd;padding:6px;">Lämpötila (°C)</th>
            <th style="text-align:left;border-bottom:1px solid #ddd;padding:6px;">Pilvisyys (%)</th>
            <th style="text-align:left;border-bottom:1px solid #ddd;padding:6px;">Ilmankosteus (%)</th>
            <th style="text-align:left;border-bottom:1px solid #ddd;padding:6px;">Tuuli (m/s)</th>
            <th style="text-align:left;border-bottom:1px solid #ddd;padding:6px;">Kuvaus</th>
          </tr>
          <tr>
            <td style="border-bottom:1px solid #eee;padding:6px;">${name}${country ? ", " + country : ""}</td>
            <td style="border-bottom:1px solid #eee;padding:6px;">${temp}</td>
            <td style="border-bottom:1px solid #eee;padding:6px;">${clouds}</td>
            <td style="border-bottom:1px solid #eee;padding:6px;">${humidity}</td>
            <td style="border-bottom:1px solid #eee;padding:6px;">${wind}</td>
            <td style="border-bottom:1px solid #eee;padding:6px;">${desc}</td>
          </tr>
        </table>
        <details style="margin-top:10px;">
          <summary>Näytä raaka JSON</summary>
          <pre style="white-space:pre-wrap;overflow:auto;border:1px solid #ddd;padding:8px;border-radius:8px;">${xhr.responseText}</pre>
        </details>
      `;
      outEl.innerHTML = tableHTML;
    }
  };
}

// ====== Tapahtumat ilman HTML-muutoksia ======
const citySel = document.getElementById("city");
const searchBtn = document.getElementById("search");
const searchInput = document.getElementById("citysearch");

// Vaihdettaessa kaupungin valintaa – haetaan ja PARSITAAN
citySel.addEventListener("change", function () {
  const url = buildUrl(citySel.value);
  loadAndParseData(url);
});

// Hae-painike: jos syöte tyhjä → käytä valittua kaupunkia
searchBtn.addEventListener("click", function () {
  const query = (searchInput.value || citySel.value).trim();
  if (!query) {
    outEl.textContent = "Anna kaupungin nimi.";
    return;
    }
  const url = buildUrl(query);
  loadAndParseData(url); // halutessasi voit vaihtaa tähän loadRawData(url)
});

// Enter näppäin syötekentässä
searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    searchBtn.click();
  }
});

// Ladataan alkuun valitun kaupungin data (parsittu)
(function init() {
  const url = buildUrl(citySel.value);
  loadAndParseData(url);
})();
