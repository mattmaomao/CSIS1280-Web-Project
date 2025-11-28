
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

document.getElementById("btnMagic").addEventListener("click", function () {
    showPlayer("Magic");
});

document.getElementById("btnLB").addEventListener("click", function () {
    showPlayer("LB");
});

document.getElementById("btnTD").addEventListener("click", function () {
    showPlayer("TD");
});

document.getElementById("btnDW").addEventListener("click", function () {
    showPlayer("DW");
});

// Current Star Players
document.getElementById("btnLJ").addEventListener("click", function () {
    showPlayer("LJ");
});

document.getElementById("btnSC").addEventListener("click", function () {
    showPlayer("SC");
});

document.getElementById("btnGA").addEventListener("click", function () {
    showPlayer("GA");
});

document.getElementById("btnNJ").addEventListener("click", function () {
    showPlayer("NJ");
});

document.getElementById("btnLD").addEventListener("click", function () {
    showPlayer("LD");
});

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


function getRandomPlayer(playerArray) {
    return playerArray[Math.floor(Math.random() * playerArray.length)];
}

btnRandom.addEventListener("click", DisplayRandomPlayer);
    
function DisplayRandomPlayer() {
    let picked = getRandomPlayer(players);
    randomPic.src = picked.image;
    randomCaption.textContent = picked.name;

    showPlayer(picked.section);
}
