const submit = document.getElementById("submitbutton");
const success = document.getElementById("submitsuccess");

function submitted(event) { //submitform event inherited from event
    success.innerHTML = "Enquiry successfully sent!";
    event.preventDefault();
}

submit.addEventListener("submit", submitted);


