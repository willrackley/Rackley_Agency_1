let submitBtn = document.getElementById('submitButton');
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let email = document.getElementById('emailInput');
let phone = document.getElementById('phoneInput');
let time = document.getElementById('timeInput');
let message = document.getElementById('messageInput');


submitBtn.addEventListener("click", function(){
    event.preventDefault();
    firstname.style.border = "1px solid #ccc";
    lastname.style.border = "1px solid #ccc";
    email.style.border = "1px solid #ccc";
    phone.style.border = "1px solid #ccc";
    time.style.border = "1px solid #ccc";
    message.style.border = "1px solid #ccc";
    console.log(message.value.length)
    if (firstname.value === "") {
        firstname.style.border = "1px solid red";
        return;
    }
    if (lastname.value === "") {
        lastname.style.border = "1px solid red";
        return;
    }
    if (email.value === "") {
        email.style.border = "1px solid red";
        return;
    }
    if (phone.value === "") {
        phone.style.border = "1px solid red";
        return;
    }
    if (time.value === "") {
        time.style.border = "1px solid red";
        return;
    }
    if (message.value.length === 20) {
        message.style.border = "1px solid red";
        return;
    }

    window.open(`mailto:bud@email.address?subject=I would like more info about the Rackley Agency&body=${message.value.trim()}%0d%0a %0d%0a${firstname.value.trim()} ${lastname.value.trim()} %0d%0a${phone.value.trim()}%0d%0a${email.value.trim()}%0d%0a I would like to be reached at ${time.value.trim()}`)
})
