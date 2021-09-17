
//Change Logout-login
function login(element) {
    if(element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
} //responds to onclick and this (html)

//Step 3 Remove Add definition button
function hide(element) {
    element.remove();
} //responds to onclick and this (html)

//Step 4 Alert 
function alertWindow() {
    alert("Ninja was liked");
} //responds to onclick (html)


