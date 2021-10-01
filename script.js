
const btn=document.getElementById("sub-button");
const access_button = document.getElementById("get-access-key")
var user='false';

btn.onclick = function () {
    var passwd = document.getElementById('firstname').value;
    if (passwd == "5043@infinitygreen"){
        document.getElementById("login-form").style.display = 'none';
        document.getElementById('locked_section').style.display= 'unset';
        document.getElementById('extra-space').style.display= 'none';
        user="true"
        localStorage.setItem("user", user);
    }
    else {
        alert('input invalid');
    }
};

myfunction=function() {
    var user_log=localStorage.getItem("user");
    if (user_log=='true'){
        
        document.getElementById("login-form").style.display = 'none';
        document.getElementById('locked_section').style.display= 'unset';
        document.getElementById('extra-space').style.display= 'none';
    }
}

access_button.onclick =function(){
    window.open("landing.html","_self");
}

window.onload = function() {
    myfunction();
    // console.log(user)
}

