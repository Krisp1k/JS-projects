const CURRENTPOINTS = document.getElementById("current-points");
const TOTALPOINTS = document.getElementById("total-points");
const POWER = document.getElementById("power");
const MAINBUTTON = document.getElementById("main-button");
const BUTTONS = document.querySelectorAll(".button");
const VICTORYBUTTON = document.getElementById("victory-button");
const AUTOCLICKER = document.getElementById("current-autoclicker");
const WINS = document.getElementById("count-wins");

let powerCounter = 1;
let points = 0;
let autoclicks = 0;
let totalPoints = 0;
let wins = 0;

window.onload = function (){
    checkUpgrades();
    updateStats();
    getDataFromLS();
}

function getDataFromLS() {

    if (localStorage.getItem("Power0") === "true") { 
        BUTTONS[0].innerHTML = "Bought"; BUTTONS[0].style.backgroundColor = "#0E2A47"; BUTTONS[0].setAttribute("purchased", "true");}
    if (localStorage.getItem("Power1") === "true") { 
        BUTTONS[1].innerHTML = "Bought"; BUTTONS[1].style.backgroundColor = "#0E2A47"; BUTTONS[1].setAttribute("purchased", "true");}
    if (localStorage.getItem("Power2") === "true") { 
        BUTTONS[2].innerHTML = "Bought"; BUTTONS[2].style.backgroundColor = "#0E2A47"; BUTTONS[2].setAttribute("purchased", "true");}
    if (localStorage.getItem("Power3") === "true") { 
        BUTTONS[3].innerHTML = "Bought"; BUTTONS[3].style.backgroundColor = "#0E2A47"; BUTTONS[3].setAttribute("purchased", "true");}

    if (localStorage.getItem("Auto4") === "true") { 
        BUTTONS[4].innerHTML = "Bought"; BUTTONS[4].style.backgroundColor = "#0E2A47"; BUTTONS[4].setAttribute("purchased", "true");}
    if (localStorage.getItem("Auto5") === "true") { 
        BUTTONS[5].innerHTML = "Bought"; BUTTONS[5].style.backgroundColor = "#0E2A47"; BUTTONS[5].setAttribute("purchased", "true");}
    if (localStorage.getItem("Auto6") === "true") { 
        BUTTONS[6].innerHTML = "Bought"; BUTTONS[6].style.backgroundColor = "#0E2A47"; BUTTONS[6].setAttribute("purchased", "true");}

    BUTTONS[7].innerHTML = "Time-limited 1"; 
    BUTTONS[8].innerHTML = "Time-limited 2"; 


    powerCounter = parseInt(localStorage.getItem("CurrentPower"));
    points = parseInt(localStorage.getItem("CurrentPoints"));
    totalPoints = parseInt(localStorage.getItem("TotalPoints"));
    autoclicks = parseInt(localStorage.getItem("CurrentAutoclicker"));
    wins = parseInt(localStorage.getItem("Wins"));

    updateStats();
    checkUpgrades();
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
    if (points >= 12500) {
        BUTTONS[6].classList.remove("not-available");BUTTONS[6].classList.add("available");
    }  else { BUTTONS[6].classList.add("not-available");BUTTONS[6].classList.remove("available"); }
    if (points >= 20000) {
        BUTTONS[7].classList.remove("not-available");BUTTONS[7].classList.add("available");
    }  else { BUTTONS[7].classList.add("not-available");BUTTONS[7].classList.remove("available"); }
    if (points >= 30000) {
        BUTTONS[8].classList.remove("not-available");BUTTONS[8].classList.add("available");
    }  else { BUTTONS[8].classList.add("not-available");BUTTONS[8].classList.remove("available"); }
    if (points >= 500000) {
        VICTORYBUTTON.classList.remove("not-available");VICTORYBUTTON.classList.add("available");
    }  else { VICTORYBUTTON.classList.add("not-available");VICTORYBUTTON.classList.remove("available"); }
}

function updateStats() {
    TOTALPOINTS.innerHTML = totalPoints;
    CURRENTPOINTS.innerHTML = points;
    AUTOCLICKER.innerHTML = autoclicks;
    WINS.innerHTML = wins;
}

MAINBUTTON.addEventListener("click", () => {
    points = points + powerCounter;
    totalPoints = totalPoints + powerCounter;

    localStorage.setItem("TotalPoints", parseInt(totalPoints))
    localStorage.setItem("CurrentPoints", parseInt(points))

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

        localStorage.setItem("Power" + btnID, "true")
        localStorage.setItem("CurrentPoints", parseInt(points))
        localStorage.setItem("TotalPoints", parseInt(totalPoints))
        localStorage.setItem("CurrentPower", parseInt(powerCounter))
    } else {
        alert("You can't buy this yet.");
    }

    checkUpgrades();
    updateStats();
    return(points);
}

function buyTimeLimitedUpgrade(btnID, multiplier, cost, duration) {
    if (BUTTONS[btnID].getAttribute("purchased") === "true") {
        alert("You have already bought this upgrade.")
        return;
    }

    if (points >= cost) {

        let bonus = (powerCounter * multiplier)
        let autoBonus = (autoclicks * multiplier)

        powerCounter = powerCounter + bonus
        points = points - cost;

        localStorage.setItem("CurrentPower", parseInt(powerCounter))
        localStorage.setItem("CurrentPoints", parseInt(points))
        localStorage.setItem("TotalPoints", parseInt(totalPoints))
        localStorage.setItem("Time" + btnID, "true")

        if (btnID === 8) {
            autoclicks = autoclicks + autoBonus;
            localStorage.setItem("CurrentAutoclicker", parseInt(autoclicks))
            localStorage.setItem("Time" + btnID, "true")
        }
       
        BUTTONS[btnID].setAttribute("purchased", "true");
        BUTTONS[btnID].innerHTML = "Not available now";
        POWER.innerHTML = powerCounter;

        console.log("time-limited start")
        console.log(powerCounter, multiplier)
        
        setTimeout(function () {

            powerCounter = powerCounter - bonus
            POWER.innerHTML = powerCounter;

            localStorage.setItem("CurrentPower", parseInt(powerCounter))
            localStorage.setItem("CurrentPoints", parseInt(points))
            localStorage.setItem("TotalPoints", parseInt(totalPoints))

            BUTTONS[btnID].innerHTML = "Time-limited 1";

            if (btnID === 8) {
                autoclicks = autoclicks - autoBonus;
                localStorage.setItem("CurrentAutoclicker", parseInt(autoclicks));
                localStorage.setItem("Time" + btnID, "false");
                BUTTONS[btnID].innerHTML = "Time-limited 2";
            }

            console.log("time-limited end")
            console.log(powerCounter, multiplier)

            BUTTONS[btnID].setAttribute("purchased", "false");
            
            checkUpgrades();
            updateStats();

        }, duration)

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
        AUTOCLICKER.innerHTML = autoclicks;

        localStorage.setItem("CurrentPower", parseInt(powerCounter))
        localStorage.setItem("CurrentPoints", parseInt(points))
        localStorage.setItem("TotalPoints", parseInt(totalPoints))
        localStorage.setItem("CurrentAutoclicker", parseInt(autoclicks))

        let autoClicker = setInterval(function (){
            points = points + autoPoints;
            totalPoints = totalPoints + autoPoints;
            updateStats();
            localStorage.setItem("CurrentPower", parseInt(powerCounter))
            localStorage.setItem("CurrentPoints", parseInt(points))
            localStorage.setItem("TotalPoints", parseInt(totalPoints))
            localStorage.setItem("CurrentAutoclicker", parseInt(autoclicks))
        }, 1000);

        POWER.innerHTML = powerCounter;
        BUTTONS[btnID].innerHTML = "Bought";
        BUTTONS[btnID].setAttribute("purchased", "true");
        BUTTONS[btnID].style.backgroundColor = "#0E2A47";
        points = points - neededPoints;

        localStorage.setItem("Auto" + btnID, "true")

    } else {
        alert("You can't buy this yet.");
    }

    checkUpgrades();
    updateStats();
    return(points);
}

function win(cost) {
    if (points >= cost) {
        wins = wins + 1;
        points = points - cost;
        localStorage.setItem("Wins", wins);

        updateStats();
        checkUpgrades();
        alert("YOU WON. NUMBER OF WINS : " + wins)
    }
}

function addPoints(bonus) {
    points = points + bonus;
    totalPoints = totalPoints + bonus;

    localStorage.setItem("CurrentPoints", parseInt(points))
    localStorage.setItem("TotalPoints", parseInt(totalPoints))

    updateStats();
    checkUpgrades();
}

function removePoints(bonus) {
    points = points - bonus;
    totalPoints = totalPoints - bonus;

    localStorage.setItem("CurrentPoints", parseInt(points))
    localStorage.setItem("TotalPoints", parseInt(totalPoints))

    updateStats();
    checkUpgrades();
}

function reset() {
    
    localStorage.setItem("Power0", "false");
    localStorage.setItem("Power1", "false");
    localStorage.setItem("Power2", "false");
    localStorage.setItem("Power3", "false");

    localStorage.setItem("Auto4", "false");
    localStorage.setItem("Auto5", "false");
    localStorage.setItem("Auto6", "false");

    localStorage.setItem("Time7", "false");
    localStorage.setItem("Time8", "false");

    localStorage.setItem("CurrentPoints", 0);
    localStorage.setItem("TotalPoints", 0);
    localStorage.setItem("CurrentPower", 1);
    localStorage.setItem("CurrentAutoclicker", 0);

    localStorage.setItem("Wins", 0);

    powerCounter = 1;
    points = 0;
    autoclicks = 0;
    totalPoints = 0;
    wins = 0;

    updateStats();
    checkUpgrades();

    location.reload(); 
}



