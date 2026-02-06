import {cardCores} from "../data/card.js";

export function renderHeader (header);

const cardHeader = document.querySelector(".card-header");

  header.forEach((headerName, index) => { //para cada card do array ele vai fazer o seguinte:
  const arcosCard = document.createElement("div"); //cria a variável card e um elemento div atribuído a ela
  arcosCard.classList.add("card");