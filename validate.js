// name validation
const nameValid = () => {
    var name = document.getElementById('name').value;
    var nameRegex = /^[A-Z a-z]{3,30}$/;

    if (nameRegex.test(name)) {
        document.getElementById("errorName").innerHTML = "";
        document.getElementById("btn").disabled = false;
        document.getElementById("name").classList.remove("is-invalid");
    } else {
        document.getElementById("errorName").innerHTML = "⚠️Please enter a valid name!";
        document.getElementById("btn").disabled = true;
        document.getElementById("name").classList.add("is-invalid");
    }
}

// email validation
const emailValid = () => {
    var email = document.getElementById('email').value;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(email)) {
        document.getElementById("errorEmail").innerHTML = "";
        document.getElementById("btn").disabled = false;
        document.getElementById("email").classList.remove("is-invalid");
    } else {
        document.getElementById("errorEmail").innerHTML = "⚠️Please enter a valid email!";
        document.getElementById("btn").disabled = true;
        document.getElementById("email").classList.add("is-invalid");
    }

}


//  phone number validation
const phoneValid = () => {
    var phone = document.getElementById('phone').value;
    var phoneRegex = /^(?:\+91[\-\s]?)?[6-9]\d{9}$/;

    if (phoneRegex.test(phone)) {
        document.getElementById("errorPhone").innerHTML = "";
        document.getElementById("btn").disabled = false;
        document.getElementById("phone").classList.remove("is-invalid");
    } else {
        document.getElementById("errorPhone").innerHTML = "⚠️Please enter a valid phone number!";
        document.getElementById("btn").disabled = true;
        document.getElementById("phone").classList.add("is-invalid");
    }

}

