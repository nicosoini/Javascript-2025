$('#fadein-button').on('click', function() {
    $('#main-heading').fadeIn(1000);
});
$('#fadeout-button').on('click', function() {
    $('#main-heading').fadeOut(1000);
});
$('#slideup-button').on('click', function() {
    $('h2').slideUp(1000);
});
$('#slidedown-button').on('click', function() {
    $('h2').slideDown(1000);
});
$( "#animate-button" ).on( "click", function() {
  $( "h2" ).animate({
    width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
  }, 1500 );
});

