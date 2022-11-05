console.log("hello!");
// let gamesList={
//     day:"02/12",
//     weekday:'sexta',
//     games:[{p1:'brazil',p2:'cameroon',time:"16:00"},{p1:'uruguay',p2:'argentina',time:'8:00'}]
// }

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
