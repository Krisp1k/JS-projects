const genBtn = document.getElementById("generate")
const resultContainer = document.getElementById("result")
const text = document.getElementById("text")

const all = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
const numbersOnly = "0123456789"
const charsOnly = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

function generateString(length) {
    let result = ""
    const allLength = all.length
    const numbersLength = numbersOnly.length
    const charsLength = charsOnly.length
    
    var cisla = document.getElementById("numbersonly").checked
    var pismena = document.getElementById("charsonly").checked

    if (cisla === false && pismena === false) {
        alert("Nezadali jste požadavky.")
    } 
    else {
        if (cisla === false && pismena === true) {
            for (let i = 0; i < length; i++) {
                result += charsOnly.charAt(Math.floor(Math.random() * charsLength))
            } 
        } else if (cisla === true && pismena === false) {
            for (let i = 0; i < length; i++) {
                result += numbersOnly.charAt(Math.floor(Math.random() * numbersLength))
            }
        } else {
            for (let i = 0; i < length; i++) {
                result += all.charAt(Math.floor(Math.random() * allLength))
            }
        }
        return result;
    }
}

genBtn.addEventListener("click", function() {
    let lengthOfPassword = document.getElementById("select").value
    let resultPassword = document.getElementById("result")
    resultPassword = generateString(lengthOfPassword)
    resultContainer.innerText = resultPassword
    text.style.display = "block"
})