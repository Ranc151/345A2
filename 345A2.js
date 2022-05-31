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
     document.getElementById("register_button").style.background = "#73B76E";

}
const register = () =>{
    document.getElementById("register_button").style.background = "#F25F82";
    alert("Please entry the user detail")


}

