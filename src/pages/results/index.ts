import { state } from "../../state";

const resultImages = {
  win: require("url:../../images/ganar.svg"),
  lose: require("url:../../images/perder.svg"),
  tie: require("url:../../images/empatar.svg"),
};

export function initPageResults(params) {
  const currentState = state.getState();
  const gameResult = state.whoWins(
    currentState.currentGame.myPlay,
    currentState.currentGame.computerPlay
  );
  const div = document.createElement("div");
  div.className = "result-container";

  let image;

  if (gameResult == "win") {
    image = resultImages.win;
    div.style.backgroundColor = "#6CB46C60";
  }
  if (gameResult == "lose") {
    image = resultImages.lose;
    div.style.backgroundColor = "#DC0F5C60";
  } else if (gameResult == "tie") {
    image = resultImages.tie;
    div.style.backgroundColor = "#006CFC25";
  }

  div.innerHTML = `
  <img class="result-image" src="${image}">
    <div class="board">
      <h4>Puntaje</h4>
      <p class="Jugador">Jugador: ${currentState.historicalScore.myScore}</p>
      <p class="Maquina">Máquina: ${currentState.historicalScore.computerScore}</p>
    </div>
    
    <blue-button class="play-again">Rejugar</blue-button>
    <blue-button class="clean-score">Reiniciar puntos</blue-button>
    `;

  const buttonPlayAgainEl = div.querySelector(".play-again");
  buttonPlayAgainEl?.addEventListener("click", () => {
    params.goTo("/game");
  });

  const buttonCleanScoreEl = div.querySelector(".clean-score");
  buttonCleanScoreEl?.addEventListener("click", () => {
    state.cleanData();
    params.goTo("/rules");
  });

  const style = document.createElement("style");
  style.innerHTML = `
    .result-container {
        width: 100%;
        height: 100vh;
        padding: 35px 0 20px 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
      }
      .result-image {
        width: 220px;
      }
      .board {
        width: 300px;
        border: 10px solid #000000;
        background: #ffffff;
        border-radius: 10px;
        font-family: 'Syncopate', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding:10px 0px
      }
      .board > h4 {
        font-size:40px;
        margin: 0 auto;
      }
      .board > p {
        margin: 0 10px 5px 0;
        font-size: 30px;
        text-align: end;
      }
    `;

  div.appendChild(style);
  return div;
}