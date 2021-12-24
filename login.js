
var username = document.forms['form']['username'];
var password = document.forms['form']['password'];

var username_error = document.getElementById('username_error');
var pass_error = document.getElementById('pass_error');

username.addEventListener('textInput',username_verify);
password.addEventListener('textInput',password_verify);

function validated(){
    if(username.value.length < 9){
        username.style.border = "1px solid red";
        username_error.style.display = "block";
        username.focus();
        return false;
    }
    if(password.value.length < 6){
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
}

function username_verify(){
    if(username.value.length >= 9){
        username.style.border = "1px solid green";
        username_error.style.display = "none";
        return true;
    }
    
}

function password_verify(){
    if(password.value.length >= 6){
        password.style.border = "1px solid green";
        pass_error.style.display = "none";
        return true;
    }
}

function myFunction(){
    var x = document.getElementById("myInput");
    var y = document.getElementById("show");
    var z = document.getElementById("hide");

    if(x.type ==='password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";

    }
    else{
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}
let my_url = "/signup.html";
document.getElementById("btn").onclick = function(){
    window.location.replace(my_url);
}