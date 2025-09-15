document.write("<em><strong>\"If I had nine hours to chop down a tree, I'd spend the first six sharpening my ax.\"</strong><p>- Abraham Lincoln</em><br>");

function repeatingText() {
    for (let i = 0; i < 50; i++) {
        document.write("Tämä on toisto numero " + (i + 1) + "<br>");
    }
}

if (navigator.appVersion.includes("Mozilla")) {
    window.location.href = "http://www.mozilla.org";
}
else {
    window.location.href = "http://www.google.com";
}

const images = [
    "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
    "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
    "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
];

const index = 0
document.write('<img src="' + images[index] + '" alt="Kuva taulukosta">');