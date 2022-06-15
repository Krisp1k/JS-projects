const CURRENTPOINTS = document.getElementById("current-points");
const TOTALPOINTS = document.getElementById("total-points");
const POWER = document.getElementById("power");
const MAINBUTTON = document.getElementById("main-button");
const BUTTONS = document.querySelectorAll(".button");
const VICTORYBUTTON = document.getElementById("victory-button");
const AUTOCLICKER = document.getElementById("current-autoclicker");

let powerCounter = 1;
let points = 0;
let autoclicks = 0;
let totalPoints = 0; 

window.onload = function (){
    checkUpgrades();
    updateStats();
}

MAINBUTTON.addEventListener("click", () => {
    points = points + powerCounter;
    totalPoints = totalPoints + powerCounter;
    checkUpgrades();
    updateStats();
})

function buyUpgrade(btnID, powerUpgrade, neededPoints) {

    if (BUTTONS[btnID].getAttribute("purchased") === "true") {
        alert("You have already bought this upgrade.")
        return;
    }

    if (points >= neededPoints) {
        powerCounter = powerCounter + powerUpgrade;
        POWER.innerHTML = powerCounter;
        BUTTONS[btnID].innerHTML = "Bought";
        BUTTONS[btnID].setAttribute("purchased", "true");
        BUTTONS[btnID].style.backgroundColor = "#0E2A47";
        points = points - neededPoints;
    } else {
        alert("You can't buy this yet.");
    }

    checkUpgrades();
    updateStats();
    return(points);
}



function buyAutoclicker(btnID, autoPoints, neededPoints) {

    if (BUTTONS[btnID].getAttribute("purchased") === "true") {
        alert("You have already bought this upgrade.")
        return;
    }

    if (points >= neededPoints) {

        autoclicks = autoclicks + autoPoints;
        AUTOCLICKER.innerHTML = autoclicks.toString();

        let autoClicker = setInterval(function (){
            points = points + autoPoints;
            totalPoints = totalPoints + autoPoints;
            updateStats();
        }, 1000);

        POWER.innerHTML = powerCounter;
        BUTTONS[btnID].innerHTML = "Bought";
        BUTTONS[btnID].setAttribute("purchased", "true");
        BUTTONS[btnID].style.backgroundColor = "#0E2A47";
        points = points - neededPoints;

    } else {
        alert("You can't buy this yet.");
    }

    checkUpgrades();
    updateStats();
    return(points);
}

function checkUpgrades() {
    // this extremely sucks but i was too lazy to find more effective way
    // its just adding and removing colors to buttons
    if (points >= 250) { 
        BUTTONS[0].classList.remove("not-available");BUTTONS[0].classList.add("available");
    } else { BUTTONS[0].classList.add("not-available");BUTTONS[0].classList.remove("available"); }
    if (points >= 1000) { 
        BUTTONS[1].classList.remove("not-available");BUTTONS[1].classList.add("available");
    } else { BUTTONS[1].classList.add("not-available");BUTTONS[1].classList.remove("available"); }
    if (points >= 2500) {
        BUTTONS[2].classList.remove("not-available");BUTTONS[2].classList.add("available");
    }  else { BUTTONS[2].classList.add("not-available");BUTTONS[2].classList.remove("available"); }
    if (points >= 5000) {
        BUTTONS[3].classList.remove("not-available");BUTTONS[3].classList.add("available");
    }  else { BUTTONS[3].classList.add("not-available");BUTTONS[3].classList.remove("available"); }
    if (points >= 7500) {
        BUTTONS[4].classList.remove("not-available");BUTTONS[4].classList.add("available");
    }  else { BUTTONS[4].classList.add("not-available");BUTTONS[4].classList.remove("available"); }
    if (points >= 15000) {
        BUTTONS[5].classList.remove("not-available");BUTTONS[5].classList.add("available");
    }  else { BUTTONS[5].classList.add("not-available");BUTTONS[5].classList.remove("available"); }
    if (points >= 100000) {
        VICTORYBUTTON.classList.remove("not-available");VICTORYBUTTON.classList.add("available");
    }  else { VICTORYBUTTON.classList.add("not-available");VICTORYBUTTON.classList.remove("available"); }
}

function updateStats() {
    TOTALPOINTS.innerHTML = totalPoints.toString();
    CURRENTPOINTS.innerHTML = points.toString();
}
