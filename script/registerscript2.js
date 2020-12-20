function switchDiv(show1) {
    var login = document.getElementById("login");
    var signup = document.getElementById("signup");
    if (show1) {
        login.style.display = 'block';
        signup.style.display = 'none';
    }
    else {
        login.style.display = 'none';
        signup.style.display = 'block';
    }
} 
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function validForm() {

    var email = document.forms['form']['email'];
    var password = document.forms['form']['password'];
     
    if (email.value == null || email.value == ""){
        alert("Email is required!");
        return false;
    }else if (reg.test(email.value) == false){
        alert('Invalid Email Address');
        return false;
    }else if (password.value.length < 6){ 
        alert("Password must be at least 6 characters!");
        return false;
    }
}

function validForm2() {

    var email2 = document.forms['form2']['email2'];
    var password2 = document.forms['form2']['password2'];
    var confirm_password = document.forms['form2']['confirm_password'];

    if (email2.value == null || email2.value == ""){
        alert("Email is required!");
        return false;
    }else if (reg.test(email2.value) == false){
        alert('Invalid Email Address');
        return false;
    }else if(password2.value.length < 6){
        alert("Password must be at least 6 characters!");
        return false;
    }else if(confirm_password.value != password2.value){
        alert("Password not confirmed!");
        return false;
    }
}