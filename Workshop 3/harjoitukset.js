window.showTable = function () {
    const tableHTML = `
            <table border="1">
                <thead>
                    <tr>
                        <th>Nimi</th>
                        <th>Tehtävä</th>
                        <th>Palkka</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Tiger Nixon</td><td>System Architect</td><td>$320,800</td></tr>
                    <tr><td>Garrett Winters</td><td>Accountant</td><td>$170,750</td></tr>
                    <tr><td>Ashton Cox</td><td>Junior Technical Author</td><td>$86,000</td></tr>
                    <tr><td>Cedric Kelly</td><td>Senior Javascript Developer</td><td>$433,060</td></tr>
                    <tr><td>Airi Satou</td><td>Accountant</td><td>$162,700</td></tr>
                </tbody>
            </table>
        `;
    document.getElementById("taulukonPaikka").innerHTML = tableHTML;
}

const harjoitus2 = document.querySelector("h2:nth-of-type(2)");
harjoitus2.onmouseover = function () {
    console.log("Stepped over my mouse!");
}

const harjoitus1 = document.querySelector("h2:nth-of-type(1)");
harjoitus1.addEventListener("click", function () {
    harjoitus1.style.color = "red";
    harjoitus1.innerHTML = "Bye bye mouse!";
});

const textarea = document.getElementById("textdata");
const charcount = document.getElementById("charcount");
const form = document.getElementById("myForm");

textarea.onfocus = function () {
    charcount.innerHTML = "Please fill in the form with proper data.";
    textarea.style.backgroundColor = "lightyellow";
}

textarea.oninput = function () {
    charcount.innerHTML = "Characters typed: " + textarea.value.length;
}

form.onsubmit = function (event) {
    if (textarea.value.trim() === "") {
        alert("Textarea cannot be empty!");
        event.preventDefault();
    }
}
const coordinatesDiv = document.getElementById("coordinates");
coordinatesDiv.onmousemove = function (event) {
    const x = event.offsetX;
    const y = event.offsetY;
    coordinatesDiv.innerHTML = "X: " + x + ", Y: " + y;
};
