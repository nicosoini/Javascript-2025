function validateForm() {
    var email = document.forms[0]["email"].value.trim();
    var comment = document.forms[0]["comment"].value.trim()


    if (email === "" || comment === "") {
        alert("Täytä kaikki tiedot");
        return false
    }

     if(email.length < 6) {
        alert("Email length must be over 6 characters")
        return false;
    }
    if(email.length >= 15) {
        alert("Email length must be under 15 characters")
        return false;
    }

    if (!email.includes("@")) {
        alert("Email must contain @")
        return false
    }

    if (comment.length > 50) {
        comment = comment.substring(0, 50);
        document.forms[0]["comment"].value = comment;
        alert("Kommentti rajattiin 50 merkkiin.")
    }

    alert("Email: "+email);
    alert("Comment: "+comment)

    var contact = { email: email, comment: comment };
    localStorage.setItem("contactForm", JSON.stringify(contact));

}

document.getElementById("theForm").onsubmit = function (e) {
    e.preventDefault();

    let hinta = Number(document.getElementById("type").value);
    let vuodet = Number(document.getElementById("years").value);
    let viesti = "";
    let kokonais = hinta * vuodet;

  if (vuodet > 2 && vuodet < 5) {
    kokonais = kokonais * 0.8;
    viesti = "Saat 20% alennuksen!";
    alert(viesti);
  } else if (vuodet >= 5) {
    kokonais = kokonais * 0.8 - 5;
    viesti = "Saat 20% alennuksen ja lisäksi 5€ yllätysalennuksen!";
    alert(viesti);
  }

    document.getElementById("cost").value = kokonais + " €";
    document.getElementById("message").textContent = viesti;
};

function showStoredData() {
    var data = localStorage.getItem("contactForm")
    var div = document.getElementById("sessionData")

    if(data) {
        var contact = JSON.parse(data);
        div.innerHTML = "<p><b>Email:</b> " + contact.email + "<br><b>Comment:</b> " + contact.comment
    } else {
        div.innerHTML = "Ei tallennettuja tietoja.";
    }
}

window.onload = function() {
    showStoredData();
};
