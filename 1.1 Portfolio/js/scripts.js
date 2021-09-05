function openNav() {
    var x = document.getElementById("navegacao");
    var y = document.getElementById("threeline");
    if (x.className === "navegacao") {
        x.className += " menujs";
        y.innerHTML= "&Cross;";
    }
    else{
        x.className = "navegacao";
        y.innerHTML= "&#9776;";
    }

}