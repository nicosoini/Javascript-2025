function parseData() {
    var quotes = document.getElementsByTagName("quotes");
    var output = "";
    for (var i = 0; i < quotes.length; i++) {
        var quoteText = quotes[i].getElementsByTagName("quote")[0].textContent;
        var author = quotes[i].getElementsByTagName("author")[0].textContent;
        output += "<p>" + quoteText + "<br>- " + author + "</p>";
    }
    document.getElementById("quotes").innerHTML = output;

    }
function loadXMLFile(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url , true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      const box = document.getElementById('quotes');
      if (xhr.status === 200) {
        // Show the XML as plain text so tags are visible
        box.style.whiteSpace = 'pre-wrap';
        box.textContent = xhr.responseText;
      } else {
        box.textContent =
          'Failed to load XML: ' + xhr.status + ' ' + xhr.statusText +
          '. If using a cross-origin URL, ensure the server allows CORS.';
      }
    }
  };
}

function loadAndParseXML(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();

    xhr.onreadystatechange = function () {
        // Only continue when request is done
        if (xhr.readyState !== 4) return;

        const tableBody = document.querySelector("#tabledata tbody");
        const parser = new DOMParser();

        // Try to parse XML (whether responseXML exists or not)
        const xml = xhr.responseXML || parser.parseFromString(xhr.responseText, "application/xml");

        // Select <quotes> nodes
        const quotes = xml.querySelectorAll("quotes");

        // Reset table header
        tableBody.innerHTML = `
            <tr>
                <td><strong>Quote</strong></td>
                <td><strong>Author</strong></td>
            </tr>
        `;

        // Build rows
        quotes.forEach(q => {
            const quoteText = q.querySelector("quote")?.textContent?.trim() || "—";
            const authorText = q.querySelector("author")?.textContent?.trim() || "Unknown";

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${quoteText}</td>
                <td>${authorText}</td>
            `;
            tableBody.appendChild(row);
        });
    };
}


function loadAndParseNews(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            let xmldoc = xmlhttp.responseXML;
            let uutiset = xmldoc.querySelectorAll('item');

            let list = '';

            for (let i = 0; i < uutiset.length; i++) {
                let otsikko = uutiset[i].querySelector('title').textContent;
                let linkki = uutiset[i].querySelector('link').textContent;

                list += `<li><a href="${linkki}" target="_blank">${otsikko}</a></li>`;
            }

            document.getElementById("newsList").innerHTML = list;
        }
    }
}



