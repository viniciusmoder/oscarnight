// Importa a função que renderiza os cards individuais de cada arco
import { renderArcos } from "./arcosRender.js";

// Função que recebe um array de grupos de arcos e um container HTML para renderizá-los
export function renderArcosGroups(groups, container) {
    // Variável que rastreia a cor global para os arcos (incrementa a cada grupo)
    let globalColor = 0;

    // Itera sobre cada grupo de arcos (ex: "38 Sessões (98~135)")
    groups.forEach(group => {
        // Cria uma nova seção HTML para agrupar o período e seus arcos
        const period = document.createElement("section");
        period.classList.add("arcos-period");

        // Cria o título do período (ex: "38 Sessões (98~135)")
        const title = document.createElement("h2");
        title.classList.add("page-title");
        title.classList.add("texto-azul"); // Aplica estilo de texto azul
        title.textContent = group.periodo; // Define o texto do título

        // Cria um container grid para organizar os arcos deste período
        const grid = document.createElement("div");
        grid.classList.add("arcos-grid");

        // Adiciona o título à seção
        period.appendChild(title);
        // Adiciona o grid à seção
        period.appendChild(grid);
        // Adiciona a seção completa ao container principal
        container.appendChild(period);

        // Renderiza todos os arcos deste grupo dentro do grid
        renderArcos(group.arcos, grid, globalColor);
        // Incrementa a cor global pelo número de arcos deste grupo (para variar cores entre grupos)
        globalColor += group.arcos.length;
    });
}