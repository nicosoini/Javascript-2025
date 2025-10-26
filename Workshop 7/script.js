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
function loadAndParseXML() {
    var xmlhttp = new XMLHttpRequest();
    var url = "famous-quotes.xml"; // same as above, or use full URL

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            let xmldoc = xmlhttp.responseXML;
            let quotes = xmldoc.querySelectorAll("quotes");

            let table =
                `<table border="1" style="border-collapse: collapse; width: 100%;">
                    <tr>
                        <th>Quote</th>
                        <th>Author</th>
                    </tr>`;

            for (let i = 0; i < quotes.length; i++) {
                let quoteText = quotes[i].querySelector("quote")
                    ? quotes[i].querySelector("quote").textContent
                    : "";
                let authorText = quotes[i].querySelector("author")
                    ? quotes[i].querySelector("author").textContent
                    : "";

                table += `
                    <tr>
                        <td>${quoteText}</td>
                        <td>${authorText}</td>
                    </tr>`;
            }

            table += `</table>`;

            document.getElementById("tabledata").innerHTML = table;
        }
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



