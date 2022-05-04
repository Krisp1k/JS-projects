const hodiny = document.getElementById("brigady-hodiny")
const hodinovaMzda = document.getElementById("brigady-mzda")
const vyplata = document.getElementById("brigady-vyplata")
const danBrigada = document.getElementById("brigady-dan")
const vyplataReal = document.getElementById("brigady-vyplata-real")
const btn = document.getElementById("brigady-vypocitat")

let hours = 0
let mzda = 0

let prachy = vyplata.value
let prachyReal = vyplataReal.value

hodiny.addEventListener("input", function() {
    hours = hodiny.value
})

hodinovaMzda.addEventListener("input", function() {
    mzda = hodinovaMzda.value
})



btn.onclick = () => {
    if (mzda.value != "" || mzda.value != "") {
        let result = hours * mzda
        if (result < 10000) 
        {
            vyplata.innerHTML = result + " Kč";
            vyplataReal.innerHTML = result + " Kč";
            danBrigada.innerHTML = "0 kč"
        }
        else
        { 
            vyplata.innerHTML = result + " Kč"
            
            let zdaneni = result * 0.11;
            result = result - zdaneni
            
            vyplataReal.innerHTML = result + " Kč"
            danBrigada.innerHTML = zdaneni + " Kč"
        }
        
    }
}