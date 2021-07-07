const randNum1 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randNum1 + ".png");

const randNum2 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randNum2 + ".png");

if(randNum1 > randNum2){
    document.querySelector("h1").innerText = "Player 1 wins!"
} else if (randNum2 > randNum1){
    document.querySelector("h1").innerText = "Player 2 wins!"
} else {
    document.querySelector("h1").innerText = "Draw!"
}