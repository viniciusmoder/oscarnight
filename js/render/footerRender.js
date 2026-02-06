export function footerRender () {

const footerContainer = document.querySelector(".footer");

if (!footerContainer) return;

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
