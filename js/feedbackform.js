const yes = document.getElementById('anonymousyes');
const no = document.getElementById('anonymousno');
const details = document.getElementById('details'); //this was correct

yes.addEventListener('change',toggledetails); // listens if there is change in radiobutton
no.addEventListener('change',toggledetails); // ensure both cases are settled

function toggledetails() { // merged into a single function
    if (yes.checked) {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}