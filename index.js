var randomNumber1 = Math.random() * 5 + 1
randomNumber1 = Math.round(randomNumber1)
var randomNumber2 = Math.random() * 5 + 1
randomNumber2 = Math.round(randomNumber2)
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png")
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png")

if (randomNumber1 > randomNumber2) {
    document.querySelector(".title").innerHTML = "🚩Player 1 Wins!"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector(".title").innerHTML = "Player 2 Wins!🚩"
}
else {
    document.querySelector(".title").innerHTML = "DRAW!!!"
}
