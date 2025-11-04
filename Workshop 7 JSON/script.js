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
