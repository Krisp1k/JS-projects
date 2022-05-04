// const skupinaBtn = document.getElementById('setSkupina')
const vypocitatBtn = document.getElementById('vypocitatBtn')
const odpisGroup = document.getElementById('odpisSkupiny')
const error = document.getElementById('odpisCenaError')
const result = document.getElementById('odpisResult')
const cenaPole = document.getElementById('odpisCena')

let odpisValue = document.querySelector(".odpisValue")
let cenaValue = 0


odpisValue.addEventListener("change", function() {
    odpisValue = odpisGroup.value
})

cenaPole.addEventListener("input", function() {
    cenaValue = cenaPole.value
})

vypocitatBtn.onclick = () => {
    // zkontrolovat pole s cenou
    if (isNaN(odpisGroup.value)) {
        error.innerText = "Děláš něco blbě"
    }
    else {
        // vypočet
        let prvniRok 
        let nasledujiciRoky
        let zc
        let roky
        // Math.round(( + Number.EPSILON) * 100) / 100
        if (odpisGroup.value == 1) {
            // 1 + 2 roky
            prvniRok = Math.round((cenaValue * 0.2 + Number.EPSILON) * 100) / 100
            nasledujiciRoky = Math.round((cenaValue * 0.4 + Number.EPSILON) * 100) / 100
            zc = Math.round(((cenaValue - prvniRok - (2 * nasledujiciRoky)) + Number.EPSILON) * 100) / 100
            roky = 3

        } else if (odpisGroup.value == 2) {
            // 1 + 4 roky
            prvniRok = Math.round((cenaValue * 0.11 + Number.EPSILON) * 100) / 100
            nasledujiciRoky = Math.round((cenaValue * 0.2225 + Number.EPSILON) * 100) / 100
            zc = Math.round(((cenaValue - prvniRok - (4 * nasledujiciRoky)) + Number.EPSILON) * 100) / 100
            roky = 5

        } else if (odpisGroup.value == 3) {
            //  1 + 9 let
            prvniRok = Math.round((cenaValue * 0.055 + Number.EPSILON) * 100) / 100
            nasledujiciRoky = Math.round((cenaValue * 0.105 + Number.EPSILON) * 100) / 100
            zc = Math.round(((cenaValue - prvniRok - (9 * nasledujiciRoky)) + Number.EPSILON) * 100) / 100
            roky = 10

        } else if (odpisGroup.value == 4) {
            //  1 + 19 let
            prvniRok = Math.round((cenaValue * 0.0215 + Number.EPSILON) * 100) / 100
            nasledujiciRoky = Math.round((cenaValue * 0.0515 + Number.EPSILON) * 100) / 100
            zc = Math.round(((cenaValue - prvniRok - (19 * nasledujiciRoky)) + Number.EPSILON) * 100) / 100
            roky = 20

        } else if (odpisGroup.value == 5) {
            //  1 + 29 let
            prvniRok = Math.round((cenaValue * 0.014 + Number.EPSILON) * 100) / 100
            nasledujiciRoky = Math.round((cenaValue * 0.034 + Number.EPSILON) * 100) / 100
            zc = Math.round(((cenaValue - prvniRok - (29 * nasledujiciRoky)) + Number.EPSILON) * 100) / 100
            roky = 30

        } else if (odpisGroup.value == 6) {
            //  1 + 49 let
            prvniRok = Math.round((cenaValue * 0.0102 + Number.EPSILON) * 100) / 100
            nasledujiciRoky = Math.round((cenaValue * 0.0202 + Number.EPSILON) * 100) / 100
            zc = Math.round(((cenaValue - prvniRok - (49 * nasledujiciRoky)) + Number.EPSILON) * 100) / 100
            roky = 50
        }

        result.innerText = "Zvolená skupina : " + (odpisGroup.value).toString() + "\nOprávky první rok : " + prvniRok.toString() + " Kč" + "\nOprávky následující léta : " + nasledujiciRoky.toString() + " Kč" + "\nOprávky po dobu : " + roky.toString() + " let" + "\nZůstatková cena : " + zc.toString() + " Kč"
    }
    
}

