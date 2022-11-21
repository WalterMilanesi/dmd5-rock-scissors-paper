import { state } from "../../state";

export function initPageGame(params) {
  const div = document.createElement("div");
  div.className = "root";
  div.innerHTML = `
    <div class="countdown-el">3</div>
    <div class="hands-computer">
    <mano-comp option="tijera" class="display-none pc-tijera"></mano-comp>
    <mano-comp option="piedra" class="display-none pc-piedra"></mano-comp>
    <mano-comp option="papel" class="display-none pc-papel"></mano-comp>
    </div>
    <div class="all-hands">
    <mano-comp option="tijera" class="my-tijera"></mano-comp>
    <mano-comp option="piedra" class="my-piedra"></mano-comp>
    <mano-comp option="papel" class="my-papel"></mano-comp>
    </div>
    `;

  const style = document.createElement("style");
  style.innerHTML = `
    .countdown-el{
        display:flex;
            justify-content: center;
            align-items:center;
            border-radius: 50%;
            width: 170px;
            height: 170px;
            padding: 10px;
            border: 23px solid #001997;
            color: #ffffff;
            font: 100px 'Bungee';
    }
    .hands-computer{
      transform: rotate(-180deg)
    }
    .display-none{
        display:none
    }
    .my-tijera:hover{
        transform: translateY(-20px)
    }
    .my-piedra:hover{
        transform: translateY(-20px)
    }
    .my-papel:hover{
        transform: translateY(-20px)
    }
    .hand-selected{
        transform: translateY(-50px);
        transition: all 0.5s;
      }
    .deselected{
        opacity: 0.5;
        transform: translateY(50px);
        transition: all 0.5s;
      }
    `;

  const piedra = div.querySelector(".my-piedra");
  const papel = div.querySelector(".my-papel");
  const tijera = div.querySelector(".my-tijera");
  const pcPiedra = div.querySelector(".pc-piedra");
  const pcPapel = div.querySelector(".pc-papel");
  const pcTijera = div.querySelector(".pc-tijera");
  const countdown = div.querySelector(".countdown-el");
  const playerHands = div.querySelector(".all-hands")?.children;

  function makeTheMoves(param) {
    state.setcomputerMove();
    for (const h of playerHands) {
      h.classList.add("deselected");
    }
    if (param == piedra) {
      param.classList.add("hand-selected");
      param.classList.remove("deselected");
      param.classList.remove("my-piedra");
      papel?.classList.remove("my-papel");
      tijera?.classList.remove("my-tijera");

      setTimeout(() => {
        papel?.classList.add("display-none");
        tijera?.classList.add("display-none");
      }, 1000);
    }
    if (param == papel) {
      param.classList.add("hand-selected");
      param.classList.remove("deselected");

      param.classList.remove("my-papel");
      piedra?.classList.remove("my-piedra");
      tijera?.classList.remove("my-tijera");

      setTimeout(() => {
        piedra?.classList.add("display-none");
        tijera?.classList.add("display-none");
      }, 1000);
    }
    if (param == tijera) {
      param.classList.add("hand-selected");
      param.classList.remove("deselected");

      param.classList.remove("my-tijera");
      piedra?.classList.remove("my-piedra");
      papel?.classList.remove("my-papel");

      setTimeout(() => {
        piedra?.classList.add("display-none");
        papel?.classList.add("display-none");
      }, 1000);
    }

    const myPlay = state.getState().currentGame.myPlay;
    const computerPlay = state.getState().currentGame.computerPlay;
    const resultado = state.whoWins(myPlay, computerPlay);

    setTimeout(() => {
      countdown?.classList.add("display-none");
      if (computerPlay == "rock") {
        pcPiedra?.classList.remove("display-none");
      }
      if (computerPlay == "paper") {
        pcPapel?.classList.remove("display-none");
      }
      if (computerPlay == "scisors") {
        pcTijera?.classList.remove("display-none");
      }
    }, 1000);

    setTimeout(() => {
      state.pushToHistory(resultado);
      params.goTo("/results");
    }, 2800);

    // Aquí termina la función makeTheMoves
  }

  for (const h of playerHands) {
    h.addEventListener("click", () => {
      const clase = h.getAttribute("class");
      clearInterval(intervalId);
      if (clase == "my-piedra") {
        state.setMyMove("rock");
        makeTheMoves(piedra);
      } else if (clase == "my-papel") {
        state.setMyMove("paper");
        makeTheMoves(papel);
      } else if (clase == "my-tijera") {
        state.setMyMove("scisors");
        makeTheMoves(tijera);
      }
    });
  }

  // Timer
  let counter = 3;
  const intervalId = setInterval(() => {
    const countdownEl = document.querySelector(".countdown-el");
    counter--;
    countdownEl.innerHTML = `
        ${counter}
        `;
    if (counter < 1) {
      clearInterval(intervalId);
      alert("Puedes hacerlo mejor que eso");
      params.goTo("/rules");
    }
  }, 1000);

  div.appendChild(style);
  return div;
}