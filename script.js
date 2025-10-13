// ---- Contador ----
const countdown = () => {
  const endDate = new Date("Nov 29, 2025 17:45:00").getTime();
  const now = new Date().getTime();
  const diff = endDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = `
    <div><span class="number">${days}</span><br><span class="label">DÍAS</span></div>
    <div><span class="number">:</span></div>
    <div><span class="number">${hours}</span><br><span class="label">HORAS</span></div>
    <div><span class="number">:</span></div>
    <div><span class="number">${minutes}</span><br><span class="label">MINUTOS</span></div>
    <div><span class="number">:</span></div>
    <div><span class="number">${seconds}</span><br><span class="label">SEGUNDOS</span></div>
  `;
};

setInterval(countdown, 1000);

// ---- Pop-up ----
const popup = document.getElementById("popup");
const btnDatos = document.getElementById("btn-datos");
const closePopup = document.getElementById("closePopup");

btnDatos.addEventListener("click", () => {
  popup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
