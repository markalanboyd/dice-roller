// Variables
const buttonReroll = document.getElementById("reroll-btn")
const buttonP1 = document.getElementById("p1-button")
const buttonP2 = document.getElementById("p2-button")

// Functions
function reroll() {
    let p1Roll = Math.floor(Math.random() * 6) + 1;
    let p2Roll = Math.floor(Math.random() * 6) + 1;
    const p1Icon = document.getElementById("p1-die");
    const p2Icon = document.getElementById("p2-die");
    p1Icon.setAttribute("class", `bi bi-dice-${p1Roll} dice`);
    p2Icon.setAttribute("class", `bi bi-dice-${p2Roll} dice`);
    if (p1Roll > p2Roll) {
        document.querySelector("#p1 .card-header").style.backgroundColor = "lightgreen";
        document.querySelector("#p2 .card-header").style.backgroundColor = "tomato";
        let icon = document.createElement("i");
        let footer = document.querySelector("#p1 .card-footer");
        icon.setAttribute("class", `bi bi-dice-${p1Roll} dice winners`);
        footer.appendChild(icon);
    } else if (p1Roll === p2Roll) {
        document.querySelector("#p1 .card-header").style.backgroundColor = "gainsboro";
        document.querySelector("#p2 .card-header").style.backgroundColor = "gainsboro";
    } else {
        document.querySelector("#p1 .card-header").style.backgroundColor = "tomato";
        document.querySelector("#p2 .card-header").style.backgroundColor = "lightgreen";
        let icon = document.createElement("i");
        let footer = document.querySelector("#p2 .card-footer");
        icon.setAttribute("class", `bi bi-dice-${p2Roll} dice winners`);
        footer.appendChild(icon);
    }
}

function toggleP1Results() {
    if (document.querySelector("#p1 .card-footer").style.display === "none") {
        document.querySelector("#p1 .card-footer").style.display = "block";
    } else {
        document.querySelector("#p1 .card-footer").style.display = "none";
    }
}

function toggleP2Results() {
    if (document.querySelector("#p2 .card-footer").style.display === "none") {
        document.querySelector("#p2 .card-footer").style.display = "block";
    } else {
        document.querySelector("#p2 .card-footer").style.display = "none";
    }
}

// TODO: Combine this functionality  into a function somehow
// function postWinner(winner, playerRoll) {
//     let icon = document.createElement("i");
//     let footer = document.querySelector(`${winner} .card-footer`);
//     icon.setAttribute("class", `bi bi-dice-${playerRoll} dice`);
//     footer.appendChild(icon);
// }

// Events
buttonReroll.addEventListener("click", reroll)
buttonP1.addEventListener("click", toggleP1Results)
buttonP2.addEventListener("click", toggleP2Results)