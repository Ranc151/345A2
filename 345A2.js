window.addEventListener('mousewheel', function(event){
    if (event.ctrlKey === true || event.metaKey) {
        event.preventDefault();
    }
},{ passive: false});

window.addEventListener('DOMMouseScroll', function(event){
    if (event.ctrlKey === true || event.metaKey) {
        event.preventDefault();
    }
},{ passive: false});

function search(){
    document.onkeydown=function(e) {
        var keyNum = window.event ? e.keyCode : e.which;
        const search_value = document.getElementById("search").value;
        if (keyNum == 13 & search_value != "") {
            console.log(search_value);
        }
    }
}
const check = () =>{
    console.log("check")
}
const open_register = () =>{
     document.getElementById("register").style.display = "block";
     document.getElementById("bg").style.display = "block"
}
const exit = () =>{
     document.getElementById("register").style.display = "none";
     document.getElementById("bg").style.display = "none";
}
const register = () =>{
    const givenname_value = document.getElementById("givenname").value;
    const surname_value = document.getElementById("surname").value;
    const username_value = document.getElementById("username").value;
    const password_value = document.getElementById("password").value;
    const homeaddress_value = document.getElementById("homeaddress").value;
    const workaddress_value = document.getElementById("workaddress").value;
    const mobilenumber_value = document.getElementById("mobilenumber").value;
    const email_value = document.getElementById("email1").value;

    if (givenname_value == "" | surname_value == "" | password_value == "" | username_value == "" | homeaddress_value =="" | workaddress_value == "" | mobilenumber_value == "" | email_value == ""){
        alert("Please entry the user detail")
    }
    else{
        document.getElementById("register_button").style.background = "#F25F82";
        alert("Register Successful")

    }

}

