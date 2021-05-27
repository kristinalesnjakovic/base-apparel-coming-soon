
var emailField = document.querySelector("#useremail");
var button = document.querySelector("button");


button.addEventListener('click', function (e) {
    e.preventDefault();
    var email = emailField.value;

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    if (validateEmail(email)) {
        document.querySelector(".main-container").classList.add("valid");
        document.querySelector(".main-container").classList.remove("invalid");
    } 

    else {
        document.querySelector(".main-container").classList.add("invalid");
        document.querySelector(".main-container").classList.remove("valid");
    } 
});



