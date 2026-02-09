export function footerRender () { //uma função que não precisa de parâmetros para trabalhar

const footerContainer = document.querySelector(".footer"); //cria uma variável para armazenar o primeiro elemento com a classe footer que encontrar no documento

if (!footerContainer) return; //caso não encontre, ele sai da função

//aqui ele escreve essas linhas no HTML
footerContainer.innerHTML = `
  <aside class="footer-logo">
  <img src="assets/icons/favicon.png" alt="Noite do Óscar">
  <p>Noite do Óscar<br>Desde 20XX</p>
  </aside>
  <section class="footer-info">
    <p>Github</p>
    <p>Informação</p>
    <p>Informação</p>
    <p>Informação</p>
    <p>*o mundo não tem olhos, vale ressaltar!</p>
    <p>*o mundo não tem olhos, vale ressaltar!</p>
  </section>`;
}
