console.log("Linked up");

let returnHome = document.getElementById("city-studio-london-logo")

returnHome.addEventListener("click", function() {
    location.reload();
})

let button1 = document.getElementById("button-1"),
    button2 = document.getElementById("button-2"),
    motiveCon = document.getElementById("motiveCon"),
    introCon = document.getElementById("introCon"),
    creditsCon = document.getElementById("creditsCon");

button1.addEventListener("click", function() { 
    introCon.style.opacity = '0';
    introCon.style.zIndex = '0';
    motiveCon.style.opacity = '1';
    motiveCon.style.zIndex = '1';
}, false);


button2.addEventListener("click", function() { 
    motiveCon.style.opacity = '0';
    motiveCon.style.zIndex = '0';
    creditsCon.style.opacity = '1';
    creditsCon.style.zIndex = '1';
}, false);


