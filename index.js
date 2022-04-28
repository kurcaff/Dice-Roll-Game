// Random Dice Number 1
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var img1 = document.querySelector(".img1");
img1 = "images/" + "dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", img1)

// Random Dice Number 2
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var img2 = document.querySelector(".img2");
img2 = "images/" + "dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", img2)

//Winner
var winner = document.getElementById("winner")
if(randomNumber1 > randomNumber2) {
    winner.innerText = "Player1 is winner!!!" 
} else if (randomNumber1 < randomNumber2) {
    winner.innerText = "Player2 is winner!!!" 
} else {
    winner.innerText = "No Winner!!!" 
}

