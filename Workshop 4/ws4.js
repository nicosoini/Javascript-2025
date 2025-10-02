function changeHeading()
{
    document.getElementById("otsikko").innerHTML="Muokattu otsikko !"
}

function secondButton()
{
    let heading = document.getElementById('otsikko2');
    heading.style.fontSize="32px";
    heading.style.color="blue";
    heading.style.fontstyle="Arial"
}
function thirdButton()
{
    document.querySelectorAll("em")[0].innerHTML="Vieläkö on villihevosia"
    document.querySelectorAll("em")[1].innerHTML="Ja vieläkö jossain tikolainen"
}

function showSelection() {
    var select = document.getElementById("mySelect");
    var value = select.value;
    alert("Valitsit " + value);

    var img = document.getElementById("carimage");

    if (value === "BMW") {
        img.src = "https://www.bmw.fi/content/dam/bmw/common/all-models/m-series/m8-coupe/2022/navigation/bmw-8series-coupe-modellfinder.png";
    } else if (value === "Audi") {
        img.src = "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grz5x432LHxE3WfU0dkTsecZz-O6OhjoEVqItxFZBgXgIk-LYDCU5XBjAJMm8NiKgE8ZmsmRkYWCuAjEgGEODjKy3KKUgsSszVK89MKckQ1DAgEgizu7iGOHr6BAMAYiN-0OkAAAA";
    } else if (value === "Mercedes") {
        img.src = "https://dsu2f16ugr2z8.cloudfront.net/1600x1200/autotalliprodmedia/images/netweels/Mercedes-Benz/SL/2022/3faa02e6-2c1e-467b-a420-e70a55fd7abe.jpg";
    } else if (value === "Volvo") {
        img.src = "https://wizz.volvocars.com/images/2026/246/exterior/studio/standardizedSideView/transparent_exterior-studio-standardizedSideView_B6AF02715D08007BDC58547AA6FB3FA625421726.png?client=site-navigation&w=3840&imdensity=1";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var img = document.getElementById("carimage");
    img.addEventListener("mouseover", function() {
        img.style.border = "5px solid red";
    });
    img.addEventListener("mouseout", function() {
        img.style.border = "none";
    });
});

let painallus = document.getElementById("Insert");
let kentta1 = document.getElementById("nimi")
let kentta2 = document.getElementById("tehtava")
let kentta3 = document.getElementById("palkka")

painallus.addEventListener('click', function(){
    let teksti = kentta1.value
    let tehtävä = kentta2.value
    let palkka = Number(kentta3.value);

        if (teksti.length < 5){
            alert("Nimen tulee olla yli 5 merkkiä pitkä");
        }
        if(tehtävä.length === 0) {
            alert("Tehtävä kenttä ei saa olla tyhjä");
        }
        if(palkka === 0){
            alert("Arvon tulee olla yli 0");
        }
        if(isNaN(palkka)){
            alert("Syötä vain numeroita kohtaan Palkka")
        }
});

function myFunction() {
let eka = document.querySelector('#nimi').value;
let toka = document.querySelector('#tehtava').value;
let kolmas = document.querySelector('#palkka').value;

    var table = document.getElementById("data");

    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = eka;
    cell2.innerHTML = toka;
    cell3.innerHTML = kolmas;
}