import {cardCores} from "../data/card.js";

export function renderPersonagens(personagem) { //exporta a função de renderizar cards de personagens

	const personagensGrid = document.querySelector(".char-grid"); //busca elementos com a classe char
	
	personagem.forEach((personagem, index) => { //para cada deles...
			const personagemCard = document.createElement("div"); //cria um elemento div para cada personagem
			personagemCard.classList.add("card"); //adiciona a classe card a cada um deles
			
			const cardPersonagensCor = cardCores [index % cardCores.length]; //utiliza as cores importadas para definir qual a cor do card 
			personagemCard.style.backgroundColor = `var(${cardPersonagensCor})`;
			//escreve no html
			personagemCard.innerHTML = `
			<div>
				<div class="char-imagem flex flex-center gap-dynamic">
					<img class="char-token flex-token" src="${personagem.imagem.src}" alt="${personagem.imagem.alt}" title="${personagem.imagem.title}">
					<h1 class="char char-nome">${personagem.nome}</h1>
				</div>
			</div>
			`;
			personagensGrid.appendChild(personagemCard); //desenha na tela
		}
	)
}