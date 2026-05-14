const submit = document.getElementById("submitbutton");
const success = document.getElementById("submitsuccess");

function submitted(event) { //submitformevent inherited from event
    success.innerHTML = "Enquiry successfully sent!";
    event.preventDefault();
}

submit.addEventListener("submit", submitted);
