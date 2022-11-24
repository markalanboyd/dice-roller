// Variables
const buttonReroll = document.getElementById("reroll-btn")

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

// TODO: Combine the functionality above into a function somehow
// function postWinner(winner, playerRoll) {
//     let icon = document.createElement("i");
//     let footer = document.querySelector(`${winner} .card-footer`);
//     icon.setAttribute("class", `bi bi-dice-${playerRoll} dice`);
//     footer.appendChild(icon);
// }

// Events
buttonReroll.addEventListener("click", reroll)