import { arcosData } from "../data/arcosData.js";
import {cardCores} from "../data/card.js";

export function renderArcos (arco){

const arcosGrid = document.querySelector(".arcos-grid"); //cria uma variável para armazenar o que for selecionado na classe grid

arco.forEach((arcoInfo, index) => { //para cada card do array ele vai fazer o seguinte:
  const arcosCard = document.createElement("div"); //cria a variável card e um elemento div atribuído a ela
  arcosCard.classList.add("card"); //adiciona a classe card a div criada, isso aciona o CSS

  const cardArcosCor = cardCores [index % cardCores.length];
  arcosCard.style.backgroundColor = `var(${cardArcosCor})`; //altera a cor do card com base na informação dentro do array
//adiciona o conteúdo HTML dentro do card (mesma estrutura que escrevi am HTML previamente)
  if (arcoInfo.crown === true) {
  arcosCard.innerHTML = `
    <div class="arcos">
      <h1 class="arcos-nome">${arcoInfo.titulo}<img src="assets/icons/crown.svg" alt="coroa" class="iconS icon-card"></h1>
      <h2 class="arcos-sessao">(${arcoInfo.sessoes} Sessões)</h2>
    </div>
    <div class="texto-card">
      <p>${arcoInfo.texto}</p>
    </div>
  `;
  }
  else {
      arcosCard.innerHTML = `
    <div class="arcos">
      <h1 class="arcos-nome">${arcoInfo.titulo}</h1>
      <h2 class="arcos-sessao">(${arcoInfo.sessoes} Sessões)</h2>
    </div>
    <div class="texto-card">
      <p>${arcoInfo.texto}</p>
    </div>
  `;
  }

  arcosGrid.appendChild(arcosCard); //isso é o que fará o card aparecer na página
});
}