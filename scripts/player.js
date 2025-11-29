
function hideAll() {
    let players = document.getElementsByClassName("player-info");
    for (let i = 0; i < players.length; i++) {
        players[i].style.display = "none";
    }
}

function showPlayer(id) {
    hideAll();
    let disapperPlaceHolder=document.getElementById("placeholder");
    disapperPlaceHolder.style.display="none";
    let showPlayer = document.getElementById(id);
    if (showPlayer) {
        showPlayer.style.display = "block";
    }
}
hideAll();

let btnMJ=document.getElementById("btnMJ");
btnMJ.addEventListener("click", showPlayerMJ);
function showPlayerMJ(){
    showPlayer("MJ");
}
let btnKB=document.getElementById("btnKB");
btnKB.addEventListener("click", showPlayerKB);
function showPlayerKB(){
    showPlayer("KB")
}
let btnMAgic =document.getElementById("btnMagic");
btnMagic.addEventListener("click",dislayPlayerMagic);
function dislayPlayerMagic(){
    showPlayer("Magic");
}
let btnLB=document.getElementById("btnLB");
btnLB.addEventListener("click", displayPlayerLB);
function displayPlayerLB(){
    showPlayer("LB");
}
let btnTD =document.getElementById("btnTD");
btnTD.addEventListener("click", displayPlayerTD);
function displayPlayerTD(){
    showPlayer("TD");
}
let btnDW =document.getElementById("btnDW");
btnDW.addEventListener("click", displayPlayerDW);
function displayPlayerDW(){
    showPlayer("DW");
}


// Current Star Players
let btnLJ =document.getElementById("btnLJ");
btnLJ.addEventListener("click", displayPlayerLJ);
function displayPlayerLJ(){
    showPlayer("LJ");
}
let btnLSC =document.getElementById("btnSC");
btnSC.addEventListener("click", displayPlayerSC);
function displayPlayerSC(){
    showPlayer("SC");
}
let btnLGA =document.getElementById("btnGA");
btnGA.addEventListener("click", displayPlayerGA);
function displayPlayerGA(){
    showPlayer("GA");
}
let btnLNJ =document.getElementById("btnNJ");
btnNJ.addEventListener("click", displayPlayerNJ);
function displayPlayerNJ(){
    showPlayer("NJ");
}
let btnLD =document.getElementById("btnLD");
btnLD.addEventListener("click", displayPlayerLD);
function displayPlayerLD(){
    showPlayer("LD");
}


const players = [
    { name: "Michael Jordan", image: "../images/MJ.png",section: "MJ" },
    { name: "Kobe Bryant", image: "../images/KB.jpg",section: "KB"},
    { name: "Magic Johnson", image: "../images/Magic.jpg",section:"Magic" },
    { name: "Larry Bird", image: "../images/LB.jpg",section:"LB" },
    { name: "Tim Duncan", image: "../images/TD.jpg" ,section:"TD"},
    { name: "Dwyane Wade", image: "../images/DW.png",section:"DW" },

    { name: "LeBron James", image: "../images/LJ.jpg",section:"LJ" },
    { name: "Stephen Curry", image: "../images/SC.jpg",section:"SC" },
    { name: "Giannis Antetokounmpo", image: "../images/GA.jpeg" ,section:"GA"},
    { name: "Nikola Jokić", image: "../images/NJ.jpg" ,section:"NJ"},
    { name: "Luka Dončić", image: "../images/LD.jpg",section:"LD" }
];

let btnRandom = document.getElementById("btnrandom");
let randomPic = document.getElementById("randomPic");
let randomCaption = document.getElementById("randomCaption");
let drumRoll=document.getElementById("drumRoll");


function getRandomPlayer(playerArray) {
    return playerArray[Math.floor(Math.random() * playerArray.length)];
}

btnRandom.addEventListener("click", DisplayRandomPlayer);

function DisplayRandomPlayer() {

    drumRoll.currentTime = 3;
    drumRoll.play();

    setTimeout(showRandomPlayer, 2000);  
}

function showRandomPlayer() {
    let picked = getRandomPlayer(players);
    randomPic.src = picked.image;
    randomCaption.textContent = picked.name;
    
    showPlayer(picked.section);
}
