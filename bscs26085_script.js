window.onload = function(){
    alert("Welcome to my website")
}

const yearEl = document.getElementById("year");
if (yearEl){
    yearEl.innerHTML = new Date().getFullYear();
}

function checkAvailability(status){
    if (status == "In stock"){
        alert("In stock")
    }else alert("Out of stock")
}
