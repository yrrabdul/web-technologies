document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    var email = document.getElementById("email-input").value;
    var password = document.getElementById("password-input").value;

    if (email == "" || password == "") {
        document.getElementById("email-input").style.backgroundColor = "red";
        document.getElementById("password-input").style.backgroundColor = "red";
        return false;
    } else {
        document.getElementById("email-input").style.backgroundColor = "green";
        document.getElementById("password-input").style.backgroundColor = "green";
        return true;
    }
}
