
function hideAll() {
    let players = document.getElementsByClassName("player-info");
    for (let i = 0; i < players.length; i++) {
        players[i].style.display = "none";
    }
}

function showPlayer(id) {
    hideAll();
    let showPlayer = document.getElementById(id);
    if (showPlayer) {
        showPlayer.style.display = "block";
    }
}

hideAll();
document.getElementById("btnMJ").addEventListener("click", function () {
    showPlayer("MJ");
});

document.getElementById("btnKB").addEventListener("click", function () {
    showPlayer("KB");
});

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
