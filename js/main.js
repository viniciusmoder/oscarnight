import {arcosData} from "./data/arcosData.js"; //importa os dados sobre os arcos
import {personagensData} from "./data/personagensData.js"; //importa os dados sobre os personagens
import {renderArcos} from "./render/arcosRender.js"; //importa função para renderizar os cards dos arcos
import {renderPersonagens} from "./render/personagensRender.js"; //importa função para renderizar os cards dos personagens
import {ativarCards} from "./render/arcosMain.js"; //importa função para o toggle dos cards dos arcos
import {footerRender} from "./render/footerRender.js";

const arcosContainer = document.querySelector(".arcos-grid"); //busca elementos com a classe grid na tela
//se encontrar, ele chama a função para renderizar os cards dos arcos usando os dados já importados
if (arcosContainer) {
  renderArcos(arcosData, arcosContainer);
  ativarCards(arcosContainer); //aqui ele realiza a ação de abrir/fechar os cards dos arcos
}

const charContainer = document.querySelector(".char-grid"); //busca elementos com a classe char na tela
//se encontrar, ele chama a função para renderizar os cards dos personagens usando os dados já importados
if (charContainer) {
  renderPersonagens(personagensData, charContainer);
  ativarCards (charContainer);
}

footerRender (); //renderiza o footer