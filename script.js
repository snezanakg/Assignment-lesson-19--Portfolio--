//function to toggle the mobile navigation menu
function toggleMenu() {
    const navLinks=
    document.querySelector('.nav-links');
     navLinks.classList.toggle('active');
}
//event listener for the mobile navigation menu
document.querySelector('.burger').addEventListener('click', toggleMenu);
//function to handle form submission
   function submitForm(event) {
         event.preventDefault();
    //get the values from the form
    const name=
    document.getElementById('name').value;
    const email=
    document.getElementById('email').value;
    const message=
    document.getElementById('message').value;

    //send form data to backend or perform desired action
    console.log("Name: "+name);
    console.log("Email: "+email);
    console.log("Message: "+message);
}
//reset the form
document.getElementById(`name`).value = "";
document.getElementById(`email`).value = "";
document.getElementById(`message`).value = "";
//event listener for the form submission
//function to toggle the mobile navigation menu
const form=
document.querySelector('form');
form.addEventListener('submit',submitForm);


//function to handle form submission
function submitForm(event) {
    event.preventDefault();
    //get the values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    //send formdata to backend or perform desired action
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
}

//event listener for the mobile navigation menu
document.querySelector('.burger').addEventListener('click', toggleMenu);

//reset the form
document.querySelector('.burger').addEventListener('click', toggleMenu);

//event listener for the form submission
const name = document.getElementById('name').value;


