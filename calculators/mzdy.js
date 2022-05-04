const hrubaMzda = document.getElementById("hm-input")
const detiPocet = document.getElementById("deti-input")
const dan = document.getElementById("mzdy-dan-span")
const zdrPojisteni = document.getElementById("mzdy-zp-span")
const socPojisteni = document.getElementById("mzdy-sp-span")
const detiSleva = document.getElementById("mzdy-deti-sleva-span")
const cistaMzda = document.getElementById("mzdy-cm-span")

let detiValue
let cnValue

detiPocet.addEventListener("input", function() { 
    if (detiPocet.innerText != null && detiPocet.innerText != undefined) {  
        if (detiPocet.value <= 10) {
            if (detiPocet.value == 0) {
                detiSleva.innerHTML = "0 Kč"
            } else if (detiPocet.value == 1) {
                detiValue = 1267 
            } else if (detiPocet.value == 2) {
                detiValue = (1267 + 1617)
            } else if (detiPocet.value == 3) {
                detiValue = (1267 + 1617 + 2017)
            } else if (detiPocet.value > 3) {
                detiValue = ((1267 + 1617 + 2017) + ((detiPocet.value - 3) * 2017))
            }
            detiSleva.innerHTML =  detiValue + " Kč"
        } else {

            detiSleva.innerHTML = "Zadali jste moc dětí"
            dan.innerHTML = "Zadali jste moc dětí"
            zdrPojisteni.innerHTML = "Zadali jste moc dětí"
            socPojisteni.innerHTML = "Zadali jste moc dětí"
            cistaMzda.innerHTML = "Zadali jste moc dětí"

        } 
    } else {
        detiSleva.innerHTML = "Neznámý vklad"
    } 
})

hrubaMzda.addEventListener("input", function() { 
    dan.value = Math.round(((hrubaMzda.value * 0.15) + Number.EPSILON) * 100) / 100
    zdrPojisteni.value = Math.round(((hrubaMzda.value * 0.045) + Number.EPSILON) * 100) / 100
    socPojisteni.value = Math.round(((hrubaMzda.value * 0.065) + Number.EPSILON) * 100) / 100
    cistaMzdaVypocet() 
})

function cistaMzdaVypocet() {
    if (hrubaMzda.innerHTML != " " 
        && detiPocet.innerHTML != " "
        && dan.innerHTML != " " 
        && zdrPojisteni.innerHTML != " "
        && socPojisteni.innerHTML != " "
        && detiSleva.innerHTML != " ") 
    {
        dan.innerHTML = (dan.value).toString() + " Kč"
        zdrPojisteni.innerHTML = (zdrPojisteni.value).toString() + " Kč"
        socPojisteni.innerHTML = (socPojisteni.value).toString() + " Kč"
        cnValue = (hrubaMzda.value - dan.value - zdrPojisteni.value - socPojisteni.value + detiValue)
        cistaMzda.innerHTML = cnValue + " Kč"
    } else {
        cistaMzda.innerHTML = " Zadejte počet dětí"
    }
}

    

