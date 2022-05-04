let clicksCount = 0
let availableClicks = 0
let power = 1
let autoclicker = 0
let powerCounter = document.getElementById("power-counter")
let totalClicks = document.getElementById("total-clicks")
let autoclickerCounter = document.getElementById("autoclicker-counter")
let availableClicksCounter = document.getElementById("available-clicks")

const clickButton = document.getElementById("click-btn")
const upgradeOne = document.getElementById("upgrade-1")
const upgradeTwo = document.getElementById("upgrade-2")
const upgradeThree = document.getElementById("upgrade-3")
const upgradeFour = document.getElementById("upgrade-4")
const upgradeFive = document.getElementById("upgrade-5")
const upgradeSix = document.getElementById("upgrade-6")
const upgradeSeven = document.getElementById("upgrade-7")
const upgradeEight = document.getElementById("upgrade-8")
const upgradeNine = document.getElementById("upgrade-9")
const winBtn = document.getElementById("win-btn")

const purchased = document.querySelectorAll(".purchased-text")

clickButton.addEventListener("click", () => {

    clicksCount = clicksCount + power
    updateTotalClickCount()

    availableClicks = availableClicks + power
    updateAvailableClicks()

    if (availableClicks >= 100) {
        upgradeOne.classList.remove("unavailable")
        upgradeOne.classList.add("available")
    } else {
        upgradeOne.classList.remove("available")
        upgradeOne.classList.add("unavailable")
    }

    if (availableClicks >= 420) {
        upgradeTwo.classList.remove("unavailable")
        upgradeTwo.classList.add("available")
    } else {
        upgradeTwo.classList.remove("available")
        upgradeTwo.classList.add("unavailable")
    }
    
    if (availableClicks >= 1000) {
        upgradeThree.classList.remove("unavailable")
        upgradeThree.classList.add("available") 
    } else {
        upgradeThree.classList.remove("available")
        upgradeThree.classList.add("unavailable")
    }

    if  (availableClicks >= 3000) {
        upgradeFour.classList.remove("unavailable")
        upgradeFour.classList.add("available")
    } else {
        upgradeFour.classList.remove("available")
        upgradeFour.classList.add("unavailable")
    }

    if (availableClicks >= 6969) {
        upgradeFive.classList.remove("unavailable")
        upgradeFive.classList.add("available") 
    } else {
        upgradeFive.classList.remove("available")
        upgradeFive.classList.add("unavailable")
    }

    if (availableClicks >= 20000) {
        upgradeSix.classList.remove("unavailable")
        upgradeSix.classList.add("available")  
    }   else {
        upgradeSix.classList.remove("available")
        upgradeSix.classList.add("unavailable")
    }

    // AUTOCLICKERS

    if (availableClicks >= 25000) {
        upgradeSeven.classList.remove("unavailable")
        upgradeSeven.classList.add("available")  
    }   else {
        upgradeSeven.classList.remove("available")
        upgradeSeven.classList.add("unavailable")
    }

    if (availableClicks >= 50000) {
        upgradeEight.classList.remove("unavailable")
        upgradeEight.classList.add("available")  
    }   else {
        upgradeEight.classList.remove("available")
        upgradeEight.classList.add("unavailable")
    }

    if (availableClicks >= 150000) {
        upgradeNine.classList.remove("unavailable")
        upgradeNine.classList.add("available")  
    }   else {
        upgradeNine.classList.remove("available")
        upgradeNine.classList.add("unavailable")
    }

    // win

    if (availableClicks >= 1000000) {
        winBtn.classList.remove("unavailable")
        winBtn.classList.add("available")  
    }   else {
        winBtn.classList.remove("available")
        winBtn.classList.add("unavailable")
    }
})              

upgradeOne.addEventListener("click", () => {
    if (availableClicks >= 100) {
        power = power + 2
        updatePowerCounter()
        availableClicks = availableClicks - 100
        updateAvailableClicks()
        const contOne = document.getElementById("upgrade-container-1")
        contOne.classList.add("purchased-text")
        contOne.innerHTML = "Purchased"
        upgradeOne.style.display = "none"
    }
})

upgradeTwo.addEventListener("click", () => {
    if (availableClicks >= 420) {
        power = power + 5
        updatePowerCounter()
        availableClicks = availableClicks - 420
        updateAvailableClicks()
        const contTwo = document.getElementById("upgrade-container-2")
        contTwo.classList.add("purchased-text")
        contTwo.innerHTML = "Purchased"
        upgradeTwo.style.display = "none"
    }
})

upgradeThree.addEventListener("click", () => {
    if (availableClicks >= 1000) {
        power = power + 10
        updatePowerCounter()
        availableClicks = availableClicks - 1000
        updateAvailableClicks()
        const contThree = document.getElementById("upgrade-container-3")
        contThree.classList.add("purchased-text")
        contThree.innerHTML = "Purchased"
        upgradeThree.style.display = "none"
    }
})

upgradeFour.addEventListener("click", () => {
    if (availableClicks >= 3000) {
        power = power + 18
        updatePowerCounter()
        availableClicks = availableClicks - 3000
        updateAvailableClicks()
        const contFour = document.getElementById("upgrade-container-4")
        contFour.classList.add("purchased-text")
        contFour.innerHTML = "Purchased"
        upgradeFour.style.display = "none"
    }
})

upgradeFive.addEventListener("click", () => {
    if (availableClicks >= 6969) {
        power = power + 45
        updatePowerCounter()
        availableClicks = availableClicks - 6969
        updateAvailableClicks()
        const contFive = document.getElementById("upgrade-container-5")
        contFive.classList.add("purchased-text")
        contFive.innerHTML = "Purchased"
        upgradeFive.style.display = "none"
    }
})

upgradeSix.addEventListener("click", () => {
    if (availableClicks >= 20000) {
        power = power + 69
        updatePowerCounter()
        availableClicks = availableClicks - 20000
        updateAvailableClicks()
        const contSix = document.getElementById("upgrade-container-6")
        contSix.classList.add("purchased-text")
        contSix.innerHTML = "Purchased"
        upgradeSix.style.display = "none"
    }
})

// autoclickers

upgradeSeven.addEventListener("click", () => {
    if (availableClicks >= 25000) { //25 000
        availableClicks = availableClicks - 25000
        autoclicker = autoclicker + 10
        autoclickerCounter.innerText = autoclicker
        setInterval(updateAvailableClicks, 1000)
        setInterval(autoClicker1, 1000)
        setInterval(updateTotalClickCount, 1000)
        const contSev = document.getElementById("upgrade-container-7")
        contSev.classList.add("purchased-text")
        contSev.innerHTML = "Purchased"
        upgradeSeven.style.display = "none"
    }
})

upgradeEight.addEventListener("click", () => {
    if (availableClicks >= 50000) { //50 000
        availableClicks = availableClicks - 50000
        autoclicker = autoclicker + 15
        autoclickerCounter.innerText = autoclicker
        setInterval(updateAvailableClicks, 1000)
        setInterval(autoClicker2, 1000)
        setInterval(updateTotalClickCount, 1000)
        const contEig = document.getElementById("upgrade-container-8")
        contEig.classList.add("purchased-text")
        contEig.innerHTML = "Purchased"
        upgradeEight.style.display = "none"
    }
})

upgradeNine.addEventListener("click", () => {
    if (availableClicks >= 150000) { //150 000
        availableClicks = availableClicks - 150000
        autoclicker = autoclicker + 125
        autoclickerCounter.innerText = autoclicker
        setInterval(updateAvailableClicks, 1000)
        setInterval(autoClicker3, 1000)
        setInterval(updateTotalClickCount, 1000)
        const contNine = document.getElementById("upgrade-container-9")
        contNine.classList.add("purchased-text")
        contNine.innerHTML = "Purchased"
        upgradeNine.style.display = "none"
    }
})

winBtn.addEventListener("click", () => {
    if (availableClicks >= 1000000) {
        availableClicks = availableClicks - 1000000
        updateAvailableClicks()
        winCounter = winCounter + 1
        win()
        power = 1
        updatePowerCounter()
        autoclicker = 0
        availableClicks = 0
        updateAvailableClicks()
        updateTotalClickCount()
    }
})

function updateTotalClickCount(){
    totalClicks.innerHTML = clicksCount
}

function updateAvailableClicks(){
    availableClicksCounter.innerHTML = availableClicks
}

function updatePowerCounter(){
    powerCounter.innerHTML = power
}

function autoClicker1(){
    availableClicks = availableClicks + 10
    clicksCount = clicksCount + 10
}

function autoClicker2(){
    availableClicks = availableClicks + 15
    clicksCount = clicksCount + 15
}

function autoClicker3(){
    availableClicks = availableClicks + 125
    clicksCount = clicksCount + 125
}

let winCounter = 0

function win(){
    alert("Congratulations, you won the game!\nNumber of wins : " + winCounter)
}