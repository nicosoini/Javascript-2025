// Exercise 2 komennot
// 1. $ ('h3').text("Moro")
// 2. $ ('#contant').text("Tässä näemme contant -elementin")
// 3. $ ('img').attr('src', '')
// 4. $ ("li:contains('Lorem')").css("text-decoration", "underline")
// 5. $ ('.sideBarListBox').hide()
// 6. $ ('.sideBarListBox a').css("color", "blue")


//Exercise 3 komennot
$("#fadein-button").click(function(){
    $("h1").fadeIn(1500, function() {
        console.log("Fade in completed.");
    });
})

$("#fadeout-button").click(function(){
    $("h1").fadeOut(1500, function() {
        console.log("Fade out completed.");
    });
})

$("#slideup-button").click(function(){
    $("h2").slideUp(1500, function() {
        console.log("Slideup completed.");
    });
})

$("#slidedown-button").click(function(){
    $("h2").slideDown(1500, function() {
        console.log("Slidedown completed.");
    });
})

$("#animate-button").click(function(){
    $("h2").animate({
        opacity: 0.25}, 1500, function() {
        console.log("Animation completed.");
    });
})

// Exercise 4 komennot
function loadContent(url) {
    const targetDiv = $('#ajax');

    if (url === "") {
        targetDiv.html('Valitse uutissyöte ladattavaksi.');
        return;
    }

    targetDiv.html('Ladataan sisältöä osoitteesta: ' + url + '...');

    $.ajax({
        url: url,
        method: 'GET',
        dataType: 'xml', 
        timeout: 5000,

        success: function(xmlResponse) {
            let htmlOutput = '<h3>Ladatut otsikot:</h3><ul>';
            let titleCount = 0;

            $(xmlResponse).find('item').each(function() {
                const title = $(this).find('title').text();

                htmlOutput += `<li>${title}</li>`;
                titleCount++;
            });

            htmlOutput += '</ul>';

            if (titleCount === 0) {
                 htmlOutput = '<p>Otsikoita ei löytynyt.</p>';
            }

            targetDiv.html(htmlOutput);
            console.log("XML-parsinta onnistui. Otsikot ladattu.");
        },
    });
}