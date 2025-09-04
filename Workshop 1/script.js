alert("Hello world!");
alert("Another hello world");
alert("Still one more hello world");

var x = 5;
var y = 6;
var z = x + y;
console.log(z);
alert(z);
document.write(z);

var x = 50;
var order = 'Beer';
if (x > 50) {
document.write("He's over 50!" );
} else if (x <= 50 && x> 30){
document.write("Middle aged man, who ordered some "+order);
} else {
document.write("It seems you're bit underaged.");
}

var x = 50;
var order = 'Beer';
var message = '';

if (x > 70) {
    message = "<h2>Senior citizen</h2><p>Enjoy your retirement and your " + order + "!</p>";
} else if (x > 50) {
    message = "<h2>He's over 50!</h2><p>Wise and experienced, with a taste for " + order + ".</p>";
} else if (x > 30) {
    message = "<h2>Middle aged man</h2><p>Who ordered some " + order + ".</p>";
} else if (x > 20) {
    message = "<h2>Young adult</h2><p>Starting life’s journey... and already into " + order + "?</p>";
} else if (x > 12) {
    message = "<h2>Teenager</h2><p>Sorry, no " + order + " for you!</p>";
} else {
    message = "<h2>Child</h2><p>Definitely underaged. Milk, anyone?</p>";
}


var arr = [];
for(var i=0; i<15; i++) {
arr.push(Math.random());

}
console.log(arr);

