// Hide all championship sections
function hideAllChamps() {
    let champs = document.getElementsByClassName("champ-info");
    for (let i = 0; i < champs.length; i++) {
        champs[i].style.display = "none";
    }
}

// Show one series by id
function showChamp(id) {
    hideAllChamps();
    let section = document.getElementById(id);
    if (section) {
        section.style.display = "block";
    }
}

hideAllChamps();

// Historic Finals buttons
document.getElementById("btn1991").addEventListener("click", function () {
    showChamp("c1991");
});

document.getElementById("btn2000").addEventListener("click", function () {
    showChamp("c2000");
});

document.getElementById("btn2013").addEventListener("click", function () {
    showChamp("c2013");
});

// Recent Finals buttons
document.getElementById("btn2016").addEventListener("click", function () {
    showChamp("c2016");
});

document.getElementById("btn2019").addEventListener("click", function () {
    showChamp("c2019");
});

document.getElementById("btn2024").addEventListener("click", function () {
    showChamp("c2024");
});
