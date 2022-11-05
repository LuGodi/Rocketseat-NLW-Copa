console.log("hello!");
// let gamesList={
//     day:"02/12",
//     weekday:'sexta',
//     games:[{p1:'brazil',p2:'cameroon',time:"16:00"},{p1:'uruguay',p2:'argentina',time:'8:00'}]
// }
const blueLayoutSelect = document.querySelector(
  "ul.color-select li:nth-child(1)"
);
const greenLayoutSelect = document.querySelector(
  "ul.color-select li:nth-child(2)"
);
const yellowLayoutSelect = document.querySelector(
  "ul.color-select li:nth-child(3)"
);
const bodyElement = document.querySelector("body");
blueLayoutSelect.addEventListener("mouseover", () => {
  console.log("mouse over blue");
  bodyElement.className = "blue";
});
greenLayoutSelect.addEventListener("mouseover", () => {
  console.log("mouse over green");
  bodyElement.className = "green";
});
yellowLayoutSelect.addEventListener("mouseover", () => {
  console.log("mouse over yellow");
  bodyElement.className = "yellow";
});

function createGame(player1, player2, time) {
  return `
    <li>
        <img
          src="./assets/flag-${player1}.svg"
          alt="Bandeira do ${player1}"
        /><strong>${time} </strong
        ><img
          src="./assets/flag-${player2}.svg"
          alt="Bandeira do ${player2}"
        />
      </li>`;
}

let controlvar = -0.3;
function createCard(date, weekday, games) {
  controlvar += 0.3;
  return `    <div class="card" style="animation-delay:${controlvar}s">
    <h2>${date} <span>${weekday}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>`;
}

function startApp() {
  document.querySelector("#cards").innerHTML =
    createCard("24/11", "quinta", createGame("brazil", "serbia", "16:00")) +
    createCard(
      "28/11",
      "segunda",
      createGame("switzerland", "brazil", "13:00") +
        createGame("uruguay", "portugal", "16:00")
    ) +
    createCard("02/12", "sexta", createGame("brazil", "cameroon", "16:00"));
}

startApp();
