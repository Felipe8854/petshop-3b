// ELEMENTOS

const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
const sendBtn = document.getElementById("sendBtn");
const toast = document.getElementById("toast");

// MENU MOBILE

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");   /*mostra menu*/
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");   /*esconde menu*/
});

// DARK MODE

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");  /*liga e desliga o modo escuro*/

  if(document.body.classList.contains("dark")){

    themeBtn.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

  }else{

    themeBtn.innerHTML =
    '<i class="fa-solid fa-moon"></i>';
  }

});

// TOAST

sendBtn.addEventListener("click", () => {

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

});

// ANIMAÇÃO AO ROLAR

const hiddenElements = document.querySelectorAll(
  ".service-card, .gallery-card, .about-image, .about-text"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

    }

  });

}, {
  threshold:0.2
});

hiddenElements.forEach((el) => {

  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "0.8s";

  observer.observe(el);

});

const timeBtn = document.getElementById("timeBtn");

function atualizarHora() {
  const agora = new Date();

  let horas = agora.getHours();
  let minutos = agora.getMinutes();
  let segundos = agora.getSeconds();

  // deixar sempre com 2 dígitos
  if (horas < 10) horas = "0" + horas;
  if (minutos < 10) minutos = "0" + minutos;
  if (segundos < 10) segundos = "0" + segundos;

  timeBtn.textContent = `${horas}:${minutos}:${segundos}`;
}

// atualiza a cada 1 segundo
setInterval(atualizarHora, 1000);

// já inicia imediatamente
atualizarHora();