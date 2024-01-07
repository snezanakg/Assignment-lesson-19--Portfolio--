//function to toggle the mobile navigation menu
function toggleMenu() {
    const navLinks=
    document.querySelector('.nav-links');
    const burger=
    document.querySelector('.burger');
     navLinks.classList.toggle('active');
}
//event listener for the mobile navigation menu
document.querySelector('.burger').addEventListener('click', toggleMenu);
//function to handle form submission
function submitForm() {
   function submitForm(event) {
         event.preventDefault();
    //get the values from the form
    const name=
    document.getElementById('name').value;
    const email=
    document.getElementById('email').value;
    const message=
    document.getElementById('message').value;

    //send formdate to beckend or perform desired action
    console.log("Name: "+name);
    console.log("Email: "+email);
    console.log("Message: "+message);
}
//reset the form
document.getElementById("contact-form").reset();

//event listener for the form submission
document.getElementById('contact-form').addEventListener('submit', submitForm);
}

