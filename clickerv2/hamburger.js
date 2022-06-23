const hamburger = document.querySelectorAll(".hamburger")[0];
const stats = document.querySelectorAll(".right")[0];
const game = document.querySelectorAll(".left")[0];

console.log(hamburger, stats)

hamburger.addEventListener("click", function() {
    console.log(stats.style)
    stats.classList.toggle("active")
    game.classList.toggle("active")
})