//Remove default form operations from executing

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

// make application an object

var app = {

    firstName: document.getElementById('firstname'),
    lastName: document.getElementById('lastname'),
    emailAddress: document.getElementById('emailAddress'),
    checkBox: document.getElementById('checked'),
    submitButton: document.getElementById('submit'),
    re: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    loadAnimation: document.getElementById('loader'),
    textHolder: document.getElementById('textHolder'),


    checkInputAfterSubmit: () => {
 
        // First Name

        if (app.firstName.value === '') {
            app.firstName.style.border = "thick solid #FF0000";
        }

        else {app.firstName.style.border = ""; }

        // Last Name

        if (app.lastName.value === '') {
            app.lastName.style.border = "thick solid #FF0000";
        }
        else {app.lastName.style.border = ""; }

        // Email Address

        if (app.emailAddress.value === '') {
            app.emailAddress.style.border = "thick solid #FF0000";
        }
        else {app.emailAddress.style.border = ""; }

        //Check if email address fits format

        if (app.re.test(app.emailAddress.value) === false) {
            app.emailAddress.style.border = "thick solid #FF0000";
        }

        //If all inputs are full, 

        if ((app.firstName.value !== '') && (app.lastName.value !== '') && (app.emailAddress.value !== '') && (app.checkBox.checked)) {
            app.loadAnimation.style.opacity = "1";

            //After 3 seconds, stop displaying loader and add instead
            setTimeout(function () {
                app.loadAnimation.style.display = 'none';
                app.textHolder.innerHTML = "Thanks for signing up";
            }, 3000);
        }
    }
}

// Run application function when submit button is clicked

app.submitButton.onclick = function (){
    app.checkInputAfterSubmit();
};


